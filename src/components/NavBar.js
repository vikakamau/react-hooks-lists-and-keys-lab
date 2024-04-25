import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const ref= links.map((link)=>(
    <a key={link} href={"#"+ link}>{link}</a>
  ))

  return <nav>
    {ref}
  </nav>;
}

export default NavBar;
