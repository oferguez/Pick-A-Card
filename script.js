const images = [
'IMG_2023-11-04-072527.jpeg',
'IMG_2023-11-04-072824.jpeg',
'IMG_2499.jpeg'
];

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];
    
    const imageElement = document.getElementById('randomImage');
    alert(imageUrl);
    imageElement.src = imageUrl;
    imageElement.style.display = 'block';
}
