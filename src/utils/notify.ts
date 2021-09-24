import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (msg: string, type: 'success' | 'info' | 'error' = 'info') => {
  const options = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  } as ToastOptions;

  const notifyType = {
    success: () => toast.success(msg, options),
    info: () => toast.info(msg, options),
    error: () => toast.error(msg, options),
  };

  notifyType[type]();
};
