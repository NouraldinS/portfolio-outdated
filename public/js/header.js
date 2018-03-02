function toggleNav() {
  document.querySelector('.nav__sec ul').classList.toggle('active');
  document.querySelector('.resp_icon').classList.toggle('active');
  if (document.documentElement.scrollTop < 36) {
    document.querySelector('.nav').classList.toggle('bold');
  }
}

window.onscroll = function scroll() {
  if (document.documentElement.scrollTop > 35) {
    document.querySelector('.nav').classList.add('bold');
  } else if (!document.querySelector('.resp_icon').classList.contains('active')) {
    document.querySelector('.nav').classList.remove('bold');
  }
};
