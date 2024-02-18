document.addEventListener("DOMContentLoaded", function () {
  // Function to handle image scaling on hover
  function handleImageHover(event) {
    const targetImage = event.target;

    if (targetImage.tagName === "IMG") {
      targetImage.style.transform = "scale(1.1)";
    }
  }

  // Function to handle image scaling on hover end
  function handleImageHoverEnd(event) {
    const targetImage = event.target;

    if (targetImage.tagName === "IMG") {
      targetImage.style.transform = "scale(1)";
    }
  }

  // Attach event listeners to gallery images
  const galleryImages = document.querySelectorAll(".gallery-section img");

  galleryImages.forEach((image) => {
    image.addEventListener("mouseenter", handleImageHover);
    image.addEventListener("mouseleave", handleImageHoverEnd);
  });

  // Function to handle confetti animation
  function triggerConfetti() {
    confetti();
  }

  // Attach event listener to the button (add a button in your HTML with the ID "confettiButton")
  const confettiButton = document.getElementById("confettiButton");

  if (confettiButton) {
    confettiButton.addEventListener("click", triggerConfetti);
  }
});
