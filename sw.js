importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {

	workbox.precaching.precacheAndRoute([{"revision":"b6d99193ad6de161f5b877740e9e9bb0","url":"dist/bundle.js"},{"revision":"bd2b8dbcea07acb647dee34fb64204ba","url":"dist/main.css"}]);//End precache

	workbox.googleAnalytics.initialize({
		parameterOverrides: {
			cd1: "Offline"
		}
	});

	//Ignore preview and admin files
	workbox.routing.registerRoute(
	  /wp-admin(.*)|(.*)preview=true(.*)|(.*)\/plugins\/(.*)/,
	  new workbox.strategies.NetworkOnly()
	);

	//Stale while revalidate for js and css that are not in precache
	workbox.routing.registerRoute(
	  /\.(?:js|css)$/,
	  new workbox.strategies.StaleWhileRevalidate()
	);

	//Limit to 50 images in cache
	workbox.routing.registerRoute(
	  /\.(?:png|jpg|svg|gif|webp)(.*)$/,
	  new workbox.strategies.CacheFirst({
	    cacheName: 'images-cache',
	    cacheExpiration: {
	      maxEntries: 50
	    }
	  })
	);

	//Cache wp pages
	workbox.routing.registerRoute(
	  new RegExp('/(.*)/'),
	  new workbox.strategies.NetworkFirst({
	    cacheName: 'pages-cache',
	    plugins: [
				new workbox.expiration.ExpirationPlugin({
					maxEntries: 20,
					maxAgeSeconds: 60 * 60 * 24
				}),
	      new workbox.cacheableResponse.CacheableResponsePlugin({
	        statuses: [0, 200]
	      })
	    ]
	  })
	);

}
