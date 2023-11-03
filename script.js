const images = [
    './IMG_8614.jpeg',
    './IMG_8731.jpeg',
    './IMG_8810.jpeg'
    // ... add paths to other images
];

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];
    
    const imageElement = document.getElementById('randomImage');
    alert(imageUrl);
    imageElement.src = imageUrl;
    imageElement.style.display = 'block';
}
