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
  console.log('ERROR');
}

success1 = () =>{
  console.log('eerste is goed');
}

success2 = () =>{
  console.log('tweede is goed');
}

success3 = () =>{
  console.log('derde is goed');
}

init();
