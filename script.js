document.addEventListener("DOMContentLoaded", function() {
    fetchCommitInfo();
});

function fetchCommitInfo() {
    const repoOwner = "oferguez"; // Replace with your GitHub username
    const repoName = "Pick-A-Card"; // Replace with your repository name

    fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`)
        .then(response => response.json())
        .then(data => {
            const latestCommit = data[0];
            const commitHash = latestCommit.sha;
            const commitDate = new Date(latestCommit.commit.author.date).toLocaleString();
            
            document.getElementById("commitInfo").textContent = `Latest Commit: ${commitHash} at ${commitDate}`;
        })
        .catch(error => {
            console.error("Error fetching commit info:", error);
            document.getElementById("commitInfo").textContent = "Error fetching commit info";
        });
}



const images = [
'IMG_2023-11-04-072527.jpeg',
'IMG_2023-11-04-072824.jpeg',
''
];

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];
    
    const imageElement = document.getElementById('randomImage');
    //alert(imageUrl);
    imageElement.src = imageUrl;
    imageElement.style.display = 'block';
}
