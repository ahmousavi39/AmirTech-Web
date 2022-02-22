import axios from 'axios';


export async function getData() {
    let allPosts = [];

    await axios.get(process.env.REACT_APP_API_URL, { headers: { "pass": process.env.REACT_APP_DB_PASSWORD } })
        .then((response) => {
            allPosts = response.data;
        });

    return { allPosts };
};

export async function postComment(props) {
    await axios.get(process.env.REACT_APP_POST_COMMENT_URL, { headers: { "pass": process.env.REACT_APP_DB_PASSWORD, lastcommentid: props.lastCommentId, name: props.name, comment: props.comment, id: props.postId } })
        .catch(function (error) {
            alert("Sorry, We couldn't post your comment, if is possible please report is to: a.h.mousavi39@gmail.com")
        });
    return;
};


export async function postPost(props) {
    await axios.get(process.env.REACT_APP_POST_POST_URL, {
        headers: {
            "pass": process.env.REACT_APP_DB_PASSWORD, 
            "id": props.id,
            "type": props.type,
            "title": props.title,
            "image": props.image,
            "video": props.video,
            "featured": props.featured,
            "featured_image": props.featured_image,
            "topic": props.topic,
            "summary": props.summary,
            "html": props.html,
            "path": props.path,
            "reading_time": props.reading_time,
            "author": props.author,
            "tags": props.tags,
            "url": props.url,
            "secret_pass": props.secret_pass
        }
    })
        .then(response => {
            alert('posted')
        })
        .catch(function (error) {
            alert('didnt posted')
        });

    return;
};
