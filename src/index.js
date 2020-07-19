import './style.css';

document.addEventListener('DOMContentLoaded', event => {
  let displayMode = 'browser tab';
  let deferredPrompt;
  let btnDownload = document.getElementById('btn_download');
  btnDownload.style.display = 'none';

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

    btnDownload.style.display = 'inline-block';

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
  if(navigator.standalone){
    displayMode = 'standalone-ios';
  }
  if(window.matchMedia('(display-mode: standalone)').matches){
    displayMode = 'standalone';
  }

  window.matchMedia('(display-mode: standalone)').addListener((e) => {
    if(e.matches){
      displayMode = 'standalone';
    }
  })

  //SEND DISPLAY MODE DATA TO GA
  gtag('event', 'display_mode', {
    'event_category': 'pwa',
    'event_label': 'display',
    'value': displayMode
  });


});
