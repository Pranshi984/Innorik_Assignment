// Sample data (replace with real data)
const newsData = [
    { title: "Tech News 1", category: "technology" },
    { title: "Sports News 1", category: "sports" },
    { title: "Politics News 1", category: "politics" },
    { title: "Health News 1", category: "health" },
    // Add more news articles here
];

const savedArticles = [];
let savedInterests = [];

// DOM elements
const homeLink = document.getElementById("home-link");
const profileLink = document.getElementById("profile-link");
const savedArticlesLink = document.getElementById("saved-articles-link");
const logoutLink = document.getElementById("logout-link");
const newsFeed = document.getElementById("news-feed");
const interestsForm = document.getElementById("interests-form");
const interestsSelect = document.getElementById("interests");
const savedArticlesList = document.getElementById("saved-articles-list");

// Event listeners
homeLink.addEventListener("click", showHomePage);
profileLink.addEventListener("click", showProfilePage);
savedArticlesLink.addEventListener("click", showSavedArticlesPage);
logoutLink.addEventListener("click", logoutUser);
interestsForm.addEventListener("submit", saveInterests);

// Initialize: Show home page by default
showHomePage();

// Functions to display different sections
function showHomePage() {
    hideAllSections();
    homeLink.classList.add("active");
    newsFeed.innerHTML = ""; // Clear previous content
    newsData.forEach(article => {
        if (savedInterests.includes(article.category)) {
            const articleDiv = document.createElement("div");
            articleDiv.classList.add("article");
            articleDiv.innerHTML = `<h3>${article.title}</h3>`;
            const saveButton = document.createElement("button");
            saveButton.textContent = "Save";
            saveButton.addEventListener("click", () => saveArticle(article));
            articleDiv.appendChild(saveButton);
            newsFeed.appendChild(articleDiv);
        }
    });
    document.getElementById("home-section").style.display = "block";
}

function showProfilePage() {
    hideAllSections();
    profileLink.classList.add("active");
    interestsSelect.value = savedInterests.join(",");
    document.getElementById("profile-section").style.display = "block";
}

function showSavedArticlesPage() {
    hideAllSections();
    savedArticlesLink.classList.add("active");
    savedArticlesList.innerHTML = ""; // Clear previous content
    savedArticles.forEach(article => {
        const li = document.createElement("li");
        li.textContent = article.title;
        savedArticlesList.appendChild(li);
    });
    document.getElementById("saved-articles-section").style.display = "block";
}

function hideAllSections() {
    homeLink.classList.remove("active");
    profileLink.classList.remove("active");
    savedArticlesLink.classList.remove("active");
    document.getElementById("home-section").style.display = "none";
    document.getElementById("profile-section").style.display = "none";
    document.getElementById("saved-articles-section").style.display = "none";
}

// Functions for user actions
function saveInterests(event) {
    event.preventDefault();
    savedInterests = Array.from(interestsSelect.selectedOptions).map(option => option.value);
    showHomePage();
}

function saveArticle(article) {
    savedArticles.push(article);
    showHomePage();
}

function logoutUser() {
    // Perform logout actions (e.g., clear session)
    // Redirect to the login page
    window.location.href = "login.html"; // Replace with your actual login page URL
}
