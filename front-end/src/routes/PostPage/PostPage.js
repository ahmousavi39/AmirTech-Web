import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import styles from './PostPage.module.css';
var dayjs = require('dayjs');


export const PostPage = (props) => {
    const [data, setData] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setData(props.data);
    });

    // Generate date
    const GenerateDate = (date) => {
        let dPast = date;
        let d1 = dayjs();
        let d2 = dayjs(dPast);
        let m = Math.round(d1.diff(d2, 'month', true));
        let y = Math.floor(m / 12);
        if (y === 0) {
            return `${m} months ago`;
        }
        else {
            m = m % 12;
            if (m === 0) {
                return `${y} years ago`;
            }
            else {
                return `${y} years, ${m} months ago`;
            }
        }
    }

    return (
        <div>
            {data.length > 0 ? data.map((post, index) => {
                const GeneratedDateReady = GenerateDate(post.date);
                if (post.path === location.pathname) {
                    return (
                        <div className={styles.customContainer}>
                            <header className={styles.postHeader}>
                                <h2 className={styles.postTitle}><a className={styles.postTitleLink} href={post.path}>{post.title}</a></h2>
                                <div className={styles.postMeta}><span>{GeneratedDateReady}</span><span className={styles.spreator}>{post.reading_time}min to read</span><span className={styles.spreator}>{post.topic}</span></div>
                            </header>
                            <figure className={styles.imageFigure}>
                                <div className={styles.imageContainer}><img alt={post.title} src={post.image} key={index} className={styles.image} /></div>
                            </figure>
                        </div>
                    )
                };
                return;
            }) : (<div className={styles.loader}></div>)}
        </div>
    );
};
