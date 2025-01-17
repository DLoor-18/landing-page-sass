
const videos = document.querySelectorAll('.section-swap__container__step video');

function syncVideos() {
    videos.forEach((video) => {
    const vid = video as HTMLVideoElement;
    vid.currentTime = 0;
    vid.play();
    });
}
 
window.addEventListener('load', syncVideos);