import { useEffect, useState } from 'react';
import Post from './Post';

export default function Posts() {
    const [ posts, setPosts ] = useState([]);
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) return <h1>Loading...🔃</h1>;

    if (error) return <h1>Error: {error}</h1>;

    return (
        <div>
            {posts.map((post) => {
                return <Post key={post.id} {...post}/>;
            })}
        </div>
    );
}
