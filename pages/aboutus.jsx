import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout/Layout';

const Aboutus = () => {
  return (
    <Layout>
      <div className={'header header_wrapper'}>
        <div className="container main_header">
          <div>
            <h1>About Mozi</h1>
            <p>
              Mozi is a technology company that builds products to simplify
              work. 1.3 million businesses of every size — from startups to
              global brands, use our tools to work better.
            </p>
          </div>
          <div className={'main_pic'}>
            <Image src="/about.png" alt="about pic" height={750} width={900} />
          </div>
        </div>
      </div>
      <section className="container">
        <div className="phrase ">
          Over <span className="number">1.3 million</span> users and global
          brands trust us
        </div>
        <div className="shops container">
          <Image src="/shops/1.svg" alt="1" width={100} height={30} />
          <Image src="/shops/2.svg" alt="1" width={100} height={30} />
          <Image src="/shops/3.svg" alt="1" width={100} height={30} />
          <Image src="/shops/4.svg" alt="1" width={100} height={30} />
          <Image src="/shops/5.svg" alt="1" width={100} height={30} />
          <Image src="/shops/6.svg" alt="1" width={100} height={30} />
          <Image src="/shops/7.svg" alt="1" width={100} height={30} />
        </div>
      </section>
      <section className="count_users">
        <div className="container count_users_container">
          <div className="card">
            <div className="title">2017</div>
            <p>Founded in</p>
            <Image src={'/count/1.png'} alt="pic" width={290} height={150} />
          </div>
          <div className="card">
            <div className="title">44+</div>
            <p>Employees</p>
            <Image src={'/count/2.png'} alt="pic" width={290} height={150} />
          </div>
          <div className="card">
            <div className="title">1.3M+</div>
            <p>Active users</p>
            <Image src={'/count/3.svg'} alt="pic" width={290} height={150} />
          </div>
        </div>
      </section>
      <section className="culture_code">
        <div className="container culture_code_container">
          <div className="title">Our culture code </div>
          <p>The values that drive Mozilorians every day.</p>

          <div className="blocks">
            <div className="block">
              <div className="block_title">Integrity</div>
              <div className="block_text">
                We value people who live by a strong moral code and act with
                uncompromising honesty in everything they do.
              </div>
            </div>
            <div className="block">
              <div className="block_title">Accountability</div>
              <div className="block_text">
                We take ownership of everything we do, including our mistakes.
                We learn from them so that we can make better mistakes next
                time.
              </div>
            </div>
            <div className="block">
              <div className="block_title">Humility</div>
              <div className="block_text">
                We value curiosity to learn from anyone, anywhere and the
                openness to acknowledge differences.
              </div>
            </div>
            <div className="block">
              <div className="block_title">Autonomy</div>
              <div className="block_text">
                We insist on individuality and care for the goals we achieve,
                not the procedures or ceremony in getting there.
              </div>
            </div>
            <div className="block">
              <div className="block_title">Conscientiousness</div>
              <div className="block_text">
                We seek to be principled and reliable so that we can always
                provide value for everyone around us.
              </div>
            </div>
            <div className="block">
              <div className="block_title">Contribution</div>
              <div className="block_text">
                We actively look for opportunities to give back to our team and
                the world around us.
              </div>
            </div>
          </div>
        </div>
        <div className="weare">
          <div className="container weare_container">
            <div className="weare_text">
              <div className="title">Who we are</div>
              <p>
                We are a bunch of thinkers and dreamers, who have come together to
                build products we are proud of. We come from diverse backgrounds,
                work in different agile teams and come together to deliver the
                best technology.
              </p>
              <p>
                In 2017, we started as a one-person endeavour by Anvar TK, our
                CEO, in an incubator at National Institute of Technology Calicut.
                Today, we are a growing team of 40+ members with offices in
                London, Bangalore and Calicut.
              </p>
            </div>
            <Image className="weare_pic" src={'/weare.png'} alt='weare' width={600} height={450}/>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Aboutus;
