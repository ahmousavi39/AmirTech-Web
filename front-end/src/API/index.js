import axios from 'axios';


export async function getData() {
    let allPosts = [];

    await axios.get(process.env.REACT_APP_API_URL, { headers: { "pass": process.env.REACT_APP_DB_PASSWORD } })
        .then((response) => {
            allPosts = response.data;
        });

    return { allPosts };
};
