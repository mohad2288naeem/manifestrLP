import React from "react";
import { toast, ToastPosition, ToastOptions } from "react-toastify";

const defaultOptions: ToastOptions = {
  position: "top-right" as ToastPosition,
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  style: {
    borderRadius: "8px",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)",
    border: "1px solid #E5E7EB",
  },
};

export const useToast = () => {
  const showToast = {
    success: (message: React.ReactNode, options?: ToastOptions) => {
      toast.success(message as any, {
        ...defaultOptions,
        ...options,
      });
    },
    error: (message: React.ReactNode, options?: ToastOptions) => {
      toast.error(message as any, {
        ...defaultOptions,
        ...options,
      });
    },
    info: (message: React.ReactNode, options?: ToastOptions) => {
      toast.info(message as any, {
        ...defaultOptions,
        ...options,
      });
    },
    warning: (message: React.ReactNode, options?: ToastOptions) => {
      toast.warning(message as any, {
        ...defaultOptions,
        ...options,
      });
    },
    loading: (message: React.ReactNode, options?: ToastOptions) => {
      return toast.loading(message as any, {
        ...defaultOptions,
        ...options,
      });
    },
    dismiss: (id?: string | number) => {
      toast.dismiss(id);
    },
    update: (id: string | number, options: any) => {
      toast.update(id, {
        ...defaultOptions,
        ...options,
      });
    }
  };

  return showToast;
};
