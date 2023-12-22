class MovementComposer {
  elements;

  constructor() {
    this.elements = [];
  }

  register = element => {
    this.elements.push(element);
  }

  apply = async (callback, delay = 1000, reverse = true) => {
    let start = 0,
        end = this.elements.length,
        step = 1;

    if (reverse === true) {
      start = this.elements.length - 1;
      end = -1;
      step = -1;
    }

    for (let index = start; index !== end; index = index + step) {
      const element = this.elements[index];

      await new Promise(resolve => {
        setTimeout(() => {
          callback(element);
          resolve();
        }, delay);
      });
    }
  }
}

document.movementComposer = new MovementComposer();