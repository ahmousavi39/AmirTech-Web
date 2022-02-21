import React, { useState } from 'react';
import styles from './Admin.module.css';
import { postPost } from '../../API';
import { CardCom } from '../../component';
import { PostPage } from '../../routes';


export const Admin = (props) => {
    const availableWidth = window.innerWidth < 600 ? window.innerWidth / 1.3 : window.innerWidth / 1.5;
    const [data, setData] = useState({
        "id": '',
        "type": 'article',
        "title": '',
        "image": '',
        "video": '',
        "featured": '',
        "featured_image": '',
        "topic": '',
        "summary": '',
        "html": '',
        "path": '',
        "reading_time": '',
        "author": '',
        "tags": '',
        "url": '',
        "secret_pass": '',
        "message": 'admin'
    });



    function onAction(action, field) {
        const id = document.getElementById('id').value;
        const type = document.getElementById('type').value;
        const title = document.getElementById('title').value;
        const image = document.getElementById('image').value;
        const video = document.getElementById('video').value;
        const featured = document.getElementById('featured').value;
        const featured_image = document.getElementById('featured-image').value;
        const topic = document.getElementById('topic').value;
        const summary = document.getElementById('summary').value;
        const html = document.getElementById('html').value;
        const path = '/' + type + '/' + id;
        const reading_time = document.getElementById('timeto').value;
        const author = document.getElementById('author').value;
        const tags = [document.getElementById('tags').value];
        const url = 'https://amirtech.net' + path;
        const secret_pass = document.getElementById('secret_pass').value;

        if (action === 'onClick') {
            postPost({
                "id": id,
                "type": type,
                "title": title,
                "image": image,
                "video": video,
                "featured": featured,
                "featured_image": featured_image,
                "topic": topic,
                "summary": summary,
                "html": html,
                "path": path,
                "reading_time": reading_time,
                "author": author,
                "tags": tags,
                "url": url,
                "secret_pass": secret_pass
            });
        } else {
            if (field === 'path') {
                setData((lastObj) => ({
                    ...lastObj,
                    [field]: '/' + type + '/' + id
                }));
            } else {
                setData((lastObj) => ({
                    ...lastObj,
                    [field]: document.getElementById(field).value
                }));
            }
        }

    }
    return (
        <div className={styles.customContainer}>
            <form>
                <label for="type">Select Type</label>
                <br />
                <select className={styles.input} onChange={() => { onAction('onChange', 'type') }} id="type" id="type" name="type">
                    <option value="article">article</option>
                    <option value="podcast">podcast</option>
                    <option value="cours">cours</option>
                    <option value="open-source-project">open-source-project</option>
                </select>
                <br />
                <br />

                <label>Title</label>
                <br />
                <input className={styles.input} type="text" onChange={() => { onAction('onChange', 'title') }} id="title" name="title" />
                <br />
                <br />

                <label>ID</label>
                <br />
                <input className={styles.input} type="text" onChange={() => { onAction('onChange', 'id') }} id="id" name="id" />
                <br />
                <br />

                <label>Image</label>
                <br />
                <input className={styles.input} type="text" onChange={() => { onAction('onChange', 'image') }} id="image" name="image" />
                <br />
                <br />

                <label>Video</label>
                <br />
                <input className={styles.input} type="text" onChange={() => { onAction('onChange', 'video') }} id="video" name="video" />
                <br />
                <br />

                <label for="featured">Is featured</label>
                <br />
                <select className={styles.input} onChange={() => { onAction('onChange', 'featured') }} id="featured" name="type">
                    <option value="false">false</option>
                    <option value="ture">ture</option>
                </select>
                <br />
                <br />

                <label>Feature Image</label>
                <br />
                <input className={styles.input} type="text" onChange={() => { onAction('onChange', 'featured') }} id="featured-image" name="featured-image" />
                <br />
                <br />

                <label>Topic</label>
                <br />
                <input className={styles.input} type="text" onChange={() => { onAction('onChange', 'topic') }} id="topic" name="topic" />
                <br />
                <br />

                <label>Summary</label>
                <br />
                <textarea className={styles.textarea} type="text" onChange={() => { onAction('onChange', 'summary') }} id="summary" name="summary" style={{ width: '300px', height: '300px' }} />
                <br />
                <br />

                <label>HTML</label>
                <br />
                <textarea className={styles.textarea} type="text" onChange={() => { onAction('onChange', 'html') }} id="html" name="html" style={{ width: availableWidth, height: '600px' }} />
                <br />
                <br />

                <label>Time to</label>
                <br />
                <input className={styles.input} type="text" onChange={() => { onAction('onChange', 'timeto') }} id="timeto" name="timeto" />
                <br />
                <br />

                <label>Author</label>
                <br />
                <input className={styles.input} type="text" onChange={() => { onAction('onChange', 'author') }} id="author" name="author" />
                <br />
                <br />

                <label>Tags</label>
                <br />
                <input className={styles.input} type="text" onChange={() => { onAction('onChange', 'tags') }} id="tags" name="tags" />
                <br />
                <br />

                <label>Secret Pass</label>
                <br />
                <input className={styles.input} type="text" onChange={() => { onAction('onChange', 'secret_pass') }} id="secret_pass" name="secret_pass" />
                <br />
                <br />

                <input type="button" value="Submit" onClick={() => { onAction('onClick') }} />
            </form>
            <div>
                <br />
                <br />
                <br />
                <br />
                <CardCom post={data} key={1} index={1} generatedDate={'00.00.00'} />
                <br />
                <br />
                <br />
                <br />
                <PostPage data={data} adminPannel={true} />
            </div>
        </div>
    );
};