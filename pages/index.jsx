import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import Image from 'next/image';

export default function Home() {
  return (
    
    <Layout>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
      </Head>
      <section className='container'>
      <div className='phrase '>
          Over <span className='number'>1.3 million</span> users and global brands trust us 
      </div>
      <div className='shops container'>
          <Image src='/shops/1.svg' alt='1' width={100} height={30} />
          <Image src='/shops/2.svg' alt='1' width={100} height={30} />
          <Image src='/shops/3.svg' alt='1' width={100} height={30} />
          <Image src='/shops/4.svg' alt='1' width={100} height={30} />
          <Image src='/shops/5.svg' alt='1' width={100} height={30} />
          <Image src='/shops/6.svg' alt='1' width={100} height={30} />
          <Image src='/shops/7.svg' alt='1' width={100} height={30} />
      </div>
      </section>
      <section className="products">
        <div className="container">
          <h1>Our line of products</h1>
          <p>Here’s what we’re building to help businesses deliver amazing customer experiences.</p>
          <div className="slider_items ">
            <div className="item">
              <Image src='/Cookies.svg' alt='cookies' width={190} height={35}/>
              <p>Cookie consent solution for privacy compliance.</p>
              <button><Image src='/arrow.svg' alt='arrow' width={20} height={10}/>Learn more</button>
              <Image className='down_img' src='/item1.png' alt='item1' width={509} height={300}/>
            </div>
            <div className="item">
              <Image src='/webtoffee.png' alt='webtoffee' width={190} height={35}/>
              <p>Plugins and extensions for eCommerce needs.</p>
              <button><Image src='/arrow.svg' alt='arrow' width={20} height={10}/>Learn more</button>
              <Image className='down_img' src='/item2.png' alt='item1' width={509} height={300}/>
            </div>
          </div>

        </div>
      </section>
      <section className="creators">
        <div className="container creators_container">
          <div className="creators_text">
            <h1>Creators of award-winning products</h1>
            <p>Our products are loved by customers and recommended by leading industry experts.</p>
          </div>
          <div className="creators_pic">
            <Image src='/creators_pic.png' alt='creators_pic' width={700} height={700} />
          </div>
        </div>
      </section>
      <section className='innovation'>
        <div className="container innovation_container">
          <h1>Making waves with innovation</h1>
          <p>We are in the news for being market leaders who deliver exceptional products.</p>
          <div className="blocks">
            <div className="blocks_item">
              <Image src='/innovations/1.jpg' alt='innovations1' width={350} height={100}/>
            </div>
            <div className="blocks_item">
              <Image src='/innovations/2.jpg' alt='innovations2' width={350} height={15}/>
            </div>
            <div className="blocks_item">
              <Image src='/innovations/3.jpg' alt='innovations3' width={350} height={100}/>
            </div>
            <div className="blocks_item">
              <Image src='/innovations/4.jpg' alt='innovations4' width={350} height={100}/>
            </div>
          {/* <div className="innovation_arrows">
            <span className='innovation_arrows_item'>&#8592;</span>
            <span className='innovation_arrows_item'>&#8594;</span>
          </div> */}
          </div>
        </div>
      </section>
      <section className="creators">
        <div className="container creators_container">
          <div className="creators_text">
            <h1>Let's build the next big thing!</h1>
            <p>Looking to achieve great things? You’ve come to the right place.</p>
            <button>Join the team</button>
          </div>
          <div className="creators_pic">
            <Image src='/let.svg' alt='creators_pic' width={700} height={700} />
          </div>
        </div>
      </section>
    </Layout>
  )
}
