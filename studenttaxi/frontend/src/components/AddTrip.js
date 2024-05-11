import React, { useState } from 'react';
import axios from 'axios';
import styles from '../styles/App.module.css';
import { useNavigate } from 'react-router-dom';


const AddTrip = () => {
    const [post, setPost] = useState({ nimi: '', teekond: '', kuupäev: '', kellaaeg: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!post.nimi || !post.teekond || !post.kuupäev || !post.kellaaeg) {
            alert('Please fill out all fields.');
            return; // Prevent form submission if validation fails
        }

        axios.post('/postitused', post)
            .then(response => {
                // Handle success
                console.log(response.data);
                setPost({ nimi: '', teekond: '', kuupäev: '', kellaaeg: '' }); // Clear the form
                window.location.href = 'http://localhost:3000/'; // Redirect or handle navigation
            })
            .catch(error => {
                // Handle error
                console.error(error);
                alert('An error occurred while adding the postitus.');
            });
    };

    // Function to navigate back
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="nimi" className={styles.label}>Nimi:</label>
                    <input
                        id="nimi"
                        type="text"
                        name="nimi"
                        value={post.nimi}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="teekond" className={styles.label}>Teekond:</label>
                    <input
                        id="teekond"
                        type="text"
                        name="teekond"
                        value={post.teekond}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="kuupäev" className={styles.label}>Kuupäev:</label>
                    <input
                        id="kuupäev"
                        type="text"
                        name="kuupäev"
                        value={post.kuupäev}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="kellaaeg" className={styles.label}>Kellaaeg:</label>
                    <input
                        id="kellaaeg"
                        type="text"
                        name="kellaaeg"
                        value={post.kellaaeg}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>Submit</button>
                <button type="button" className={styles.button} onClick={handleGoBack}>Back</button>
            </form>
        </div>
    );
};

export default AddTrip;
