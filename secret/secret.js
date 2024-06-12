let count = 0;

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn');
    button.addEventListener('click', () => {
        count++;
        if (count >= 5) {
            window.location.href = 'secret/secret.html';
        }
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  });
