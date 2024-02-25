import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './PostitusList.module.css'; // Import the CSS module

const PostitusList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/postitused')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setPosts(response.data);
                } else {
                    console.error("Expected an array for posts, received:", response.data);
                    setPosts([]);
                }
            })
            .catch(error => {
                console.log(error);
                setPosts([]);
            });
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Postitused</h2>
            <button className={styles.button}>Add trip</button>
            <ul className={styles.list}>
                {posts.map(post => (
                    <li key={post.nimi} className={styles.listItem}>
                        {post.nimi} - {post.teekond} - {post.kellaaeg} - {post.kuupäev}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostitusList;
