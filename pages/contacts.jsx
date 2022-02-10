import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Contacts = () => {
  return (
    <Layout>
      <div className={'header header_wrapper'}>
        <div className="container main_header">
          <div>
            <h1>Connect with us</h1>
            <p>
              We’d love to hear from you. Fill out this form and we’ll get back
              to you. For job related queries, click on the button below.
            </p>
            <button className={'btn'}>Work with us</button>
          </div>
          <div className={'main_pic'}>
            <Image
              src="/connect.png"
              alt="connect pic"
              height={750}
              width={900}
            />
          </div>
        </div>
      </div>
      <div>connect</div>
    </Layout>
  );
};

export default Contacts;
