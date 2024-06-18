import React from "react";
import PropTypes from "prop-types";

const Logo = ({ href, src }) => {
  return (
    <div className="social__logo">
      <a className="external-link" href={href}>
        <img src={src} loading="lazy" alt="" />
      </a>
    </div>
  );
};

Logo.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const SocialMedia = ({ src, href }) => {
  return (
    <div className="social-media">
      {src.map((image, i) => (
        <Logo src={image} href={href[i]} key={href[i]} />
      ))}
    </div>
  );
};

SocialMedia.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default SocialMedia;
