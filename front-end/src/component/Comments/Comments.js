import React, {useState} from 'react';
import styles from './Comments.module.css';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { postComment } from '../../API';

const CommentsCom = (props) => {
    const [lastCommentId, setLastCommentId] = useState(0);

    const postCommentCall = () => {
        const name = document.getElementsByTagName('input')[0].value;
        const comment = document.getElementsByTagName('textarea')[0].value;
        const postId = props.post.id;

        if (name.length > 1) {
            if (comment.length > 1) {
                postComment({name: name, comment: comment, postId: postId, lastCommentId: lastCommentId});
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
                {props.post.comments.map((item, index) => {
                    if(item.id > lastCommentId){
                        setLastCommentId(lastCommentId + 1);
                    }
                    return (
                    <div style={{ marginBottom: "30px" }} key={index}>
                        {index > 0 ? <hr /> : <></>}
                        <h5 className={styles.commentTitle}>{item.author}</h5>
                        <div className={styles.commentMeta}><span>{item.date}</span><span className={styles.spreator}>{item.time}</span></div>
                        <p>{item.content}</p>
                    </div>

                )})}
            </section>
        </div>
    )
}

export default CommentsCom;