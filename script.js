// Sample article data (in a real scenario, this might come from a file or database)
const articles = [
    {
        id: 1,
        title: "Album Review: Melody Echo Chamber - Emotional Eternal",
        summary: "A dreamy and psychedelic journey through soundscapes...",
        link: "article.html?id=1",
        image: "emotional_eternal.jpg", // Replace with actual image path
        content: `
            <h2>Melody Echo Chamber - Emotional Eternal Review</h2>
            <img src="emotional_eternal.jpg" alt="Emotional Eternal Album Art" class="album-art">
            <p>Emotional Eternal, the latest offering from Melody Echo Chamber, is a mesmerizing collection of songs that weave a tapestry of dreamy psychedelia and delicate melodies...</p>
            <p>You can listen to the album <a href="[link to album]" target="_blank">here</a>.</p>
            `
    },
    {
        id: 2,
        title: "New Release: Khruangbin & Men I Trust - совместный альбом?",
        summary: "An intriguing collaboration that blends their signature sounds...",
        link: "article.html?id=2",
        image: "khruangbin_men_i_trust.jpg", // Replace with actual image path
        content: `
            <h2>Khruangbin & Men I Trust - совместный альбом? Review</h2>
            <img src="khruangbin_men_i_trust.jpg" alt="Khruangbin & Men I Trust Album Art" class="album-art">
            <p>The rumored collaboration between Khruangbin and Men I Trust has finally arrived, and it's a fascinating blend of their distinct musical styles...</p>
            <p>Check out their music <a href="[link to their music]" target="_blank">here</a>.</p>
            `
    }
    // Add more articles here
];

// Function to display the list of articles on the homepage
function displayArticleList() {
    const articleListSection = document.getElementById('article-list');
    if (articleListSection) {
        articles.forEach(article => {
            const articleSummary = document.createElement('div');
            articleSummary.classList.add('article-summary');
            articleSummary.innerHTML = `
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <a href="${article.link}" class="read-more" data-article-id="${article.id}">Read More</a>
            `;
            articleListSection.appendChild(articleSummary);
        });
    }
}

// Function to display a specific article on the article page
function displayArticle() {
    const articleContentSection = document.getElementById('article-content');
    if (articleContentSection) {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = parseInt(urlParams.get('id'));
        const article = articles.find(a => a.id === articleId);

        if (article) {
            articleContentSection.innerHTML = article.content;
        } else {
            articleContentSection.innerHTML = `<p>Article not found.</p>`;
        }
    }
}

// Check which page we are on and call the appropriate function
if (document.getElementById('article-list')) {
    displayArticleList();
} else if (document.getElementById('article-content')) {
    displayArticle();
}