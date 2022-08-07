const nav = document.querySelector('.navbar-container');
const navContent = document.querySelector('.content-container');
const up = document.querySelector('.up');
window.addEventListener('scroll', getScrollAndUpEl);

function getScrollAndUpEl() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add('active');
    navContent.classList.add('active');
    up.classList.add('show');
  } else {
    nav.classList.remove('active');
    navContent.classList.remove('active');
    up.classList.remove('show');
  }
}

/* https://stackoverflow.com/questions/15935318/smooth-scroll-to-top */

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
};
up.addEventListener('click', scrollToTop);
