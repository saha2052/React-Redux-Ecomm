import React from 'react';
import './header.css';
import {useDispatch,useSelector} from 'react-redux';

import {Link} from 'react-router-dom';
const Header=()=>{
    const cart = useSelector(cart => cart.cart);
    console.log(cart.products.length);
    return(
    
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid"> <button className="navbar-toggler navbar-toggler-right border-0 p-0" type="button" data-toggle="collapse" data-target="#navbar20">
            <p className="navbar-brand text-white mb-0"> <i className="fa d-inline fa-lg fa-stop-circle"></i> BBBOOTSTRAP </p>
        </button>
        <div className="collapse navbar-collapse" id="navbar20">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"> <a className="nav-link" href="#">Home</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">Contactus</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#">About</a> </li>
            </ul>
            <p className="d-none d-md-block lead mb-0 text-white"> <i className="fa d-inline fa-lg fa-stop-circle"></i> <b> SAYAN</b> </p>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-1"> 
                <Link className="nav-link" to={'/cart'}>
                
                <span className="fa-stack fa-1x">
                    <i className="fa fa-circle fa-stack-2x"></i>
                    <i className="fa fa-bell fa-stack-1x fa-inverse"></i>
                    {
                       ( cart.products.length) > 0 ? <span className="badge">{cart.products.length}</span>:null

                    }
                    {/* <span className="badge">{cart.products.length}</span> */}
                </span>
             
                 </Link> 
                 </li>
                <li className="nav-item mx-1"> <a className="nav-link" href="#"> <i className="fa fa-dropbox fa-fw fa-lg"></i> </a> </li>
                <li className="nav-item mx-1"> <a className="nav-link" href="#"> <i className="fa fa-bitbucket fa-fw fa-lg"></i> </a> </li>
            </ul>
        </div>
    </div>
</nav>
    </> 
        
    )
}

export default Header;