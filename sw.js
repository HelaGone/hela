importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox) {
  workbox.precaching.precacheAndRoute([
  {
    "url": "assets/ai_logo.png",
    "revision": "72cbb0590d09474b735db44ad7187ae6"
  },
  {
    "url": "assets/android_logo.png",
    "revision": "3c1c711738b4eed6a307b98fd204f24f"
  },
  {
    "url": "assets/css_logo.png",
    "revision": "cf44128765edee305450ff42e4cfbc85"
  },
  {
    "url": "assets/cymatic.jpg",
    "revision": "f805f138a19a2253aad29d1c24314792"
  },
  {
    "url": "assets/html_logo.png",
    "revision": "f57008f860bf5192f4d9003c5577c469"
  },
  {
    "url": "assets/icon/192.png",
    "revision": "b3e620879e11082a6935d7ffe3b183d1"
  },
  {
    "url": "assets/icon/512.png",
    "revision": "d7a690fee5efa2cbd9d340df57573d23"
  },
  {
    "url": "assets/java_logo.png",
    "revision": "d894aa4082094d96729ce9423c0474cb"
  },
  {
    "url": "assets/jquery_logo.png",
    "revision": "78e65a1b03adee8976c6b20a724ff167"
  },
  {
    "url": "assets/js_logo.png",
    "revision": "85ba500d49f051f32405f289c18cc8fe"
  },
  {
    "url": "assets/lang.png",
    "revision": "7b71b2b8f95520e50a128c0c717bf318"
  },
  {
    "url": "assets/node_logo.png",
    "revision": "c45b9423e7cd86f7a616ba25744ffb97"
  },
  {
    "url": "assets/php_logo.png",
    "revision": "0f70fff669352f75d33d4f0f64e90d3c"
  },
  {
    "url": "assets/react_logo.png",
    "revision": "d5f5ab71a89e00b8393afc5584b616d4"
  },
  {
    "url": "assets/sql_logo.png",
    "revision": "bd733487fb83f3963db9f759fbb4ec18"
  },
  {
    "url": "assets/web/desigualdad.png",
    "revision": "618ea59d282c2a879b8a68611774b73d"
  },
  {
    "url": "assets/web/nofm.png",
    "revision": "d5b24b8c2189f4b8822644b945c5dd28"
  },
  {
    "url": "assets/web/radio_app.png",
    "revision": "c30f7b0dcfc022fd66774b24a9f0c7a5"
  },
  {
    "url": "assets/web/waves_d.png",
    "revision": "81a2e0d503d4b5c098f968ef7c1c3a06"
  },
  {
    "url": "assets/webpack_logo.png",
    "revision": "cab34ef59c120e51a7c0b320b976bc64"
  },
  {
    "url": "assets/wp_logo.png",
    "revision": "5f730a4459c5defcbbbd9103c818acfb"
  },
  {
    "url": "assets/xd_logo.png",
    "revision": "f818d4ef9e9769d4b50cc99c5db2179d"
  },
  {
    "url": "index.html",
    "revision": "5211041b9c9e6363ac2762feae492621"
  },
  {
    "url": "index.js",
    "revision": "5559f00d73428ae478a7193febd73d55"
  },
  {
    "url": "style.css",
    "revision": "2dc78a77ae399d3f97b8c30db566c011"
  }
]);

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
