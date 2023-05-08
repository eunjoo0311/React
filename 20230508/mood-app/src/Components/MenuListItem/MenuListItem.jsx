import React from "react";
import "./MenuListItem.css";
export default function MenuListItem(props) {
  const onItemClick = () => {
    props.onClickEvt(props.mood);
  };

  const getBackgroundColr = () => {
    if (props.isSelected) {
      return "skyblue";
    }
  };
  return (
    <li>
      <button
        className="btn-item"
        onClick={onItemClick}
        style={{ backgroundColor: getBackgroundColr() }}
      >
        기분이 : {props.mood}
      </button>
    </li>
  );
}
