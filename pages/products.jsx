import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Products = () => {
  return (
    <Layout>
      <div className={'header header_wrapper'}>
        <div className="container main_header">
          <div>
            <h1>Tools that transform how businesses work</h1>
            <p>
              We help manage businesses better with our applications, plugins,
              extensions and offer productive experiences for teams and
              customers alike.
            </p>
          </div>
          <div className={'main_pic'}>
            <Image
              src="/product.png"
              alt="product pic"
              height={750}
              width={900}
            />
          </div>
        </div>
      </div>
      <section className="cookies">
        <div className="container cookies_container">
          <div className="cookies_text">
            <Image
              src={'/coockies_pic.png'}
              alt="cookies_pic"
              width={240}
              height={40}
            />
            <p>
              Build brand trust and minimize legal risks with the market-leading
              consent management platform that helps businesses comply with
              global privacy regulations. Display cookie consent banners, manage
              consent, generate policy documents and privacy-proof websites with
              CookieYes.
            </p>
            <p>
              CookieYes is the #1 cookie compliance technology with over 1.2
              million user base, powering global brands to startups across US,
              UK and Europe.
            </p>
            <button className="btn">Visit CookieYes</button>
          </div>
          <div className="cookies_pic">
            <Image
              src={'/cookies_pic.png'}
              alt="cookies_pic"
              width={570}
              height={560}
            />
          </div>
        </div>
      </section>
      <section className="webtoffee">
        <div className="container webtoffee_container">
          <div className="productsWTPic">
            <Image
              src={'/productsWTPic.png'}
              alt="productsWTPic_pic"
              width={570}
              height={560}
            />
          </div>
          <div className="webtoffee_text">
            <Image
              src={'/productWebtoffee.png'}
              alt="productWebtoffee_pic"
              width={240}
              height={40}
            />
            <p>
              Streamline eCommerce businesses and create amazing customer
              experiences with our WordPress/WooCommerce plugins and extensions.
              Manage your day-to-day operations with extensions for product
              imports, smart coupons, payment gateways, subscriptions and more.
            </p>
            <p>
              WebToffee builds some of the most popular and top-rated plugins in
              the marketplace and powers over 1.3 million online stores and
              websites.
            </p>
            <button className="btn">Visit Webtoffee</button>
          </div>
        </div>
      </section>
      <section className="future">
        <div className="container future_container">
          <h1>Want to know how we build<br/> products for the future?</h1>
          <p>Then be a part of our remarkable journey and let’s learn together!</p>
          <button className='btn activeBtn'>About us</button>
          <button className='btn'>Join the team</button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
