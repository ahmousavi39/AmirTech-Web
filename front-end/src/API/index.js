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
    await axios.get(process.env.REACT_APP_POST_URL, { headers: { "pass": process.env.REACT_APP_DB_PASSWORD, name : props.name, comment : props.comment } })
        .then(response => {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    return;
};
