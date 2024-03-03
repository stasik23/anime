document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('body');
    const dislikeButton = document.getElementById('dislike');

    dislikeButton.addEventListener('click', () => {
        body.style.backgroundImage = "url('/images/HIDIVE_OSHI_NO_KO_1682155135941_1682155148326.jpeg')";
        body.style.backgroundSize = "cover";
    });
});