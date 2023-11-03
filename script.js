const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    // ... add paths to other images
];

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];
    
    const imageElement = document.getElementById('randomImage');
    imageElement.src = imageUrl;
    imageElement.style.display = 'block';
}
