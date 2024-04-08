import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Color.module.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Color() {
    return(
        <>
            <Navigation/>
            <main className={styles.main}>
                <div className={styles.top}>
                    <h1>Colours</h1>
                    <p className={styles.paragraph}> 
                        We've opted for pastel colors for the app's palette because they evoke a sense of brightness, 
                        positivity, and happiness. Clotho, being a daily-use app, aims to cultivate a comfortable and 
                        uplifting atmosphere to enhance user enjoyment and engagement.
                    </p>
                </div>

                <div className={styles.middle}>
                    <div className={styles.heading}>
                        <h2>Primary Colors</h2>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.purple}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Dark Orchid</p>
                                <p className={styles.text}>#8229E0</p>
                            </div>
                        </div>

                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.white}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>White</p>
                                <p className={styles.text}>#FFFFFF</p>
                            </div>
                        </div>
                        <div className={styles.note}>
                            <p>
                                Primary colors serve as the cornerstone of our app's visual design, 
                                featured prominently in backgrounds, buttons, and highlights. By 
                                unifying these elements under a cohesive color scheme, we create a 
                                seamless and engaging user experience that enhances navigation and 
                                usability.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.middle}>
                    <div className={styles.heading}>
                        <h2>Sconadry Colors</h2>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.blue}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Pale Sky Blue</p>
                                <p className={styles.text}>#D6EFFF</p>
                            </div>
                        </div>

                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.yellow}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Light Goldenrod Yellow</p>
                                <p className={styles.text}>#FDF9D8</p>
                            </div>
                        </div>
                    
                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.pink}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Pale Mauve</p>
                                <p className={styles.text}>#FFD6FF</p>
                            </div>
                        </div>

                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.violet}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Biloba Flower</p>
                                <p className={styles.text}>#B399FF</p>
                            </div>
                        </div>

                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.taro}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Bright Ube</p>
                                <p className={styles.text}>#D098EA</p>
                            </div>
                        </div>

                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.lavender}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Melrose</p>
                                <p className={styles.text}>#B8C0FF</p>
                            </div>
                        </div>
                        <div className={styles.note}>
                            <p>
                                Secondary colors, predominantly pastel shades of purple and pink, 
                                are strategically employed to differentiate and highlight the 
                                header section background in our app. This deliberate choice not 
                                only creates visual contrast but also maintains harmony with our 
                                primary color palette, ensuring a cohesive and pleasing aesthetic 
                                throughout the interface.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.middle}>
                    <div className={styles.heading}>
                        <h2>Gradient Colors</h2>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.buttonLight}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Button Linear</p>
                            </div>
                        </div>

                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.buttonDark}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Dark Button Linear</p>
                            </div>
                        </div>

                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.navLight}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Navigation Linear</p>
                            </div>
                        </div>

                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.navDark}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Dark Navigation Linear</p>
                            </div>
                        </div>

                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.reLight}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Retangle Linear</p>
                            </div>
                        </div>

                        <div className={styles.colorCard}>
                            <div className={`${styles.colorHolder} ${styles.reDark}`}></div>
                            <div className={styles.colorinfo}>
                                <p className={styles.text}>Dark Retangle Linear</p>
                            </div>
                        </div>

                        <div className={styles.note}>
                            <p>
                                In addition to the primary colors, Clotho incorporates a variety 
                                of gradient colors, segmented into "Light mode" and "Dark mode" 
                                variations. These gradients play a significant role in enhancing 
                                the app's visual appeal by being applied to borders, overlay 
                                backgrounds, button backgrounds, and other elements. By utilizing 
                                gradients, Clotho achieves a dynamic and modern look that adapts 
                                seamlessly to both light and dark themes, enhancing user experience 
                                across the app interface.
                            </p>
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



