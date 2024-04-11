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
            <h1 className={styles.title}>Logo</h1>
            <p className={styles.bio}>
                The logo for Clotho showcases the essence of the app's closet organization features.the logo for Clotho combines elements of organization, fashion, and playfulness, all enhanced by the use of colours.
                <ul>
                    <li>Name Placement: The bold and clean font used for the name ensures readability and brand recognition. White Space is intentionally added to the design for better focus.</li>
                    <li>Hanger Symbolism: The hanger on top signifies clothing organization and management, conveying the primary function of the app.</li>
                    <li>Cat Whiskers and Ears: The addition of cat whiskers and ears on the letter "C" emphasizes the app's mascot, creating an identity with the playful and whimsical gradient colours.</li>
                    <li>Tie in Place of "L": The "L" replaced by a tie shows a clothing theme, aligning with the app's focus on wardrobe content.</li>
                    <li>Bow Tie: The bow tie below the last letter "o" reinforces the fashion element. The bow tie can also be seen on the app's mascot</li>
                    <li>Colours: The hanger, cat whiskers, and tie are have gradient colours, adding depth and visual interest to the logo. The most important element "Clotho" word is made most prominent by dark solid colour which also determines visula hierarchy.</li>
                </ul>
            </p>
            </div>
            
            <div className={styles.fullColourImage}>
            <Image 
              src={'/images/LogoFullColourLight.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />

            <Image 
              src={'/images/LogoFullColourDark.svg'}
              alt="The logo of Clotho"
              className={styles.logo}
              width={350}
              height={210}
            />

            <div className={styles.Colour}>
            <Image 
              src={'/images/Colours.svg'}
              alt="The logo of Clotho"
              className={styles.colourslogo}
              width={350}
              height={210}
            />
            
            <p className={styles.colourbio}>
              
            </p>
            </div>

            </div>


            </div>

            <hr className={styles.line}/>

            <div className={styles.blackWhite}>

            <div className={styles.blackWhiteText}>
            <h2 className={styles.title}>Black and White</h2>
            <p className={styles.bio}>
              Clotho logo presented in black and white (reversed).
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
            <h2 className={styles.title}>Greyscale and Monochromatic Logo</h2>
            <p className={styles.bio}>
              
            </p>
            <p className={styles.bio}>
            Clotho logo presented in greyscale. The black is at 50% #808080 for "Clotho" word and 30% #B2B2B2 for the elements.
            </p>

            <p className={styles.bio}>
            Clotho logo presented in Monochromatic colours of #494EAC. 
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

            <div className={styles.horiVertImage}>
            <div className={styles.whiteImage}>
            <Image 
              src={'/images/VerticalWhite.svg'}
              alt="The logo of Clotho"
              className={styles.lightVertLogo}
              width={350}
              height={410}
            />

            <Image 
              src={'/images/LogoFullColourLight.svg'}
              alt="The logo of Clotho"
              className={styles.lightHoriLogo}
              width={350}
              height={210}
            />
            </div>

            <hr className={styles.hrLine}/>

            <div className={styles.darkImage}>
            <Image 
              src={'/images/VerticalDark.svg'}
              alt="The logo of Clotho"
              className={styles.darkVertLogo}
              width={350}
              height={410}
            />

            <Image 
              src={'/images/LogoFullColourDark.svg'}
              alt="The logo of Clotho"
              className={styles.darkHoriLogo}
              width={350}
              height={210}
            />
            </div>
            </div>
            <vl className={styles.vrLineHoriVert}/>
            <div className={styles.horiVertText}>
            <h2 className={styles.title}>Horizontal and Vertical Versions</h2>
            <p className={styles.bio}>
              
            </p>
            </div>
            

            </div>

            <hr className={styles.line}/>


            <div className={styles.alterSymbol}>
            
            <div className={styles.alter}>
            <div className={styles.alterImage}>
            <div className={styles.alterinImage}>
            <Image 
              src={'/images/AlterOne.svg'}
              alt="The logo of Clotho"
              className={styles.alterlogo}
              width={200}
              height={160}
            />

            <Image 
              src={'/images/AlterTwo.svg'}
              alt="The logo of Clotho"
              className={styles.alterlogo}
              width={200}
              height={160}
            />
            </div>
            </div>
            <div className={styles.alterText}>
            <h2 className={styles.title}>Alternative with Mascot and a Wordmark</h2>
            <p className={styles.bio}>
              
            </p>
            </div>
            </div>

            <vl className={styles.vrLineThree}/>
            
            <div className={styles.symbol}>
            <div className={styles.symbolImage}>
            <div className={styles.symbolinImage}>
            <Image 
              src={'/images/SymbolOne.svg'}
              alt="The logo of Clotho"
              className={styles.symbollogo}
              width={200}
              height={160}
            />

            <Image 
              src={'/images/SymbolTwo.svg'}
              alt="The logo of Clotho"
              className={styles.symbollogo}
              width={200}
              height={160}
            />
            </div>
            </div>
            <div className={styles.symbolText}>
            <h2 className={styles.title}>Symbol</h2>
            <p className={styles.bio}>
              
            </p>
            </div>
            </div>


            </div>
            
            <hr className={styles.line}/>


            <div className={styles.favicon}>
            <h2 className={styles.title}>Favicon</h2>

            <div className={styles.faviconOne}>
            <Image 
              src={'/images/favicon-16x16.ico'}
              alt="The logo of Clotho"
              className={styles.favilogo}
              width={16}
              height={16}
            />
            <p className={styles.bio}>
              16 x 16
            </p>
            </div>

            <div className={styles.faviconTwo}>
            <Image 
              src={'/images/favicon-32x32.ico'}
              alt="The logo of Clotho"
              className={styles.favitwologo}
              width={32}
              height={32}
            />
            <p className={styles.bio}>
              32 x 32
            </p>
            </div>

            <div className={styles.faviconThree}>
            <Image 
              src={'/images/favicon-48x48.ico'}
              alt="The logo of Clotho"
              className={styles.favithreelogo}
              width={48}
              height={48}
            />
            
            <p className={styles.bio}>
              48 x 48 
            </p>
            </div>

            </div>
            
            


            

            <div className={styles.footer}>
                <Footer/>
            </div>
            </main>


        </>
    )
}


