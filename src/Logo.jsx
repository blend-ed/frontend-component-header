import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ src, alt, ...attributes }) => (
  <img src={src} alt={alt} {...attributes} />
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const LinkedLogo = ({
  href,
  src,
  alt,
  ...attributes
}) => (
  <a href={href} {...attributes}>
    <img className="d-block" src="https://blend-ed-public-asset-bak.s3.ap-south-1.amazonaws.com/demo/logo.png" alt={alt} />
  </a>
);

LinkedLogo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export { LinkedLogo, Logo };
export default Logo;
