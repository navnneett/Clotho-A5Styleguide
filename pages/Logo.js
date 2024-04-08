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


                <div className={styles.footer}>
                        <Footer/>
                </div>
            </main>
        </>
    )
}


