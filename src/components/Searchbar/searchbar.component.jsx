import React from "react";

import "./searchbar.style.css";

export const Searcbar = props => {
  return (
    <input
      className="search"
      type="search"
      placeholder="search"
      onChange={props.onChange}
    />
  );
};
