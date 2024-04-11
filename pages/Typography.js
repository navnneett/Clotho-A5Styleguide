import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Typography.module.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navigation";

export default function Typography() {
    return (
        <>
        <Head>
        <title>Clotho Styleguide</title>
        <meta name="Clotho styleguide" content="The styleguide of Clotho" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-48x48.ico" />
      </Head>
            <Navbar/>
            <main className={`${styles.main}`}>
                <div className={styles.top}>
                    <h1>Typography</h1>
                    <p className={styles.paragraph}> 
                        In our typography, we employ both Serif and Sans Serif fonts - Open Sans and Roboto. 
                        OpenSans, the Sans Serif font, serves as our primary font due to its readability, 
                        reasonable width, and letter spacing. Additionally, we utilize the Serif font, Roboto, 
                        to highlight elements like headings, leveraging the contrast with OpenSans.
                    </p>
                </div>
                <div className={styles.middle}>
                    <div className={styles.Box}>
                        <div>
                            <h2>Open Sans</h2>
                            <div className={styles.type}>
                                <p className={styles.openSanRegular}>Regular</p>
                                <p className={styles.openSanSemibold}>Semibold</p>
                                <p className={styles.openSanBold}>Bold</p>
                            </div>
                        </div>
                        <div className={styles.letter}>
                        <p className={styles.sanSerif}> 
                                ABCDEFGHIJKLM
                            </p>
                            <p className={styles.sanSerif}> 
                                NOPQRSTUVWXYZ
                            </p>
                            <p className={styles.sanSerif}> 
                                abcdefghijklm
                            </p>
                            <p className={styles.sanSerif}> 
                                nopqrstuvwxyz
                            </p>
                            <p className={styles.sanSerif}> 
                                1234567890
                            </p>
                        </div>
                    </div>

                    <div className={styles.space}></div>

                    <div className={styles.Box}>
                        <div>
                            <h2 className={styles.roboto}>Roboto Slab</h2>
                            <div className={styles.type}>
                                <p className={styles.robotoRegular}>Regular</p>
                                <p className={styles.robotoSemibold}>Semibold</p>
                            </div>
                        </div> 
                        <div className={styles.letterS}>
                            <p className={styles.serif}> 
                                ABCDEFGHIJKLM
                            </p>
                            <p className={styles.serif}> 
                                NOPQRSTUVWXYZ
                            </p>
                            <p className={styles.serif}> 
                                abcdefghijklm
                            </p>
                            <p className={styles.serif}> 
                                nopqrstuvwxyz
                            </p>
                            <p className={styles.serif}> 
                                1234567890
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div>
                        <h3>Text Scale</h3>
                    </div>
                    <div className={styles.scale}>
                        <div className={styles.textScale}>
                            <p className={styles.OpenSans_Semibold_36px}>OpenSans_Semibold_36px</p>
                            <p className={styles.OpenSans_Semibold_30px}>OpenSans_Semibold_30px</p>
                            <p className={styles.OpenSans_Regular_30px}>OpenSans_Regular_30px</p>
                            <p className={styles.OpenSans_Semibold_24px}>OpenSans_Semibold_24px</p>
                            <p className={styles.OpenSans_Regular_24px}>OpenSans_Regular_24px</p>
                            <p className={styles.OpenSans_Regular_22px}>OpenSans_Regular_22px</p>
                            <p className={styles.OpenSans_Regular_20px}>OpenSans_Regular_20px</p>
                            <p className={styles.OpenSans_Bold_16px}>OpenSans_Bold_16px</p>
                            <p className={styles.OpenSans_Semibold_16px}>OpenSans_Semibold_16px</p>
                            <p className={styles.OpenSans_Regular_16px}>OpenSans_Regular_16px</p>
                            <p className={styles.OpenSans_Regular_14px}>OpenSans_Regular_14px</p>
                        </div>
                        
                        <div className={styles.textScaleRight}>
                            <p className={styles.Roboto_Semibold_36px}>Roboto_Semibold_36px</p>
                            <p className={styles.Roboto_Regular_30px}>Roboto_Regular_30px</p>
                        </div>
                    </div>
                </div>

                <div className={styles.footer}>
                        <Footer/>
                </div>
            </main>
            
        </>
    )
}


