import React from 'react';
import styles from './Footer.module.css';
import { BsLinkedin, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"

export const FooterCom = () => {
    return (
        <div className={styles.customContainer}>
            <div className={styles.copyright}>Developed by Amir Hossain</div>
            <strong className={styles.brandName}>AmirTech</strong>
            <div className={styles.socialMediaNav}>
                <a className={styles.socialMediaIcons} href='https://www.youtube.com/channel/UC9x85MwN51yBybk19Pv2tJg'><BsYoutube className={styles.socialMediaIcons}></BsYoutube></a>
                <a className={styles.socialMediaIcons} href='https://www.twitter.com/amirtech_net'><BsTwitter className={styles.socialMediaIcons}></BsTwitter></a>
                <a className={styles.socialMediaIcons} href='https://www.instagram.com/amirtech_net'><BsInstagram className={styles.socialMediaIcons}></BsInstagram></a>
                <a className={styles.socialMediaIcons} href='https://www.linkedin.com/in/amirtechnet'><BsLinkedin className={styles.socialMediaIcons}></BsLinkedin></a></div>
        </div>
    )
};
export default FooterCom;