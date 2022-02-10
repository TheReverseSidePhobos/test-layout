import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = ({children}) => {
  return (<div className='common_wrapper'>
    <div className="header_wrapper">
        <div className="container">
            <Header/>
        </div>
    </div>
    <div className="main">
        {children}
    </div>
    <div className="footer">
        <Footer/>
    </div>
  </div>);
};

export default Layout;
