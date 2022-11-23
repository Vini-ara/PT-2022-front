// lembrar de desinstalar jwt-decode
import { useEffect } from 'react';

export function useGoogleAuth(ref, callback = () => {}) {
  useEffect(() => {
    function handleCallbackResponse(credentials) {
      callback(credentials);
    }

    /* global google */
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(ref.current, {
      type: 'standard',
      theme: 'filled-blue',
    });
  }, [ref.current, callback]);
}
