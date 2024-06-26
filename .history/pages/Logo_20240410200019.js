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
              width={400}
              height={260}
            />

            <Image 
              src={'/images/LogoFullColourDark.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={400}
              height={260}
            />
            </div>
            </div>

            <hr className={styles.line}/>

            <div className={styles.blackWhite}>

            <div className={styles.blackWhiteText}>
            <h1 className={styles.title}>Styleguide</h1>
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>
            
            <div className={styles.blackWhiteImage}>
            <Image 
              src={'/images/BlackLogo.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={400}
              height={260}
            />

            <Image 
              src={'/images/WhiteLogo.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={400}
              height={260}
            />
            </div>
            </div>

            <hr className={styles.line}/>


            <div className={styles.greyMono}>
            
            <div className={styles.greyMonoText}>
            <h1 className={styles.title}>Styleguide</h1>
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>
            <vl className={styles.vrLine}/>

            <div className={styles.greyMonoImage}>
            <div className={styles.greyImage}>
            <Image 
              src={'/images/GreyWhite.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />

            <Image 
              src={'/images/GreyBlack.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />
            </div>

            <div className={styles.monoImage}>
            <Image 
              src={'/images/MonoWhite.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />

            <Image 
              src={'/images/MonoDark.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />
            </div>
            </div>
            </div>

            <hr className={styles.line}/>


            <div className={styles.horiVert}>
            
            <div className={styles.horiVertText}>
            <h1 className={styles.title}>Styleguide</h1>
            <p className={styles.bio}>
              Clotho is a closet organization app designed to assist users in managing their 
              clothes effectively. It keeps users updated with the latest fashion trends and 
              offers them access to a wide range of styles. Additionally, Clotho saves users 
              time by providing personalized mix-and-match advice based on factors such as 
              color, occasion, and more.
            </p>
            </div>
            <vl className={styles.vrLine}/>

            <div className={styles.horiVertImage}>
            <div className={styles.whiteImage}>
            <Image 
              src={'/images/VerticalWhite.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={410}
            />

            <Image 
              src={'/images/LogoFullColourLight.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />
            </div>

            <div className={styles.monoImage}>
            <Image 
              src={'/images/MonoWhite.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />

            <Image 
              src={'/images/MonoDark.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />
            </div>
            </div>
            </div>

            <hr className={styles.line}/>

            <div className={styles.footer}>
                <Footer/>
            </div>
            </main>


        </>
    )
}


