import React from "react";

const Navbar = ({brand}) => {

    return(
        <>
            <nav className="navbar navbar-dark bg-success">
                <div className='container'>
                  <a href="#!" className='navbar-brand fs-3'>{brand}</a>
                  <a href="https://github.com/AleArevalo18" className='navbar-brand fs-5 text-aling-right'>Github</a>
                  <a href="https://www.linkedin.com/in/mary-alejandra-arevalo-espinosa-ab8272203/" className='navbar-brand fs-5 text-aling-right'>LinkedIn</a>
                </div>
            </nav>
        </>
    )

}

export default Navbar;