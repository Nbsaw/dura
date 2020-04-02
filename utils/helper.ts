export function debounce(callback, wait = 500, immediate = false) {
  let timeout: any = null;

  return function(...args) {
    const callNow = immediate && !timeout;
    const next = () => callback.apply(this, args);

    clearTimeout(timeout);
    timeout = setTimeout(next, wait);

    if (callNow) {
      next();
    }
  };
}
