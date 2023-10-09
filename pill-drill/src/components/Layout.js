import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Headercomponent from './Header';
import HeaderB from './HeaderB';

const Layout = ({ children, pagina }) => {
  let pageTitle = '';

  // Set the title based on the page
  if (pagina === 'InicioSesion') {
    pageTitle = 'Bienvenido a Pilldrill';
  } else if (pagina === 'Registrarse') {
    pageTitle = 'Crea cuenta nueva';
  } else {
    pageTitle = pagina; // Use the page name for other pages
  }

  return (
    <div>
      <Head>
        <title>PILL-DRILL - {pageTitle}</title>
      </Head>

      {pagina !== 'InicioSesion' && pagina !== 'Registrarse' ? (
        <Headercomponent />
      ) : (
        <HeaderB pageTitle={pageTitle} />
      )}

      {children}

      <Footer />
    </div>
  );
};

export default Layout;