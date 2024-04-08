import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clotho Styleguide</title>
        <meta name="Clotho styleguide" content="The styleguide of Clotho" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation/>

      <main className={`${styles.main}`}>
        <div className={styles.top}>
          <div className="left">
            <Image 
              src={'/images/Logo.png'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={400}
              height={225}
            />
            <hr className={styles.line}/>
            <p className={styles.author}>Samantha Yan, Navneet Aulakh, Sandy Ly</p>
          </div>

          <div className={styles.space}></div>

          <div className="right">
            <h1 className={styles.title}>Styleguide</h1>
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
          </div>
        </div>

        <div className={styles.footer}>
                    <Footer/>
        </div>
      </main>
    </>
  );
}



