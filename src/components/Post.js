import './Post.css';

export default function Post(props) {
    const { id, userId, title, body } = props;
    return (
        <div className="post">
            <span>{id}</span>
            <h1>{title}</h1>
            <small>User ID: {userId}</small>
            <p>{body}</p>
        </div>
    );
}