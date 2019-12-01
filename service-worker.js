importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([]);

  workbox.routing.registerRoute(
	  new RegExp('/(.*)/'),
	  new workbox.strategies.NetworkFirst({
	    cacheName: 'pages-cache',
	    plugins: [
				new workbox.expiration.Plugin({
					maxEntries: 5,
					maxAgeSeconds: 60 * 60 * 24
				}),
	      new workbox.cacheableResponse.Plugin({
	        statuses: [0, 200]
	      })
	    ]
	  })
	);
}
