import staticPosts from './data/posts.json';

const SIMULATION = true;

const getPostsAsync = async ondataRetrived => {

    let posts = [];

    if(SIMULATION){ //local date
        posts = staticPosts;


    }else{
        //call api 

    }

    ondataRetrived(posts);
}


export default getPostsAsync;

