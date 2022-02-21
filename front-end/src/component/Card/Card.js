import React from 'react';
import styles from './Card.module.css';
import { BsPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Amir from '../../assets/Amir Hossain.png';

const CardCom = (props) => {
    return (
        <div className={styles.main}>
            <figure className={styles.imageFigure}>
                <div className={styles.imageContainer}><Link to={props.post.path} className={styles.imageLink}>
                    {props.post.video !== undefined && props.post.video.length > 4 ?
                        <iframe key={props.index} className={styles.video} src={props.post.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={props.post.title} />
                        : <img alt={props.post.title} src={props.post.image} key={props.index} className={styles.image} />}
                </Link></div>
            </figure>

            <div className={styles.bodyContainer}>
                <header className={styles.postHeader}>
                    <h2 className={styles.postTitle}><Link className={styles.postTitleLink} to={props.post.path}>{props.post.title}</Link></h2>
                    <div className={styles.postMeta}><span>{props.generatedDate}</span>{props.post.type === "podcast" ? <span className={styles.spreator}>{props.post.reading_time} to listen</span> : props.post.type === "course" ? <span className={styles.spreator}>{props.post.reading_time}</span> : props.post.type === "open-source-project" ? "" : <span className={styles.spreator}>{props.post.reading_time} to read</span>}<span className={styles.spreator}>{props.post.type}</span><span className={styles.spreator}>[{props.post.topic}]</span></div>
                </header>

                <div className={styles.postBody}>
                    {props.post.summary}
                </div>

                <hr />

                <footer className={styles.footer} style={{ paddingBottom: '10%' }}>
                    <div className={styles.postAction}>
                        <Link to={props.post.path} className={styles.footerLink} href={props.post.path}><BsPlayFill size={17} />{props.post.type === 'article' ? "read now" : props.post.type === 'podcast' ? "Listen now" : props.post.type === "open-source-project" ? "Have a look" : props.post.type === "course" ? "Learn more" : "read more"}</Link>
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