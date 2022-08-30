window.onmousedown = function (mouseEvent: MouseEvent) {
  console.log(mouseEvent.button);
  // console.log(mouseEvent.kangaroo);
};

window.onscroll = function (uiEvent: Event) {
  // console.log(uiEvent.button);
};

const handler = function (uiEvent: { button: any }) {
  console.log(uiEvent.button);
};

//////////////////////////////////////

interface Ironman {
  name: string;
}

class Avengers {
  name!: string;
}

let i: Ironman;
i = new Avengers();
