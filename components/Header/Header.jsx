import React from 'react';
import style from './Header.module.scss';
import Image from 'next/image'
import Link from 'next/link';


const Header = () => {
  return (<>
    <div className={style.navagation}>
        <div className="logo">
            <div className="logo_icon">
                <Link href={'/'}>
                    <a>
                       <Image src='/logo.svg' alt='logo' width={140} height={40}/>
                    </a>
                </Link>
            </div>
            <div className="logo_text"></div>
        </div>
        <div className={style.nav}>
            <ul>
                <li className={style.nav_item}>
                    <Link href={'/products'}>
                        <a>Products</a>
                    </Link>
                </li>
                <li className={style.nav_item}>
                    <Link href={'/aboutus'}>
                        <a>About us</a>
                    </Link>
                </li>
                <li className={style.nav_item}>
                    <Link href={'/contacts'}>
                        <a>Contacts</a>
                    </Link>
                </li>
                <li className={style.nav_item}>
                    <Link href={'/hiring'}>
                        <a className='activeBtn'>We're hiring</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  </>);
};

export default Header;
