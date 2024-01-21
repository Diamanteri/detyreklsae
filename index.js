let grayscaleEnabled = false;

function generateRandomImages() {
    // Set the desired width and height for the random images
    const imageWidth = 400;
    const imageHeight = 300;

    // Loop through each image in the grid
    document.querySelectorAll('.random-image').forEach((imageElement) => {
        // Generate a random number to force image reload (avoid browser caching)
        const randomVersion = Math.floor(Math.random() * 1000);

        // Construct the image URL with the random version
        const imageUrl = `https://picsum.photos/${imageWidth}/${imageHeight}?v=${randomVersion}`;

        // Set the image source to the generated URL
        imageElement.src = imageUrl;

        // Reset grayscale effect
        imageElement.style.filter = 'grayscale(0)';
    });

    grayscaleEnabled = false;
}

function toggleGrayscale() {
    const imageElements = document.querySelectorAll('.random-image');

    // Toggle grayscale effect for each image
    grayscaleEnabled = !grayscaleEnabled;
    imageElements.forEach((imageElement) => {
        imageElement.style.filter = grayscaleEnabled ? 'grayscale(1)' : 'grayscale(0)';
    });
}
