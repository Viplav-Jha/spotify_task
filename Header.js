import React from "react";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect } from "react";


function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
     
    </div>
  );
}

export default Header;
