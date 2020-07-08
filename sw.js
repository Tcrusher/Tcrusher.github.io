/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/05/06/hello-world.html","d484e2a5343079336561b386c0594c39"],["/2019/05/06/我的第一篇博客.html","4638cc165a2f5b05d9fc1a64d9fb60ba"],["/2019/07/10/Git常用命令.html","e5f675fb284667155856a36c8d44d2c5"],["/2019/07/22/Redis基础.html","049d38afee78a649cbb0ffdc7d65d983"],["/2019/08/01/MyBatis笔记.html","58b83af43eb4de1f3ce3c685d5f60aa9"],["/2019/09/07/汇编语言.html","dc388603309d18ab110616b35377b7be"],["/2019/09/22/RequestMapping详解.html","317f87af7fd5008e41c1cb1693ef5ea0"],["/2019/10/20/U盘文件夹变成exe应用程序.html","d4d5164bca9b89ea93041afa12892fbe"],["/2019/12/04/Docker基础.html","365a3256a4723a23b601dcf217989bb8"],["/2020/01/12/深入理解Java虚拟机.html","39ff4bcfcf9a75bfe39b44d3757bb4e6"],["/2020/02/03/Vue-js基础.html","43d3df9abc491c0671aa113b40f6b345"],["/2020/02/04/宝塔连接服务器.html","48cac7bfb0a6b05d57f67bd9a6477425"],["/2020/02/09/Linux-shell常用命令.html","b57b39ab157ce1f4da1ab9566767c1e5"],["/2020/03/15/PAT练习题.html","3f86a4b3ca85b13becb7d3fc3abea290"],["/2020/05/13/注册美区Apple-ID.html","c150887a37d944cdeb3a791ed0b16a74"],["/2020/05/16/堪称神器的浏览器插件.html","7ffdfb6858bc354ce63b781844aabe12"],["/2020/07/08/计算机网络.html","3f611eedd9973efd78be277d8334f9da"],["/about/index.html","2a6fef5cde00622c78c39a4cf6631e93"],["/archives/2019/05/index.html","81f385d4298a6db1811272965b839b78"],["/archives/2019/07/index.html","1e73c35a5edce01cf21fa59040f3b4d4"],["/archives/2019/08/index.html","6b9fc0baff2d908ecd1416811d24ba3b"],["/archives/2019/09/index.html","b950aa466a5837988c0d4c4a6fcd11b1"],["/archives/2019/10/index.html","943ae4a192910317ebaff78b40e5fe4b"],["/archives/2019/12/index.html","93b7b661cf7625ef0c2cfcb2894e0268"],["/archives/2019/index.html","9a7fc3d44aad42e0f8f93210bd9427d6"],["/archives/2020/01/index.html","2d4806b2aecce929e0bddda31445341b"],["/archives/2020/02/index.html","0d0d6b23c12b2a99fd2a99ec8886393f"],["/archives/2020/03/index.html","5ddda498519e792c2e5693ad4ffcb2ba"],["/archives/2020/05/index.html","219933ef249c3f89540a75dc53f7e1bf"],["/archives/2020/07/index.html","12583566a297e46be03d0c62cd5b48d6"],["/archives/2020/index.html","36d5c2236d5a1e186216c157f29c7f13"],["/archives/index.html","012f2df3b43d58a1268c26c9a55e083f"],["/archives/page/2/index.html","08f64d3d7ac80ffdde2b2117eaebf471"],["/categories/Docker/index.html","0b186c796afd3c440ae46cdd1c4cc684"],["/categories/Git/index.html","2fb2a7a0ea3e1b0f750373c2c75d18c7"],["/categories/JVM/Java虚拟机/index.html","2984e938a098d8749dd16e3a0ad36bd6"],["/categories/JVM/index.html","67dd35516a05582cf3805044b0faab3d"],["/categories/Java/index.html","1012c74ebb36627f1db0c5271c09303f"],["/categories/Linux/index.html","ba1f195a81b7c26a473e74ab21f6a794"],["/categories/Linux/shell命令/index.html","8ddab028a671ff9234f1b7f10c57d80e"],["/categories/MyBatis/index.html","de04f84269ef185549129cad6385bf0e"],["/categories/PAT/index.html","474f3dc42edfdd254f74ebd916f4dbd7"],["/categories/Redis/index.html","b749cbd28bee4f22e405b2aa15b3a53e"],["/categories/Vue-js/index.html","47bbe3c1242bedaf328ae3c1d12d86fd"],["/categories/hello-world/index.html","e214719d1c4607dbb971f02d022f9019"],["/categories/index.html","04b13177129b8107792fe07c318b0f39"],["/categories/汇编语言/index.html","7ef4cb26b5c17341afd9a1ebd159f168"],["/categories/翻墙/Apple-ID/index.html","4431719ce43ea16ce2e5dff20be0ab88"],["/categories/翻墙/index.html","da61612c32c1cce4188927d49a802bd7"],["/categories/计算机/index.html","21ae8003cd079cd43de396cff2d58038"],["/css/main.css","2b2026e1a4efc5a33e062330f2762166"],["/gallery/index.html","3a5096ad718b805c194d6834b9c7bf13"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","7336ba616276386f0baccd235fe8ccbb"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","807365f5a7b701859d72ca1cefc5b53d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","72363227940484bdfb3218c96bd71c8d"],["/page/3/index.html","d293f2aca28b9a29fd04e6d3c7be3464"],["/page/4/index.html","11dd2bc789f1c62f91857c67abe74a82"],["/reading/index.html","c5f6aad3e577986cba4d2d738496af1c"],["/sw-register.js","e769fda547d1eec8b9d47ae9a2ec4f8e"],["/tags/Algorithms/index.html","a20a980a8531e3dfd4aaf0b01bc6dd08"],["/tags/Apple-ID/index.html","d81e500888f4eaf570334851e069adfa"],["/tags/Docker/index.html","d5611bb792da3fc74079d153138e8ab4"],["/tags/Git/index.html","589fbc1a8773cfc4e06e6ea957fc1bd4"],["/tags/GitHub/index.html","5f0662c8dc0cf2e2e24ae45ce08dc498"],["/tags/JVM/index.html","0bd322f54a77a1e6f51a41931303c36f"],["/tags/Java/index.html","86d429cd4e5d49675700a7f740f6aef3"],["/tags/Java虚拟机/index.html","c307530ca226b4190154aa8656846fc4"],["/tags/Linux/index.html","5a3b117dda0ec3d1f19208b23feb6ed6"],["/tags/MyBatis/index.html","8e31b88966fc4b9b7c474d9cf3055cf9"],["/tags/PAT/index.html","14ee63095d9602fa30ac672c6a8b5edb"],["/tags/Programming-Assignment/index.html","9581750341f43e0fe8aeac43bfa0ccf4"],["/tags/Redis/index.html","1844d1bf4d33ad3eaef80965747c33e0"],["/tags/U盘/index.html","59a7d483dea2da2cf605ae8ab16d3ac9"],["/tags/Vue-js/index.html","4f17c492f9170744417a9c1336cf3659"],["/tags/coursera/index.html","2bc9e28efe55d5c48a5a59d143d57577"],["/tags/index.html","34c972469b8301e6585b60fe09ac7886"],["/tags/shell命令/index.html","1ceca8990efe9b84de415c331b7d68c2"],["/tags/宝塔面板/index.html","ad4c09a4057a531257e1956fd692217d"],["/tags/汇编语言/index.html","5cf42d782d8402e20fa794694a2d5b87"],["/tags/算法/index.html","e12b5b1b26a2369f9528f572ed48d23c"],["/tags/翻墙/index.html","426bddf166cb147c5fbd7ac43b6ebd4c"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/apple.jpg","ed37297914b027bb0711ba6da9b52fa0"],["/uploads/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/uploads/chrome.jpg","f491be409b7f2101b73bc44d84eca03f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/git.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/image (10).jpg","b081e7574ca2ef5c140181b0ba4003d6"],["/uploads/image (11).jpg","c1f4b43a6cc3accfa5e2be40b3e406cf"],["/uploads/image (12).jpg","efb37fee400582742424a4ce08951213"],["/uploads/image (13).jpg","39b65be84c273d8c8ce25b07e3a88458"],["/uploads/image (2).jpg","ebce485e964843507cf6e6c2857e7120"],["/uploads/image (4).jpg","034c385aaf2e1214d8528f4f9952b8c0"],["/uploads/image (5).jpg","14fb04f8e827a8082479faa8ddfc0dda"],["/uploads/image (6).jpg","9ac2395672f4660123522163123d8738"],["/uploads/image (7).jpg","4a0352698e991d1162be93c7c9dc5294"],["/uploads/jvm.jpg","215961c8952dc89700ab77559ddc9226"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/pat.jpg","7a63243e6f945ba0c59b2d80e733c3ec"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/vue.png","628dde6d49320b541e50a70038379fcb"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
