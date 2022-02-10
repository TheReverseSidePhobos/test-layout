import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Hiring = () => {
  return (
    <Layout>
      <div className={'header header_wrapper'}>
        <div className="container main_header">
          <div>
            <h1>Hey, we're looking for</h1>
            <p>Dreamers</p>
            <button className={'btn'}>View open roles</button>
          </div>
          <div className={'main_pic'}>
            <Image
              src="/hiring.png"
              alt="hiring pic"
              height={550}
              width={600}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hiring;
