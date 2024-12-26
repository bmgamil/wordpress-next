'use client';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

type Props = {
  action: string;
};

const useReCaptcha = (props: Props) => {
  const { action } = props;
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleVerify = async () => {
    if (!executeRecaptcha) return;
    const token = await executeRecaptcha(action);

    try {
      const response = await fetch('/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      if (data.success) {
        return data;
      } else {
        return data;
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return { handleVerify };
};

export default useReCaptcha;
