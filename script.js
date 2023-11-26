document.addEventListener("DOMContentLoaded", function() {
    const images = [
      "media/Malahat Hajiyeva.jpeg",
      "media/Sardar Ziyatkhanov.JPG",
      "media/Teymur Aliyev.jpeg",
    ];
    let currentImageIndex = 0;
    const sliderImage = document.getElementById("slider-image");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
  
    function updateImage() {
      sliderImage.src = images[currentImageIndex];
      sliderImage.classList.add("fade-in");
      setTimeout(() => {
        sliderImage.classList.remove("fade-in");
      }, 300);
    }
  
    function changeImage(direction) {
      currentImageIndex += direction;
      if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
      } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
      updateImage();
    }
  
    prevButton.addEventListener("click", function() {
      changeImage(-1);
    });
  
    nextButton.addEventListener("click", function() {
      changeImage(1);
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.photo-carousel img');
    let currentImageIndex = 0;
  
    function updateImage() {
      images.forEach((image, index) => {
        if (index === currentImageIndex) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    }
    updateImage();
  });
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.carousel-image');
    let currentImageIndex = 0;
  
    function updateImage() {
      images.forEach((image, index) => {
        if (index === currentImageIndex) {
          image.classList.add('active');
        } else {
          image.classList.remove('active');
        }
      });
    }
  
    document.getElementById('prevButton').addEventListener('click', function() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateImage();
    });
  
    document.getElementById('nextButton').addEventListener('click', function() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateImage();
    });
    updateImage();
  });
