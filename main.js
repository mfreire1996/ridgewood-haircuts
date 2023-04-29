window.addEventListener('scroll', () => {
    let about = document.getElementsByClassName('about');
    let position = element.getBoundingClientRect();

    if (position.top <= 0) {
        element.classList.add('fadeInLeft')
    } else {
        element.classList.remove('fadeInLeft')
    }
})


window.addEventListener('scroll', function() {
    var element = document.querySelector('.blur-section');
    var position = element.getBoundingClientRect();
  
    // If the section is in view, remove the blur effect
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
      element.classList.remove('blur');
    }
    // If the section is out of view, add the blur effect
    else {
      element.classList.add('blur');
    }
  });

  