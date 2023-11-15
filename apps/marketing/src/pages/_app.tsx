import { type AppType } from "next/app";
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo'
import SEO from '../../next-seo.config';


import "~/styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <>
    <DefaultSeo {...SEO} />
    <SocialProfileJsonLd
      type="Organization"
      name="Trade Tracker"
      url="http://tradetracker.ai"
      sameAs={[
        'http://www.facebook.com/trade-tracker',
        'http://instagram.com/tradetracker.ai',
        'http://www.linkedin.com/in/tradetracker',
      ]}
    />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp

// export default api.withTRPC(MyApp);
