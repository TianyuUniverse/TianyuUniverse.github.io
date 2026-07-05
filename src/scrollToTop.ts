export function scrollToPageTop() {
  const root = document.documentElement;
  const previousBehavior = root.style.scrollBehavior;

  root.classList.add("is-jumping-top");
  root.style.scrollBehavior = "auto";
  root.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
  window.history.replaceState(null, "", "#top");
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      root.style.scrollBehavior = previousBehavior;
      root.classList.remove("is-jumping-top");
    });
  });
}
