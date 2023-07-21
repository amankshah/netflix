import React, { useState } from "react";
import { Styled, styled } from "styled-components";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icon/fa";
export default function Navbar({ isScrolled }) {
  const links = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  return (
    <Container>
      <nav className={'flex $(isScrolled ? "scrolled":""}'}></nav>
      <div className="left flex a-center">
        <div className="brand flex a-center j-center">
          <img src={logo} alt="logo" />
        </div>
        <ul className="links flex">
          {links.map((name, Link) => {
            return (
              <li key={name}>
                <Link to={Link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="right flex a-center">
        <div className={`search ${showSearch ? "show-search" : ""}`}>
          <button onFocus={()=> setShowSearch(true)}
          onBlur={ () =>{
            if(!inputHover) setShowSearch(false);

          }
          }>
            <FaSearch />
          </button>
          <input type="text" name="search" id="search" placeholder="Search" 
          onMouseEnter ={()=> setInputHover(true)}
          onmouseLeave ={()=> setInputHover(false)}
          />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div``;
