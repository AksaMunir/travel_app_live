'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c7886b42e9ddb4ab42b46a6b1cbd946a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e35470ea1b501e65b394eeb0be0ec76d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cecaa1e25760e1e214342dd1f328c659",
".git/logs/refs/heads/main": "d9e5e59ac7cc3e78b492fb526fa7ce11",
".git/objects/04/ffecb2d0c55c8e14214e836b5505855232c922": "1261b8f77c571714d7f1a1f05aa7601b",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/07/db5aacade9a6e1801778b1def89c1c222ae1cd": "37118058e05630de0bf249f75ce1b028",
".git/objects/0b/28eb84b75563abb705c340de83eabcc87a4a93": "78cdbbff30e02574cc09a5bf146cecc9",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/16/a55d32fd81fea94956c2edb159875b40481dea": "c7a74985161894f8c29a9efa2129cef8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/31/af7fed43f4162bcba40953c58d19fb07c680b7": "b7003a08141ca93b212e5c2df3ba3733",
".git/objects/35/25fb010d65df38b93236322677bd2177007ace": "e9d527783b97d40a4dc578e898aafb54",
".git/objects/36/3e79af2146f08372fb964fd316ec79aafae398": "1d34a20ec857d4433a418817cf03b729",
".git/objects/3c/1ed30fa774935ebd2f1abe9c7a9078b0d3a159": "69dd081ac24afe2b0d56d6bedd6b1eb0",
".git/objects/42/27b028912235e79eddcd207428b38719ee90b7": "dde616e277a059215094315a11c846a6",
".git/objects/42/edee74de3a291ca171014bddee3c19a2343018": "bfa671a06776f6223df99d0890d885c5",
".git/objects/45/b87cc38047ec2f5d5ea70a86e4d768f1bc5d9a": "2dd3dfe8d7ef8548827c513660c55ea8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/e2c381ccdf73a16fc50ae8e0e39d9cd9bca91f": "040804e9570693f8d8731562a95b8394",
".git/objects/53/ad33b542b2d4d274193aa83f16983b417150f8": "334d91a5e309200ee698ca43d563c8db",
".git/objects/57/06c907864bedc725f6af862c00e3d907f33165": "d028e3ac65c05d67f169d9fc126d1520",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/62/b607be8e11a418688079d7498baa8f1cda8dac": "16cd75a3601be6382829317b27c8b64c",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/8094881a25549cfcca8b072cbccc2654c6183d": "5c073aa645d1e6dccde4f2e4a89c757f",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7e/3084031696e0196b566fe91d97f7b5503b208c": "09cdfdeb671061d6f9374e5bafb0c683",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/def8ba26bf30659a124a1016295b0c12e4fee9": "4b0c6a472c0856e0b0ef6c1cd09c4c08",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/a0/703c0f70d6bcf9ea79798bde793ea089291473": "e90377c1774007fe6055e564681071c2",
".git/objects/ac/4dfda5e409ebd5ccc2615a9458353c1b697421": "08358c9511bfef39e7484ad0d1311898",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/ac3ce4e8f3330a8541e5d454cc3bdfd6a8aa58": "ac3b86ec6864fc35b746b17f51a12569",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cd/767882928eb574882a3dfe0e9f7f45a4c148ea": "47de4144f2095577e5f5f17466551a13",
".git/objects/cf/7eaedf45991b9e40d23056a851628b487bbb01": "a4b59824633be06ccba1d7baf1d12e94",
".git/objects/d2/0cf1d06d24f5ed1d9f19b4d3e3a786b3bcd3b5": "82d2afda80ff8ae5a6d90441040ed575",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/4b70b594d9c632249f8e896467292df9981f8c": "b8c4a9516747308bc5105a9b515879a8",
".git/objects/e7/d106c4421e680481973b9d78dfbe4f0f09ed97": "f80fd6cdcf1f6c406f9dcf4ca6c55fc7",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/7d8493de8d317b658246ce1012f8953bd770fe": "630e27b66c1d07b719c24e2619aa3509",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/f7978a822215ada9eb32796f18409b931b9229": "1d2cebf9fc4a4151d06fa5473e694b2b",
".git/objects/fc/fd0c32af8a1cd129e64fae3ff9874b2a64a1e9": "6b7459c988a4b3a46947ba6eaacb9a2e",
".git/refs/heads/main": "3b46d1626226a263ea0a098caaf93d76",
"assets/AssetManifest.bin": "1561a634b2f62191ce47ddeab71e0d86",
"assets/AssetManifest.bin.json": "5f2a587a2369783571df49948a9a46f1",
"assets/AssetManifest.json": "90218937f2352435e479eb95462aa032",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "df36829ae10d7a85bf6e7c4631d2f569",
"assets/img/ballooning.png": "dd1279cacfca235895f35a6dc8b30605",
"assets/img/button_img.jpg": "39d24f34b90fe91ba80841b82edcb2f3",
"assets/img/google.png": "937c87b4439809d5b17b82728df09639",
"assets/img/hiking.png": "69aa65bfaa9272719da83588da8571be",
"assets/img/kayaking.png": "750f6e8c6bd982913cc7b4481a99bfee",
"assets/img/login.jpg": "7f04b46b7aed645d6e96384d9807a1b4",
"assets/img/mount_canada.jpg": "1ff6560318445ff41209df4b2c02d5a6",
"assets/img/mount_detail.jpg": "f7796d0938844498430dbd9f407972ff",
"assets/img/mount_newzea.jpg": "65812bccd85e2e5bb7e08cc3269187c4",
"assets/img/mount_usa.jpg": "6778ce7c1a4c03c8502e2e853f64e169",
"assets/img/snorkeling.png": "f4b3e6fddaf1fa3810a5674211d16ddb",
"assets/img/welcome_img1.jpeg": "ae0d28358e60d9fdf5d1df07a8dd30fc",
"assets/img/welcome_img2.jpg": "4f8d6a4d06b9ec4b33cd4c3ef82b142e",
"assets/img/welcome_img3.jpg": "6059214dbb20fbf09f82f5bc35e21826",
"assets/NOTICES": "1e73b5c50d7db34c748ec22bfc53109b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "521df7eb25c1137169c2a26fc08bbf8f",
"/": "521df7eb25c1137169c2a26fc08bbf8f",
"main.dart.js": "938e6db7f4dba22fd456e992fd7177ed",
"manifest.json": "2ed2fcbdf0df5b47c82a66a5d36d9ea3",
"version.json": "fc784168e49bd2071a1914f7a2ecd047"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
