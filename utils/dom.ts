// scroll to top
export function scrollToTop() {
  var position = document.body.scrollTop || document.documentElement.scrollTop;
  let scrollAnimation;
  if (position) {
    window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
    scrollAnimation = setTimeout(scrollToTop, 10);
  } else {
    clearTimeout(scrollAnimation);
  }
}
