import React from 'react';
import style from './Header.module.scss';
import Image from 'next/image'


const Header = () => {
  return (<>
    <div className={style.navagation}>
        <div className="logo">
            <div className="logo_icon">
                <Image src='/logo.svg' alt='logo' width={140} height={40}/>
            </div>
            <div className="logo_text"></div>
        </div>
        <div className={style.nav}>
            <ul>
                <li className={style.nav_item}>
                    Products
                </li>
                <li className={style.nav_item}>
                    About us
                </li>
                <li className={style.nav_item}>
                    Contacts
                </li>
                <li className={`${style.nav_item} ${style.active}`}>
                    We're hiring
                </li>
            </ul>
        </div>
    </div>
    <div className={style.header}>
        <div className={style.main_text}>
            <h1>We build products to simplify work for businesses</h1>
            <p>Our next-gen products empower businesses to implement agility and accelerate growth. </p>
            <button className={`${style.activeBtn} ${style.btn}`}>Learn more</button>
            <button className={style.btn}>Work with us</button>
        </div>
        <div className={style.main_pic}>
            <Image src='/pic.png' alt='pic' height={750} width={900}/>
        </div>
    </div>


  </>);
};

export default Header;
