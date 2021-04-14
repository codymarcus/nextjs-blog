import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

export const name = 'Cody Marcus'
export const siteTitle = 'Cody Marcus'

const Layout = ({ children, home }: { children: React.ReactNode, home?: boolean }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.heroImageWrapper}>
        <h1
          style={{
            backgroundColor: 'black',
            color: 'white',
            display: 'inline',
            position: 'absolute',
            zIndex: 1,
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            marginTop: 60,
            paddingLeft: 15,
            paddingRight: 15,
            fontFamily: 'Courier'
          }}
        >{name}</h1>
        <Image
          priority
          src="/images/cody.jpeg"
          objectFit="cover"
          objectPosition="right"
          layout="fill"
          alt={name}
          quality={100}
        />
      </div>
      <div style={{
        width: '55vw',
        backgroundColor: 'black',
        color: 'white',
        position: 'absolute',
        right: 0,
        display: 'block',
        top: 0,
        bottom: 0,
        overflow: 'hidden'
      }}>
        <div style={{ overflow: 'auto', height: '100%', padding: 100 }}>
          {children}
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back</a>
              </Link>
            </div>
          )}
        </div>

      </div>

    </div>
  )
}

export default Layout
