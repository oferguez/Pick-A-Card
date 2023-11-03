const images = [
    './IMG_8614.jpg',
    './IMG_8731.jpg',
    './IMG_8810.jpg'
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
