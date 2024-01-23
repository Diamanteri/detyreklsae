const photoContainer = document.getElementById("photoContainer");
const toggleSwitch = document.getElementById("toggleSwitch");
const loadMoreBtn = document.getElementById("loadMoreBtn");

async function fetchPhoto(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch photo");
    }
    const photoUrl = response.url;
    return photoUrl;
  } catch (error) {
    console.error(error);
  }
}

async function fetchAndDisplayPhotos() {
  photoContainer.innerHTML = "";

  try {
    for (let i = 0; i < 4; i++) {
      const photoUrl = await fetchPhoto("https://picsum.photos/367/367");
      const img = document.createElement("img");
      img.src = photoUrl;
      img.alt = "Random Photo";
      photoContainer.appendChild(img);
    }
  } catch (error) {
    console.error(error);
  }
}

function applyGrayscale() {
  const images = photoContainer.querySelectorAll("img");
  images.forEach((img) => {
    if (toggleSwitch.checked) {
      img.classList.add("grayscale");
    } else {
      img.classList.remove("grayscale");
    }
  });
}

fetchAndDisplayPhotos();
toggleSwitch.addEventListener("click", applyGrayscale);
loadMoreBtn.addEventListener("click", fetchAndDisplayPhotos);
