/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/05/06/hello-world.html","621c23810669383c60e15bef1e6fbcbf"],["/2019/05/06/我的第一篇博客.html","f97d5ec4623b36b57ee4b61bb21383c4"],["/2019/07/10/Git常用命令.html","67b9704fc29ab1f7bd8f0a3a0e54c462"],["/2019/07/22/Redis基础.html","18cac72d392220d5935601b43cd80d96"],["/2019/08/01/MyBatis笔记.html","1a52b998f9b2cc13984c9b6ea513b83b"],["/2019/09/07/汇编语言.html","53668c6b20e6e400d91d9e7634903ee9"],["/2019/09/22/RequestMapping详解.html","11498ef07c8686381987c7b2d632cbe8"],["/2019/10/20/U盘文件夹变成exe应用程序.html","d5e34dcb52e15a63a9bcde7487ec36c6"],["/2019/12/04/Docker基础.html","e9ed5339b2f34ac133e44757f6ec07b6"],["/2020/01/12/深入理解Java虚拟机.html","df9e6c1d49caf68b384b2899b184efcb"],["/2020/02/03/Vue-js基础.html","3d156d1a455a124a940472db6fc6d58c"],["/2020/02/04/宝塔连接服务器.html","07be13f01bc8c0d70e70363c304d8f92"],["/2020/02/09/Linux-shell常用命令.html","af6d9eba2cd5afafd32c0e18c2be26b5"],["/2020/03/15/PAT练习题.html","38b25133b64eaafb98efba95a699477c"],["/about/index.html","60e9ce9b7a25c5ccacc2240f6e161acc"],["/archives/2019/05/index.html","dff647ccc0f0878aeeb4cc977ee60134"],["/archives/2019/07/index.html","d3395f7cf2938bf46ab2b9a2e5c97384"],["/archives/2019/08/index.html","ba8d345ca489f91d506ba09414b4a72b"],["/archives/2019/09/index.html","0fccc2b4c4222a7983788eca894e7ded"],["/archives/2019/10/index.html","504b99d63953fb6e0c73774d4a3a2d68"],["/archives/2019/12/index.html","d6f95587680756fb1cdb825247e77a2a"],["/archives/2019/index.html","b9ff7a3784229337bad1b5f671d78dfb"],["/archives/2020/01/index.html","1065c6ddd0641c23b6d4f08e795c22cf"],["/archives/2020/02/index.html","41b0d25f29d4dd68be32d877ea84fefc"],["/archives/2020/03/index.html","6786a35be6d08ea1072e1ea6c720989e"],["/archives/2020/index.html","162266ae04cbd09d1c586bc2f1309a3f"],["/archives/index.html","73e3ca1cf32765627fc645b4b322bcc9"],["/archives/page/2/index.html","70b4a0b620e1148f120e11bb0f2bf53d"],["/categories/Docker/index.html","a7029d1f9055c1b65e6eec32aae430a2"],["/categories/Git/index.html","eb8df0411dee4d91db73556d7d0870e9"],["/categories/JVM/Java虚拟机/index.html","3b9dd33ee02ef5f76f6febb274e53ae0"],["/categories/JVM/index.html","cd955a18ad0b9ec288b1cd59f9ebce99"],["/categories/Java/index.html","104a15ded016e65cfa3df9578a91d013"],["/categories/Linux/index.html","6a3687d04ea47158a387d3c82983ce30"],["/categories/Linux/shell命令/index.html","262482de7947a30e4ea7dc6a16e5873a"],["/categories/MyBatis/index.html","b1d89a2916bc5ad58ceef56a384a85a9"],["/categories/PAT/index.html","39d4c842a84cff3a8895c2af54d366ee"],["/categories/Redis/index.html","e6369d31eb093545f3c01a38f9820e44"],["/categories/Vue-js/index.html","2c7194f706eeaa84aded0350ce5b447c"],["/categories/hello-world/index.html","484be8fae4361bff58d7bb46495b8055"],["/categories/index.html","cc12e6595fd0ae3c4b05cd864ba9c7da"],["/categories/汇编语言/index.html","715efedfb67ae4d787ff26134e51edaa"],["/categories/计算机/index.html","6ea7c92ad76aa6c2b049808bc4e3f8cf"],["/css/main.css","7d981a4824d13689f36435df05608e8f"],["/gallery/index.html","4d033f55940ce5c729869ebf40d70fcd"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","22a0cfe60d1931b558481884d3ad3450"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","807365f5a7b701859d72ca1cefc5b53d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8caaee819aca5e94ce449674ee3441f8"],["/page/3/index.html","ca24c1e14083643038189e65e3ab4a7c"],["/reading/index.html","50260216a1dd0b574b562d945dc747cf"],["/sw-register.js","867e351bb945fdb5bd88ca92391ac831"],["/tags/Algorithms/index.html","7312070547ddf611afea490fe8110f2c"],["/tags/Docker/index.html","000e5cd413d601f58cbfc5ce29aff3a6"],["/tags/Git/index.html","41a3b3c9182b4ef41d6a018570e491ef"],["/tags/GitHub/index.html","0c742215e97e489dcffc664d2b746e37"],["/tags/JVM/index.html","259db57caf3c48c305f9fa3605e69541"],["/tags/Java/index.html","96ea10f72175ff309423f19075267fff"],["/tags/Java虚拟机/index.html","ec22536df044ea8adac676a4d924295d"],["/tags/Linux/index.html","dcf80dfb8b1c551bbb78f53c935a2687"],["/tags/MyBatis/index.html","011b5c3603b23b06cee46a9684dd8345"],["/tags/PAT/index.html","0dffb5e9e7bd55e30b1f9ac738798042"],["/tags/Programming-Assignment/index.html","71a98827f69ae79d6e75ebe1d8cebe94"],["/tags/Redis/index.html","6d8628569e9634ad50aee2c5e9b360fa"],["/tags/U盘/index.html","4570de2a9d0be3bd9a133aff644421de"],["/tags/Vue-js/index.html","c2691768d19c4265fd76a84df817895d"],["/tags/coursera/index.html","841bf8f91263f6a612ffb623f2d4de99"],["/tags/index.html","751650413f5ca6411003df8c1028035f"],["/tags/shell命令/index.html","989c9fabadeb6fdb9adf7ab130aaf5d4"],["/tags/宝塔面板/index.html","ed4e7df7cb2a325aebbbd37a329efce9"],["/tags/汇编语言/index.html","cf60af64a61f6bc5c1d693bdfe120270"],["/tags/算法/index.html","b46252638636ee48bc41effb6ae0ff9c"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/git.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/image (10).jpg","b081e7574ca2ef5c140181b0ba4003d6"],["/uploads/image (11).jpg","c1f4b43a6cc3accfa5e2be40b3e406cf"],["/uploads/image (12).jpg","efb37fee400582742424a4ce08951213"],["/uploads/image (13).jpg","39b65be84c273d8c8ce25b07e3a88458"],["/uploads/image (2).jpg","ebce485e964843507cf6e6c2857e7120"],["/uploads/image (3).jpg","ed37297914b027bb0711ba6da9b52fa0"],["/uploads/image (4).jpg","034c385aaf2e1214d8528f4f9952b8c0"],["/uploads/image (5).jpg","14fb04f8e827a8082479faa8ddfc0dda"],["/uploads/image (6).jpg","9ac2395672f4660123522163123d8738"],["/uploads/image (7).jpg","4a0352698e991d1162be93c7c9dc5294"],["/uploads/image (8).jpg","f491be409b7f2101b73bc44d84eca03f"],["/uploads/jvm.jpg","215961c8952dc89700ab77559ddc9226"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/pat.jpg","7a63243e6f945ba0c59b2d80e733c3ec"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/vue.png","628dde6d49320b541e50a70038379fcb"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
