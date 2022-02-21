import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Markup } from 'interweave';
import {
    FacebookIcon,
    WhatsappIcon,
    TwitterIcon,
    LinkedinIcon,
    RedditIcon,
    TelegramIcon
} from "react-share";
import {
    FacebookShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton
} from "react-share";
import styles from './PostPage.module.css';
import { CommentsCom } from '../../component';
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


    if (props.adminPannel === true) {
        return (
            <div className={styles.customContainer} key={1}>
                <header className={styles.postHeader}>
                    <h2 className={styles.postTitle}>{data.title}</h2>
                    <div className={styles.postMeta}><span>00.00.00</span><span className={styles.spreator}>{data.reading_time}min to read</span><span className={styles.spreator}>[{data.topic}]</span></div>
                </header>

                <figure className={styles.imageFigure}>
                    <div className={styles.imageContainer}>
                        {data.video !== undefined && data.video.length > 4 ?
                            <iframe className={styles.video} src={data.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title={data.title} />
                            : <img alt={data.title} src={data.image} key={1} className={styles.image} />}
                    </div>
                </figure>

                <div className={styles.bodyContainer}>
                    <Markup content={data.html} />

                    <footer className={styles.footer} >
                        <FacebookShareButton
                            url={window.location.href}
                            quote={""}
                            hashtag="#youtube"
                            disabled={false}
                            windowWidth={"1900px"}
                            windowHeight={"1080px"}
                        >
                            <FacebookIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                        </FacebookShareButton>
                        <WhatsappShareButton
                            url={window.location.href}
                            title={"Blogging Website"}
                            disabled={false}
                            windowWidth={"1900px"}
                            windowHeight={"1080px"}
                        >
                            <WhatsappIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                        </WhatsappShareButton>
                        <TwitterShareButton
                            url={window.location.href}
                            title={"Twitter Content"}
                            disabled={false}
                            windowWidth={"1900px"}
                            windowHeight={"1080px"}
                        >
                            <TwitterIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                        </TwitterShareButton>
                        <LinkedinShareButton
                            url={window.location.href}
                            title={"LinkedIn Content"}
                            summary={"LinkedIn content sharing"}
                            source={"sharing icons demo"}
                            disabled={false}
                            windowWidth={"1900px"}
                            windowHeight={"1080px"}
                        >
                            <LinkedinIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                        </LinkedinShareButton>
                        <RedditShareButton
                            url={window.location.href}
                            title={"Reddit Content"}
                            disabled={false}
                            windowWidth={"1900px"}
                            windowHeight={"1080px"}
                        >
                            <RedditIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                        </RedditShareButton>
                        <TelegramShareButton
                            title={"Telegram Content"}
                            url={window.location.href}
                            disabled={false}
                            windowWidth={"1900px"}
                            windowHeight={"1080px"}
                        >
                            <TelegramIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                        </TelegramShareButton>
                    </footer>
                </div>
            </div >

        );
    } else {
        return (
            <div>
                {data.length > 0 ? data.map((post, index) => {
                    const GeneratedDateReady = GenerateDate(post.date);
                    if (post.path === location.pathname || data[0].message !== undefined) {
                        return (
                            <div className={styles.customContainer} key={index}>
                                <header className={styles.postHeader}>
                                    <h2 className={styles.postTitle}>{post.title}</h2>
                                    <div className={styles.postMeta}><span>{GeneratedDateReady}</span><span className={styles.spreator}>{post.reading_time}min to read</span><span className={styles.spreator}>[{post.topic}]</span></div>
                                </header>
                                {/* <figure className={styles.imageFigure}>
                                <div className={styles.imageContainer}><img alt={post.title} src={post.image} key={index} className={styles.image} /></div>
                            </figure> */}

                                <figure className={styles.imageFigure}>
                                    <div className={styles.imageContainer}>
                                        {post.video !== undefined && post.video.length > 4 ?
                                            <iframe className={styles.video} src={post.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title={post.title} />
                                            : <img alt={post.title} src={post.image} key={post.index} className={styles.image} />}
                                    </div>
                                </figure>

                                <div className={styles.bodyContainer}>
                                    <Markup content={post.html} />

                                    <footer className={styles.footer} >
                                        <FacebookShareButton
                                            url={window.location.href}
                                            quote={""}
                                            hashtag="#youtube"
                                            disabled={false}
                                            windowWidth={"1900px"}
                                            windowHeight={"1080px"}
                                        >
                                            <FacebookIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                                        </FacebookShareButton>
                                        <WhatsappShareButton
                                            url={window.location.href}
                                            title={"Blogging Website"}
                                            disabled={false}
                                            windowWidth={"1900px"}
                                            windowHeight={"1080px"}
                                        >
                                            <WhatsappIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                                        </WhatsappShareButton>
                                        <TwitterShareButton
                                            url={window.location.href}
                                            title={"Twitter Content"}
                                            disabled={false}
                                            windowWidth={"1900px"}
                                            windowHeight={"1080px"}
                                        >
                                            <TwitterIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                                        </TwitterShareButton>
                                        <LinkedinShareButton
                                            url={window.location.href}
                                            title={"LinkedIn Content"}
                                            summary={"LinkedIn content sharing"}
                                            source={"sharing icons demo"}
                                            disabled={false}
                                            windowWidth={"1900px"}
                                            windowHeight={"1080px"}
                                        >
                                            <LinkedinIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                                        </LinkedinShareButton>
                                        <RedditShareButton
                                            url={window.location.href}
                                            title={"Reddit Content"}
                                            disabled={false}
                                            windowWidth={"1900px"}
                                            windowHeight={"1080px"}
                                        >
                                            <RedditIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                                        </RedditShareButton>
                                        <TelegramShareButton
                                            title={"Telegram Content"}
                                            url={window.location.href}
                                            disabled={false}
                                            windowWidth={"1900px"}
                                            windowHeight={"1080px"}
                                        >
                                            <TelegramIcon size={"2.5rem"} className={styles.iconShare} round={true} />
                                        </TelegramShareButton>
                                    </footer>

                                    <CommentsCom post={post} />
                                </div>
                            </div >
                        )
                    };
                    return;
                }) : (<div className={styles.loader}></div>)}
            </div >
        );
    };
};
