class StarfieldAnimatorAnimator {
  starsContainer;

  constructor() {
    this.starsContainer = document.querySelector('.stars-container');

    this.handleStarsCreation();
  }

  handleStarsCreation = () => {
    const delay = (Math.random() * 5) + 40;

    setTimeout(() => {
      this.createStar();

      this.handleStarsCreation();
    }, delay);
  }

  createStar = () => {
    const size = (Math.random() * 4) + 2;
    const time = (Math.random() * 3000) + 800;
    const top = (Math.random() * 100);

    const star = document.createElement('span');
    star.classList.add('star');

    star.style.height = `${size}px`;
    star.style.width = `${size}px`;
    star.style.top = `${top}%`;

    setTimeout(() => {
      star.style.transition = `transform ${time}ms linear`;
      star.style.transform = `translateX(0)`;

      star.addEventListener('transitionend', () => star.remove());
    }, 100);

    this.starsContainer.appendChild(star);
  }
}

document.starfieldAnimatorAnimator = new StarfieldAnimatorAnimator();