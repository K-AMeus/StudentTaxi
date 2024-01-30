document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const postData = {
        nimi: document.getElementById('nimi').value,
        teekond: document.getElementById('teekond').value,
        kuupäev: document.getElementById('kuupäev').value,
        kellaaeg: document.getElementById('kellaaeg').value
    };

    // Determine if it's a new post or an update based on some logic
    const isNewPost = /* some logic to determine */;

    const url = 'http://localhost:8080/postitused' + (isNewPost ? '' : `/${postData.nimi}`);
    const method = isNewPost ? 'POST' : 'PUT';

    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Refresh the list of posts or provide feedback
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// Function to fetch and display posts
function loadPosts() {
    fetch('http://localhost:8080/postitused')
    .then(response => response.json())
    .then(data => {
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.innerHTML = ''; // Clear existing posts
        data.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h3>${post.nimi}</h3>
                <p>Path: ${post.teekond}</p>
                <p>Date: ${post.kuupäev}</p>
                <p>Time: ${post.kellaaeg}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    });
}

// Load posts when the page loads
window.onload = loadPosts;
