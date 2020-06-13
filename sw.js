importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {

	workbox.precaching.precacheAndRoute([
{
	"revision":"72cbb0590d09474b735db44ad7187ae6","url":"assets/ai_logo.png"
},{
	"revision":"3c1c711738b4eed6a307b98fd204f24f","url":"assets/android_logo.png"
},{
	"revision":"cf44128765edee305450ff42e4cfbc85","url":"assets/css_logo.png"
},{
	"revision":"f805f138a19a2253aad29d1c24314792","url":"assets/cymatic.jpg"
},{
	"revision":"f57008f860bf5192f4d9003c5577c469","url":"assets/html_logo.png"
},{
	"revision":"a4803da4eeca1426fc90f8411c653512","url":"assets/icon/192.png"
},{
	"revision":"4194c6606c76c92cadf617b09617aa8c","url":"assets/icon/512.png"
},{
	"revision":"30375404ddecf134549bf65bf999e286","url":"assets/icon/android-icon-144x144.png"
},{
	"revision":"308d7ced45a1a54e1092558fe8498b2e","url":"assets/icon/android-icon-192x192.png"
},{
	"revision":"ed9cdb2d55b0087a84fabafd88ec0ea4","url":"assets/icon/android-icon-36x36.png"
},{
	"revision":"784a557f5f777eb71cb4f966441100a6","url":"assets/icon/android-icon-48x48.png"
},{
	"revision":"6381321b4ffbedc21e9f75c422a13f50","url":"assets/icon/android-icon-72x72.png"
},{
	"revision":"48ff322d4cf3fc50c58886938a1259b2","url":"assets/icon/android-icon-96x96.png"
},{
	"revision":"8cd362ce5f9dfa7d6f8b08b729843995","url":"assets/icon/apple-icon-114x114.png"
},{
	"revision":"c5547a0fbc40820aee5a405fe2fc9c0f","url":"assets/icon/apple-icon-120x120.png"
},{
	"revision":"30375404ddecf134549bf65bf999e286","url":"assets/icon/apple-icon-144x144.png"
},{
	"revision":"d18660c671a7ea1ad0e67c383c0cd44f","url":"assets/icon/apple-icon-152x152.png"
},{
	"revision":"9cf0a97c57f2802f93da223ae8170038","url":"assets/icon/apple-icon-180x180.png"
},{
	"revision":"19d2fea8725ce9d79108031f48b4458d","url":"assets/icon/apple-icon-57x57.png"
},{
	"revision":"0105a04fdc385dd458a28fd8dfaabf95","url":"assets/icon/apple-icon-60x60.png"
},{
	"revision":"6381321b4ffbedc21e9f75c422a13f50","url":"assets/icon/apple-icon-72x72.png"
},{
	"revision":"1ced6eae7a8fb51004d29445765b4fff","url":"assets/icon/apple-icon-76x76.png"
},{
	"revision":"252bb569f93b8f6424ab9aaf4888c3ad","url":"assets/icon/apple-icon-precomposed.png"
},{
	"revision":"252bb569f93b8f6424ab9aaf4888c3ad","url":"assets/icon/apple-icon.png"
},{
	"revision":"35d1a89cb74cfbf80133aca94deba58f","url":"assets/icon/favicon-16x16.png"
},{
	"revision":"21db25b76c53081c3f9712e32b5de3d1","url":"assets/icon/favicon-32x32.png"
},{
	"revision":"48ff322d4cf3fc50c58886938a1259b2","url":"assets/icon/favicon-96x96.png"
},{
	"revision":"2b892db450c6a767d2b92c9353970e01","url":"assets/icon/hela_logo_v.png"
},{
	"revision":"30375404ddecf134549bf65bf999e286","url":"assets/icon/ms-icon-144x144.png"
},{
	"revision":"d0c75129f2d172131fb990e200c90c00","url":"assets/icon/ms-icon-150x150.png"
},{
	"revision":"e9915462bd173261f353b0d2831fc0d3","url":"assets/icon/ms-icon-310x310.png"
},{
	"revision":"4eda124f31ac1380fc44834d26715f5b","url":"assets/icon/ms-icon-70x70.png"
},{
	"revision":"d894aa4082094d96729ce9423c0474cb","url":"assets/java_logo.png"
},{
	"revision":"78e65a1b03adee8976c6b20a724ff167","url":"assets/jquery_logo.png"
},{
	"revision":"85ba500d49f051f32405f289c18cc8fe","url":"assets/js_logo.png"
},{
	"revision":"7b71b2b8f95520e50a128c0c717bf318","url":"assets/lang.png"
},{
	"revision":"c45b9423e7cd86f7a616ba25744ffb97","url":"assets/node_logo.png"
},{
	"revision":"0f70fff669352f75d33d4f0f64e90d3c","url":"assets/php_logo.png"
},{
	"revision":"d5f5ab71a89e00b8393afc5584b616d4","url":"assets/react_logo.png"
},{
	"revision":"bd733487fb83f3963db9f759fbb4ec18","url":"assets/sql_logo.png"
},{
	"revision":"618ea59d282c2a879b8a68611774b73d","url":"assets/web/desigualdad.png"
},{
	"revision":"d5b24b8c2189f4b8822644b945c5dd28","url":"assets/web/nofm.png"
},{
	"revision":"c30f7b0dcfc022fd66774b24a9f0c7a5","url":"assets/web/radio_app.png"
},{
	"revision":"81a2e0d503d4b5c098f968ef7c1c3a06","url":"assets/web/waves_d.png"
},{
	"revision":"cab34ef59c120e51a7c0b320b976bc64","url":"assets/webpack_logo.png"
},{
	"revision":"5f730a4459c5defcbbbd9103c818acfb","url":"assets/wp_logo.png"
},{
	"revision":"f818d4ef9e9769d4b50cc99c5db2179d","url":"assets/xd_logo.png"
},{
	"revision":"af637581ace11e90005b57648ac851c8","url":"google340cad79c726146e.html"
},{
	"revision":"297ee7f4f9f86420ddd9ec6b931f1511","url":"index.html"
},{
	"revision":"67090b129447c9e7977d782d9a655622","url":"index.js"
},{
	"revision":"4b704aa6e91c9c1f479e5574a85c4015","url":"manifest.json"
},{
	"revision":"a1792c7eb03ee598f5771de898979695","url":"politicas-privacidad/index.html"
},{
	"revision":"a96096fea70d465ff46fc1880daa5062","url":"style.css"
},{
	"revision":"a1792c7eb03ee598f5771de898979695","url":"terminos-condiciones/index.html"
}]);//End precache

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
