"use client";

import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "error";
  children: React.ReactNode;
}

export default function Callout({ type = "info", children }: CalloutProps) {
  const config = {
    info: {
      bg: "bg-primary-500/5",
      border: "border-accent",
      icon: Info,
      iconColor: "text-accent",
    },
    warning: {
      bg: "bg-orange-50",
      border: "border-orange-400",
      icon: AlertTriangle,
      iconColor: "text-orange-500",
    },
    success: {
      bg: "bg-green-50",
      border: "border-green-400",
      icon: CheckCircle,
      iconColor: "text-green-500",
    },
    error: {
      bg: "bg-red-50",
      border: "border-red-400",
      icon: XCircle,
      iconColor: "text-red-500",
    },
  };

  const { bg, border, icon: Icon, iconColor } = config[type];

  return (
    <div
      className={`my-6 lg:my-8 p-4 lg:p-6 rounded-xl ${bg} border-l-4 ${border}`}
    >
      <div className="flex gap-3">
        <Icon
          className={`w-5 h-5 lg:w-6 lg:h-6 ${iconColor} flex-shrink-0 mt-0.5`}
        />
        <div className="prose prose-sm lg:prose-base max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  );
}
