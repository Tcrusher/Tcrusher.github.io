/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/05/06/hello-world.html","818bb5bde92b04c9286290869f1c8631"],["/2019/05/06/我的第一篇博客.html","0b23891c58dee998801b285600fbbdbc"],["/2019/07/10/Git常用命令.html","ccf0dc6b92328c33ae1b4566a74aed07"],["/2019/07/22/Redis基础.html","7dad2cdf6d5118e0e2ad98edfc2657a3"],["/2019/08/01/MyBatis笔记.html","4e2ef080fb4330d559f4db4f379fcdce"],["/2019/09/07/汇编语言.html","f616c27f9dff1e09fc0cfffb7dad683b"],["/2019/09/22/RequestMapping详解.html","2fa190173e8c0115d25de25e09cdc631"],["/2019/10/20/U盘文件夹变成exe应用程序.html","2b6cf73eed82335b9c6d49862d00f08a"],["/2019/12/04/Docker基础.html","e638bc1a887c3d4fed0395a900a6240d"],["/2020/01/12/深入理解Java虚拟机.html","c695fd91bda25c6b980dc2f7b27f88ef"],["/2020/02/03/Vue-js基础.html","0cefaa3ef5f4276a29ce34a91c9c2dd2"],["/2020/02/04/宝塔连接服务器.html","9cac349ab482cd8fe0002d0cd0aba471"],["/2020/02/09/Linux-shell常用命令.html","1b15dac22234c953a38a941d9e5000c8"],["/2020/03/15/PAT练习题.html","0c8de938ac604ecdb75a117e6211b63d"],["/2020/05/13/注册美区Apple-ID.html","a109439bb10fa4973571b97c058064a0"],["/2020/05/16/堪称神器的浏览器插件.html","e5ccc55c881dae834efea8807a04fe8a"],["/2020/07/08/计算机网络.html","c081be04e0c973ec90b5efe471f55c13"],["/2020/09/14/哲学家进餐问题.html","935a33108bbbcc64a4024d04d9d436ae"],["/2020/09/14/读者-写者问题.html","4ef0c88127cd11d3b9edf4c0395aa50b"],["/about/index.html","047ca1558d870aa7eb9d35656022218a"],["/archives/2019/05/index.html","5c38a6fb80c65c5541015d8860da1809"],["/archives/2019/07/index.html","67d964a6668408f36c52b3ef17b0e95d"],["/archives/2019/08/index.html","297623aa8b55d835f4c21e6e3210f2de"],["/archives/2019/09/index.html","826ea3214de19284dbb2c9162d25923c"],["/archives/2019/10/index.html","3062796448c5e75e7805b14e790c2fb0"],["/archives/2019/12/index.html","3eed45b35b65f5e2d7f87a267689dd17"],["/archives/2019/index.html","c233158b73644795a71d9611c39de2c6"],["/archives/2020/01/index.html","94f0784d5aa8cd20fbabcd108d49e41b"],["/archives/2020/02/index.html","1cd569ebba2741571f6e226845630cc6"],["/archives/2020/03/index.html","6473ea6b38b6608fb33a52ed5ff1d9cf"],["/archives/2020/05/index.html","da5c7715dca9a98954bed980ff2c95d7"],["/archives/2020/07/index.html","75c35f50fd1fdff76a1f4b0b4fbd50ce"],["/archives/2020/09/index.html","d807141ce964948394bdf0dcef17d94c"],["/archives/2020/index.html","76293c5b1a50304590db4670cfb11c7c"],["/archives/index.html","64272c1350311c9804d8b1544f074f01"],["/archives/page/2/index.html","ee0cd871449f955493216547119d4dac"],["/categories/Docker/index.html","bad83cdeedbfb9a81e6785488c613118"],["/categories/Git/index.html","8693e49e22efe5d098d153ce0ef752d8"],["/categories/JVM/Java虚拟机/index.html","533768990a8c3370b4a746e56b74722f"],["/categories/JVM/index.html","6ceea0eef14b39544c1a8d43c3a06bcc"],["/categories/Java/index.html","2d58ea99b4b4c43c4543cbe44ac1d453"],["/categories/Linux/index.html","49f9fae2618fef3d367a27f516a8e08b"],["/categories/Linux/shell命令/index.html","55e060dccbcada0df29b45f15327a6b7"],["/categories/MyBatis/index.html","cce43547bd6f2e2d988ada4d24a6c963"],["/categories/PAT/index.html","18bc6a8f7a2a28ae44feaa4b06880835"],["/categories/Redis/index.html","c31f57000744ffa1db4dcd4b45e30f23"],["/categories/Vue-js/index.html","48d98da68f0857e376d8a2f19974e335"],["/categories/hello-world/index.html","74a8d832d63cd33d666b83378c729cf2"],["/categories/index.html","e669a5d2fb55001883775058e048ccc2"],["/categories/操作系统/index.html","12ce735341a07a3437cb478904263b75"],["/categories/汇编语言/index.html","4113a14f11a71585d0dc3887e47dd893"],["/categories/翻墙/Apple-ID/index.html","9585c6a3c1063aed045524b988393c04"],["/categories/翻墙/index.html","2f579d47678b5acc827278ca961f25f3"],["/categories/计算机/index.html","bae4d068d3da6fc8d259435a19c3a9c6"],["/css/main.css","2ca728cc63eb804883fbfad7cde6b54b"],["/gallery/index.html","bfbc2c595492ef649fcd3cf59be19aa8"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","0a8e239b9ae04e42af7c3d99c9966d51"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","807365f5a7b701859d72ca1cefc5b53d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","46cc336b9705a909967d2817e8def366"],["/page/3/index.html","c884118d4549463468d9ea875b5c088d"],["/page/4/index.html","49d0fbac400012515cecb1dad959b735"],["/reading/index.html","d742c2130903be6fb40c47a691f39fcc"],["/sw-register.js","f4b5eafff0ff2c48be1653d09d989525"],["/tags/Algorithms/index.html","33eedbb48a33f970e3ceed5de474711e"],["/tags/Apple-ID/index.html","d019cfad5f628ec2176c126b7c8cacec"],["/tags/Docker/index.html","16eb80c80c5f2a0d8fbda217852a3f9f"],["/tags/Git/index.html","1092224e39f775c4ab05eb91be0a4f3e"],["/tags/GitHub/index.html","77f35326c7295d7953fb7852f9e4d7c0"],["/tags/JVM/index.html","08c175d5f97d03fdd4ba53e769a03cfc"],["/tags/Java/index.html","efdff1e91ff89bac7167adfdb82e15f8"],["/tags/Java虚拟机/index.html","d8cff86772299903949632e2eb88b237"],["/tags/Linux/index.html","034e5f53bd1dc2cbb20e858b871be550"],["/tags/MyBatis/index.html","84ccc5d6a1d3faacc11aef17ba90e79e"],["/tags/PAT/index.html","679b3f607a3054c4ea74123ec312e9ca"],["/tags/Programming-Assignment/index.html","edc352b5a1d55e9d2bbcb9c29d46d846"],["/tags/Redis/index.html","ceebdfe835140cc54a2b57a62986aa90"],["/tags/U盘/index.html","6a107ae2676a6dac37b249643b0d48be"],["/tags/Vue-js/index.html","c256f8a964d0638a963826b90f06fff6"],["/tags/coursera/index.html","8a7d05da6f7ac76cda6981dd552341b5"],["/tags/index.html","6378b18dfa1d738f7ce33141613258cb"],["/tags/shell命令/index.html","183c45ec1f064db4abafc672541553fc"],["/tags/宝塔面板/index.html","8a89d60a8bcc7ed25724384e13cdd591"],["/tags/操作系统/index.html","fef9d79f48f6e0833d4bda6d255ecd7a"],["/tags/死锁/index.html","c8d1a0d26fd18089cd698f00ae48555a"],["/tags/汇编语言/index.html","c7fd727fe03f78056f6693cbf64337aa"],["/tags/算法/index.html","15247fb5da641a9fad96e961be6e04e5"],["/tags/翻墙/index.html","5c5253722a53703dee92476bc8af1898"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/apple.jpg","ed37297914b027bb0711ba6da9b52fa0"],["/uploads/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/uploads/chrome.jpg","f491be409b7f2101b73bc44d84eca03f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/git.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/image (10).jpg","b081e7574ca2ef5c140181b0ba4003d6"],["/uploads/image (11).jpg","c1f4b43a6cc3accfa5e2be40b3e406cf"],["/uploads/image (12).jpg","efb37fee400582742424a4ce08951213"],["/uploads/image (13).jpg","39b65be84c273d8c8ce25b07e3a88458"],["/uploads/image (2).jpg","ebce485e964843507cf6e6c2857e7120"],["/uploads/image (6).jpg","9ac2395672f4660123522163123d8738"],["/uploads/image (7).jpg","4a0352698e991d1162be93c7c9dc5294"],["/uploads/internet.jpg","034c385aaf2e1214d8528f4f9952b8c0"],["/uploads/jvm.jpg","215961c8952dc89700ab77559ddc9226"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/os.jpg","14fb04f8e827a8082479faa8ddfc0dda"],["/uploads/pat.jpg","7a63243e6f945ba0c59b2d80e733c3ec"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/vue.png","628dde6d49320b541e50a70038379fcb"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
