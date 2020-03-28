window.onload = () => {
  document.querySelector('.pages').style.transform = 'translateX(-' + 0 + 'vw)';
  setTimeout(() => {
    document.querySelector('.animation').classList.remove('not_loaded')
    var burgerButton = document.querySelector('.header_button.burger_button'),
      burgerMenu = document.querySelector('.burger_menu'),
      selectedPage = 0;
    stopped = false;
    var burgerTimeout;
    burgerButton.addEventListener('click', function() {
      burgerButton.classList.toggle('opened');
      burgerMenu.classList.toggle('closed');
      if (burgerMenu.className === 'burger_menu') {
        burgerTimeout = setTimeout(() => {
          document.querySelector('.burger_menu_blocks').style.opacity = 1;
        }, 300);
      } else {
        clearTimeout(burgerTimeout);
        document.querySelector('.burger_menu_blocks').style.opacity = 0;
      }
    })
    window.addEventListener('wheel', function() {
      if (!stopped) {
        document.querySelector('.pages').style.transition = '2s';
        if (event.deltaY > 0 && selectedPage < 4) {
          stopped = true;
          var stoppedTimeout = setTimeout(() => {
            stopped = false;
            document.querySelector('.pages').style.transition = '0s';
          }, 2000);
          selectedPage += 1;
          var x = 100 * selectedPage;
          document.querySelector('.pages').style.transform = 'translateX(-' + x + 'vw)';
        }
        if (event.deltaY < 0 && selectedPage > 0) {
          stopped = true;
          var stoppedTimeout = setTimeout(() => {
            stopped = false;
            document.querySelector('.pages').style.transition = '0s';
          }, 2000);
          selectedPage -= 1;
          var x = 100 * selectedPage;
          document.querySelector('.pages').style.transform = 'translateX(-' + x + 'vw)';
        }

        switch (selectedPage) {
          case 0:
            document.querySelector('.page_1').classList.add('view');
            document.querySelector('.logo').classList.remove('green');
            document.querySelector('.page_2 .headline').style.transform = 'translateX(20vw)';
            break;
          case 1:
            document.querySelector('.page_2').classList.add('view');
            document.querySelector('.logo').classList.add('green');
            document.querySelector('.page_2 .leaves').classList.add('view');
            document.querySelector('.page_2 .headline').style.transform = 'translateX(0vw)';
            document.querySelector('.page_3 .headline').style.transform = 'translateX(20vw)';
            break;
          case 2:
            document.querySelector('.page_3 .leaves').classList.add('view');
            document.querySelector('.page_2 .headline').style.transform = 'translateX(-20vw)';
            document.querySelector('.page_3 .headline').style.transform = 'translateX(0vw)';
            break;
          case 3:
            document.querySelector('.page_3 .headline').style.transform = 'translateX(-20vw)';
            document.querySelector('.page_5 .headline').style.transform = 'translateX(20vw)';
            break;
          case 4:
            document.querySelector('.page_5 .leaves').classList.add('view');
            document.querySelector('.page_5 .headline').style.transform = 'translateX(0vw)';
            break;
        }
        if (selectedPage !== 4) {
          document.querySelector('.page_5 .leaves').classList.remove('view');
        }
        if (selectedPage !== 2) {
          document.querySelector('.page_3 .leaves').classList.remove('view');
          document.querySelector('.greenfield_autumn').classList.remove('greenfield_autumn_animation');
        }
        if (selectedPage !== 1) {
          document.querySelector('.page_2 .leaves').classList.remove('view');
          document.querySelector('.page_2').classList.remove('view');
        }
        if (selectedPage !== 0) {
          document.querySelector('.page_1').classList.remove('view');
        }
      }
    })
    var touchX = 0;
    window.addEventListener('touchstart', function() {
      touchX = event.touches[0].screenX
    })
    window.addEventListener('touchmove', function() {
      if (!stopped) {
        document.querySelector('.pages').style.transition = '2s';
        stopped = true;
        var stoppedTimeout = setTimeout(() => {
          stopped = false;
          document.querySelector('.pages').style.transition = '0s';
        }, 2000);
        if (event.touches[0].screenX - touchX < 0 && selectedPage < 4) {
          selectedPage += 1;
        }
        if (event.touches[0].screenX - touchX > 0 && selectedPage > 0) {
          selectedPage -= 1;
        }
        var x = 100 * selectedPage;
        document.querySelector('.pages').style.transform = 'translateX(-' + x + 'vw)';
        if (selectedPage >= 1) {
          document.querySelector('.logo').classList.add('green');
        }
        if (selectedPage === 1) {
          document.querySelector('.page_2 .leaves').classList.add('view');
        }
        if (selectedPage === 2) {
          document.querySelector('.page_3 .leaves').classList.add('view');
          document.querySelector('.greenfield_autumn').classList.add('greenfield_autumn_animation');
        }
        if (selectedPage === 4) {
          document.querySelector('.page_5 .leaves').classList.add('view');
        }
        if (selectedPage !== 4) {
          document.querySelector('.page_5 .leaves').classList.remove('view');
        }
        if (selectedPage !== 2) {
          document.querySelector('.page_3 .leaves').classList.remove('view');
          document.querySelector('.greenfield_autumn').classList.remove('greenfield_autumn_animation');
        }
        if (selectedPage !== 1) {
          document.querySelector('.page_2 .leaves').classList.remove('view');
        }
        if (selectedPage < 1) {
          document.querySelector('.logo').classList.remove('green');
        }
      }
    })
    window.addEventListener('mousemove', function() {
      if (selectedPage === 0) {
        document.querySelector('.fog').style.transform = 'translate(-' + event.pageX / 1000 + 'px,-' + event.pageY / 1000 + 'px)'
      }
      if (selectedPage === 1) {
        document.querySelector('.page_2 .leaves').style.transform = 'translate(-' + event.pageX / 100 + 'px,-' + event.pageY / 100 + 'px)'
      }
      if (selectedPage === 2) {
        document.querySelector('.page_3 .leaves').style.transform = 'translate(-' + event.pageX / 100 + 'px,-' + event.pageY / 100 + 'px)'
      }
      if (selectedPage === 4) {
        document.querySelector('.page_5 .leaves').style.transform = 'translate(-' + event.pageX / 100 + 'px,-' + event.pageY / 100 + 'px)'
      }
    })
  }, 1000);
}