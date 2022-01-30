import React, { useEffect, useState } from 'react';
import { CardCom } from '../../component';
import styles from './Home.module.css';
var dayjs = require('dayjs');


export const Home = (props) => {
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
        <div className={styles.customContainer}>
            {data.length > 0 ? data.map((post, index) => {
                const GeneratedDateReady = GenerateDate(post.date);
                return <CardCom key={index} post={post} index={index} generatedDate={GeneratedDateReady} />
            }) : <></>}
        </div>
    );
};
