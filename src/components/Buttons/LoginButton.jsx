import { useRef } from 'react';
import { useGoogleAuth } from '../../hooks/useGoogleAuth';

export function LoginButton() {
  const ref = useRef(null);

  useGoogleAuth(ref, () => {});

  return <div ref={ref} />;
}
