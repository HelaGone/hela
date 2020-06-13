document.addEventListener('DOMContentLoaded', event => {
  let displayMode = 'browser tab';
  let deferredPrompt;
  if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js').then(registration => {
    }, error => {
      console.error(error);
    })
  }

  window.addEventListener('beforeinstallprompt', (e)=>{
    e.preventDefault();
    deferredPrompt = e;
    // console.log("event: ", e);
  });

  window.addEventListener('appinstalled', (e) =>{
    // console.log("[INSTALL]: Success", );
    gtag('event', 'app_install', {
			'event_category': 'pwa',
			'event_label': 'install',
			'value': 'true'
		});
  });

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

  // console.log("[DISPLAY_MODE]: ", displayMode);

  gtag('event', 'display_mode', {
    'event_category': 'pwa',
    'event_label': 'display',
    'value': displayMode
  });

  let btnDownload = document.getElementById('btn_download');
  btnDownload.addEventListener('click', (e) => {
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
    })
  });

});
