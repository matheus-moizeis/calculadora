import React from "react";
import "./Buttons.css";

export default function Buttons(props) {
  return <button className="button">{props.label}</button>;
}
