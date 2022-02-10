import React from 'react';
import style from './Footer.module.scss';
import Image from 'next/image';


const Footer = () => {
  return (<>

    <div className={style.footer}>
        <div className="container">
            <div className={style.footer_container}>
                <div className={style.footer__left}>
                    <div className={style.footer__left_logo}>
                        <Image src='/dwn_logo.svg' alt='logo' width={220} height={40}/>
                        <p>Mozil builds extensions, plugins and apps to simplify work for businesses.</p>
                    </div>
                </div>
                <div className={style.footer__right}>
                    <ul className={style.links}>
                        <li>Products</li>
                        <li>CookieYes</li>
                        <li>Webtoffee</li>
                    </ul>
                    <ul className={style.links}>
                        <li>About</li>
                        <li>About us</li>
                        <li>Career</li>
                        <li>Contact</li>
                    </ul>
                    <ul className={style.links}>
                        <li>Follow us</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
    <div className={style.footer_rights}>
        <div className="container">
            <div className={style.footer_rights}>
                <div className={style.all_rights}>© 2022 Mozi - All right reserved</div>
                <div className={style.terms}>Terms & Conditions</div>
            </div>
        </div>
    </div>
  </>);
};

export default Footer;
