const CACHE_NAME="omniframe-preference-2.1";
const SHELL=[
 "./","./index.html","./manifest.webmanifest",
 "./icons/favicon.ico","./icons/icon-32.png","./icons/icon-64.png",
 "./icons/icon-180.png","./icons/icon-192.png","./icons/icon-256.png",
 "./icons/icon-512.png","./icons/icon-maskable-512.png"
];
self.addEventListener("install",event=>{
 self.skipWaiting();
 event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(SHELL)));
});
self.addEventListener("activate",event=>{
 event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",event=>{
 if(event.request.method!=="GET")return;
 const url=new URL(event.request.url);
 if(url.origin!==self.location.origin)return;
 if(event.request.mode==="navigate"){
  event.respondWith(fetch(event.request,{cache:"no-store"}).then(response=>{
   const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put("./index.html",copy));return response;
  }).catch(()=>caches.match("./index.html")));
  return;
 }
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
  if(response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(event.request,copy));}
  return response;
 })));
});
