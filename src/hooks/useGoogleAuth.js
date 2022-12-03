// lembrar de desinstalar jwt-decode
import { useEffect } from 'react';
import { api } from '../api/api';

export function useGoogleAuth(ref, callback = () => {}) {
  useEffect(() => {
    async function handleCallbackResponse({ credential }) {
      console.log(credential)
      const { data } = await api.post('/auth/google', {
        token: credential
      })
      callback(data);
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
