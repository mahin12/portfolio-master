import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '@config';
import favicon from '../images/favicons/favicon.ico';
import ogImage from '@images/og.png';
import appleIcon57x57 from '@images/favicons/apple-icon-57x57.png';
import appleIcon60x60 from '@images/favicons/apple-icon-60x60.png';
import appleIcon72x72 from '@images/favicons/apple-icon-72x72.png';
import appleIcon76x76 from '@images/favicons/apple-icon-76x76.png';
import appleIcon114x114 from '@images/favicons/apple-icon-114x114.png';
import appleIcon120x120 from '@images/favicons/apple-icon-120x120.png';
import appleIcon144x144 from '@images/favicons/apple-icon-144x144.png';
import appleIcon152x152 from '@images/favicons/apple-icon-152x152.png';
import appleIcon180x180 from '@images/favicons/apple-icon-180x180.png';
import androidIcon192x192 from '@images/favicons/android-icon-192x192.png';
import favicon32x32 from '@images/favicons/favicon-32x32.png';
import favicon96x96 from '@images/favicons/favicon-96x96.png';
import favicon16x16 from '@images/favicons/favicon-16x16.png';
import msIcon144x144 from '@images/favicons/ms-icon-144x144.png';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <link rel="shortcut icon" href={favicon} />
    <link rel="canonical" href="https://asaduzzamansajeeb.netlify.app/" />

    <meta name="theme-color" content={config.colors.navy} />
  </Helmet>
);

export default Head;

Head.propTypes = {
  metadata: PropTypes.object.isRequired,
};
