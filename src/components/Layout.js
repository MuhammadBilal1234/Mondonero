import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Footer from './Footer';
import Nav from './Nav';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import '../styles/typography.scss';
import TheoPlayer from './TheoPlayer';
import MixcloudPlayer from './MixcloudPlayer';

export default function Layout({ children }) {
  const path = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <div>
      <GlobalStyles />
      <Nav />
      <TheoPlayer page={path} />
      {children}
      <CookieConsent
        id="cookieConsent"
        location="bottom"
        buttonText="Ok!"
        disableStyles
      >
        We use cookies to improve user experience and analyze website traffic.
        By clicking “Accept”, you consent to storing cookies on your device for
        these reasons.
      </CookieConsent>
      <MixcloudPlayer />
      <Footer />
    </div>
  );
}
