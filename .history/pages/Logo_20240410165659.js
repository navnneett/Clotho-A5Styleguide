import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Logo.module.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Logo() {
    return(
        <>
            <Navigation/>
            
            <main className={`${styles.main}`}>
            
            <div className={styles.fullColour}>

            <div className={styles.fullColourText}>
            <h1 className={styles.title}>Styleguide</h1>
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>
            
            <div className={styles.fullColourImage}>
            <Image 
              src={'/images/LogoFullColourLight.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={300}
              height={160}
            />

            <Image 
              src={'/images/LogoFullColourDark.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={300}
              height={160}
            />
            </div>

            
            
            
            
            </div>


            
            </main>

<div className={styles.footer}>
<Footer/>
</div>
        </>
    )
}


