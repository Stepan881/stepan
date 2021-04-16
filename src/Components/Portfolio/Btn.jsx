import s from "./Portfolio.module.css";
import React from "react";

const Btn = (props) => {
  let classActive = `${s.portfolioLink}`;
  if (props.btn.active) {
    classActive = `${s.portfolioLink} ${s.portfolioLinkActive}`;
  }

  return (
    <li className={s.portfolioItem}>
      <button className={classActive}
        onClick={() => {
          props.handlerNavLink(props.btn.id, props.btn.siteType)
        }}
      >
        {props.btn.value}
      </button>
    </li>
  )
};

export default Btn;
