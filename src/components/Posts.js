import { useEffect, useState } from 'react';
import Post from './Post';

export default function Posts() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts))
        .catch((err) => console.log(err.message));
    }, []);

    return (
        <div>
            {posts.map((post) => {
                return <Post key={post.id} {...post}/>;
            })}
        </div>
    );
}
