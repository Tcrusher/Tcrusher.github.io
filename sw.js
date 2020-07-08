/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/05/06/hello-world.html","69ffdf81d4667b533a7d5e5b8f5a18b3"],["/2019/05/06/我的第一篇博客.html","17cf63c7e4bc48eadab8b738aa2ed7cc"],["/2019/07/10/Git常用命令.html","bfa440b8809af66497f30a6b629b7fb7"],["/2019/07/22/Redis基础.html","6550e56178c405fdc60feeba85d0ffef"],["/2019/08/01/MyBatis笔记.html","09e62c9cede4ee52a221d2eb7c4d829e"],["/2019/09/07/汇编语言.html","5f9f0bebe4783ef2d9c654b93de6c912"],["/2019/09/22/RequestMapping详解.html","f9fd9866b71232c62a678c8a5b6f4f66"],["/2019/10/20/U盘文件夹变成exe应用程序.html","512dafc7e0a7765f53973aec33f9136d"],["/2019/12/04/Docker基础.html","59e94af27c939f46d300c9181905663f"],["/2020/01/12/深入理解Java虚拟机.html","ef8673f59093ca99123beda739321fe4"],["/2020/02/03/Vue-js基础.html","b198ac04c3f9fce3141b043135a5136a"],["/2020/02/04/宝塔连接服务器.html","e97a7411f693fa85a869d5e282fd900a"],["/2020/02/09/Linux-shell常用命令.html","fdff1c75eb605fa397492285997f53f8"],["/2020/03/15/PAT练习题.html","5a5a60e3584ba191e7a413d30f21732b"],["/2020/05/13/注册美区Apple-ID.html","443b6a088f857705139fb3bc05cc9b8d"],["/2020/05/16/堪称神器的浏览器插件.html","94eb5cac2566b60c74565afd0e9b07d4"],["/about/index.html","fc54ac1fad7e21ea8d1378d48c29952c"],["/archives/2019/05/index.html","79b8f882efd55627e0fb713d6f218144"],["/archives/2019/07/index.html","b5499d6180e9598d4e9c969d2c0b46ea"],["/archives/2019/08/index.html","38c3ed14081ab7c32fc5566d924b8918"],["/archives/2019/09/index.html","a59b16b702505de5ff92255cc6de4243"],["/archives/2019/10/index.html","66c33a78f1130531979c34ea8528200f"],["/archives/2019/12/index.html","76f2de10ad53adcf1c2ade7345b4dd61"],["/archives/2019/index.html","4569f7c2b1e350fa814bb751701b9cc4"],["/archives/2020/01/index.html","c9e531fd42aef9ab0d936238990f63da"],["/archives/2020/02/index.html","84c5fce61c8e7b0471fed885a002cb40"],["/archives/2020/03/index.html","3ea0f5ea60b76f4d37b912ffd7f1d61a"],["/archives/2020/05/index.html","9a06a18328aab9424bd0727b3bb54c63"],["/archives/2020/index.html","42b44c0d8fdabaf7624d3f48e62595bb"],["/archives/index.html","024324c99a4c9bcaecf330e09251dda0"],["/archives/page/2/index.html","3060ba75a09994baeef22b1a276e10fe"],["/categories/Docker/index.html","daa141c254f9fb288227a789b6fda827"],["/categories/Git/index.html","7dc769f49241df3d8a29b3e5e0624403"],["/categories/JVM/Java虚拟机/index.html","5ca6e21334b22148ec7f2dd61ff3caac"],["/categories/JVM/index.html","e12b08e5129aeb0f1913427c5b7463ca"],["/categories/Java/index.html","c9a2b944ef9d20c54d1d9f98d3b864cb"],["/categories/Linux/index.html","3047f7d6a9acead591303e2bb937ef18"],["/categories/Linux/shell命令/index.html","61e4989cb1bd9372702adba2408a5953"],["/categories/MyBatis/index.html","5c05f75a9dcf1c14742b71bc58f3f582"],["/categories/PAT/index.html","b794a01fda23fa7e62694e9adadf2fe3"],["/categories/Redis/index.html","896398132379b324178c381ff10e27aa"],["/categories/Vue-js/index.html","5f55a73220b7b5a8d0ced38577245869"],["/categories/hello-world/index.html","400986537cef43abcb11df93249e70b7"],["/categories/index.html","ccf198e43e2f22d55422d7ebc83dbf3d"],["/categories/汇编语言/index.html","787aae0038c9b10bc0a7a31a55ce060e"],["/categories/翻墙/Apple-ID/index.html","62f487ed68d947483f4354bd12cdb1a1"],["/categories/翻墙/index.html","96e7634c15781238ae403b80f01bfd31"],["/categories/计算机/index.html","3ea6514b582cfcb9f40f9df0e53b607a"],["/css/main.css","78e44ec235e4798805475c4738c0b6fd"],["/gallery/index.html","42758904d010ff3da378686bef504f64"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","6858b10fc6867f85e7e47a2b9ea53433"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","807365f5a7b701859d72ca1cefc5b53d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","ef8c57495c0797a89cd001552c4f3a69"],["/page/3/index.html","9a8ab13185db2f32030eb26472ea59c3"],["/page/4/index.html","c50afd7156a5a5e3a2776a37f5c4474b"],["/reading/index.html","dc8f51487a17efef059df732c24d5937"],["/sw-register.js","933ef0f656da454c11ff6f02abf3505f"],["/tags/Algorithms/index.html","91a076498eb4cc4bf041e79439d39300"],["/tags/Apple-ID/index.html","5376d86e701fb796b95631095ebd9440"],["/tags/Docker/index.html","64e61b5b5744e201b1a878391a149bc0"],["/tags/Git/index.html","eec38d33585d07e02b26005340155772"],["/tags/GitHub/index.html","17892148231e440c19164b6a23ea56e0"],["/tags/JVM/index.html","125e0061bc156c5caafdffe3ec716be9"],["/tags/Java/index.html","f3d12ea4a5fbf55cbd61795bca5de1b2"],["/tags/Java虚拟机/index.html","84b25b050ea95194c8b6886b7591bd02"],["/tags/Linux/index.html","8be6e79ae420be656bf96c5e95ab185a"],["/tags/MyBatis/index.html","bd315bc34cdd358ad1d206864bd51513"],["/tags/PAT/index.html","1b2104b77a4f5156ca7479767d804283"],["/tags/Programming-Assignment/index.html","ab89d16a5bf56109c719c529f92171d3"],["/tags/Redis/index.html","f74bba5cf891c2914aafa26621eb9940"],["/tags/U盘/index.html","2b681893bb06e02d9ceb7a3d2a9ce504"],["/tags/Vue-js/index.html","13476b2120c68b6994da695d4c583e47"],["/tags/coursera/index.html","4a822869c2454a1029bfd8631ce84370"],["/tags/index.html","15e2798d99504374c2e93f48f6531e77"],["/tags/shell命令/index.html","34b8ba5d19a1fb336269fc293559f3a8"],["/tags/宝塔面板/index.html","3c7dcaea76206517928c13c21af77512"],["/tags/汇编语言/index.html","08b08d55ce273c23b5546e5b17fb8e65"],["/tags/算法/index.html","824fdc6f5bbcb50cb470926a8a742d87"],["/tags/翻墙/index.html","8babc6f7d447229b884215532b2471ef"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/apple.jpg","ed37297914b027bb0711ba6da9b52fa0"],["/uploads/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/uploads/chrome.jpg","f491be409b7f2101b73bc44d84eca03f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/git.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/image (10).jpg","b081e7574ca2ef5c140181b0ba4003d6"],["/uploads/image (11).jpg","c1f4b43a6cc3accfa5e2be40b3e406cf"],["/uploads/image (12).jpg","efb37fee400582742424a4ce08951213"],["/uploads/image (13).jpg","39b65be84c273d8c8ce25b07e3a88458"],["/uploads/image (2).jpg","ebce485e964843507cf6e6c2857e7120"],["/uploads/image (4).jpg","034c385aaf2e1214d8528f4f9952b8c0"],["/uploads/image (5).jpg","14fb04f8e827a8082479faa8ddfc0dda"],["/uploads/image (6).jpg","9ac2395672f4660123522163123d8738"],["/uploads/image (7).jpg","4a0352698e991d1162be93c7c9dc5294"],["/uploads/jvm.jpg","215961c8952dc89700ab77559ddc9226"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/pat.jpg","7a63243e6f945ba0c59b2d80e733c3ec"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/vue.png","628dde6d49320b541e50a70038379fcb"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
