export const loadScript = (src) => {
  let scripts = document.querySelectorAll("script");
  let found = false;
  scripts.forEach((script) => {
    if (script.src === src) {
      found = true;
    }
  });
  if (found) {
    return;
  }
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
