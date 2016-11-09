init = () => {
  let $objects = Array.from(document.querySelectorAll('.object'));

  window.addEventListener('keydown',(e)=>{
    if (e.keyCode === 40) {
      makeError();
    } else if (e.keyCode === 38 || e.keyCode === 39 || e.keyCode === 37) {
      succesHandler(e.keyCode, $objects);
    }
  });

}

makeError = () =>{
  console.log('ERROR');
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
    $foundHandler.classList.remove('not-found');
    $foundHandler.classList.add('found');
    $foundHandler.innerHTML = "v";

}

init();
