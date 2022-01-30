import React from 'react';
import styles from './Card.module.css';
import { BsPlayFill } from "react-icons/bs";
import Amir from '../../assets/Amir Hossain.png';


const CardCom = (props) => {
    return (
        <div className={styles.main}>
            <figure className={styles.imageFigure}>
                <div className={styles.imageContainer}><a href={props.post.path} className={styles.imageLink}><img alt={props.post.title} src={props.post.image} key={props.index} className={styles.image}/></a></div>
            </figure>

            <div className={styles.bodyContainer}>
                <header className={styles.postHeader}>
                    <h2 className={styles.postTitle}><a className={styles.postTitleLink} href={props.post.path}>{props.post.title}</a></h2>
                    <div className={styles.postMeta}><span>{props.generatedDate}</span><span className={styles.spreator}>{props.post.reading_time}min to read</span><span className={styles.spreator}>{props.post.topic}</span></div>
                </header>

                <div className={styles.postBody}>
                    {props.post.summary}
                </div>

                <hr />

                <footer className={styles.footer} style={{ paddingBottom: '10%' }}>
                    <div className={styles.postAction}>
                        <a className={styles.footerLink} href={props.post.path}><BsPlayFill size={17} />read now</a>
                    </div>
                    <div className={styles.postAuthor}>
                        <img src={Amir} className={styles.authorImage}></img>
                        <span><span className={styles.postMeta}>By:</span> {props.post.author}</span>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default CardCom;