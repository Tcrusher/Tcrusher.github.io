/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/05/06/hello-world.html","e4ba8aa4841bd6a4c9161252fe07b58b"],["/2019/05/06/我的第一篇博客.html","95caa5b636b0a577f7315f24cb8e56b4"],["/2019/07/10/Git常用命令.html","6cc80d45efaf53ac92185480e87f871e"],["/2019/07/22/Redis基础.html","4e7148a001c259d864e1bc0d466fbd8e"],["/2019/08/01/MyBatis笔记.html","51cb1c032ab76977853ca1d0d02e4c97"],["/2019/09/07/汇编语言.html","d4d3b6644312ea736052c31008c1de84"],["/2019/09/22/RequestMapping详解.html","fc1250a10c8268d19bf9ebb7029e57ef"],["/2019/10/20/U盘文件夹变成exe应用程序.html","b3595d7dbb54b9af03a8be2cbc8f8a63"],["/2019/12/04/Docker基础.html","1e307d7d261a727f631cdfbdfc07967b"],["/2020/01/12/深入理解Java虚拟机.html","b23bea50b8d4563434a586f9551c341c"],["/2020/02/03/Vue-js基础.html","5a89d5cce40612e0249d6b2aeae13e2c"],["/2020/02/04/宝塔连接服务器.html","4dd7fc2c0830813a2af4a7a0cf7da62b"],["/2020/02/09/Linux-shell常用命令.html","f2377522cbe37d8735b75051cca052eb"],["/2020/03/15/PAT练习题.html","930e33f9cedc63f38aabc05286281f5b"],["/2020/05/13/注册美区Apple-ID.html","926e9682e385cf8e204d0a5ce8b39ec0"],["/2020/05/16/堪称神器的浏览器插件.html","0dc5d6805d64b442203b0ce312b4d05a"],["/2020/07/08/计算机网络.html","1a70beb59f17fc40996d64161c22a881"],["/2020/09/14/哲学家进餐问题.html","35d5973bcdce58cc78fc901f1fd0ae93"],["/2020/09/14/读者-写者问题.html","a771083a140ad543ca51a48f034c9630"],["/2020/10/16/生产者-消费者问题.html","f16932218ea1a077ef02e48314d96454"],["/about/index.html","7634a0e36db7e5f4e788822b9dbbb1c5"],["/archives/2019/05/index.html","d8ebf1f48460ef8ff0d75121f8758b2c"],["/archives/2019/07/index.html","7e973e81a333a3e34dbea13bda9bb68e"],["/archives/2019/08/index.html","6bd9902111405239c6a5a9b3f7feb9b1"],["/archives/2019/09/index.html","642fe1dc441dbe37b3cf1c74993dd72c"],["/archives/2019/10/index.html","44fbcd9dc7a2e15a1541c50d98c20d39"],["/archives/2019/12/index.html","475a64862e85eb7409710fd0bae75dca"],["/archives/2019/index.html","5f27ee56aeb030cd7bc763dfaad20bc3"],["/archives/2020/01/index.html","bc8c8267dbd52779a95a9079a5d10c7d"],["/archives/2020/02/index.html","38d13e07bc89c82e4609e6acc56b83b2"],["/archives/2020/03/index.html","869f369f418f6ec79953cef436de048d"],["/archives/2020/05/index.html","0944b108d481ac9ee71287743c614cf9"],["/archives/2020/07/index.html","097a42c23549fbf91189a91374980964"],["/archives/2020/09/index.html","3d66c6039cb16a97191e92a7c89f2f5d"],["/archives/2020/10/index.html","772d26e3a1ddc3b8ac31c40e69ab6741"],["/archives/2020/index.html","8776dc1337453791f72c80737f2be7b7"],["/archives/2020/page/2/index.html","9f8fe95c535e7d1a5dc02895abb2e6f3"],["/archives/index.html","072a486c11f667454ec4d21e09f06293"],["/archives/page/2/index.html","b8ad0562b78d3683544941b514cb19c6"],["/categories/Docker/index.html","ac462cb671cfd17456753db57b35abef"],["/categories/Git/index.html","a48d57df37650ab5cb661d1822aa0206"],["/categories/JVM/Java虚拟机/index.html","870a17bcc988a1af52eacad9928c5901"],["/categories/JVM/index.html","4948583cc15619bb480507172e04562b"],["/categories/Java/index.html","72906a2de7f5502710e5451c3771eab0"],["/categories/Linux/index.html","ac0769806eaa005b35caf5c01a4c4c76"],["/categories/Linux/shell命令/index.html","56c72af733cca669f26ee268752cb6d7"],["/categories/MyBatis/index.html","27fb54bd1c8f8ec6c8aac61195a9eb55"],["/categories/PAT/index.html","10538f92c7a8fdb96f5abdcc598e96b8"],["/categories/Redis/index.html","44ff7dbcf35c7e6250086591c18be133"],["/categories/Vue-js/index.html","785e4c2c7d276516d995bc245df8c9b7"],["/categories/hello-world/index.html","ae753a7c0fecfa97ee19b9fb5039ae40"],["/categories/index.html","577df8202ecf2d4d98df617fff141901"],["/categories/操作系统/index.html","8cfb9ac4b57e3f0b7b5b3a58ccd5d618"],["/categories/汇编语言/index.html","6c971e35c06d1524117effd47c7bb4ed"],["/categories/翻墙/Apple-ID/index.html","0900d1e0fe861a7c82f4a1e09d831830"],["/categories/翻墙/index.html","59216005856d781db4d1c098e6dbbb14"],["/categories/计算机/index.html","14b1033e29ad8b0fd207954c8495cee9"],["/css/main.css","6ef405da189b7999f0f265700d278785"],["/gallery/index.html","cfd68e5b1c8bbfa9614ccecf31b0827b"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","f6f841f61ce3c3c8b038f62658620d57"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","807365f5a7b701859d72ca1cefc5b53d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","6c1ef5f49b9ac867adab97b8d7dfd60a"],["/page/3/index.html","03296d3f6331e1589bf690d79fa7caf4"],["/page/4/index.html","3f53346fea0b5b124c1af5a6b34e0ef7"],["/reading/index.html","9e6ea1398c2f95e6534330c7c2ebb3ea"],["/sw-register.js","b62975571f4983ae645d0f4bb4d20f2e"],["/tags/Algorithms/index.html","b6f577d808d2abe1290681dd7fa4476b"],["/tags/Apple-ID/index.html","5ad2054c28e8a5b80adb046c5fdaf9a2"],["/tags/Docker/index.html","b55c5da1e41816f1302e842165fa2731"],["/tags/Git/index.html","f79b55cd8501c8a8cb95e856f2812c79"],["/tags/GitHub/index.html","8e04265c3a80daa4bbfaa7cb8240daee"],["/tags/JVM/index.html","6030aec0bd95197a921d258acdccdbeb"],["/tags/Java/index.html","72eb4023618e43dd5a935fa079c05aba"],["/tags/Java虚拟机/index.html","317cd6ed325f2655a13351abbaac24fe"],["/tags/Linux/index.html","d972b34938d4cef71440b8302c4154f0"],["/tags/MyBatis/index.html","41bebc5f983f3712108fde5af28b8976"],["/tags/PAT/index.html","a46db561d5d8edc9abeb51538fbc3542"],["/tags/Programming-Assignment/index.html","e2fc23f2a8af0104d8fc2f138e9119aa"],["/tags/Redis/index.html","fa0f0765c765a80f573bbf2f52e1d390"],["/tags/U盘/index.html","92bfa3cdba266daefb0f30fec6fcbca9"],["/tags/Vue-js/index.html","52b7c06d527fb1e4cde9df2c4ebe6bc0"],["/tags/coursera/index.html","f096df195cb3de82ecec556e14f82c46"],["/tags/index.html","d9a28a86b3a3c6de61ecc1c3b3dae9b4"],["/tags/shell命令/index.html","563f452560510f8bbdb02622dcfc82a0"],["/tags/宝塔面板/index.html","fa648b3dbfff195fabc15bd09838233a"],["/tags/操作系统/index.html","fd7952bad35d41698e51a518ace26238"],["/tags/死锁/index.html","a1542b49fbc917e94647ed6ed38c5b5f"],["/tags/汇编语言/index.html","25ae044ceb6dd740750d9617e0584746"],["/tags/算法/index.html","cd16e43c28f3bf38f0dbee4a280220ba"],["/tags/翻墙/index.html","4a60df8eb79c84718fc316296955631e"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/apple.jpg","ed37297914b027bb0711ba6da9b52fa0"],["/uploads/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/uploads/chrome.jpg","f491be409b7f2101b73bc44d84eca03f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/git.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/image (10).jpg","b081e7574ca2ef5c140181b0ba4003d6"],["/uploads/image (11).jpg","c1f4b43a6cc3accfa5e2be40b3e406cf"],["/uploads/image (12).jpg","efb37fee400582742424a4ce08951213"],["/uploads/image (13).jpg","39b65be84c273d8c8ce25b07e3a88458"],["/uploads/image (2).jpg","ebce485e964843507cf6e6c2857e7120"],["/uploads/image (6).jpg","9ac2395672f4660123522163123d8738"],["/uploads/image (7).jpg","4a0352698e991d1162be93c7c9dc5294"],["/uploads/internet.jpg","5e8029b8630289b7c3f623c6ad05e2a0"],["/uploads/jvm.jpg","215961c8952dc89700ab77559ddc9226"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/os.jpg","14fb04f8e827a8082479faa8ddfc0dda"],["/uploads/pat.jpg","7a63243e6f945ba0c59b2d80e733c3ec"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/vue.png","628dde6d49320b541e50a70038379fcb"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
