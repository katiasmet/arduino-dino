init = () => {
  let $objects = Array.from(document.querySelectorAll('.object'));

  window.addEventListener('keydown',(e)=>{
    if (e.keyCode === 40) {
      makeError($objects);
    } else if (e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 37) {
      succesHandler(e.keyCode, $objects);
    }
  });

}

makeError = (d) =>{
  let sound = document.querySelector('.dead');
  sound.play();
  for (var i = 0; i < d.length; i++) {
    let $foundHandler = d[i].querySelector('.found');
    if ($foundHandler) {
      $foundHandler.classList.remove('found');
      $foundHandler.classList.add('not-found');
      $foundHandler.innerHTML = "x";
    }
  }
}

succesHandler = (platform, $objects) => {
    let i;

    switch (platform) {
      case 38:
        i = 0;
        break;
      case 39:
        i = 1;
        break;
      case 37:
        i = 2;
        break;
    }

    let $foundHandler = $objects[i].querySelector('.not-found');

    if ($foundHandler) {
      $foundHandler.classList.remove('not-found');
      $foundHandler.classList.add('found');
      $foundHandler.innerHTML = "v";
      let sound = document.querySelector('.good1');
      sound.play();
    }

    if ($objects[0].querySelector('.found') && $objects[1].querySelector('.found') && $objects[2].querySelector('.found')) {
      let sound = document.querySelector('.allgood');
      sound.play();
    }
}

init();
