import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const PostitusList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios.get('/postitused')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
            });
    };

    const handleDelete = (nimi) => {
        // Axios DELETE request
        axios.delete(`http://localhost:8080/postitused/${nimi}`)
            .then(() => {
                // Filter out the deleted post from the local state to update the UI
                setPosts(posts.filter(post => post.nimi !== nimi));
            })
            .catch(error => {
                console.error("Failed to delete the post:", error);
            });
    };




    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>Trips</h2>
            <button
                className={styles.button}
                onClick={() => { window.location.href='http://localhost:3000/Add'; }}
            >
                Add Trip
            </button>
            <ul className={styles.list}>
                {posts.map((post) => (
                    <li key={post.nimi} className={styles.listItem}>
                        {post.nimi} - {post.teekond} - {post.kuupäev} - {post.kellaaeg}
                        <button onClick={() => handleDelete(post.nimi)} className={styles.deleteButton}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    );
};

export default PostitusList;
