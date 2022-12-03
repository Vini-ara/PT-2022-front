import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext';
import { useGoogleAuth } from '../../hooks/useGoogleAuth';

export function LoginButton() {
  const ref = useRef(null);
  const { signIn } = useAuthContext();
  const navigate = useNavigate();

  useGoogleAuth(ref, (data) => {
    signIn(data)

   navigate("/form") 
  });

  return <div ref={ref} />;
}
