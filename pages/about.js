import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
    return ( 
        <>
            <Head>
                <title>Gorgey Blog | About</title>
                <meta name="keywords" content="Blog" />
            </Head>
            <div className={styles.container}>
                <div className={styles.pick}>
                    <h1 className={styles.tpc}>Emmanuel Omoiya</h1>
                    <p className={styles.det}>Software Developer, Reader, Thinkist, Eatist.</p>
                </div>
            </div>
            <div className={styles.details}>
                <p>I am a guy, or rather a cisgendered male. I write code to express my intelectuality and to ease stress. Dealing with Front-End stuffs at the moment to become very-good at what i do.</p>
                <br />
                <p>I am currently Unemployed but would be looking forward to getting a job (remote preferably) as soon as possible </p>
            </div>
        </>
    );
}
 
export default About;
