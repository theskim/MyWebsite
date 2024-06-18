import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const MailInfo = ({ href, display }) => {
  return (
    <div className="contact-info">
      <div className="contact">
        <Icon icon="material-symbols:mail-rounded" />
        &nbsp;&nbsp;
        <a href={href}>{display}</a>
      </div>
    </div>
  );
};

MailInfo.propTypes = {
  href: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
};

export default MailInfo;
