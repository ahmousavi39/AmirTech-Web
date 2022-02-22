import React, {useState} from 'react';
import styles from './Comments.module.css';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { postComment } from '../../API';

const CommentsCom = (props) => {
    const [lastCommentId, setLastCommentId] = useState(0);
    const [commentsData, setCommentsData] = useState(props.post.comments);
    
    const postCommentCall = () => {
        const name = document.getElementsByTagName('input')[0].value;
        const comment = document.getElementsByTagName('textarea')[0].value;
        const postId = props.post.id;

        // Empting input value
        document.getElementsByTagName('input')[0].value = '';
        document.getElementsByTagName('textarea')[0].value = '';

        // Getting the date
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date_ob = new Date();
        let minutes = date_ob.getMinutes();
        let hours = date_ob.getHours();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = monthNames[("0" + (date_ob.getMonth() + 1)).slice(-2) - 1];
        let year = date_ob.getFullYear();

        if (name.length > 1) {
            if (comment.length > 1) {
                postComment({name: name, comment: comment, postId: postId, lastCommentId: lastCommentId});
                alert('Thanks for your valuable comment ' + name + ' !');

                setCommentsData([...commentsData, { "id": parseInt(lastCommentId) + 1 , "date": date + ' ' + month + ', ' + year, "time": hours + ':' + minutes, "content": comment, "author": name }]);
            } else {
                alert('Please enter your comment!');
            }
        } else {
            alert('Please enter your name first!');
        }
    }
    return (
        <div>
            <section className={styles.postComment}>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Your Name"
                    className="mb-3"
                >
                    <Form.Control type="name" placeholder="Name" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Your Comment">
                    <Form.Control
                        as="textarea"
                        placeholder="Share your opinion with me!"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>

                <div className={styles.postAction}>
                    <Button variant="outline-primary" onClick={postCommentCall} className={styles.postButton} >Post</Button>
                </div>
            </section>
            <section className={styles.bodyContainer}>
                {commentsData.map((item, index) => {
                    if(item.id > lastCommentId){
                        setLastCommentId(lastCommentId + 1);
                    }
                    return (
                    <div style={{ marginBottom: "30px" }} key={index}>
                        {index > 0 ? <hr /> : <></>}
                        <h5 className={styles.commentTitle}>{item.author}</h5>
                        <div className={styles.commentMeta}><span>{item.date}</span> | <span className={styles.spreator}>{item.time}</span></div>
                        <p>{item.content}</p>
                    </div>

                )})}
            </section>
        </div>
    )
}

export default CommentsCom;