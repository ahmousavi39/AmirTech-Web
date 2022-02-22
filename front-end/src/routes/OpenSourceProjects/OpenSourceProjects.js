import React, { useEffect, useState } from 'react';
import { CardCom } from '../../component';
import styles from './OpenSourceProjects.module.css';
var dayjs = require('dayjs');


export const OpenSourceProjects = (props) => {
    const [data, setData] = useState([]);

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

        const dateInShortFormat = new Date(date).toLocaleDateString('en-US');
        const diffTime = Math.abs(new Date(dateInShortFormat) - new Date(new Date().toLocaleDateString('en-US')));
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays > 329) {
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
        } else if (diffDays == 0) {
            return 'today';
        } else {
            return `${diffDays} days ago`;
        }
    }


    return (
        <div className={styles.customContainer}>
            {data.length > 0 ? data.map((post, index) => {
                const GeneratedDateReady = GenerateDate(post.date);
                if (post.type === "open-source-project") {
                    return <CardCom key={index} post={post} index={index} generatedDate={GeneratedDateReady} />
                };
                return;
            }) : (<div className={styles.loader}></div>)}
        </div>
    );
};
