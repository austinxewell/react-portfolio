import React from "react";

function Nav(props) {
    
    const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

    return (
    <nav className="flex-row px-1 navBackground">
      <h1>Austin Ewell</h1>
      <ul className="flex-row navLayout">
      {tabs.map(tab => (
        <li className="mx-2" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-linkActive' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  </nav>
    )
}

export default Nav;