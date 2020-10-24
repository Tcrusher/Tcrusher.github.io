/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/05/06/hello-world.html","f80845ea9106ae9692040f668053f7a4"],["/2019/05/06/我的第一篇博客.html","2eb170f3399858e4aa675fb8f6e29849"],["/2019/07/10/Git常用命令.html","e679d5c20777ade7f1309a2b7a594671"],["/2019/07/22/Redis基础.html","2c3ee21de324434f2ce2b4c84017d85a"],["/2019/08/01/MyBatis笔记.html","768acd1ce86327cf5e254b29af9e3aaf"],["/2019/09/07/汇编语言.html","0341beb4ae01a623d7da7b45fc37a51d"],["/2019/09/22/RequestMapping详解.html","7442705ae551a81dac75ca9254bcdedf"],["/2019/10/20/U盘文件夹变成exe应用程序.html","95d87cf1f6e84d6581ce0813266f0a4b"],["/2019/12/04/Docker基础.html","15d608e82b21ff1743b9333b6f46cc42"],["/2020/01/12/深入理解Java虚拟机.html","b7280a23277e266be8de858eae69ca95"],["/2020/02/03/Vue-js基础.html","91f44468d61704dc4f6797a84a427cea"],["/2020/02/04/宝塔连接服务器.html","7dd4c098ab6117390f72d2f04b07215a"],["/2020/02/09/Linux-shell常用命令.html","2212c198c52c4d4837ba147e8a3a6c07"],["/2020/03/15/PAT练习题.html","536aa10246074be1bc6cb7c3314a80f7"],["/2020/05/13/注册美区Apple-ID.html","07c40c9c674f2f76ff2464746ea37461"],["/2020/05/16/堪称神器的浏览器插件.html","8c30385015bc182b98cadab35b2fa0a8"],["/2020/07/08/计算机网络.html","d4d474e69583fc9bdfa5fb1b319d97ec"],["/2020/09/14/哲学家进餐问题.html","a42dcae7e2851bbd70f79595b16f01de"],["/2020/09/14/读者-写者问题.html","5f5d013d7acc3e5ba851b333ee68af29"],["/2020/10/16/生产者-消费者问题.html","620d3029ef5931a1b9caede5fda35156"],["/2020/10/24/括号匹配——栈的应用.html","69d0d7eb4c5b292278f28d1cc305a965"],["/about/index.html","7e2b4469a057c1482d02ab96548592a0"],["/archives/2019/05/index.html","28349e63b897899c108667afbc34a1ef"],["/archives/2019/07/index.html","f3fae40e04fc8711112993b35012b27e"],["/archives/2019/08/index.html","dfc1295aa1f7f65c8d7d1d852aea3253"],["/archives/2019/09/index.html","c23b9b2c59a4cf967326bd8e4180ba61"],["/archives/2019/10/index.html","f9c84ad5537abaf2eb6dacdc8e794e73"],["/archives/2019/12/index.html","03ca6107b30855f9053b8c81172bd734"],["/archives/2019/index.html","124d2773c545dcd80b148d54aaf1440c"],["/archives/2020/01/index.html","730c5940d09b12a3fb431c15d7997a38"],["/archives/2020/02/index.html","ee38166dc42d3ced2a1f47b5bc2438ef"],["/archives/2020/03/index.html","7580932ba8b04a62c8be4bf3ce52879d"],["/archives/2020/05/index.html","fa93ae25ce80887ec1d06e98d5420a73"],["/archives/2020/07/index.html","0619962dbf18775d570f083cdce124ec"],["/archives/2020/09/index.html","66827c7374538cc12689637b15ea63fc"],["/archives/2020/10/index.html","2e0694b86827bbe05644c398b5bb4a40"],["/archives/2020/index.html","75d2834c56816318b92954acdb622227"],["/archives/2020/page/2/index.html","b16f42591f02e02e20d7241d7e098f95"],["/archives/index.html","f0d443241ee702c4f909b9726c696882"],["/archives/page/2/index.html","55dd0d6fbeda6159b1210f1989db0476"],["/archives/page/3/index.html","7dd736ecc49cf31086ed7c26709a69b1"],["/categories/Docker/index.html","895030e8008d2360195a0ab09d2d883a"],["/categories/Git/index.html","1b95d40102ab9fa9f27bc5173150055e"],["/categories/JVM/Java虚拟机/index.html","8cfda50f15558f90d4a060625ad6daea"],["/categories/JVM/index.html","233cdbcca7367200135df04c0cbd71ce"],["/categories/Java/index.html","cd282a4fc64901786faa1fa7defcb264"],["/categories/Linux/index.html","f62ca8de9d96a45b8c7136933f3d8764"],["/categories/Linux/shell命令/index.html","ddfda504612012a9dfa6be03135d287a"],["/categories/MyBatis/index.html","9c3ab923b15996f1ffd2676a23260ac9"],["/categories/PAT/index.html","1d9dd45048bb59cc3ac87eaca17d538d"],["/categories/Redis/index.html","207a5aca3cf20c40cc501848c46de400"],["/categories/Vue-js/index.html","c4da57641e548547defee122d65b4e1f"],["/categories/hello-world/index.html","ff270d32282ac1065a8c58075eb1f319"],["/categories/index.html","c3d098acfedc0d0f9e015523c8ea9ded"],["/categories/操作系统/index.html","fd44e8abf353bc65ff85513647944043"],["/categories/数据结构/index.html","1657d22b8dbabaa59410d40d20516688"],["/categories/汇编语言/index.html","5a8acfcf03e783a8ea0fe085c4181ec8"],["/categories/翻墙/Apple-ID/index.html","3f0e7040c5723901538970e7da8de8e6"],["/categories/翻墙/index.html","6a9d480e93e3659991342075c90e563b"],["/categories/计算机/index.html","0f60f0b5f8e6fd31547d7962c4b6508a"],["/css/main.css","636024fef25a57f076c98a31c44926b0"],["/gallery/index.html","5c86eb975b12b5baa86a270af13a8fce"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","c80032dd258a50cd4320e24f171fa477"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","807365f5a7b701859d72ca1cefc5b53d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e6415a2beddfa3d294827e37c71ae094"],["/page/3/index.html","52296f6ba355b7a160789b9804e14264"],["/page/4/index.html","24c1f05d39764a630487eceb8558025b"],["/page/5/index.html","56caf2406e79c27651c59bfaa524e17a"],["/reading/index.html","2cb7353f51ed6465b397099583aa6139"],["/sw-register.js","64aa831e1f3624b2d1aec4df7e5d1af6"],["/tags/Algorithms/index.html","506b0495c092ba55d5e644d0086e65a9"],["/tags/Apple-ID/index.html","c592acf31a97eddbf260dcb876ec0e27"],["/tags/Docker/index.html","16d592da448e30235fe896abb3b892df"],["/tags/Git/index.html","f450640021b007be9e64f9f0c29b9ca5"],["/tags/GitHub/index.html","04d1f9f42c4527fd9fe9523e10c6da4b"],["/tags/JVM/index.html","1f0707da38d14d232247974984caeec8"],["/tags/Java/index.html","2ec9c8f68171f2b417a1eb0217152846"],["/tags/Java虚拟机/index.html","d2d1e78f621632962b04984c215dd800"],["/tags/Linux/index.html","c899a633468e182fccfbf7d939d570b5"],["/tags/MyBatis/index.html","f2e18bde8fc1a302c6eeb62f6189f22c"],["/tags/PAT/index.html","7c32550514c97d15bb4ee7b1f3eb3a84"],["/tags/Programming-Assignment/index.html","face04cb36875fb0f5829174589a3802"],["/tags/Redis/index.html","7e34ae0e3c74ef465469364e9d8d8a43"],["/tags/U盘/index.html","e48e1d8a2217156d566673f5967c0ee8"],["/tags/Vue-js/index.html","dff69fece92e9a65dcb09813d7875e74"],["/tags/coursera/index.html","3cde2dc15c5579b904615b392aa97257"],["/tags/index.html","bafbb2845fd532a30ead0d8720b0dac5"],["/tags/shell命令/index.html","774c26de76dabdcd6f16aad452b3b324"],["/tags/宝塔面板/index.html","3c7587adcbeb04324c69441c4bdcc7fd"],["/tags/操作系统/index.html","6371ac7bba5a4698cd8a9a00bfe9409b"],["/tags/数据结构/index.html","97defc11760bce153fc440f3b053d682"],["/tags/栈/index.html","c20fb8d836c8edc75ffdb7c05983f787"],["/tags/死锁/index.html","9a8cc3d10f718759cb9176a410a99e1a"],["/tags/汇编语言/index.html","27620a4757256c83f2c2c971460cdab5"],["/tags/算法/index.html","8fe038d435df4fcfcf74fa02c1e80a79"],["/tags/翻墙/index.html","9de3fd8fc20c2638260cf8cb9d7b8bc4"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/apple.jpg","ed37297914b027bb0711ba6da9b52fa0"],["/uploads/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/uploads/chrome.jpg","f491be409b7f2101b73bc44d84eca03f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/data.jpg","4a0352698e991d1162be93c7c9dc5294"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/git.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/image (10).jpg","b081e7574ca2ef5c140181b0ba4003d6"],["/uploads/image (11).jpg","c1f4b43a6cc3accfa5e2be40b3e406cf"],["/uploads/image (12).jpg","efb37fee400582742424a4ce08951213"],["/uploads/image (13).jpg","39b65be84c273d8c8ce25b07e3a88458"],["/uploads/image (2).jpg","ebce485e964843507cf6e6c2857e7120"],["/uploads/internet.jpg","5e8029b8630289b7c3f623c6ad05e2a0"],["/uploads/jvm.jpg","215961c8952dc89700ab77559ddc9226"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/os.jpg","14fb04f8e827a8082479faa8ddfc0dda"],["/uploads/os1.jpg","9ac2395672f4660123522163123d8738"],["/uploads/pat.jpg","7a63243e6f945ba0c59b2d80e733c3ec"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/vue.png","628dde6d49320b541e50a70038379fcb"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
