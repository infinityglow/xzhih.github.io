var CACHE_NAME="1541501315405",urlsToCache=["/","/css/allinone.min.css","/js/lazyload.js","/js/sw-local-search.min.js","/js/post.min.js","/searchData.json"];self.addEventListener("install",function(e){e.waitUntil(caches.open(CACHE_NAME).then(function(e){return e.addAll(urlsToCache)}))}),self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==CACHE_NAME)return caches.delete(e)}))}))}),self.addEventListener("fetch",function(t){t.respondWith(caches.match(t.request).then(function(e){if(e)return e;var n=t.request.clone();return fetch(n).then(function(e){if(!e||200!==e.status||"basic"!==e.type)return e;var n=e.clone();return caches.open(CACHE_NAME).then(function(e){e.put(t.request,n)}),e})}))});