import React from "react";
import avi from "../../assets/about/avi.jpg"

function Nav(props) {
    
    const tabs = ['About', 'Portfolio', 'Contact'];

    return (
    <nav className="flex-row px-1 navBackground">
      <h1><img src={avi} className="avitar"></img>Austin Ewell</h1>
      <ul className="flex-row navLayout">
      {tabs.map(tab => (
        <li className="mx-2" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
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