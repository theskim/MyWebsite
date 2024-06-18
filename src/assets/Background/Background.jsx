import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./Background.scss";
import { setSideBar } from "../../";
import { Icon } from "@iconify/react";

const BackgroundAll = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="background__all"
      onClick={() => dispatch(setSideBar(false))}
    >
      <div className="nav__suggestion">
        <p>
          Press &nbsp;&nbsp;
          <Icon icon="pajamas:hamburger" />
          &nbsp;&nbsp;to view other pages
        </p>
      </div>
      <div className="box__all">{children}</div>
    </div>
  );
};

BackgroundAll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundAll;
