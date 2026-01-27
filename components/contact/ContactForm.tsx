// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  User,
  Smartphone,
  Car,
  Send,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

// XSS koruması için sanitize fonksiyonu
const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, "") // HTML tag'lerini engelle
    .replace(/[&]/g, "&amp;")
    .replace(/['"]/g, "")
    .trim();
};

// Telefon numarası doğrulama
const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(05)([0-9]{9})$/; // 05XX XXX XX XX formatı
  const cleanPhone = phone.replace(/\s/g, "");
  return phoneRegex.test(cleanPhone);
};

// İsim doğrulama
const isValidName = (name: string): boolean => {
  const nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]{2,50}$/; // Türkçe karakterler, 2-50 karakter
  return nameRegex.test(name);
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    carModel: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors = {
      name: "",
      phone: "",
      carModel: "",
      message: "",
    };

    // İsim validasyonu
    if (!formData.name.trim()) {
      newErrors.name = "Ad soyad gereklidir";
    } else if (!isValidName(formData.name)) {
      newErrors.name =
        "Geçerli bir ad soyad girin (2-50 karakter, sadece harf)";
    }

    // Telefon validasyonu
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefon numarası gereklidir";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Geçerli bir telefon numarası girin (05XX XXX XX XX)";
    }

    // Araç modeli validasyonu
    if (!formData.carModel.trim()) {
      newErrors.carModel = "Araç modeli gereklidir";
    } else if (formData.carModel.length < 3 || formData.carModel.length > 50) {
      newErrors.carModel = "Araç modeli 3-50 karakter arası olmalıdır";
    }

    // Mesaj validasyonu
    if (!formData.message.trim()) {
      newErrors.message = "Hasar hakkında bilgi gereklidir";
    } else if (formData.message.length < 10 || formData.message.length > 500) {
      newErrors.message = "Mesaj 10-500 karakter arası olmalıdır";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // XSS koruması için tüm inputları sanitize et
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      phone: sanitizeInput(formData.phone).replace(/\s/g, ""),
      carModel: sanitizeInput(formData.carModel),
      message: sanitizeInput(formData.message),
    };

    // WhatsApp mesajını oluştur
    const whatsappMessage = `
🚗 *Yeni İletişim Formu*

👤 *Ad Soyad:* ${sanitizedData.name}
📱 *Telefon:* ${sanitizedData.phone}
🚘 *Araç:* ${sanitizedData.carModel}

💬 *Mesaj:*
${sanitizedData.message}
    `.trim();

    // WhatsApp'a yönlendir
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.phone.replace(/\s/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    // Başarı mesajını göster
    setIsSubmitted(true);

    // Formu temizle
    setFormData({
      name: "",
      phone: "",
      carModel: "",
      message: "",
    });

    setErrors({
      name: "",
      phone: "",
      carModel: "",
      message: "",
    });

    // 5 saniye sonra başarı mesajını gizle
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    // Telefon için sadece rakam ve boşluk
    if (name === "phone") {
      const cleaned = value.replace(/[^\d\s]/g, "");
      setFormData({ ...formData, [name]: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Hata mesajını temizle
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20 relative z-20">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="grid lg:grid-cols-5 min-h-[600px]">
          {/* Sol Kolon: İletişim Bilgileri & Harita */}
          <div className="lg:col-span-2 bg-background-light border-r border-gray-100 flex flex-col">
            {/* İletişim Detayları */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8">
              <div>
                <h3 className="text-primary-500 text-xl font-bold mb-6 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  İletişim Bilgileri
                </h3>
                <div className="space-y-6">
                  {/* Telefon */}
                  <Link
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary-500 transition-colors flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-custom font-medium uppercase tracking-wide">
                        Telefon & WhatsApp
                      </p>
                      <p className="text-base sm:text-lg font-bold text-primary-500 group-hover:text-accent transition-colors">
                        {SITE_CONFIG.phone}
                      </p>
                      <p className="text-xs text-green-600 font-medium mt-1 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        7/24 Mesaj Gönderebilirsiniz
                      </p>
                    </div>
                  </Link>

                  {/* Adres */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-accent flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-custom font-medium uppercase tracking-wide">
                        Adres
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-primary-500 leading-snug">
                        {SITE_CONFIG.address}
                      </p>
                    </div>
                  </div>

                  {/* Çalışma Saatleri */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-accent flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-slate-custom font-medium uppercase tracking-wide">
                        Çalışma Saatleri
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-primary-500">
                        {SITE_CONFIG.workingHours}
                      </p>
                      <p className="text-sm text-slate-custom">Pazar: Kapalı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Harita */}
            <div className="flex-1 relative min-h-[250px] sm:min-h-[300px] lg:min-h-0 bg-gray-200">
              <Image
                src="/images/map-preview.webp"
                alt="Samsun'daki konumumuzu gösteren harita"
                fill
                className="object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <Link
                href={SITE_CONFIG.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-primary-500 text-xs font-bold px-3 py-2 rounded shadow-lg hover:bg-accent hover:text-primary-500 transition-colors flex items-center gap-1"
              >
                <MapPin className="w-4 h-4" />
                Yol Tarifi Al
              </Link>
            </div>
          </div>

          {/* Sağ Kolon: İletişim Formu */}
          <div className="lg:col-span-3 p-6 sm:p-8 lg:p-12 bg-white">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-primary-500 mb-2">
                Bize Yazın
              </h3>
              <p className="text-slate-custom mb-6 sm:mb-8 text-sm sm:text-base">
                Formu doldurun, WhatsApp üzerinden size ulaşalım.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* İsim */}
                  <label className="block">
                    <span className="text-slate-custom font-semibold text-sm mb-1.5 block">
                      Adınız Soyadınız <span className="text-red-500">*</span>
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        maxLength={50}
                        className={`w-full bg-background-light border rounded-lg px-4 py-3 sm:py-3.5 pl-11 text-primary-500 placeholder-gray-400 focus:outline-none transition-all ${
                          errors.name
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent"
                        }`}
                        placeholder="Ad Soyad"
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                      />
                      <User className="w-5 h-5 absolute left-3.5 top-3 sm:top-3.5 text-gray-400" />
                    </div>
                    {errors.name && (
                      <p id="name-error" className="text-red-500 text-xs mt-1">
                        {errors.name}
                      </p>
                    )}
                    <p className="text-gray-400 text-xs mt-1">
                      {formData.name.length}/50 karakter
                    </p>
                  </label>

                  {/* Telefon */}
                  <label className="block">
                    <span className="text-slate-custom font-semibold text-sm mb-1.5 block">
                      Telefon Numaranız <span className="text-red-500">*</span>
                    </span>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={13}
                        className={`w-full bg-background-light border rounded-lg px-4 py-3 sm:py-3.5 pl-11 text-primary-500 placeholder-gray-400 focus:outline-none transition-all ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent"
                        }`}
                        placeholder="05XX XXX XX XX"
                        required
                        aria-invalid={!!errors.phone}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                      />
                      <Smartphone className="w-5 h-5 absolute left-3.5 top-3 sm:top-3.5 text-gray-400" />
                    </div>
                    {errors.phone && (
                      <p id="phone-error" className="text-red-500 text-xs mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </label>
                </div>

                {/* Araç Modeli */}
                <label className="block">
                  <span className="text-slate-custom font-semibold text-sm mb-1.5 block">
                    Araç Marka/Modeli <span className="text-red-500">*</span>
                  </span>
                  <div className="relative">
                    <input
                      type="text"
                      name="carModel"
                      value={formData.carModel}
                      onChange={handleChange}
                      maxLength={50}
                      className={`w-full bg-background-light border rounded-lg px-4 py-3 sm:py-3.5 pl-11 text-primary-500 placeholder-gray-400 focus:outline-none transition-all ${
                        errors.carModel
                          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent"
                      }`}
                      placeholder="Örn: 2022 BMW 320i"
                      required
                      aria-invalid={!!errors.carModel}
                      aria-describedby={
                        errors.carModel ? "car-error" : undefined
                      }
                    />
                    <Car className="w-5 h-5 absolute left-3.5 top-3 sm:top-3.5 text-gray-400" />
                  </div>
                  {errors.carModel && (
                    <p id="car-error" className="text-red-500 text-xs mt-1">
                      {errors.carModel}
                    </p>
                  )}
                  <p className="text-gray-400 text-xs mt-1">
                    {formData.carModel.length}/50 karakter
                  </p>
                </label>

                {/* Mesaj */}
                <label className="block">
                  <span className="text-slate-custom font-semibold text-sm mb-1.5 block">
                    Hasar Hakkında Kısa Bilgi{" "}
                    <span className="text-red-500">*</span>
                  </span>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={500}
                      className={`w-full bg-background-light border rounded-lg px-4 py-3 sm:py-3.5 text-primary-500 placeholder-gray-400 focus:outline-none transition-all resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent"
                      }`}
                      placeholder="Hasarın nerede olduğunu ve nasıl oluştuğunu kısaca anlatın..."
                      rows={4}
                      required
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                  </div>
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                  <p className="text-gray-400 text-xs mt-1">
                    {formData.message.length}/500 karakter (En az 10)
                  </p>
                </label>

                {/* Gönder Butonu */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full md:w-auto min-w-[200px] bg-accent hover:bg-accent-dark text-primary-500 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                  >
                    <span>WhatsApp&apos;a Gönder</span>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>

                {/* Başarı Mesajı */}
                {isSubmitted && (
                  <div className="bg-green-50 text-green-800 p-4 rounded-lg flex items-center gap-3 border border-green-200">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-sm font-medium">
                      WhatsApp&apos;a yönlendiriliyorsunuz. Mesajınızı oradan
                      gönderebilirsiniz!
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
