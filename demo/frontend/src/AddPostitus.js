import React, { useState } from 'react';
import axios from 'axios';

const AddPostitus = () => {
    const [post, setPost] = useState({ nimi: '', teekond: '', kuupäev: '', kellaaeg: '' });

    const handleChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/postitused', post)
            .then(response => {
                console.log(response.data);
                // Optionally clear form or give user feedback
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nimi:
                <input type="text" name="nimi" value={post.nimi} onChange={handleChange} />
            </label>
            <label>
                Teekond:
                <input type="text" name="teekond" value={post.teekond} onChange={handleChange} />
            </label>
            <label>
                Kuupäev:
                <input type="text" name="kuupäev" value={post.kuupäev} onChange={handleChange} />
            </label>
            <label>
                Kellaaeg:
                <input type="text" name="kellaaeg" value={post.kellaaeg} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddPostitus;
