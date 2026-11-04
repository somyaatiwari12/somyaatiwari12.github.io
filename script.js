// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Video: swap thumbnail for the player on click.
// Use a YouTube/Vimeo embed URL, or a local file such as "video/intro.mp4".
document.querySelectorAll('.video-frame').forEach(frame => {
  frame.querySelector('.play').addEventListener('click', () => {
    const src = frame.dataset.video;
    let player;
    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(src)) {
      player = document.createElement('video');
      player.src = src; player.controls = true; player.autoplay = true;
    } else {
      player = document.createElement('iframe');
      player.src = src; player.title = 'Video introduction';
      player.allow = 'autoplay; encrypted-media; picture-in-picture';
      player.allowFullscreen = true;
    }
    frame.innerHTML = '';
    frame.appendChild(player);
  });
});

// Hide broken images so the purple gradient placeholder shows until real images are added
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});

document.getElementById('year').textContent = new Date().getFullYear();
.project-links {
    display: flex;
    gap: 10px;
    margin-top: 16px;
    flex-wrap: wrap;
}

.project-links a {
    padding: 8px 14px;
    border: 1px solid currentColor;
    border-radius: 8px;
    font-size: 0.9rem;
    text-decoration: none;
}

.project-links a:hover {
    opacity: 0.7;
}
