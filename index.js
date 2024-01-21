let grayscaleEnabled = false;

function generateRandomImages() {
    
    const imageWidth = 400;
    const imageHeight = 300;

    document.querySelectorAll('.random-image').forEach((imageElement) => {
        
        const randomVersion = Math.floor(Math.random() * 1000);

        const imageUrl = `https://picsum.photos/${imageWidth}/${imageHeight}?v=${randomVersion}`;

       
        imageElement.src = imageUrl;

        
        imageElement.style.filter = 'grayscale(0)';
    });

    grayscaleEnabled = false;
}

function toggleGrayscale() {
    const imageElements = document.querySelectorAll('.random-image');

    grayscaleEnabled = !grayscaleEnabled;
    imageElements.forEach((imageElement) => {
        imageElement.style.filter = grayscaleEnabled ? 'grayscale(1)' : 'grayscale(0)';
    });
}
