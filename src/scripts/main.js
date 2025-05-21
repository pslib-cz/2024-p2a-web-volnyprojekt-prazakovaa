import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

document.addEventListener('DOMContentLoaded', () => {
  const galleryEl = document.getElementById('lightgallery1');

  lightGallery(galleryEl, {
    selector: 'a',
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const galleryEl = document.getElementById('lightgallery2');

  lightGallery(galleryEl, {
    selector: 'a',
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const galleryEl = document.getElementById('lightgallery3');

  lightGallery(galleryEl, {
    selector: 'a',
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
  });
});