webpackJsonp([9],{Gij8:function(e,n){},tIKG:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("div",[r("div",[e._v("\n        dev环境跨域 --需修改proxyTable配置即可\n        proxyTable: {  "),r("br"),e._v("\n            '/API_SOHO': { // 要代理的接口名"),r("br"),e._v("\n            target: 'http://pv.sohu.com', // 要代理的接口地址"),r("br"),e._v("\n            changeOrigin: true, // 允许跨域"),r("br"),e._v("\n            pathRewrite: { '^/API_SOHO': '' } // 接口名重写 }"),r("br"),e._v("\n        },\n    ")]),e._v(" "),r("div",[e._v("\n        prod环境跨域 --修改Nginx的配置文件 xxx.conf"),r("br"),e._v("\n        location /api {  rewrite  ^.+api/?(.*)$ /$1 break; include  uwsgi_params; proxy_pass   https://www.xxxxx.cn:444; #此处修改为自己的请求地址}"),r("br"),e._v("\n        ###两处api为本地开发时，在config/index.js中的proxyTable: {}配置的请求代理        ###根据具体情况修改\n    ")])])}]};var i=r("VU/8")({name:"VueCrossDomain"},t,!1,function(e){r("Gij8")},"data-v-5b88a7a0",null);n.default=i.exports}});
//# sourceMappingURL=9.a15eead7a79f61ff0d0d.js.map