import staticPosts from './data/posts.json';

const SIMULATION = true;

const getPostsAsync = async ondataRetrived => {

    let posts = [];

    if(SIMULATION){ //local date
        posts = staticPosts;


    }else{
        
        const raw = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await raw.json();

        posts = data;
    }

    ondataRetrived(posts);
}


export default getPostsAsync;

