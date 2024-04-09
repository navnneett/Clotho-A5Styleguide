import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Graphics.module.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Graphics() {
    return(
        <>
            <Navigation/>
            <main className={styles.main}>
                <div>
                <h1 className={styles.title}>Graphics & Icons</h1>
                <p className={styles.content}>
                    Icons are indeed powerful visual cues that can enhance user experience and facilitate navigation 
                    within web applications. Users will have quick access to all features from the navigation bar.
                </p>
                <p className={styles.content}>
                    We have five icons that will be used for our webapp. They are Home, My Inventory, Plus Icon, 
                    Favourite Collection and Community. These icons can be found from 
                    <a href="https://www.figma.com/file/7ABTtPrDSxzbXdYhNKjg5f/%E2%9D%96-Untitled-UI-Icons-%E2%80%93-1%2C100%2B-essential-Figma-icons-(Community)?type=design&node-id=181-128951&mode=design&t=gRTDQvIY45FryFSA-0.">
                        here
                    </a>
                    .
                </p>
                <div className={styles.flexBox}>
                    <div className={styles.nav}>
                        <h3 className={styles.heading}>Clotho Navigation Bar</h3>
                        <svg className={styles.navBar} width="430" height="82" viewBox="0 0 430 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="430" height="82" fill="url(#paint0_linear_415_4732)"/>
                            <ellipse cx="53.1122" cy="41.095" rx="27.1122" ry="27.095" fill="#8229E0"/>
                            <path d="M46.1236 42.1254C46.876 45.047 49.5298 47.2057 52.6881 47.2057C55.8464 47.2057 58.5002 45.047 59.2527 42.1254M51.0236 23.098L39.5309 32.0311C38.7626 32.6282 38.3785 32.9268 38.1018 33.3007C37.8567 33.6319 37.6741 34.0051 37.5629 34.4018C37.4375 34.8496 37.4375 35.3359 37.4375 36.3086V48.5605C37.4375 50.4573 37.4375 51.4057 37.8069 52.1302C38.1318 52.7675 38.6503 53.2856 39.2879 53.6103C40.0129 53.9795 40.9619 53.9795 42.8599 53.9795H62.5163C64.4144 53.9795 65.3634 53.9795 66.0883 53.6103C66.726 53.2856 67.2445 52.7675 67.5694 52.1302C67.9388 51.4057 67.9388 50.4573 67.9388 48.5605V36.3086C67.9388 35.3359 67.9388 34.8496 67.8133 34.4018C67.7022 34.0051 67.5196 33.6319 67.2745 33.3007C66.9977 32.9268 66.6136 32.6282 65.8454 32.0311L54.3527 23.098C53.7573 22.6353 53.4597 22.4039 53.131 22.315C52.841 22.2365 52.5353 22.2365 52.2453 22.315C51.9166 22.4039 51.6189 22.6353 51.0236 23.098Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M144.479 29.1274L128.307 38.1062M128.307 38.1062L112.135 29.1274M128.307 38.1062L128.307 56.1696M145.431 38.1063V30.3893C145.431 29.7378 145.431 29.4121 145.335 29.1215C145.25 28.8645 145.111 28.6286 144.927 28.4295C144.72 28.2045 144.435 28.0463 143.865 27.7299L129.785 19.913C129.246 19.6135 128.976 19.4637 128.69 19.4049C128.438 19.353 128.177 19.353 127.924 19.4049C127.638 19.4637 127.368 19.6135 126.829 19.913L112.749 27.7299C112.18 28.0463 111.895 28.2045 111.687 28.4295C111.504 28.6286 111.365 28.8645 111.28 29.1215C111.184 29.4121 111.184 29.7378 111.184 30.3893V45.8232C111.184 46.4747 111.184 46.8005 111.28 47.091C111.365 47.348 111.504 47.5839 111.687 47.783C111.895 48.008 112.18 48.1662 112.749 48.4826L126.829 56.2995C127.368 56.5991 127.638 56.7488 127.924 56.8076C128.177 56.8595 128.438 56.8595 128.69 56.8076C128.976 56.7488 129.246 56.5991 129.785 56.2995L130.21 56.0639M119.745 23.8457L136.869 33.3528M147.333 56.1696L145.431 54.2682M147.333 49.5147C147.333 52.665 144.778 55.2189 141.625 55.2189C138.473 55.2189 135.918 52.665 135.918 49.5147C135.918 46.3643 138.473 43.8105 141.625 43.8105C144.778 43.8105 147.333 46.3643 147.333 49.5147Z" stroke="#8229E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect x="178.604" y="23.4302" width="80.2522" height="35.7654" rx="17.8827" fill="#8229E0"/>
                            <rect x="205.173" y="38.6034" width="27.1122" height="5.41899" rx="2.7095" fill="white"/>
                            <rect x="216.019" y="54.8604" width="27.095" height="5.42244" rx="2.71122" transform="rotate(-90 216.019 54.8604)" fill="white"/>
                            <path d="M322.606 37.7002V31.9199C322.606 28.885 322.606 27.3675 321.998 26.2083C321.463 25.1887 320.609 24.3597 319.558 23.8401C318.364 23.2495 316.801 23.2495 313.675 23.2495H301.767C298.641 23.2495 297.078 23.2495 295.884 23.8401C294.833 24.3597 293.979 25.1887 293.444 26.2083C292.836 27.3675 292.836 28.885 292.836 31.9199V50.7057C292.836 53.7407 292.836 55.2581 293.444 56.4173C293.979 57.437 294.833 58.266 295.884 58.7855C297.078 59.3761 298.641 59.3761 301.767 59.3761H307.721M308.651 39.5065H300.279M302.139 46.7318H300.279M315.164 32.2812H300.279M317.019 46.4258C315.531 44.7839 313.05 44.3422 311.185 45.8457C309.321 47.3493 309.058 49.8631 310.523 51.6413C311.987 53.4195 317.019 57.5698 317.019 57.5698C317.019 57.5698 322.052 53.4195 323.516 51.6413C324.98 49.8631 324.749 47.3334 322.853 45.8457C320.957 44.358 318.507 44.7839 317.019 46.4258Z" stroke="#8229E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M366.981 48.2264L370.603 46.1371C370.799 46.024 371.029 45.9846 371.252 46.0263L378.377 47.359C378.963 47.4685 379.503 47.018 379.501 46.4227L379.473 40.1834C379.472 40.0139 379.517 39.8472 379.602 39.7009L383.198 33.5484C383.385 33.2282 383.369 32.8284 383.155 32.525L377.101 23.9125M397.942 27.769C387.503 32.7781 393.197 39.4163 395.095 40.3647C398.657 42.1444 403.611 42.2612 403.611 42.2612C403.627 41.9471 403.635 41.6309 403.635 41.3129C403.635 30.838 395.138 22.3464 384.656 22.3464C374.175 22.3464 365.678 30.838 365.678 41.3129C365.678 51.7878 374.175 60.2794 384.656 60.2794C384.974 60.2794 385.291 60.2716 385.605 60.2561M393.686 60.1652L387.676 44.3305L403.521 50.3368L396.494 53.1435L393.686 60.1652Z" stroke="#8229E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <linearGradient id="paint0_linear_415_4732" x1="-92.5" y1="-202.887" x2="392.529" y2="223.804" gradientUnits="userSpaceOnUse">
                            <stop offset="0.175" stop-color="#DDB8FF" stop-opacity="0.8"/>
                            <stop offset="0.805" stop-color="#D6EFFF" stop-opacity="0.8"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className={styles.iconChart}>
                        <h3>Icons</h3>
                        <div className={styles.chart}>
                            <div className={styles.coll}>
                                <Image  src={'/images/Home-light.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/inven-light.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/fav-light.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/comm-light.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                            </div>

                            <div className={styles.coll}>
                                <Image  src={'/images/home-dark.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/inven-dark.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/fav-dark.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/comm-dark.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                            </div>

                            <div className={styles.coll}>
                                <Image  src={'/images/user-light.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/user-dark.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/search-light.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/search-dark.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                            </div>

                            <div className={styles.coll}>
                                <Image  src={'/images/back-light.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/back-dark.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/next-light.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/next-dark.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                            </div>

                            <div className={styles.coll}>
                                <Image  src={'/images/review-light.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/review-dark.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/go-light.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                                <Image  src={'/images/go-dark.png'}
                                        alt=""
                                        width={35}
                                        height={35}
                                        className={styles.smallIcon}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
                <div className={styles.twoColumns}>
                    <div className={styles.explanation}>
                        <h2 className={styles.sectionHeader}>Graphics</h2>
                        <h3 className={styles.subTitle}>Home</h3>
                        <p>
                            This icon will direct users to the home page and have access to visit their recent posts, 
                            outfit cards and community.The home icon is a home with smile.
                        </p>
                        <h3 className={styles.subTitle}>My Inventory</h3>
                        <p>
                            Users can upload photos of their clothing items, accessories, and shoes to their inventory. 
                            Each item can be tagged with relevant information such as type, color, size, and any other 
                            details the user want to label.Users can easily browse through their inventory to view their 
                            collection. This icon is made with an inventory box and search icon.
                        </p>
                        <h3 className={styles.subTitle}>Plus Icon</h3>
                        <p>
                            In our design, we feature a plus icon as a button, which allows users to navigate to two main 
                            functionalities. Upon tapping the plus icon, a popup window will appear, asking users to take 
                            photos or upload photos of their clothing, shoes, and accessories. In most social media apps, 
                            designers use the plus icon to enable users to post.
                        </p>
                        <h3 className={styles.subTitle}>Favourite Collection</h3>
                        <p>
                            All outfit cards will be saved here and also can be edited, delete and create.
                        </p>
                        <p>
                            They can modify the items included in the outfit, change the description or title, and update
                            any other relevant information as they want. This icon is a list with like.
                        </p>
                        <h3 className={styles.subTitle}>Community</h3>
                        <p>
                            Users will have options to interact with all people worldwide to share their outfits’ photos or 
                            videos. People have chances to discuss the latest trends and fashion combinations or ask for 
                            suggestions or advice on pairing and matching pieces together.
                        </p>
                        <p>
                            This icon represents the worldwide mouse-clicking and conveys the idea of communicating the 
                            idea of global interaction or navigating the world wide web with a mouse click.
                        </p>
                    </div>
                    <div className={styles.icons}>
                        <svg className={styles.home} width="100" height="100" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="27.1122" cy="27.095" rx="27.1122" ry="27.095" fill="#8229E0"/>
                            <path d="M20.1236 28.1254C20.876 31.047 23.5298 33.2057 26.6881 33.2057C29.8464 33.2057 32.5002 31.047 33.2527 28.1254M25.0236 9.098L13.5309 18.0311C12.7626 18.6282 12.3785 18.9268 12.1018 19.3007C11.8567 19.6319 11.6741 20.0051 11.5629 20.4018C11.4375 20.8496 11.4375 21.3359 11.4375 22.3086V34.5605C11.4375 36.4573 11.4375 37.4057 11.8069 38.1302C12.1318 38.7675 12.6503 39.2856 13.2879 39.6103C14.0129 39.9795 14.9619 39.9795 16.8599 39.9795H36.5163C38.4144 39.9795 39.3634 39.9795 40.0883 39.6103C40.726 39.2856 41.2445 38.7675 41.5694 38.1302C41.9388 37.4057 41.9388 36.4573 41.9388 34.5605V22.3086C41.9388 21.3359 41.9388 20.8496 41.8133 20.4018C41.7022 20.0051 41.5196 19.6319 41.2745 19.3007C40.9977 18.9268 40.6136 18.6282 39.8454 18.0311L28.3527 9.098C27.7573 8.63526 27.4597 8.4039 27.131 8.31496C26.841 8.23649 26.5353 8.23649 26.2453 8.31496C25.9166 8.4039 25.6189 8.63526 25.0236 9.098Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg className={styles.inventory} width="91" height="92" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.4792 12.1274L19.307 21.1062M19.307 21.1062L3.13484 12.1274M19.307 21.1062L19.3071 39.1696M36.4306 21.1063V13.3893C36.4306 12.7378 36.4306 12.4121 36.3346 12.1215C36.2496 11.8645 36.1107 11.6286 35.9271 11.4295C35.7196 11.2045 35.4347 11.0463 34.8648 10.7299L20.7855 2.91305C20.2459 2.61346 19.9761 2.46367 19.6904 2.40495C19.4375 2.35297 19.1767 2.35297 18.9238 2.40495C18.6381 2.46367 18.3683 2.61347 17.8287 2.91305L3.74939 10.7299C3.17952 11.0463 2.89457 11.2045 2.68709 11.4295C2.50353 11.6286 2.36462 11.8645 2.27965 12.1215C2.18359 12.4121 2.18359 12.7378 2.18359 13.3893V28.8232C2.18359 29.4747 2.18359 29.8005 2.27965 30.091C2.36462 30.348 2.50353 30.5839 2.68709 30.783C2.89457 31.008 3.17953 31.1662 3.74939 31.4826L17.8287 39.2995C18.3683 39.5991 18.6381 39.7488 18.9238 39.8076C19.1767 39.8595 19.4375 39.8595 19.6904 39.8076C19.9761 39.7488 20.2459 39.5991 20.7855 39.2995L21.2097 39.0639M10.7453 6.84575L27.8689 16.3528M38.3332 39.1696L36.4306 37.2682M38.3332 32.5147C38.3332 35.665 35.7777 38.2189 32.6254 38.2189C29.473 38.2189 26.9176 35.665 26.9176 32.5147C26.9176 29.3643 29.473 26.8105 32.6254 26.8105C35.7777 26.8105 38.3332 29.3643 38.3332 32.5147Z" stroke="#8229E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg className={styles.plus} width="121" height="77" viewBox="0 0 81 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.603516" y="0.430176" width="80.2522" height="35.7654" rx="17.8827" fill="#8229E0"/>
                            <rect x="27.1733" y="15.6034" width="27.1122" height="5.41899" rx="2.7095" fill="white"/>
                            <rect x="38.0186" y="31.8604" width="27.095" height="5.42244" rx="2.71122" transform="rotate(-90 38.0186 31.8604)" fill="white"/>
                        </svg>
                        <svg className={styles.collection} width="100" height="104" viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.6062 16.7002V10.9199C32.6062 7.88498 32.6062 6.36752 31.9979 5.20833C31.4627 4.18868 30.6088 3.35968 29.5585 2.84015C28.3644 2.24951 26.8013 2.24951 23.6752 2.24951H11.767C8.64085 2.24951 7.07777 2.24951 5.88373 2.84015C4.83342 3.35968 3.97949 4.18868 3.44433 5.20833C2.83594 6.36752 2.83594 7.88498 2.83594 10.9199V29.7057C2.83594 32.7407 2.83594 34.2581 3.44433 35.4173C3.97949 36.437 4.83342 37.266 5.88373 37.7855C7.07777 38.3761 8.64085 38.3761 11.767 38.3761H17.7211M18.6514 18.5065H10.2785M12.1392 25.7318H10.2785M25.1637 11.2812H10.2785M27.0192 25.4258C25.5312 23.7839 23.0498 23.3422 21.1854 24.8457C19.321 26.3493 19.0585 28.8631 20.5226 30.6413C21.9868 32.4195 27.0192 36.5698 27.0192 36.5698C27.0192 36.5698 32.0517 32.4195 33.5158 30.6413C34.9799 28.8631 34.7495 26.3334 32.853 24.8457C30.9566 23.358 28.5072 23.7839 27.0192 25.4258Z" stroke="#8229E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg className={styles.community} width="100" height="100" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.98109 28.2264L7.60257 26.1371C7.79873 26.024 8.02892 25.9846 8.25156 26.0263L15.3771 27.359C15.9626 27.4685 16.5032 27.018 16.5005 26.4227L16.4728 20.1834C16.472 20.0139 16.5168 19.8472 16.6023 19.7009L20.1982 13.5484C20.3854 13.2282 20.3686 12.8284 20.1553 12.525L14.1008 3.91247M34.9417 7.76905C24.5035 12.7781 30.1967 19.4163 32.0949 20.3647C35.6573 22.1444 40.6114 22.2612 40.6114 22.2612C40.6269 21.9471 40.6349 21.6309 40.6349 21.3129C40.6349 10.838 32.1379 2.34644 21.6563 2.34644C11.1747 2.34644 2.67773 10.838 2.67773 21.3129C2.67773 31.7878 11.1747 40.2794 21.6563 40.2794C21.9745 40.2794 22.2909 40.2716 22.6052 40.2561M30.6859 40.1652L24.6758 24.3305L40.5206 30.3368L33.4944 33.1435L30.6859 40.1652Z" stroke="#8229E0" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div className={styles.graphics}>
                    <div className={styles.experience}>
                        <h2 className={styles.sectionHeader}>Icons</h2>
                        <h3 className={styles.subTitle}>Rating App Experience Page</h3>
                        <p>
                            This rating page will show up after the user has completed most actions and tasks 
                            (eg, completing an outfit card, or uploading a set of clothing photos) within a 
                            few weeks. However, this page won't appear in a non-intrusive manner that the user 
                            will be asking if they want to rate their services.
                        </p>
                        <p>
                            We chose the cat as our app mascot and designed it in 3D modelling. The cat was given 
                            a default color and could change color according to the feedback of the user's experience.
                        </p>
                        <h4 className={styles.subHeading}>Positive & Negative Experience</h4>
                        <p>
                            Our app will allow the user to rate their experience by clicking on the button below 
                            the mascot. A green cat represents a happy cat, a positive service experience, while 
                            a red cat with an angry face will mean a negative app-using experience. 
                        </p>
                        <h3 className={`${styles.subTitle} ${styles.placeHolderSmall}`}>Inventory Category Page</h3>
                        <p>
                            The Inventory Category Page serves as a central hub within the app, offering users a 
                            structured attractive way to browse through their stored products or items based on 
                            specific categories. 
                        </p>
                        <p>
                            It provides a visually appealing layout that organizes inventory into distinct groups, 
                            streamlining the user's search process and enhancing navigation efficiency. Users can 
                            effortlessly explore various categories, ranging from accessories and clothing to 
                            household goods and beyond, enabling them to quickly locate desired items with ease.
                        </p>
                        <p>
                            The inventory icons align with the entire app's styles and use the selected color 
                            swatch. We also provide dark mode for different user's preferences.
                        </p>
                        <h3 className={`${styles.subTitle} ${styles.placeHolder}`}>Home Page</h3>
                        <p>
                            The Home Page serves as the primary gateway to the app, offering users a captivating 
                            and informative introduction to its features and content. 
                        </p>
                        <p>
                            All page elements are matched with their color swatches and show different visual 
                            feelings and novelty experiences to ensure tailored to each user's preferences and 
                            interactions.
                        </p>
                        <p>
                            For the day mode background image, consider a vibrant sky scene with fluffy clouds 
                            drifting gently across a bright blue sky.
                        </p>
                        <p>
                            In contrast, for the night mode background image, imagine a peaceful nocturnal scene 
                            with a dark, star-studded sky.
                        </p>
                    </div>
                    <div className={styles.frames}>
                        <Image 
                        src={"/images/01.Rating.png"} 
                        alt="Rate your app experience" 
                        width={215} 
                        height={466} 
                        className={styles.rating}
                        />
                        <Image 
                        src={"/images/02.Rating_Happy.png"} 
                        alt="Good experience" 
                        width={215} 
                        height={466} 
                        className={styles.rating}
                        />
                        <Image
                        src={"/images/03.Rating_Angry.png"} 
                        alt="Bad experience" 
                        width={215} 
                        height={466}
                        className={styles.rating}
                        />
                        <div className={styles.inventory}>
                            <Image 
                            src={"/images/inventory_categories.png"} 
                            alt="Inventory category icons" 
                            width={215} 
                            height={466}
                            className={styles.categories}
                            />
                            <Image 
                            src={"/images/inventory_categories-dark.png"} 
                            alt="Inventory category icons_dark" 
                            width={215} 
                            height={466}
                            className={styles.categories}
                            />
                        </div>
                        <div className={styles.homePage}>
                            <Image 
                            src={"/images/Home.png"} 
                            alt="Home Image" 
                            width={215} 
                            height={466}
                            className={styles.categories}
                            />
                            <Image 
                            src={"/images/Homepage-dark.png"} 
                            alt="Home Image Dark Mode" 
                            width={215} 
                            height={466}
                            className={styles.categories}
                            />
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






