if (document.documentElement.scrollTop > 0)
  document.getElementsByClassName("skeleton-container")[0].remove();

window.onload = () => {
  document.body.style.overflow = "initial";
  document.body.style.height = "initial";
};
