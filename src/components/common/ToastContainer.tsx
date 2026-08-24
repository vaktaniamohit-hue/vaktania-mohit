import React from 'react';
import { CheckCircle2, AlertCircle, Info, XCircle, X } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useShop();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let borderColor = 'border-emerald-500';
        let iconColor = 'text-emerald-500';

        if (toast.type === 'error') {
          Icon = XCircle;
          borderColor = 'border-red-500';
          iconColor = 'text-red-500';
        } else if (toast.type === 'warning') {
          Icon = AlertCircle;
          borderColor = 'border-amber-500';
          iconColor = 'text-amber-500';
        } else if (toast.type === 'info') {
          Icon = Info;
          borderColor = 'border-blue-500';
          iconColor = 'text-blue-500';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto bg-[#111111] text-white p-4 rounded-xl shadow-2xl border-l-4 ${borderColor} flex items-start gap-3 animate-in slide-in-from-bottom-5 duration-200`}
          >
            <Icon className={`w-5 h-5 ${iconColor} shrink-0 mt-0.5`} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-white tracking-wide">{toast.message}</p>
              {toast.description && (
                <p className="text-[11px] text-zinc-400 mt-0.5 leading-relaxed">{toast.description}</p>
              )}
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-zinc-500 hover:text-white p-1 -mr-1 -mt-1 rounded-sm cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
