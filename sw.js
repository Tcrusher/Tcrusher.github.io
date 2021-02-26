/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/05/06/hello-world.html","57b06faa9098f625c969d702502ee52f"],["/2019/05/06/我的第一篇博客.html","c04fb3c41dd42d62151c9f1a936f5d78"],["/2019/07/10/Git常用命令.html","3309f342ac877a654e891ac9fcaa7039"],["/2019/07/22/Redis基础.html","3d7a26862a8a9273076588c60f3e10b8"],["/2019/08/01/MyBatis笔记.html","fd6438a75389bf27504463f488547d09"],["/2019/09/07/汇编语言.html","a75f363c2a37200563023b7bd7dc577f"],["/2019/09/22/RequestMapping详解.html","2ec1b41c3cc756d8f757c5a30799be03"],["/2019/10/20/U盘文件夹变成exe应用程序.html","8d18663eeecaf764d6b399881af50a4b"],["/2019/12/04/Docker基础.html","6992cedf06ee6aff1c9f200794bba34d"],["/2020/01/12/深入理解Java虚拟机.html","fd9b2ed5a34dc0da6969ae3dd9c03fd9"],["/2020/02/03/Vue-js基础.html","0e2b56c8fef921ed1aa47ff3aa9f38a1"],["/2020/02/04/宝塔连接服务器.html","ab2f06c7f1e9a43cf5dbd9afc6553bd6"],["/2020/02/09/Linux-shell常用命令.html","6400677a8f6b224c0fbe4b3a4b97a6fb"],["/2020/03/15/PAT练习题.html","3b00ac3294d940d8a3cd3bec5dbc7979"],["/2020/05/13/注册美区Apple-ID.html","41ced8a949f1fb9433af1e708c259f18"],["/2020/05/16/堪称神器的浏览器插件.html","7a67e3bf7140f74957c4db110893d150"],["/2020/07/08/计算机网络.html","0fe9516095fda21e6be72479ab8f1350"],["/2020/09/14/哲学家进餐问题.html","8163303e41c062de494fbe9467c4b7cd"],["/2020/09/14/读者-写者问题.html","88bcfa2c2f54185c199a4f408ae45c4f"],["/2020/10/16/生产者-消费者问题.html","f6450fb6af7c1b4c85e83dab03773813"],["/2020/10/24/括号匹配——栈的应用.html","1c123cc6b0e673e230ba976b2c8ca5fd"],["/2021/01/06/List详解.html","9f808194cf3bc2a9bb145017e3d5de86"],["/about/index.html","57e3780ba4d3b663e03cd2f992f8f2e8"],["/archives/2019/05/index.html","e330ea995ed98c8be8e71745ea34b379"],["/archives/2019/07/index.html","f3aec82969dbb5c5bb2d0dc080297936"],["/archives/2019/08/index.html","550b7431c0225bf6d35a1fb792ba10f5"],["/archives/2019/09/index.html","55fb9aded567bb854e33e081fe175179"],["/archives/2019/10/index.html","df6c3e7788d3c69f59f7302ed865bcf1"],["/archives/2019/12/index.html","e9c592a137143366d552c6213060a1f0"],["/archives/2019/index.html","27f3c4abfe03810e6096490006581029"],["/archives/2020/01/index.html","1b9118b0ae7d8425852261a78b4bdddc"],["/archives/2020/02/index.html","a3e5f3a1f11ebce21759294c178b3f5a"],["/archives/2020/03/index.html","5ca9ee55c1627da115d814fee06a4e67"],["/archives/2020/05/index.html","8c77234c1380e7e2dacae5472d894b30"],["/archives/2020/07/index.html","eb70160e3f68db9a24fc746f727ce72b"],["/archives/2020/09/index.html","f283ff9330bf11d543fd3d00049998e3"],["/archives/2020/10/index.html","37d52c9120f4a0de0ac01c77053e2bc5"],["/archives/2020/index.html","99ad2babfeec5cacae5a14ff8a55a77d"],["/archives/2020/page/2/index.html","a8f4ae54cd05d118591154374ae8a036"],["/archives/2021/01/index.html","f4b719fe04b40c02443576f4770a7d9d"],["/archives/2021/index.html","0d7d6e14ba9de718231db290f721d0c4"],["/archives/index.html","285a78c96e5658847f1a72edb1de5219"],["/archives/page/2/index.html","d0fbf9372f9a09bd15e815cd5580056e"],["/archives/page/3/index.html","b3b7c303c6e9e37b3e0bd7103e769ef4"],["/categories/Docker/index.html","ff47594c6862efac89d2fde8a4edddfa"],["/categories/Git/index.html","e3e722a3917c96b5a0ab4049b1cb4594"],["/categories/JVM/Java虚拟机/index.html","0f127b7b6bac74f1dbfb85a1a013a80d"],["/categories/JVM/index.html","78293c1781b725c8bd35d454faa731c8"],["/categories/Java/index.html","26e66d2602bc825038259b8994734cca"],["/categories/Linux/index.html","2a4c828b5159dcb63717d9ba7c9151e4"],["/categories/Linux/shell命令/index.html","db7cd9a4f2495a100ea744f96ef62e4e"],["/categories/List/Java/index.html","57106f4c811a21ea352ebe3af49568c4"],["/categories/List/index.html","3d8516b3679008d4d2ca4ceb1c8c1aa0"],["/categories/MyBatis/index.html","2e0012e71750eb6df64f2a0c99d60cc6"],["/categories/PAT/index.html","31971d7f300fdd00a1ec5425c7f7bba5"],["/categories/Redis/index.html","38c3c3b73e8dfe08fe336b2fbbdca440"],["/categories/Vue-js/index.html","f4f0a1b4feca053260733078463f033d"],["/categories/hello-world/index.html","260d9232667ed8ad3694a7c35bfc5ab3"],["/categories/index.html","1bc3980f82b414b95254f75c6f421896"],["/categories/操作系统/index.html","0c77913cff1e8bc42cef15703dfd8d3b"],["/categories/数据结构/index.html","6215fdabe07f050998a5e1d75ac22a0e"],["/categories/汇编语言/index.html","53026e4ff434e6d932cea7a6a214e6e0"],["/categories/翻墙/Apple-ID/index.html","c470596aa9f31c80f13a99b1988e2608"],["/categories/翻墙/index.html","549d0242b7e68a7bdfa57333721c9516"],["/categories/计算机/index.html","ef7a69a2c4242aaf86fd3aa9ada484f3"],["/css/main.css","0d9a364a083423f2e1f0f98215a680d7"],["/gallery/index.html","3777befd29693168ac83d826b78adfb0"],["/images/1.svg","ddad9027e42111ccd5b466bc18188970"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/images/bg-back.jpg","ca957ab7da42ace05909c4101a011727"],["/images/bg.jpg","3ba6fb515accc795fcc3e5e008f3d67f"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wallhaven-248751.png","ae4053a9677ac8d9d5acc21087c7a113"],["/index.html","eaf66e563303725e4019e545ee0e6204"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/clicklove.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/js/src/post-details.js","07b418717dae7319dacfb01d75ef2e19"],["/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/lib/canvas-nest/README.html","807365f5a7b701859d72ca1cefc5b53d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/assets/moc/hibiki.2048/texture_00.png","730252369524e7a1c21308cb84acd465"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","97b62c6cf54717a283acf23358590446"],["/page/3/index.html","a0fa53b5eb78aa0e818594020bdb5524"],["/page/4/index.html","4fc430b25688052a53e7b3517dabae0b"],["/page/5/index.html","a6f09160c39eaf5869ed9f8cb1284f02"],["/reading/index.html","21322b737f076b6c2843cf3360c4b689"],["/sw-register.js","3d3790de0fcd64736487db579cf3a445"],["/tags/Algorithms/index.html","18e22b9abb893077aac6ff55e961fc01"],["/tags/Apple-ID/index.html","b2a835396a84f930df107417c848ca70"],["/tags/Docker/index.html","32c7bd5a60587d59b8fe705cfa6100e2"],["/tags/Git/index.html","d4f46784452fb38c53c70883caba3803"],["/tags/GitHub/index.html","6fc96c9fe8d81aef3bc839276ca04068"],["/tags/JVM/index.html","438dac793d2a718c9536618d1600894f"],["/tags/Java/index.html","c45194e4a6ecd5a99cf03eff3a417e52"],["/tags/Java虚拟机/index.html","1e93636f6dd81880a0d3d18e24b78f43"],["/tags/Linux/index.html","56f427a4b1e8e62163fa90e7a9c68bd2"],["/tags/List/index.html","10f430557d238824538e50b7ab7ef523"],["/tags/MyBatis/index.html","9eb997fdd30eea014874ff9daabdc16a"],["/tags/PAT/index.html","ef29873d35f07d5e65056e2c1ed94165"],["/tags/Programming-Assignment/index.html","7f50da91893fb4857a16d4bc02a3eb58"],["/tags/Redis/index.html","b7e0183dab72723566e40d9733cad0d6"],["/tags/U盘/index.html","35eb6f60a5fcc5cde69675ecf562485c"],["/tags/Vue-js/index.html","d3cc03029e60e34f2c26031270d5b8a7"],["/tags/coursera/index.html","0141ddb8efed66265b5c160ff1f829c5"],["/tags/index.html","3b1aa128134fdd8b7956712de91c4345"],["/tags/shell命令/index.html","dabcf219a1b5dada091504df79b8988f"],["/tags/宝塔面板/index.html","ab4286b05752659d6187f610a0c368b9"],["/tags/操作系统/index.html","e1f36ac182569e90c0987253e8066afa"],["/tags/数据结构/index.html","7803d5f4bf14e5f5c6119ff8c38c1a20"],["/tags/栈/index.html","1b79b1d454beb5de215132196e9e8674"],["/tags/死锁/index.html","938f038d56ba4fbc484086eb35de375e"],["/tags/汇编语言/index.html","612bbd82ce30b145dc58324386bf34bd"],["/tags/算法/index.html","5fe81dfaf467edcac6e03568226d6834"],["/tags/翻墙/index.html","b438cc8134cd16dc14761e6dd59230c3"],["/uploads/a1.jpg","99f504e5be12759c336fc90a084ba898"],["/uploads/a2.png","71acbbe7b6ece8b68b9ded8a777aa026"],["/uploads/a3.png","20897e592eb079e47df3cb35ada71002"],["/uploads/apple.jpg","ed37297914b027bb0711ba6da9b52fa0"],["/uploads/avatar.jpg","f3711c12fd254dbc3242ef0e0ffb2ccb"],["/uploads/chrome.jpg","f491be409b7f2101b73bc44d84eca03f"],["/uploads/cmg.jpg","a9de4661686a974d3f3bcf77d06a543e"],["/uploads/data.jpg","39b65be84c273d8c8ce25b07e3a88458"],["/uploads/fork.png","f7a57ef1f7dfa3e1a56bc3713be148c2"],["/uploads/git.jpg","9a685f65a018d1b3423e3d67d2513ceb"],["/uploads/image (10).jpg","b081e7574ca2ef5c140181b0ba4003d6"],["/uploads/image (11).jpg","c1f4b43a6cc3accfa5e2be40b3e406cf"],["/uploads/image (12).jpg","efb37fee400582742424a4ce08951213"],["/uploads/image (2).jpg","ebce485e964843507cf6e6c2857e7120"],["/uploads/image.jpg","4a0352698e991d1162be93c7c9dc5294"],["/uploads/internet.jpg","5e8029b8630289b7c3f623c6ad05e2a0"],["/uploads/jvm.jpg","215961c8952dc89700ab77559ddc9226"],["/uploads/jztm.jpg","9f92fe1db54705ce55c74bd708234fd5"],["/uploads/linux.jpg","cc8eb75a00cae438b994e9c3b696d82a"],["/uploads/os.jpg","14fb04f8e827a8082479faa8ddfc0dda"],["/uploads/os1.jpg","9ac2395672f4660123522163123d8738"],["/uploads/pat.jpg","7a63243e6f945ba0c59b2d80e733c3ec"],["/uploads/paw3.png","ae4053a9677ac8d9d5acc21087c7a113"],["/uploads/pla1.jpg","de60fa9adcf1dc002db753138da71b78"],["/uploads/vue.png","628dde6d49320b541e50a70038379fcb"],["/uploads/xmbd.jpg","7a96ee5228e141735fa2b5432ae9a576"]];
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
