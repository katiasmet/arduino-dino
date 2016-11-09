init = () => {

  window.addEventListener('keydown',(e)=>{
    if (e.keyCode === 40) {
      makeError();
    }

    if (e.keyCode === 38) {
      success1();
    }

    if (e.keyCode === 39) {
      success2();
    }

    if (e.keyCode === 37) {
      success3();
    }
  });

}

makeError = () =>{
  let sound = document.querySelector('.dead');
  sound.play();
}

success1 = () =>{
  let sound = document.querySelector('.good1');
  sound.play();
}

success2 = () =>{
  let sound = document.querySelector('.good1');
  sound.play();
  console.log('tweede is goed');
}

success3 = () =>{
  let sound = document.querySelector('.good1');
  sound.play();
}

init();
