document.addEventListener('DOMContentLoaded', () => {
  document.getElementsByTagName('body')[0].style.overflowX = "hidden";

  function applyZoom() {
    const vpTags = document.getElementsByClassName('yotako-main');
    let closest;

    for (let vp of vpTags) {
      if (vp.offsetParent) {
        vp.classList.forEach(c => {
          if (c.includes('size_')) {
            closest = c.split('_')[1];
          }
        });
      }
    }

    const zoom = window.innerWidth / closest;
    // Apply zoom after loop
    if (!isNaN(zoom)) {
      for (let vp of vpTags) {
        if (vp.offsetParent) {
          vp.parentElement.style.zoom = zoom;
        }
      }
    }
  }

  window.onresize = applyZoom;
  // Reduce the delay to a lower value (e.g., 10 milliseconds)
  setTimeout(applyZoom, 1);
});
