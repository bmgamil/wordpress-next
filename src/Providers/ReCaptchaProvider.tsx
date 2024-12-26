'use client';
import { useLocale } from 'next-intl';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const ReCaptchaProvider = ({ children }: { children: React.ReactNode }) => {
  const locale = useLocale();
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      language={locale}
      container={{
        parameters: {
          badge: 'bottomleft', // optional, default undefined
          theme: 'dark', // optional, default undefined
        },
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptchaProvider;
