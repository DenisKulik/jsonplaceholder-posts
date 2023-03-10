import { useEffect, useState } from 'react';
import Post from './Post';

export default function Posts() {
    const [ posts, setPosts ] = useState([]);
    const [ error, setError ] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts))
        .catch((error) => setError(error.message));
    }, []);

    if (error) return <h1>Error: {error}</h1>;

    return (
        <div>
            {posts.map((post) => {
                return <Post key={post.id} {...post}/>;
            })}
        </div>
    );
}
