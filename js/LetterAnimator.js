class LetterAnimator {
  constructor() {
    if (document.movementComposer === undefined || document.movementComposer instanceof MovementComposer === false) {
      throw new Error('Unable to execute script without MovementComposer class.');
    }

    this.createLogo();

    this.handleLettersJump();
  }

  createLogo = () => {
    const logo = document.querySelector('.logo');

    const content = logo.getAttribute('letters');

    content.split('').forEach(letter => {
      const letterElement = document.createElement('span')
      letterElement.classList.add('letter')
      letterElement.innerHTML = letter;

      document.movementComposer.register(letterElement);

      logo.appendChild(letterElement);
    });

    document.movementComposer.apply(element => {
      element.classList.add('letter--visible')
    }, 40);
  };

  makeLettersJump = () => {
    const distance = (Math.random() * 60) + 20;
    const direction = Math.random() > 0.5 ? 1 : -1;
    const time = (Math.random() * 200) + 150;

    document.movementComposer.apply(element => {
      element.style.transform = `translateY(${direction * distance}px)`;

      setTimeout(function() {
        element.style.transform = 'translateY(0)';
      }, time);
    }, 50, true);
  };

  handleLettersJump = () => {
    const delay = (Math.random() * 6000) + 2000;

    setTimeout(() => {
      this.makeLettersJump();

      this.handleLettersJump();
    }, delay);
  }
}

new LetterAnimator();