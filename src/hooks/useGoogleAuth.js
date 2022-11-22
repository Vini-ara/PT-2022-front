import { useEffect } from "react";

export function useGoogleAuth({callback}) {
  useEffect(() => {

    function handleCallbackResponse(credentials) {
      callback(credentials)
    }
    
    google.acounts.id.initialize({
      client_id: import.meta.env.CLIENT_ID,
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(ref.current, {
      type: 'standard',
      theme: 'filled-blue'
    })
  })
}
