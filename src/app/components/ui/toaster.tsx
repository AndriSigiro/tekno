// src/components/ui/toaster.tsx
import { Toaster as Sonner } from "sonner";

export const Toaster = () => {
  return (
    <Sonner
      position="top-center"
      toastOptions={{
        style: {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#fff",
        },
        classNames: {
          title: "font-bold text-lg",
          description: "text-cyan-200",
          success: "border-cyan-500/50",
          error: "border-red-500/50",
          info: "border-blue-500/50",
        },
      }}
      richColors
      closeButton
      duration={4000}
      theme="dark"
    />
  );
};