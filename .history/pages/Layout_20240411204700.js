import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Layout.module.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Layout() {
    return (
        <>
        <Head>
        <title>Clotho Styleguide</title>
        <meta name="Clotho styleguide" content="The styleguide of Clotho" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-48x48.ico" />
      </Head>
            <Navigation/>
            <main className={styles.main}>
                <div>
                    <h1 className={styles.title}>Layout</h1>
                    <p className={styles.content}>All pages are designed with a 10px grid and 4 columns and fit with them. This layout grid will offer consistency, efficiency and visual clarity that contribute to a cohesive and visually appealing user experience</p>
                    <h3>Containers</h3>
                    <p className={styles.content}>There are 2 main layout structures in our app. </p>
                    <p className={styles.content}>The first one is composed of 4 block sections. It is designed to guide users through a sequential process. The quiz page as an example, is made by the progress indicator, logo, questions and answers, and navigation button.</p>
                    <p className={styles.content}>The second layout is made up of 3 block sections. It can be found on the onboarding tutorials, inventory page, thrift store page and so on. It is designed with the top, middle and bottom parts to ensure a clear visual hierarchy to guide users' attention effectively.</p>
                    <div className={styles.explanation}>
                        <div className={styles.subTitle}>
                        <h3>Quiz Page Layout</h3>
                        <h3>Onboarding Page Layout</h3>
                        </div>
                        <div className={styles.layout}>
                            <Image 
                            src={"/images/layout.png"} 
                            alt="Rate your app experience" 
                            width={215} 
                            height={466} 
                            className={styles.page}
                            />
                            <Image 
                            src={"/images/Layout-one.png"} 
                            alt="Rate your app experience" 
                            width={215} 
                            height={466} 
                            className={styles.page}/>
                            <Image 
                            src={"/images/layout-two.png"} 
                            alt="Rate your app experience" 
                            width={215} 
                            height={466} 
                            className={styles.page}
                            />
                            <Image
                            src={"/images/Layout-three.png"} 
                            alt="Rate your app experience" 
                            width={215} 
                            height={466} 
                            className={styles.page}
                            />
                        </div>
                        <div className={styles.layout}>
                            <ul>
                                <li>10px Grid & 4 columns</li>
                                <li>Layout: Progress indicator, Logo, Questions & Answers and Navigation Button.</li>
                            </ul>
                            <ul>
                                <li>Consistency: Using a grid system helps maintain consistency across different pages of the app.</li>
                                <li>Efficiency: Easily divide the screen space into equal or proportional sections.</li>
                                <li>Visual Clarity: Provides clear guidelines for element placement, alignment, and spacing, enhancing readability and reducing visual clutter.</li>
                            </ul>
                            <ul>
                                <li>10px Grid & 4 columns</li>
                                <li>Layout: Contents/top chips, images/cards and navigation buttons/bars</li>
                            </ul>
                            <ul>
                                <li>Top Section: Positioned at the top of the page, it contains the logo, title and some quick access buttons.</li>
                                <li>Middle Section: Taking up the majority of the page's space, this section occupies the central area. It includes all functionalities and contents for users to interact.</li>
                                <li>Bottom Section: Located at the bottom of the page, may include additional tips, suggestions, or navigation options for users to explore further.</li>
                            </ul>
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

