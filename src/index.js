import './style.css';

document.addEventListener('DOMContentLoaded', event => {
  let displayMode = 'browser';
  let deferredPrompt;
  let btnDownload = document.getElementById('btn_download');
  btnDownload.style.visibility = 'hidden';

  //INSTALL SERVICE WORKER
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js').then(registration => {
    }, error => {
      console.error(error);
    })
  }

  const updateOnlineStatus = (event) => {
    let condition = navigator.onLine ? 'online' : 'offline';
    //console.log(condition);
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);

  //ADD 2 HOME SCREEN LOGIC
  window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    deferredPrompt = e;

    btnDownload.style.visibility = 'visible';

    btnDownload.addEventListener('click', (e) => {
      //hide button
      btnDownload.style.display = 'none';
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choice) => {
        if(choice.outcome === 'accepted'){
          gtag('event', 'accepted', {
            'event_category': 'pwa',
            'event_label': 'accept',
            'value': 'true'
          });
        }else{
          gtag('event', 'dismissed', {
            'event_category': 'pwa',
            'event_label': 'dismiss',
            'value': 'true'
          });
        }
        deferredPrompt = null;
      })
    });

  });

  //CHECK FOR APP INSTALLATIONS
  window.addEventListener('appinstalled', (e) =>{
    gtag('event', 'app_install', {
			'event_category': 'pwa',
			'event_label': 'install',
			'value': 'true'
		});
  });

  //CHECKS FOR DISPLAY MODE
  const isStandAlone = '(display-mode: standalone)';
  if(navigator.standalone || window.matchMedia(isStandAlone).matches){
    displayMode = 'standalone';
  }
  //SEND DISPLAY MODE AS DIMENTION
  gtag('set', 'dimension2', displayMode);

  /*------------------------------------------------------------------------------------------
                              ||| INTERSECTION OBSERVER |||
  ------------------------------------------------------------------------------------------*/
  const observed_header = document.getElementById('main_header');
  const main_menu = document.getElementById('_main_menu');
  const menu_button = document.getElementById('menu_btn');
  let prevRatio = 0.0;

  let options = {
    root: null,
    rootMargin:'0px',
    threshold:[0]
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.intersectionRatio > prevRatio){
        // console.log("First",entry);
        main_menu.style.position = 'absolute';
        main_menu.style.top = '62px';

        // menu_button.style.position ='absolute';
        // menu_button.style.right ='16px';
        menu_button.classList.remove("switch_color");
      }else{
        // console.log("Second",entry);
        main_menu.style.position = 'fixed';
        main_menu.style.top = '0';

        // menu_button.style.position ='fixed';
        // menu_button.style.right ='16px';
        menu_button.classList.add("switch_color");
      }

      prevRatio = entry.intersectionRatio;
    });
  }, options);

  observer.observe(observed_header);


});
