(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    125: function(e, t, n) {
        "use strict";
        n.r(t);
        var c = n(0)
          , o = n(5)
          , s = n(4)
          , i = n(12)
          , a = n(6)
          , r = n(9)
          , l = n(15);
        function b(e) {
            Object(c.e)(e, "svelte-vgthxo", '.container.svelte-vgthxo.svelte-vgthxo{background:transparent;color:#555;width:100%;box-sizing:border-box;border:3px dashed currentColor;transition:.2s border-color, .2s color;border-radius:20px;min-height:90px;font:inherit;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;position:relative;cursor:pointer;padding:4px}[theme="dark"] .container.svelte-vgthxo.svelte-vgthxo{color:#aaa}.dropping.svelte-vgthxo.svelte-vgthxo,.container.svelte-vgthxo.svelte-vgthxo:focus-visible,.container.svelte-vgthxo.svelte-vgthxo:active{color:rgb(79, 123, 211)}[theme="dark"] .dropping.svelte-vgthxo.svelte-vgthxo,[theme="dark"] .container.svelte-vgthxo.svelte-vgthxo:focus-visible,[theme="dark"] .container.svelte-vgthxo.svelte-vgthxo:active{color:rgb(178, 195, 228)}.placeholder.svelte-vgthxo.svelte-vgthxo{font-size:1.5em}.selected.svelte-vgthxo.svelte-vgthxo{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.selected.svelte-vgthxo>.svelte-vgthxo:not(:last-child){margin-right:12px}')
        }
        function d(e, t, n) {
            const c = e.slice();
            return c[10] = t[n],
            c
        }
        function p(e) {
            let t, n, o = e[4]("fileInput.select") + "";
            return {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.Y)(o),
                    Object(c.g)(t, "class", "placeholder svelte-vgthxo")
                },
                m(e, o) {
                    Object(c.E)(e, t, o),
                    Object(c.d)(t, n)
                },
                p(e, t) {
                    16 & t && o !== (o = e[4]("fileInput.select") + "") && Object(c.Q)(n, o)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function O(e) {
            let t, n, o, s, i, a, r, l, b, p = e[4]("fileInput.selected").replace("{file}", e[0].name) + "", O = e[4]("fileInput.clear") + "", u = e[1], g = [];
            for (let t = 0; t < u.length; t += 1)
                g[t] = j(d(e, u, t));
            return {
                c() {
                    t = Object(c.v)("div");
                    for (let e = 0; e < g.length; e += 1)
                        g[e].c();
                    n = Object(c.U)(),
                    o = Object(c.v)("div"),
                    s = Object(c.Y)(p),
                    i = Object(c.U)(),
                    a = Object(c.v)("button"),
                    r = Object(c.Y)(O),
                    Object(c.g)(o, "class", "svelte-vgthxo"),
                    Object(c.g)(a, "class", "svelte-vgthxo"),
                    Object(c.g)(t, "class", "selected svelte-vgthxo")
                },
                m(d, p) {
                    Object(c.E)(d, t, p);
                    for (let e = 0; e < g.length; e += 1)
                        g[e] && g[e].m(t, null);
                    Object(c.d)(t, n),
                    Object(c.d)(t, o),
                    Object(c.d)(o, s),
                    Object(c.d)(t, i),
                    Object(c.d)(t, a),
                    Object(c.d)(a, r),
                    l || (b = Object(c.G)(a, "click", e[5]),
                    l = !0)
                },
                p(e, o) {
                    if (6 & o) {
                        let c;
                        for (u = e[1],
                        c = 0; c < u.length; c += 1) {
                            const s = d(e, u, c);
                            g[c] ? g[c].p(s, o) : (g[c] = j(s),
                            g[c].c(),
                            g[c].m(t, n))
                        }
                        for (; c < g.length; c += 1)
                            g[c].d(1);
                        g.length = u.length
                    }
                    17 & o && p !== (p = e[4]("fileInput.selected").replace("{file}", e[0].name) + "") && Object(c.Q)(s, p),
                    16 & o && O !== (O = e[4]("fileInput.clear") + "") && Object(c.Q)(r, O)
                },
                d(e) {
                    e && Object(c.u)(t),
                    Object(c.t)(g, e),
                    l = !1,
                    b()
                }
            }
        }
        function j(e) {
            let t, n, o, s;
            return {
                c() {
                    t = Object(c.v)("img"),
                    Object(c.W)(t.src, n = e[2]) || Object(c.g)(t, "src", n),
                    Object(c.g)(t, "width", o = e[10][0]),
                    Object(c.g)(t, "height", s = e[10][1]),
                    Object(c.g)(t, "class", "svelte-vgthxo")
                },
                m(e, n) {
                    Object(c.E)(e, t, n)
                },
                p(e, i) {
                    4 & i && !Object(c.W)(t.src, n = e[2]) && Object(c.g)(t, "src", n),
                    2 & i && o !== (o = e[10][0]) && Object(c.g)(t, "width", o),
                    2 & i && s !== (s = e[10][1]) && Object(c.g)(t, "height", s)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function u(e) {
            let t, n, o;
            function s(e, t) {
                return e[0] ? O : p
            }
            let i = s(e)
              , a = i(e);
            return {
                c() {
                    t = Object(c.v)("button"),
                    a.c(),
                    Object(c.g)(t, "class", "container svelte-vgthxo"),
                    Object(c.bb)(t, "dropping", e[3])
                },
                m(s, i) {
                    Object(c.E)(s, t, i),
                    a.m(t, null),
                    n || (o = Object(c.G)(t, "click", e[6]),
                    n = !0)
                },
                p(e, n) {
                    i === (i = s(e)) && a ? a.p(e, n) : (a.d(1),
                    a = i(e),
                    a && (a.c(),
                    a.m(t, null))),
                    8 & n && Object(c.bb)(t, "dropping", e[3])
                },
                d(e) {
                    e && Object(c.u)(t),
                    a.d(),
                    n = !1,
                    o()
                }
            }
        }
        function g(e) {
            let t, n, o;
            function s(t) {
                e[8](t)
            }
            let i = {
                $$slots: {
                    default: [u]
                },
                $$scope: {
                    ctx: e
                }
            };
            return void 0 !== e[3] && (i.dropping = e[3]),
            t = new l.a({
                props: i
            }),
            c.i.push(()=>Object(c.h)(t, "dropping", s)),
            t.$on("drop", e[7]),
            {
                c() {
                    Object(c.o)(t.$$.fragment)
                },
                m(e, n) {
                    Object(c.H)(t, e, n),
                    o = !0
                },
                p(e, [o]) {
                    const s = {};
                    8223 & o && (s.$$scope = {
                        dirty: o,
                        ctx: e
                    }),
                    !n && 8 & o && (n = !0,
                    s.dropping = e[3],
                    Object(c.b)(()=>n = !1)),
                    t.$set(s)
                },
                i(e) {
                    o || (Object(c.cb)(t.$$.fragment, e),
                    o = !0)
                },
                o(e) {
                    Object(c.db)(t.$$.fragment, e),
                    o = !1
                },
                d(e) {
                    Object(c.s)(t, e)
                }
            }
        }
        function m(e, t, n) {
            let o;
            Object(c.l)(e, s.a, e=>n(4, o = e));
            const i = [".png", ".jpg", ".jpeg", ".bmp", ".svg", ".ico", ".gif"];
            let a, r, {file: l} = t, {previewSizes: b} = t;
            return e.$$set = e=>{
                "file"in e && n(0, l = e.file),
                "previewSizes"in e && n(1, b = e.previewSizes)
            }
            ,
            e.$$.update = ()=>{
                5 & e.$$.dirty && (l ? (r && URL.revokeObjectURL(r),
                n(2, r = URL.createObjectURL(l))) : r && (URL.revokeObjectURL(r),
                n(2, r = null)))
            }
            ,
            [l, b, r, a, o, e=>{
                e.stopPropagation(),
                n(0, l = null)
            }
            , ()=>{
                const e = document.createElement("input");
                e.type = "file",
                e.accept = i.join(","),
                e.addEventListener("change", e=>{
                    const t = e.target.files;
                    t.length ? n(0, l = t[0]) : n(0, l = null)
                }
                ),
                document.body.appendChild(e),
                e.click(),
                e.remove()
            }
            , ({detail: e})=>{
                const t = e.files[0];
                i.some(e=>t.name.endsWith(e)) && n(0, l = t)
            }
            , function(e) {
                a = e,
                n(3, a)
            }
            ]
        }
        class h extends c.a {
            constructor(e) {
                super(),
                Object(c.C)(this, e, m, g, c.M, {
                    file: 0,
                    previewSizes: 1
                }, b)
            }
        }
        var v = h;
        function f(e) {
            Object(c.e)(e, "svelte-1vgg5z0", "textarea.svelte-1vgg5z0{box-sizing:border-box;width:100%;min-width:100%;height:100px}")
        }
        function w(e) {
            let t, n, o, s;
            return {
                c() {
                    t = Object(c.v)("textarea"),
                    t.value = n = e[0].join("\n"),
                    Object(c.g)(t, "class", "svelte-1vgg5z0")
                },
                m(n, i) {
                    Object(c.E)(n, t, i),
                    o || (s = Object(c.G)(t, "change", e[1]),
                    o = !0)
                },
                p(e, [c]) {
                    1 & c && n !== (n = e[0].join("\n")) && (t.value = n)
                },
                i: c.I,
                o: c.I,
                d(e) {
                    e && Object(c.u)(t),
                    o = !1,
                    s()
                }
            }
        }
        function x(e, t, n) {
            let {extensions: c} = t;
            return e.$$set = e=>{
                "extensions"in e && n(0, c = e.extensions)
            }
            ,
            [c, e=>{
                n(0, c = e.target.value.split("\n").filter(e=>e))
            }
            ]
        }
        class k extends c.a {
            constructor(e) {
                super(),
                Object(c.C)(this, e, x, w, c.M, {
                    extensions: 0
                }, f)
            }
        }
        var y = k;
        function $(e) {
            Object(c.e)(e, "svelte-fiwpjx", "a.svelte-fiwpjx{text-decoration:none}a.svelte-fiwpjx:hover{text-decoration:underline}")
        }
        function E(e) {
            let t, n, o;
            return {
                c() {
                    t = Object(c.v)("a"),
                    n = Object(c.Y)("(?)"),
                    Object(c.g)(t, "href", e[1]),
                    Object(c.g)(t, "title", o = e[0]("options.learnMore")),
                    Object(c.g)(t, "target", "_blank"),
                    Object(c.g)(t, "rel", "noopener noreferrer"),
                    Object(c.g)(t, "class", "svelte-fiwpjx")
                },
                m(e, o) {
                    Object(c.E)(e, t, o),
                    Object(c.d)(t, n)
                },
                p(e, [n]) {
                    1 & n && o !== (o = e[0]("options.learnMore")) && Object(c.g)(t, "title", o)
                },
                i: c.I,
                o: c.I,
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function S(e, t, n) {
            let o;
            Object(c.l)(e, s.a, e=>n(0, o = e));
            let {slug: i} = t
              , {href: a} = t;
            // const r = i ? "https://docs.turbowarp.org/" + i : a;
            // !!! CHANGE !!!
            // const r = i ? "https://github.com/Mixality/Sidekick#readme/" + i : a;
            const r = i ? "https://github.com/Menersar/Sidekick#readme/" + i : a;
            return e.$$set = e=>{
                "slug"in e && n(2, i = e.slug),
                "href"in e && n(3, a = e.href)
            }
            ,
            [o, r, i, a]
        }
        class U extends c.a {
            constructor(e) {
                super(),
                Object(c.C)(this, e, S, E, c.M, {
                    slug: 2,
                    href: 3
                }, $)
            }
        }
        var _ = U;
        function C(e) {
            let t, n, o;
            return {
                c() {
                    t = Object(c.v)("input"),
                    Object(c.g)(t, "type", "color")
                },
                m(s, i) {
                    Object(c.E)(s, t, i),
                    Object(c.R)(t, e[0]),
                    n || (o = Object(c.G)(t, "input", e[1]),
                    n = !0)
                },
                p(e, [n]) {
                    1 & n && Object(c.R)(t, e[0])
                },
                i: c.I,
                o: c.I,
                d(e) {
                    e && Object(c.u)(t),
                    n = !1,
                    o()
                }
            }
        }
        function R(e, t, n) {
            let {value: c} = t;
            return e.$$set = e=>{
                "value"in e && n(0, c = e.value)
            }
            ,
            [c, function() {
                c = this.value,
                n(0, c)
            }
            ]
        }
        class T extends c.a {
            constructor(e) {
                super(),
                Object(c.C)(this, e, R, C, c.M, {
                    value: 0
                })
            }
        }
        var q = T
          , I = n(19);
        var A = async e=>{
            if ("object" == typeof crypto && crypto.subtle && crypto.subtle.digest) {
                const t = await crypto.subtle.digest("SHA-256", e);
                return Array.from(new Uint8Array(t)).map(e=>e.toString(16).padStart(2, "0")).join("")
            }
            const t = new (0,
            (await Promise.all([n.e(0), n.e(5)]).then(n.t.bind(null, 123, 7))).default);
            return t.update(new Uint8Array(e)),
            t.digest("hex")
        }
        ;
        var L = e=>e.replace(/["'<>&]/g, e=>{
            switch (e) {
            case '"':
                return "&quot;";
            case "'":
                return "&apos;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;"
            }
        }
        );
        // !!! CHANGE !!!
        // const N = e=>["https://packagerdata.turbowarp.org/" + e, "https://blobs.turbowarp.xyz/" + e]
        // const N = e=>["https://mixality.github.io/Sidekick/packagerdata/" + e, "https://mixality.github.io/Sidekick/blobs/" + e]
        const N = e=>["https://menersar.github.io/Sidekick/packagerdata/" + e, "https://menersar.github.io/Sidekick/blobs/" + e]
          , P = e=>"scaffolding/" + e;
        var M = {
            "nwjs-win64": {
                src: N("nwjs-v0.68.1-win-x64.zip"),
                sha256: "82527d29f060bad7ec041f7c0536b1376f8bad5e5584adf7e3cf7205755a106c",
                estimatedSize: 119821598
            },
            "nwjs-win32": {
                src: N("nwjs-v0.68.1-win-ia32.zip"),
                sha256: "7dd3104c2726082a8acd8973af2b2b223bc97960b722ec141b9bf07d84a0281b",
                estimatedSize: 112613344
            },
            "nwjs-mac": {
                src: N("nwjs-v0.68.1-osx-x64.zip"),
                sha256: "4b1356302738a45f7ee212f6ecb997eb5d31403bfc45a7dd58429c968a1f581a",
                estimatedSize: 119091132
            },
            "nwjs-linux-x64": {
                src: N("nwjs-v0.68.1-linux-x64.zip"),
                sha256: "5f597add1a2b6f13592117cc955111cea8211c13b21165e29c6616f385df5b94",
                estimatedSize: 135854818
            },
            "electron-win32": {
                src: N("electron-v21.2.3-win32-ia32.zip"),
                sha256: "ee813a8dc4050c7d3a3cc80233bf5f4ddd0483e1c934eb69d735a3b3563ce3bf",
                estimatedSize: 89317110
            },
            "electron-win64": {
                src: N("electron-v21.2.3-win32-x64.zip"),
                sha256: "b1695f0528567ecc1f7e667520c7770321df35d058841e24c4e9793f4e43e56a",
                estimatedSize: 95073928
            },
            "electron-mac": {
                src: N("electron-v21.0.1-macos-universal.zip"),
                sha256: "c31d1ef26f7b6230881a11308ebf8f4487a1a3fb7a151da0972fad77bc9e6acf",
                estimatedSize: 154789837
            },
            "electron-linux64": {
                src: N("electron-v21.0.1-linux-x64.zip"),
                sha256: "4fd6d7b5a65f44a43165ae77d0484db992b30d6efba478a192e984506fbd52b6",
                estimatedSize: 90635371
            },
            "webview-mac": {
                src: N("WebView-macos-5.zip"),
                sha256: "b5636571cd9be2aae2f6dac1ab090fdf829c8fdfe91f462cc2feb2d324705f9f",
                estimatedSize: 3425601
            },
            scaffolding: {
                src: P("scaffolding-full.js"),
                estimatedSize: 4564032,
                useBuildId: !0
            },
            "scaffolding-min": {
                src: P("scaffolding-min.js"),
                estimatedSize: 2530463,
                useBuildId: !0
            },
            addons: {
                src: P("addons.js"),
                estimatedSize: 19931,
                useBuildId: !0
            }
        }
          , B = n(11)
          , H = n(14);
        const z = e=>new Promise((t,n)=>{
            e.toBlob(e=>{
                e ? t(e) : n(new Error("Could not read <canvas> as blob"))
            }
            )
        }
        );
        var F = async e=>{
            const {Icns: t, Buffer: c} = await Promise.all([n.e(0), n.e(1)]).then(n.bind(null, 124))
              , o = new Blob([e],{
                type: "image/png"
            })
              , s = URL.createObjectURL(o)
              , i = await (a = s,
            new Promise((e,t)=>{
                const n = new Image;
                n.onload = ()=>e(n),
                n.onerror = ()=>t(new Error("Could not load image: " + a)),
                n.src = a
            }
            ));
            var a;
            const r = [{
                type: "ic04",
                size: 16
            }, {
                type: "ic07",
                size: 128
            }, {
                type: "ic08",
                size: 256
            }, {
                type: "ic09",
                size: 512
            }, {
                type: "ic10",
                size: 1024
            }, {
                type: "ic11",
                size: 32
            }, {
                type: "ic12",
                size: 64
            }, {
                type: "ic13",
                size: 256
            }, {
                type: "ic14",
                size: 512
            }].filter(e=>16 === e.size || i.width >= e.size && i.height >= e.size)
              , l = document.createElement("canvas")
              , b = l.getContext("2d");
            if (!b)
                throw new Error("cannot get canvas rendering context");
            const d = new t.Icns;
            for (const e of r) {
                const n = e.size;
                l.width = n,
                l.height = n,
                b.drawImage(i, 0, 0, n, n);
                const o = await z(l)
                  , s = await Object(H.a)(o)
                  , a = await t.IcnsImage.fromPNG(c.from(s), e.type);
                d.append(a)
            }
            return d.data
        }
        ;
        const Y = "fd3dcd7b67c06e15fdc40cc6928db34a67ab2f7f9d9592c081d27251bb40a7a6"
          , W = e=>{
            const t = e=>(40 === e && (e = 60),
            41 === e && (e = 62),
            e - 42)
              , n = e.indexOf(",")
              , c = +e.substring(0, n).split("").map(e=>String.fromCharCode(e.charCodeAt(0) - 49)).join("")
              , o = new ArrayBuffer((s = c) % 4 == 0 ? s : s + (4 - s % 4));
            var s;
            const i = new Uint32Array(o);
            for (let c = n + 1, o = 0; c < e.length; c += 5,
            o++)
                i[o] = 85 * t(e.charCodeAt(c + 4)) * 85 * 85 * 85 + 85 * t(e.charCodeAt(c + 3)) * 85 * 85 + 85 * t(e.charCodeAt(c + 2)) * 85 + 85 * t(e.charCodeAt(c + 1)) + t(e.charCodeAt(c));
            return new Uint8Array(o,0,c)
        }
          , Q = e=>{
            if ("dict" === e.tagName) {
                const t = {};
                for (const n of e.children)
                    "key" === n.tagName && (t[n.textContent] = Q(n.nextElementSibling));
                return t
            }
            return "array" === e.tagName ? Array.from(e.children).map(Q) : "string" === e.tagName ? e.textContent : "true" === e.tagName || "false" !== e.tagName && (console.warn("unknown plist xml", e),
            null)
        }
          , D = (e,t)=>{
            if (Array.isArray(t)) {
                const n = e.createElement("array");
                for (const c of t)
                    n.appendChild(D(e, c));
                return n
            }
            if ("object" == typeof t) {
                const n = e.createElement("dict");
                for (const [c,o] of Object.entries(t)) {
                    const t = e.createElement("key");
                    t.textContent = c;
                    const s = D(e, o);
                    n.appendChild(t),
                    n.appendChild(s)
                }
                return n
            }
            if ("string" == typeof t) {
                const n = e.createElement("string");
                return n.textContent = t,
                n
            }
            if ("boolean" == typeof t) {
                return e.createElement(t.toString())
            }
            return console.warn("unknown plist value", t),
            D(e, "" + t)
        }
        ;
        var V = n(1)
          , G = n(3);
        const J = e=>{
            const t = (e=>{
                const t = e.red / 255
                  , n = e.green / 255
                  , c = e.blue / 255
                  , o = Math.min(Math.min(t, n), c)
                  , s = Math.max(Math.max(t, n), c);
                let i = 0
                  , a = 0;
                if (o !== s) {
                    i = 60 * ((t === o ? 3 : n === o ? 5 : 1) - (t === o ? n - c : n === o ? c - t : t - n) / (s - o)) % 360,
                    a = (s - o) / s
                }
                return {
                    hue: i,
                    saturation: a,
                    value: s
                }
            }
            )((e=>{
                const t = parseInt(e.substring(1), 16);
                return {
                    red: t >> 16 & 255,
                    green: t >> 8 & 255,
                    blue: 255 & t
                }
            }
            )(e));
            t.value -= .1;
            return (e=>{
                const t = e=>e.toString(16).padStart(2, "0");
                return `#${t(e.red)}${t(e.green)}${t(e.blue)}`
            }
            )((e=>{
                let t = e.hue % 360;
                t < 0 && (t += 360);
                const n = Math.max(0, Math.min(e.saturation, 1))
                  , c = Math.max(0, Math.min(e.value, 1))
                  , o = Math.floor(t / 60)
                  , s = t / 60 - o
                  , i = c * (1 - n)
                  , a = c * (1 - n * s)
                  , r = c * (1 - n * (1 - s));
                let l, b, d;
                switch (o) {
                default:
                case 0:
                    l = c,
                    b = r,
                    d = i;
                    break;
                case 1:
                    l = a,
                    b = c,
                    d = i;
                    break;
                case 2:
                    l = i,
                    b = c,
                    d = r;
                    break;
                case 3:
                    l = i,
                    b = a,
                    d = c;
                    break;
                case 4:
                    l = r,
                    b = i,
                    d = c;
                    break;
                case 5:
                    l = c,
                    b = i,
                    d = a
                }
                return {
                    red: Math.floor(255 * l),
                    green: Math.floor(255 * b),
                    blue: Math.floor(255 * d)
                }
            }
            )(t))
        }
        ;
        let Z = null;
        const K = async()=>(await Promise.all([n.e(0), n.e(2)]).then(n.t.bind(null, 122, 7))).default
          , X = (e,t,n)=>{
            e.files[t] = n
        }
          , ee = {
            title: V.APP_NAME,
            homepage: V.WEBSITE,
            license: V.COPYRIGHT_NOTICE
        }
          , te = {
            title: "Scratch",
            homepage: "https://scratch.mit.edu/",
            license: 'Copyright (c) 2016, Massachusetts Institute of Technology\nAll rights reserved.\n\nRedistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n\n1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n\n2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n\n3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
        }
          , ne = {
            title: "Electron",
            homepage: "https://www.electronjs.org/",
            license: 'Copyright (c) Electron contributors\nCopyright (c) 2013-2020 GitHub Inc.\n\nPermission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n"Software"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
        }
          , ce = `/*!\nParts of this script are from the ${V.APP_NAME} <${V.WEBSITE}>, licensed as follows:\n ${ee.license}\n\nParts of this script are from Scratch <https://scratch.mit.edu/>, licensed as follows:\n ${te.license}\n*/\n`
          , oe = e=>`<style>body { font-family: sans-serif; }</style>${`<h2>The following entries were added by the ${V.APP_NAME}</h2>`}${e.map(({title: e, license: t, homepage: n},c)=>`\n<div class="product">\n<span class="title">${L(e)}</span>\n<span class="homepage"><a href="${L(n)}">homepage</a></span>\n<input type="checkbox" hidden id="p4-${c}">\n<label class="show" for="p4-${c}" tabindex="0"></label>\n<div class="licence">\n<pre>${L(t)}</pre>\n</div>\n</div>\n`).join("\n")}`
          , se = e=>`When you try to double click on the app to run it, you will probably see this warning:\n"${e.app.packageName} cannot be opened because the developer cannot be verified."\nThis is normal. Press cancel.\n\nTo run the app:\n1) Control+click on the app file (${e.app.packageName} in the same folder as this document) and select "Open".\n2) If a warning appears, select "Open" if it's an option.\n3) If a warning appears but "Open" isn't an option, press "Cancel" and repeat from step 1.\n   The open button will appear the second time the warning appears.\n\nAfter completing these steps, the app should run without any further warnings.\n\nFeel free to drag the app into your Applications folder.\n`;
        class ie extends I.b {
            constructor() {
                super(),
                this.project = null,
                this.options = ie.DEFAULT_OPTIONS(),
                this.aborted = !1,
                this.used = !1
            }
            abort() {
                this.aborted || (this.aborted = !0,
                this.dispatchEvent(new Event("abort")))
            }
            ensureNotAborted() {
                if (this.aborted)
                    throw new Error("Aborted")
            }
            async fetchLargeAsset(e, t) {
                this.ensureNotAborted();
                const n = M[e];
                if (!n)
                    throw new Error("Invalid asset: " + e);
                if ("undefined" != typeof __ASSETS__ && __ASSETS__[n.src])
                    return __ASSETS__[n.src];
                const c = t=>this.dispatchEvent(new I.a("large-asset-fetch",{
                    detail: {
                        asset: e,
                        progress: t
                    }
                }));
                let o;
                c(0);
                let s = !1;
                try {
                    const e = await Z.getCachedAsset(n);
                    e && (o = e,
                    s = !0,
                    c(.5))
                } catch (e) {
                    console.warn(e)
                }
                if (!o) {
                    let e = n.src;
                    n.useBuildId && (e += "?" + Y),
                    o = await Object(B.a)({
                        url: e,
                        type: t,
                        estimatedSize: n.estimatedSize,
                        progressCallback: e=>{
                            c(e)
                        }
                        ,
                        abortTarget: this
                    })
                }
                if (n.useBuildId && (i = Y,
                (a = o).endsWith("=^..^=") && !a.endsWith(i + " =^..^=")))
                    throw new G.d("Build ID does not match.");
                var i, a;
                if (n.sha256) {
                    const t = await A(o);
                    if (t !== n.sha256)
                        throw new Error(`Hash mismatch for ${e}, found ${t} but expected ${n.sha256}`)
                }
                if (!s)
                    try {
                        await Z.cacheAsset(n, o)
                    } catch (e) {
                        console.warn(e)
                    }
                return c(1),
                o
            }
            getAddonOptions() {
                return {
                    ...this.options.chunks,
                    specialCloudBehaviors: this.options.cloudVariables.specialCloudBehaviors,
                    unsafeCloudBehaviors: this.options.cloudVariables.unsafeCloudBehaviors,
                    pause: this.options.controls.pause.enabled
                }
            }
            async loadResources() {
                const e = [ce];
                this.project.analysis.usesMusic ? e.push(await this.fetchLargeAsset("scaffolding", "text")) : e.push(await this.fetchLargeAsset("scaffolding-min", "text")),
                Object.values(this.getAddonOptions()).some(e=>e) && e.push(await this.fetchLargeAsset("addons", "text")),
                this.script = e.join("\n").replace(/<\/script>/g, "</scri'+'pt>")
            }
            computeWindowSize() {
                let e = this.options.stageWidth
                  , t = this.options.stageHeight;
                return (this.options.controls.greenFlag.enabled || this.options.controls.stopAll.enabled || this.options.controls.pause.enabled) && (t += 48),
                {
                    width: e,
                    height: t
                }
            }
            getPlistPropertiesForPrimaryExecutable() {
                return {
                    // !!! CHANGE !!!
                    // CFBundleIdentifier: "org.turbowarp.packager.userland." + this.options.app.packageName,
                    // CFBundleIdentifier: "io.github.mixality.sidekick.packager.userland." + this.options.app.packageName,
                    CFBundleIdentifier: "io.github.menersar.sidekick.packager.userland." + this.options.app.packageName,
                    CFBundleName: this.options.app.windowTitle,
                    CFBundleDisplayName: this.options.app.windowTitle,
                    CFBundleExecutable: this.options.app.packageName,
                    CFBundleVersion: this.options.app.version,
                    CFBundleShortVersionString: this.options.app.version,
                    LSApplicationCategoryType: "public.app-category.games"
                }
            }
            async updatePlist(e, t, n) {
                const c = (e=>{
                    const t = (new DOMParser).parseFromString(e, "text/xml").children[0].children[0];
                    return Q(t)
                }
                )(await e.file(t).async("string"));
                Object.assign(c, n),
                e.file(t, (e=>{
                    const t = document.implementation.createDocument(null, "plist")
                      , n = t.documentElement;
                    n.setAttribute("version", "1.0"),
                    n.appendChild(D(t, e));
                    return '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n' + (new XMLSerializer).serializeToString(t)
                }
                )(c))
            }
            async addNwJS(e) {
                const t = await this.fetchLargeAsset(this.options.target, "arraybuffer")
                  , n = await (await K()).loadAsync(t)
                  , c = this.options.target.startsWith("nwjs-win")
                  , o = "nwjs-mac" === this.options.target
                  , s = this.options.target.startsWith("nwjs-linux")
                  , i = Object.keys(n.files)[0].split("/")[0]
                  , a = new (await K())
                  , r = this.options.app.packageName;
                for (const e of Object.keys(n.files)) {
                    const t = n.files[e];
                    let l = e.replace(i, r);
                    c ? l = l.replace("nw.exe", r + ".exe") : o ? l = l.replace("nwjs.app", r + ".app") : s && (l = l.replace(/nw$/, r)),
                    X(a, l, t)
                }
                const l = await Z.getAppIcon(this.options.app.icon)
                  , b = {
                    name: r,
                    main: "main.js",
                    version: this.options.app.version,
                    window: {
                        width: this.computeWindowSize().width,
                        height: this.computeWindowSize().height,
                        icon: "icon.png"
                    }
                };
                let d;
                if (c)
                    d = r + "/";
                else if (o) {
                    a.file(`${r}/How to run ${r}.txt`, se(this.options));
                    const e = await F(l);
                    a.file(`${r}/${r}.app/Contents/Resources/app.icns`, e),
                    d = `${r}/${r}.app/Contents/Resources/app.nw/`
                } else if (s) {
                    const e = '#!/bin/bash\ncd "$(dirname "$0")"\n./' + r;
                    a.file(r + "/start.sh", e, {
                        unixPermissions: 33261
                    }),
                    d = r + "/"
                }
                for (const t of Object.keys(e.files))
                    X(a, d + t, e.files[t]);
                a.file(d + "icon.png", l),
                a.file(d + "package.json", JSON.stringify(b, null, 4)),
                a.file(d + "main.js", "\n    const start = () => nw.Window.open('index.html', {\n      position: 'center',\n      new_instance: true\n    });\n    nw.App.on('open', start);\n    start();");
                const p = r + "/credits.html"
                  , O = await a.file(p).async("string");
                return a.file(p, O + oe([ee, te])),
                a
            }
            async addElectron(e) {
                const t = await this.fetchLargeAsset(this.options.target, "arraybuffer")
                  , n = await (await K()).loadAsync(t)
                  , c = this.options.target.includes("win")
                  , o = this.options.target.includes("mac")
                  , s = this.options.target.includes("linux")
                  , i = new (await K())
                  , a = this.options.app.packageName;
                for (const e of Object.keys(n.files)) {
                    const t = n.files[e];
                    let r;
                    r = o ? e : `${a}/${e}`,
                    c ? r = r.replace("electron.exe", a + ".exe") : o ? (r = r.replace("Electron.app", a + ".app"),
                    r = r.replace(/Electron$/, a)) : s && (r = r.replace(/electron$/, a)),
                    X(i, r, t)
                }
                const r = o ? "" : a + "/"
                  , l = await i.file(r + "LICENSES.chromium.html").async("string");
                i.file(r + "licenses.html", l + oe([ee, te, ne])),
                i.remove(r + "LICENSE.txt"),
                i.remove(r + "LICENSES.chromium.html"),
                i.remove(r + "LICENSE"),
                i.remove(r + "version"),
                i.remove(r + "resources/default_app.asar");
                const b = o ? `${r}${a}.app/Contents/` : r
                  , d = o ? b + "Resources/app/" : b + "resources/app/"
                  , p = await Z.getAppIcon(this.options.app.icon);
                i.file(d + "icon.png", p);
                const O = {
                    name: a,
                    main: "electron-main.js",
                    version: this.options.app.version
                };
                i.file(d + "package.json", JSON.stringify(O, null, 4));
                const j = `'use strict';\nconst {app, BrowserWindow, Menu, shell, screen, dialog} = require('electron');\nconst path = require('path');\n\nconst isWindows = process.platform === 'win32';\nconst isMac = process.platform === 'darwin';\nconst isLinux = process.platform === 'linux';\n\nif (isMac) {\n  Menu.setApplicationMenu(Menu.buildFromTemplate([\n    { role: 'appMenu' },\n    { role: 'fileMenu' },\n    { role: 'editMenu' },\n    { role: 'windowMenu' },\n    { role: 'help' }\n  ]));\n} else {\n  Menu.setApplicationMenu(null);\n}\n\nconst resourcesURL = Object.assign(new URL('file://'), {\n  pathname: path.join(__dirname, '/')\n}).href;\nconst defaultProjectURL = new URL('./index.html', resourcesURL).href;\n\nconst createWindow = (windowOptions) => {\n  const options = {\n    title: ${JSON.stringify(this.options.app.windowTitle)},\n    icon: path.resolve(__dirname, ${JSON.stringify("icon.png")}),\n    useContentSize: true,\n    webPreferences: {\n      sandbox: true,\n      contextIsolation: true,\n      nodeIntegration: false,\n    },\n    show: true,\n    width: 480,\n    height: 360,\n    ...windowOptions,\n  };\n\n  const activeScreen = screen.getDisplayNearestPoint(screen.getCursorScreenPoint());\n  const bounds = activeScreen.workArea;\n  options.x = bounds.x + ((bounds.width - options.width) / 2);\n  options.y = bounds.y + ((bounds.height - options.height) / 2);\n\n  const window = new BrowserWindow(options);\n  return window;\n};\n\nconst createProjectWindow = (url) => {\n  const windowMode = ${JSON.stringify(this.options.app.windowMode)};\n  const options = {\n    show: false,\n    backgroundColor: ${JSON.stringify(this.options.appearance.background)},\n    width: ${this.computeWindowSize().width},\n    height: ${this.computeWindowSize().height},\n    minWidth: 50,\n    minHeight: 50,\n  };\n  // fullscreen === false disables fullscreen on macOS so only set this property when it's true\n  if (windowMode === 'fullscreen') {\n    options.fullscreen = true;\n  }\n  const window = createWindow(options);\n  if (windowMode === 'maximize') {\n    window.maximize();\n  }\n  window.loadURL(url);\n  window.show();\n};\n\nconst createDataWindow = (dataURI) => {\n  const window = createWindow({});\n  window.loadURL(dataURI);\n};\n\nconst isResourceURL = (url) => {\n  try {\n    const parsedUrl = new URL(url);\n    return parsedUrl.protocol === 'file:' && parsedUrl.href.startsWith(resourcesURL);\n  } catch (e) {\n    // ignore\n  }\n  return false;\n};\n\nconst SAFE_PROTOCOLS = [\n  'https:',\n  'http:',\n  'mailto:',\n];\n\nconst isSafeOpenExternal = (url) => {\n  try {\n    const parsedUrl = new URL(url);\n    return SAFE_PROTOCOLS.includes(parsedUrl.protocol);\n  } catch (e) {\n    // ignore\n  }\n  return false;\n};\n\nconst isDataURL = (url) => {\n  try {\n    const parsedUrl = new URL(url);\n    return parsedUrl.protocol === 'data:';\n  } catch (e) {\n    // ignore\n  }\n  return false;\n};\n\nconst openLink = (url) => {\n  if (isDataURL(url)) {\n    createDataWindow(url);\n  } else if (isResourceURL(url)) {\n    createProjectWindow(url);\n  } else if (isSafeOpenExternal(url)) {\n    shell.openExternal(url);\n  }\n};\n\napp.on('render-process-gone', (event, webContents, details) => {\n  const window = BrowserWindow.fromWebContents(webContents);\n  dialog.showMessageBoxSync(window, {\n    type: 'error',\n    title: 'Error',\n    message: 'Renderer process crashed: ' + details.reason + ' (' + details.exitCode + ')'\n  });\n});\n\napp.on('child-process-gone', (event, details) => {\n  dialog.showMessageBoxSync({\n    type: 'error',\n    title: 'Error',\n    message: details.type + ' child process crashed: ' + details.reason + ' (' + details.exitCode + ')'\n  });\n});\n\napp.on('web-contents-created', (event, contents) => {\n  contents.setWindowOpenHandler((details) => {\n    setImmediate(() => {\n      openLink(details.url);\n    });\n    return {action: 'deny'};\n  });\n  contents.on('will-navigate', (e, url) => {\n    if (!isResourceURL(url)) {\n      e.preventDefault();\n      openLink(url);\n    }\n  });\n  contents.on('before-input-event', (e, input) => {\n    const window = BrowserWindow.fromWebContents(contents);\n    if (!window || input.type !== "keyDown") return;\n    if (input.key === 'F11' || (input.key === 'Enter' && input.alt)) {\n      window.setFullScreen(!window.isFullScreen());\n    } else if (input.key === 'Escape' && window.isFullScreen()) {\n      window.setFullScreen(false);\n    }\n  });\n});\n\napp.on('window-all-closed', () => {\n  app.quit();\n});\n\napp.whenReady().then(() => {\n  createProjectWindow(defaultProjectURL);\n});\n`;
                i.file(d + "electron-main.js", j);
                for (const [t,n] of Object.entries(e.files))
                    X(i, `${d}${t}`, n);
                if (c) {
                    const e = ["1) Extract the whole zip", `2) Open "${a}.exe" to start the app.`, 'Open "licenses.html" for information regarding open source software used by the app.'].join("\n\n");
                    i.file(r + "README.txt", e)
                } else if (o) {
                    i.file(`How to run ${this.options.app.packageName}.txt`, se(this.options));
                    const e = this.getPlistPropertiesForPrimaryExecutable();
                    await this.updatePlist(i, b + "Info.plist", e);
                    const t = ["Electron Helper", "Electron Helper (GPU)", "Electron Helper (Renderer)", "Electron Helper (Plugin)"];
                    for (const n of t)
                        await this.updatePlist(i, `${b}Frameworks/${n}.app/Contents/Info.plist`, {
                            CFBundleIdentifier: e.CFBundleIdentifier + ".helper",
                            CFBundleDisplayName: n.replace("Electron", this.options.app.packageName),
                            CFBundleVersion: this.options.app.version,
                            CFBundleShortVersionString: this.options.app.version
                        });
                    const n = await F(p);
                    i.file(b + "Resources/electron.icns", n)
                } else if (s) {
                    const e = '#!/bin/bash\ncd "$(dirname "$0")"\n./' + a;
                    i.file(r + "start.sh", e, {
                        unixPermissions: 33261
                    })
                }
                return i
            }
            async addWebViewMac(e) {
                const t = await this.fetchLargeAsset(this.options.target, "arraybuffer")
                  , n = await (await K()).loadAsync(t)
                  , c = this.options.app.packageName + ".app"
                  , o = c + "/Contents/"
                  , s = c + "/Contents/Resources/"
                  , i = new (await K());
                for (const [e,t] of Object.entries(n.files)) {
                    const n = e.replace("WebView.app", c).replace(/WebView$/, this.options.app.packageName);
                    X(i, n, t)
                }
                for (const [t,n] of Object.entries(e.files))
                    X(i, `${s}${t}`, n);
                const a = await Z.getAppIcon(this.options.app.icon)
                  , r = await F(a);
                i.file(s + "AppIcon.icns", r),
                i.remove(s + "Assets.car");
                const l = parseInt(this.options.appearance.background.substr(1), 16)
                  , b = {
                    title: this.options.app.windowTitle,
                    background: [l >> 16 & 255, l >> 8 & 255, 255 & l, 1],
                    width: this.computeWindowSize().width,
                    height: this.computeWindowSize().height
                };
                return i.file(s + "application_config.json", JSON.stringify(b)),
                await this.updatePlist(i, o + "Info.plist", this.getPlistPropertiesForPrimaryExecutable()),
                i.file(`How to run ${this.options.app.packageName}.txt`, se(this.options)),
                i
            }
            makeWebSocketProvider() {
                // !!! CHANGE
                // const e = "wss://mixality.github.io/Sidekick/clouddata" === this.options.cloudVariables.cloudHost ? ["wss://mixality.github.io/Sidekick/clouddata", "wss://mixality.github.io/Sidekick/clouddata"] : this.options.cloudVariables.cloudHost;
                const e = "wss://menersar.github.io/Sidekick/clouddata" === this.options.cloudVariables.cloudHost ? ["wss://menersar.github.io/Sidekick/clouddata", "wss://menersar.github.io/Sidekick/clouddata"] : this.options.cloudVariables.cloudHost;
                return `new Scaffolding.Cloud.WebSocketProvider(${JSON.stringify(e)}, ${JSON.stringify(this.options.projectId)})`
            }
            makeLocalStorageProvider() {
                return `new Scaffolding.Cloud.LocalStorageProvider(${JSON.stringify("cloudvariables:" + this.options.projectId)})`
            }
            makeCustomProvider() {
                const e = this.options.cloudVariables.custom;
                let t = "{const providers = {};\n";
                for (const n of new Set(Object.values(e)))
                    "ws" === n ? t += `providers.ws = ${this.makeWebSocketProvider()};\n` : "local" === n && (t += `providers.local = ${this.makeLocalStorageProvider()};\n`);
                t += "for (const provider of Object.values(providers)) scaffolding.addCloudProvider(provider);\n";
                for (const n of Object.keys(e)) {
                    const c = e[n];
                    t += `scaffolding.addCloudProviderOverride(${JSON.stringify(n)}, providers[${JSON.stringify(c)}] || null);\n`
                }
                return t += "}",
                t
            }
            generateFilename(e) {
                return `${this.options.app.windowTitle}.${e}`
            }
            async generateGetProjectData() {
                let e, t, n = "", c = "", o = !1;
                if ("html" === this.options.target) {
                    o = "blob" !== this.project.type,
                    e = .75,
                    t = .98;
                    const r = 1e5
                      , l = (e=>{
                        const t = e.byteLength;
                        let n;
                        if (t % 4 != 0) {
                            const c = new ArrayBuffer(t + (4 - t % 4))
                              , o = new Uint8Array(e)
                              , s = new Uint8Array(c);
                            for (let e = 0; e < o.length; e++)
                                s[e] = o[e];
                            n = new Uint32Array(c)
                        } else
                            n = new Uint32Array(e);
                        const c = t.toString()
                          , o = new ArrayBuffer(c.length + 1 + 5 * n.byteLength / 4)
                          , s = new Uint8Array(o);
                        let i = 0;
                        for (let e = 0; e < c.length; e++)
                            s[i++] = c.charCodeAt(e) + 49;
                        s[i++] = 44;
                        const a = e=>60 === (e += 42) ? 40 : 62 === e ? 41 : e;
                        for (let e = 0; e < n.length; e++) {
                            let t = n[e];
                            s[i++] = a(t % 85),
                            t = Math.floor(t / 85),
                            s[i++] = a(t % 85),
                            t = Math.floor(t / 85),
                            s[i++] = a(t % 85),
                            t = Math.floor(t / 85),
                            s[i++] = a(t % 85),
                            t = Math.floor(t / 85),
                            s[i++] = a(t % 85)
                        }
                        return (new TextDecoder).decode(o)
                    }
                    )(this.project.arrayBuffer);
                    for (let e = 0; e < l.length; e += r) {
                        n += `<script type="p4-project">${l.substr(e, r)}<\/script><script>setProgress(${(s = .1,
                        i = .75,
                        a = e / l.length,
                        s + a * (i - s)).toString().substr(1, 4)})<\/script>`
                    }
                    c = `async () => {\n        const base85decode = ${W};\n        const dataElements = Array.from(document.querySelectorAll('script[type="p4-project"]'));\n        const result = base85decode(dataElements.map(i => i.textContent).join(''));\n        dataElements.forEach(i => i.remove());\n        return result;\n      }`
                } else {
                    let n;
                    "blob" === this.project.type || "zip-one-asset" === this.options.target ? (o = "blob" !== this.project.type,
                    n = "./project.zip",
                    e = .75,
                    t = .98) : (n = "./assets/project.json",
                    e = .2,
                    t = .98),
                    c = `() => new Promise((resolve, reject) => {\n        const xhr = new XMLHttpRequest();\n        xhr.onload = () => {\n          resolve(xhr.response);\n        };\n        xhr.onerror = () => {\n          if (location.protocol === 'file:') {\n            reject(new Error('Zip environment must be used from a website, not from a file URL.'));\n          } else {\n            reject(new Error('Request to load project data failed.'));\n          }\n        };\n        xhr.onprogress = (e) => {\n          if (e.lengthComputable) {\n            setProgress(interpolate(0.1, ${e}, e.loaded / e.total));\n          }\n        };\n        xhr.responseType = 'arraybuffer';\n        xhr.open('GET', ${JSON.stringify(n)});\n        xhr.send();\n      })`
                }
                var s, i, a;
                return n += `\n    <script>\n      const getProjectData = (function() {\n        const storage = scaffolding.storage;\n        storage.onprogress = (total, loaded) => {\n          setProgress(interpolate(${e}, ${t}, loaded / total));\n        };\n        ${o ? `\n        let zip;\n        // Allow zip to be GC'd after project loads\n        vm.runtime.on('PROJECT_LOADED', () => (zip = null));\n        const findFileInZip = (path) => zip.file(path) || zip.file(new RegExp("^([^/]*/)?" + path + "$"))[0];\n        storage.addHelper({\n          load: (assetType, assetId, dataFormat) => {\n            if (!zip) {\n              throw new Error('Zip is not loaded or has been closed');\n            }\n            const path = assetId + '.' + dataFormat;\n            const file = findFileInZip(path);\n            if (!file) {\n              throw new Error('Asset is not in zip: ' + path)\n            }\n            return file\n              .async('uint8array')\n              .then((data) => storage.createAsset(assetType, dataFormat, data, assetId));\n          }\n        });\n        return () => (${c})().then(async (data) => {\n          zip = await Scaffolding.JSZip.loadAsync(data);\n          const file = findFileInZip('project.json');\n          if (!file) {\n            throw new Error('project.json is not in zip');\n          }\n          return file.async('arraybuffer');\n        });` : `\n        storage.addWebStore(\n          [storage.AssetType.ImageVector, storage.AssetType.ImageBitmap, storage.AssetType.Sound],\n          (asset) => new URL('./assets/' + asset.assetId + '.' + asset.dataFormat, location).href\n        );\n        return ${c};`}\n      })();\n    <\/script>`,
                n
            }
            async generateFavicon() {
                if (null === this.options.app.icon)
                    return "";
                return `<link rel="icon" href="${await Z.readAsURL(this.options.app.icon, "app icon")}">`
            }
            async generateCursor() {
                if ("custom" !== this.options.cursor.type)
                    return this.options.cursor.type;
                if (!this.options.cursor.custom)
                    return "auto";
                return `url(${await Z.readAsURL(this.options.cursor.custom, "custom cursor")}) ${this.options.cursor.center.x} ${this.options.cursor.center.y}, auto`
            }
            async generateExtensionURLs() {
                const e = e=>this.dispatchEvent(new I.a("fetch-extensions",{
                    detail: {
                        progress: e
                    }
                }))
                  , t = e=>{
                    if (!this.options.bakeExtensions)
                        return !1;
                    try {
                        const t = new URL(e);
                        return "http:" === t.protocol || "https:" === t.protocol
                    } catch (e) {
                        return !1
                    }
                }
                  , n = this.options.extensions
                  , c = n.filter(e=>!t(e))
                  , o = n.filter(e=>t(e))
                  , s = [...c];
                if (0 !== o.length) {
                    for (let t = 0; t < o.length; t++) {
                        e(t / o.length);
                        const n = o[t];
                        try {
                            const e = `(function(Scratch) { ${await Z.fetchExtensionScript(n)} })(Scratch);`
                              , t = "data:text/javascript;," + encodeURIComponent(e);
                            s.push(t)
                        } catch (e) {
                            console.warn("Could not bake extension", n, e),
                            s.push(n)
                        }
                    }
                    e(1)
                }
                return s
            }
            async package() {
                if (!Z)
                    throw new Error("Missing adapter");
                if (this.used)
                    throw new Error("Packager was already used");
                this.used = !0,
                this.ensureNotAborted(),
                await this.loadResources(),
                this.ensureNotAborted();
                const e = `<!DOCTYPE html>\n\x3c!-- Created with ${V.WEBSITE} --\x3e\n<html>\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  \x3c!-- We only include this to explicitly loosen the CSP of various packager environments. It does not provide any security. --\x3e\n  <meta http-equiv="Content-Security-Policy" content="default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: blob:">\n  <title>${L(this.options.app.windowTitle)}</title>\n  <style>\n    body {\n      color: ${this.options.appearance.foreground};\n      font-family: sans-serif;\n      overflow: hidden;\n      margin: 0;\n      padding: 0;\n    }\n    :root, body.is-fullscreen {\n      background-color: ${this.options.appearance.background};\n    }\n    [hidden] {\n      display: none !important;\n    }\n    h1 {\n      font-weight: normal;\n    }\n    a {\n      color: inherit;\n      text-decoration: underline;\n      cursor: pointer;\n    }\n\n    #app, #loading, #error, #launch {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .screen {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      cursor: default;\n      user-select: none;\n      -webkit-user-select: none;\n      background-color: ${this.options.appearance.background};\n    }\n    #launch {\n      background-color: rgba(0, 0, 0, 0.7);\n      cursor: pointer;\n    }\n    .green-flag {\n      width: 80px;\n      height: 80px;\n      padding: 16px;\n      border-radius: 100%;\n      background: rgba(255, 255, 255, 0.75);\n      border: 3px solid hsla(0, 100%, 100%, 1);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      box-sizing: border-box;\n    }\n    #loading {\n      ${this.options.loadingScreen.image && "stretch" === this.options.loadingScreen.imageMode ? `background-image: url(${await Z.readAsURL(this.options.loadingScreen.image, "stretched loading screen")});\n      background-repeat: no-repeat;\n      background-size: contain;\n      background-position: center;` : ""}\n    }\n    .progress-bar-outer {\n      border: 1px solid currentColor;\n      height: 10px;\n      width: 200px;\n      max-width: 200px;\n    }\n    .progress-bar-inner {\n      height: 100%;\n      width: 0;\n      background-color: currentColor;\n    }\n    .loading-text, noscript {\n      font-weight: normal;\n      font-size: 36px;\n      margin: 0 0 16px;\n    }\n    .loading-image {\n      margin: 0 0 16px;\n    }\n    #error-message, #error-stack {\n      font-family: monospace;\n      max-width: 600px;\n      white-space: pre-wrap;\n      user-select: text;\n      -webkit-user-select: text;\n    }\n    #error-stack {\n      text-align: left;\n      max-height: 200px;\n      overflow: auto;\n    }\n    .control-button {\n      width: 2rem;\n      height: 2rem;\n      padding: 0.375rem;\n      margin-top: 0.5rem;\n      margin-bottom: 0.5rem;\n      user-select: none;\n      -webkit-user-select: none;\n      cursor: pointer;\n      border: 0;\n      border-radius: 4px;\n    }\n    .control-button:hover {\n      background: ${this.options.appearance.accent}26;\n    }\n    .control-button.active {\n      background: ${this.options.appearance.accent}59;\n    }\n    .fullscreen-button {\n      background: white !important;\n    }\n    .standalone-fullscreen-button {\n      position: absolute;\n      top: 0;\n      right: 0;\n      background-color: rgba(0, 0, 0, 0.5);\n      border-radius: 0 0 0 4px;\n      padding: 4px;\n      cursor: pointer;\n    }\n    .sc-canvas {\n      cursor: ${await this.generateCursor()};\n    }\n    .sc-monitor-root[data-opcode^="data_"] .sc-monitor-value-color {\n      background-color: ${this.options.monitors.variableColor};\n    }\n    .sc-monitor-row-value-outer {\n      background-color: ${this.options.monitors.listColor};\n    }\n    .sc-monitor-row-value-editing .sc-monitor-row-value-outer {\n      background-color: ${J(this.options.monitors.listColor)};\n    }\n    ${this.options.custom.css}\n  </style>\n  <meta name="theme-color" content="${this.options.appearance.background}">\n  ${await this.generateFavicon()}\n</head>\n<body>\n  <div id="app"></div>\n\n  <div id="launch" class="screen" hidden title="Click to start">\n    <div class="green-flag">\n      <svg viewBox="0 0 16.63 17.5" width="42" height="44">\n        <defs><style>.cls-1,.cls-2{fill:#4cbf56;stroke:#45993d;stroke-linecap:round;stroke-linejoin:round;}.cls-2{stroke-width:1.5px;}</style></defs>\n        <path class="cls-1" d="M.75,2A6.44,6.44,0,0,1,8.44,2h0a6.44,6.44,0,0,0,7.69,0V12.4a6.44,6.44,0,0,1-7.69,0h0a6.44,6.44,0,0,0-7.69,0"/>\n        <line class="cls-2" x1="0.75" y1="16.75" x2="0.75" y2="0.75"/>\n      </svg>\n    </div>\n  </div>\n\n  <div id="loading" class="screen">\n    <noscript>Enable JavaScript</noscript>\n    ${this.options.loadingScreen.text ? `<h1 class="loading-text">${L(this.options.loadingScreen.text)}</h1>` : ""}\n    ${this.options.loadingScreen.image && "normal" === this.options.loadingScreen.imageMode ? `<div class="loading-image"><img src="${await Z.readAsURL(this.options.loadingScreen.image, "loading-screen")}"></div>` : ""}\n    ${this.options.loadingScreen.progressBar ? '<div class="progress-bar-outer"><div class="progress-bar-inner" id="loading-inner"></div></div>' : ""}\n  </div>\n\n  <div id="error" class="screen" hidden>\n    <h1>Error</h1>\n    <details>\n      <summary id="error-message"></summary>\n      <p id="error-stack"></p>\n    </details>\n  </div>\n\n  ${"html" === this.options.target ? `<script>${this.script}<\/script>` : '<script src="script.js"><\/script>'}\n  <script>${t = `\n    const appElement = document.getElementById('app');\n    const launchScreen = document.getElementById('launch');\n    const loadingScreen = document.getElementById('loading');\n    const loadingInner = document.getElementById('loading-inner');\n    const errorScreen = document.getElementById('error');\n    const errorScreenMessage = document.getElementById('error-message');\n    const errorScreenStack = document.getElementById('error-stack');\n\n    const handleError = (error) => {\n      console.error(error);\n      if (!errorScreen.hidden) return;\n      errorScreen.hidden = false;\n      errorScreenMessage.textContent = '' + error;\n      let debug = error && error.stack || 'no stack';\n      debug += '\\nUser agent: ' + navigator.userAgent;\n      errorScreenStack.textContent = debug;\n    };\n    const setProgress = (progress) => {\n      if (loadingInner) loadingInner.style.width = progress * 100 + '%';\n    };\n    const interpolate = (a, b, t) => a + t * (b - a);\n\n    try {\n      setProgress(0.1);\n\n      const scaffolding = new Scaffolding.Scaffolding();\n      scaffolding.width = ${this.options.stageWidth};\n      scaffolding.height = ${this.options.stageHeight};\n      scaffolding.resizeMode = ${JSON.stringify(this.options.resizeMode)};\n      scaffolding.editableLists = ${this.options.monitors.editableLists};\n      scaffolding.usePackagedRuntime = ${this.options.packagedRuntime};\n      scaffolding.setup();\n      scaffolding.appendTo(appElement);\n\n      const vm = scaffolding.vm;\n      window.scaffolding = scaffolding;\n      window.vm = scaffolding.vm;\n      window.Scratch = {\n        vm,\n        renderer: vm.renderer,\n        audioEngine: vm.runtime.audioEngine,\n        bitmapAdapter: vm.runtime.v2BitmapAdapter,\n        videoProvider: vm.runtime.ioDevices.video.provider\n      };\n\n      scaffolding.setUsername(${JSON.stringify(this.options.username)}.replace(/#/g, () => Math.floor(Math.random() * 10)));\n      scaffolding.setAccentColor(${JSON.stringify(this.options.appearance.accent)});\n\n      ${"ws" === this.options.cloudVariables.mode ? `scaffolding.addCloudProvider(${this.makeWebSocketProvider()})` : "local" === this.options.cloudVariables.mode ? `scaffolding.addCloudProvider(${this.makeLocalStorageProvider()})` : "custom" === this.options.cloudVariables.mode ? this.makeCustomProvider() : ""};\n\n      ${this.options.controls.greenFlag.enabled ? '\n      const greenFlagButton = document.createElement(\'img\');\n      greenFlagButton.src = \'data:image/svg+xml,\' + encodeURIComponent(\'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.63 17.5"><path d="M.75 2a6.44 6.44 0 017.69 0h0a6.44 6.44 0 007.69 0v10.4a6.44 6.44 0 01-7.69 0h0a6.44 6.44 0 00-7.69 0" fill="#4cbf56" stroke="#45993d" stroke-linecap="round" stroke-linejoin="round"/><path stroke-width="1.5" fill="#4cbf56" stroke="#45993d" stroke-linecap="round" stroke-linejoin="round" d="M.75 16.75v-16"/></svg>\');\n      greenFlagButton.className = \'control-button\';\n      greenFlagButton.draggable = false;\n      greenFlagButton.addEventListener(\'click\', () => {\n        scaffolding.greenFlag();\n      });\n      scaffolding.addEventListener(\'PROJECT_RUN_START\', () => {\n        greenFlagButton.classList.add(\'active\');\n      });\n      scaffolding.addEventListener(\'PROJECT_RUN_STOP\', () => {\n        greenFlagButton.classList.remove(\'active\');\n      });\n      scaffolding.addControlButton({\n        element: greenFlagButton,\n        where: \'top-left\'\n      });' : ""}\n\n      ${this.options.controls.pause.enabled ? '\n      const pauseButton = document.createElement(\'img\');\n      pauseButton.className = \'control-button\';\n      pauseButton.draggable = false;\n      let isPaused = false;\n      pauseButton.addEventListener(\'click\', () => {\n        vm.setPaused(!isPaused);\n      });\n      const updatePause = (_isPaused) => {\n        isPaused = _isPaused;\n        if (isPaused) {\n          pauseButton.src = \'data:image/svg+xml,\' + encodeURIComponent(\'<svg width="16" height="16" viewBox="0 0 4.2333332 4.2333335" xmlns="http://www.w3.org/2000/svg"><path d="m3.95163484 2.02835365-1.66643921.9621191-1.66643913.96211911V.10411543l1.66643922.9621191z" fill="#ffae00"/></svg>\');\n        } else {\n          pauseButton.src = \'data:image/svg+xml,\' + encodeURIComponent(\'<svg width="16" height="16" viewBox="0 0 4.2333332 4.2333335" xmlns="http://www.w3.org/2000/svg"><g fill="#ffae00"><path d="M.389.19239126h1.2631972v3.8485508H.389zM2.5810001.19239126h1.2631972v3.8485508H2.5810001z"/></g></svg>\');\n        }\n      }\n      vm.on(\'P4_PAUSE\', updatePause);\n      updatePause();\n      scaffolding.addControlButton({\n        element: pauseButton,\n        where: \'top-left\'\n      });' : ""}\n\n      ${this.options.controls.stopAll.enabled ? '\n      const stopAllButton = document.createElement(\'img\');\n      stopAllButton.src = \'data:image/svg+xml,\' + encodeURIComponent(\'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="#ec5959" stroke="#b84848" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M4.3.5h5.4l3.8 3.8v5.4l-3.8 3.8H4.3L.5 9.7V4.3z"/></svg>\');\n      stopAllButton.className = \'control-button\';\n      stopAllButton.draggable = false;\n      stopAllButton.addEventListener(\'click\', () => {\n        scaffolding.stopAll();\n      });\n      scaffolding.addControlButton({\n        element: stopAllButton,\n        where: \'top-left\'\n      });' : ""}\n\n      ${this.options.controls.fullscreen.enabled ? `\n      if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {\n        let isFullScreen = !!(document.fullscreenElement || document.webkitFullscreenElement);\n        const fullscreenButton = document.createElement('img');\n        fullscreenButton.draggable = false;\n        fullscreenButton.className = 'control-button fullscreen-button';\n        fullscreenButton.addEventListener('click', () => {\n          if (isFullScreen) {\n            if (document.exitFullscreen) {\n              document.exitFullscreen();\n            } else if (document.webkitExitFullscreen) {\n              document.webkitExitFullscreen();\n            }\n          } else {\n            if (document.body.requestFullscreen) {\n              document.body.requestFullscreen();\n            } else if (document.body.webkitRequestFullscreen) {\n              document.body.webkitRequestFullscreen();\n            }\n          }\n        });\n        const otherControlsExist = ${this.options.controls.greenFlag.enabled || this.options.controls.stopAll.enabled};\n        const fillColor = otherControlsExist ? '#575E75' : '${this.options.appearance.foreground}';\n        const updateFullScreen = () => {\n          isFullScreen = !!(document.fullscreenElement || document.webkitFullscreenElement);\n          document.body.classList.toggle('is-fullscreen', isFullScreen);\n          if (isFullScreen) {\n            fullscreenButton.src = 'data:image/svg+xml,' + encodeURIComponent('<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="' + fillColor + '" fill-rule="evenodd"><path d="M12.662 3.65l.89.891 3.133-2.374a.815.815 0 011.15.165.819.819 0 010 .986L15.467 6.46l.867.871c.25.25.072.664-.269.664L12.388 8A.397.397 0 0112 7.611V3.92c0-.341.418-.514.662-.27M7.338 16.35l-.89-.89-3.133 2.374a.817.817 0 01-1.15-.166.819.819 0 010-.985l2.37-3.143-.87-.871a.387.387 0 01.27-.664L7.612 12a.397.397 0 01.388.389v3.692a.387.387 0 01-.662.27M7.338 3.65l-.89.891-3.133-2.374a.815.815 0 00-1.15.165.819.819 0 000 .986l2.37 3.142-.87.871a.387.387 0 00.27.664L7.612 8A.397.397 0 008 7.611V3.92a.387.387 0 00-.662-.27M12.662 16.35l.89-.89 3.133 2.374a.817.817 0 001.15-.166.819.819 0 000-.985l-2.368-3.143.867-.871a.387.387 0 00-.269-.664L12.388 12a.397.397 0 00-.388.389v3.692c0 .342.418.514.662.27"/></g></svg>');\n          } else {\n            fullscreenButton.src = 'data:image/svg+xml,' + encodeURIComponent('<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="' + fillColor + '" fill-rule="evenodd"><path d="M16.338 7.35l-.89-.891-3.133 2.374a.815.815 0 01-1.15-.165.819.819 0 010-.986l2.368-3.142-.867-.871a.387.387 0 01.269-.664L16.612 3a.397.397 0 01.388.389V7.08a.387.387 0 01-.662.27M3.662 12.65l.89.89 3.133-2.374a.817.817 0 011.15.166.819.819 0 010 .985l-2.37 3.143.87.871c.248.25.071.664-.27.664L3.388 17A.397.397 0 013 16.611V12.92c0-.342.418-.514.662-.27M3.662 7.35l.89-.891 3.133 2.374a.815.815 0 001.15-.165.819.819 0 000-.986L6.465 4.54l.87-.871a.387.387 0 00-.27-.664L3.388 3A.397.397 0 003 3.389V7.08c0 .341.418.514.662.27M16.338 12.65l-.89.89-3.133-2.374a.817.817 0 00-1.15.166.819.819 0 000 .985l2.368 3.143-.867.871a.387.387 0 00.269.664l3.677.005a.397.397 0 00.388-.389V12.92a.387.387 0 00-.662-.27"/></g></svg>');\n          }\n        };\n        updateFullScreen();\n        document.addEventListener('fullscreenchange', updateFullScreen);\n        document.addEventListener('webkitfullscreenchange', updateFullScreen);\n        if (otherControlsExist) {\n          fullscreenButton.className = 'control-button fullscreen-button';\n          scaffolding.addControlButton({\n            element: fullscreenButton,\n            where: 'top-right'\n          });\n        } else {\n          fullscreenButton.className = 'standalone-fullscreen-button';\n          document.body.appendChild(fullscreenButton);\n        }\n      }` : ""}\n\n      vm.setTurboMode(${this.options.turbo});\n      if (vm.setInterpolation) vm.setInterpolation(${this.options.interpolation});\n      if (vm.setFramerate) vm.setFramerate(${this.options.framerate});\n      if (vm.renderer.setUseHighQualityRender) vm.renderer.setUseHighQualityRender(${this.options.highQualityPen});\n      if (vm.setRuntimeOptions) vm.setRuntimeOptions({\n        fencing: ${this.options.fencing},\n        miscLimits: ${this.options.miscLimits},\n        maxClones: ${this.options.maxClones},\n      });\n      if (vm.setCompilerOptions) vm.setCompilerOptions({\n        enabled: ${this.options.compiler.enabled},\n        warpTimer: ${this.options.compiler.warpTimer}\n      });\n      if (vm.renderer.setMaxTextureDimension) vm.renderer.setMaxTextureDimension(${this.options.maxTextureDimension});\n\n      if (typeof ScaffoldingAddons !== 'undefined') {\n        ScaffoldingAddons.run(scaffolding, ${JSON.stringify(this.getAddonOptions())});\n      }\n\n      scaffolding.setExtensionSecurityManager({\n        getSandboxMode: 'unsandboxed',\n        canLoadExtensionFromProject: (url) => {\n          handleError(new Error('Missing custom extension: ' + url));\n          return Promise.resolve(false);\n        }\n      });\n      for (const extension of ${JSON.stringify(await this.generateExtensionURLs())}) {\n        vm.extensionManager.loadExtensionURL(extension);\n      }\n\n      ${this.options.closeWhenStopped ? "\n      vm.runtime.on('PROJECT_RUN_STOP', () => {\n        if (!vm.isPaused || !vm.isPaused()) {\n          window.close();\n        }\n      });" : ""}\n\n      ${this.options.target.startsWith("nwjs-") ? "\n      if (typeof nw !== 'undefined') {\n        const win = nw.Window.get();\n        win.on('new-win-policy', (frame, url, policy) => {\n          policy.ignore();\n          nw.Shell.openExternal(url);\n        });\n        win.on('navigation', (frame, url, policy) => {\n          policy.ignore();\n          nw.Shell.openExternal(url);\n        });\n        document.addEventListener('keydown', (e) => {\n          if (e.key === 'Escape' && document.fullscreenElement) {\n            document.exitFullscreen();\n          }\n        });\n      }" : ""}\n    } catch (e) {\n      handleError(e);\n    }\n  `,
                t.split("\n").filter((e,t,n)=>0 === t || t === n.length - 1 || 0 !== e.trim().length || 0 !== n[t - 1].trim().length).join("\n")}<\/script>\n  ${this.options.custom.js ? `<script>\n    try {\n      ${this.options.custom.js}\n    } catch (e) {\n      handleError(e);\n    }\n  <\/script>` : ""}\n  ${await this.generateGetProjectData()}\n  <script>\n    const run = async () => {\n      const projectData = await getProjectData();\n      await scaffolding.loadProject(projectData);\n      setProgress(1);\n      loadingScreen.hidden = true;\n      if (${this.options.autoplay}) {\n        scaffolding.start();\n      } else {\n        launchScreen.hidden = false;\n        launchScreen.addEventListener('click', () => {\n          launchScreen.hidden = true;\n          scaffolding.start();\n        });\n        launchScreen.focus();\n      }\n    };\n    run().catch(handleError);\n  <\/script>\n</body>\n</html>\n`;
                var t;
                if (this.ensureNotAborted(),
                "html" !== this.options.target) {
                    let t;
                    if ("sb3" === this.project.type && "zip-one-asset" !== this.options.target) {
                        t = await (await K()).loadAsync(this.project.arrayBuffer);
                        for (const e of Object.keys(t.files))
                            t.files["assets/" + e] = t.files[e],
                            delete t.files[e]
                    } else
                        t = new (await K()),
                        t.file("project.zip", this.project.arrayBuffer);
                    return t.file("index.html", e),
                    t.file("script.js", this.script),
                    this.options.target.startsWith("nwjs-") ? t = await this.addNwJS(t) : this.options.target.startsWith("electron-") ? t = await this.addElectron(t) : "webview-mac" === this.options.target && (t = await this.addWebViewMac(t)),
                    this.ensureNotAborted(),
                    {
                        data: await t.generateAsync({
                            type: "arraybuffer",
                            compression: "DEFLATE",
                            platform: "UNIX"
                        }, e=>{
                            this.dispatchEvent(new I.a("zip-progress",{
                                detail: {
                                    progress: e.percent / 100
                                }
                            }))
                        }
                        ),
                        type: "application/zip",
                        filename: this.generateFilename("zip")
                    }
                }
                return {
                    data: e,
                    type: "text/html",
                    filename: this.generateFilename("html")
                }
            }
        }
        ie.getDefaultPackageNameFromFileName = e=>(e = (e = (e = (e = e.split(".")[0]).replace(/[^\-a-z ]/gi, "")).trim()).replace(/ /g, "-")).toLowerCase() || "packaged-project",
        ie.getWindowTitleFromFileName = e=>{
            const t = e.split(".");
            return t.length > 1 && t.pop(),
            (e = t.join(".").trim()) || "Packaged Project"
        }
        ,
        ie.usesUnsafeOptions = e=>{
            const t = ie.DEFAULT_OPTIONS()
              , n = e=>[e.custom, e.extensions, e.cloudVariables.unsafeCloudBehaviors];
            return JSON.stringify(n(t)) !== JSON.stringify(n(e))
        }
        ,
        ie.DEFAULT_OPTIONS = ()=>({
            turbo: !1,
            interpolation: !1,
            framerate: 30,
            highQualityPen: !1,
            maxClones: 300,
            fencing: !0,
            miscLimits: !0,
            stageWidth: 480,
            stageHeight: 360,
            resizeMode: "preserve-ratio",
            autoplay: !1,
            username: "player####",
            closeWhenStopped: !1,
            projectId: "",
            custom: {
                css: "",
                js: ""
            },
            appearance: {
                background: "#000000",
                foreground: "#ffffff",
                accent: V.ACCENT_COLOR
            },
            loadingScreen: {
                progressBar: !0,
                text: "",
                imageMode: "normal",
                image: null
            },
            controls: {
                greenFlag: {
                    enabled: !1
                },
                stopAll: {
                    enabled: !1
                },
                fullscreen: {
                    enabled: !1
                },
                pause: {
                    enabled: !1
                }
            },
            monitors: {
                editableLists: !1,
                variableColor: "#ff8c1a",
                listColor: "#fc662c"
            },
            compiler: {
                enabled: !0,
                warpTimer: !1
            },
            packagedRuntime: !0,
            target: "html",
            app: {
                icon: null,
                packageName: ie.getDefaultPackageNameFromFileName(""),
                windowTitle: ie.getWindowTitleFromFileName(""),
                windowMode: "window",
                version: "1.0.0"
            },
            chunks: {
                gamepad: !1,
                pointerlock: !1
            },
            cloudVariables: {
                mode: "ws",
                // !!! CHANGE !!!
                // cloudHost: "wss://mixality.github.io/Sidekick/clouddata",
                cloudHost: "wss://menersar.github.io/Sidekick/clouddata",
                custom: {},
                specialCloudBehaviors: !1,
                unsafeCloudBehaviors: !1
            },
            cursor: {
                type: "auto",
                custom: null,
                center: {
                    x: 0,
                    y: 0
                }
            },
            extensions: [],
            bakeExtensions: !0,
            maxTextureDimension: 2048
        });
        var ae = ie;
        var re = (e,t)=>{
            const n = document.createElement("a");
            n.download = e,
            n.href = t,
            document.body.appendChild(n),
            n.click(),
            n.remove()
        }
          , le = n(7);
        function be(e) {
            Object(c.e)(e, "svelte-1u9hge", ".alternative.svelte-1u9hge{font-size:smaller}")
        }
        function de(e) {
            let t, n, o, s, i, a = e[4]("downloads.useWorkaround") + "";
            return {
                c() {
                    t = Object(c.v)("p"),
                    n = Object(c.v)("button"),
                    o = Object(c.Y)(a),
                    n.disabled = e[3],
                    Object(c.g)(t, "class", "alternative svelte-1u9hge")
                },
                m(a, r) {
                    Object(c.E)(a, t, r),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    s || (i = Object(c.G)(n, "click", e[5]),
                    s = !0)
                },
                p(e, t) {
                    16 & t && a !== (a = e[4]("downloads.useWorkaround") + "") && Object(c.Q)(o, a),
                    8 & t && (n.disabled = e[3])
                },
                d(e) {
                    e && Object(c.u)(t),
                    s = !1,
                    i()
                }
            }
        }
        function pe(e) {
            let t, n, o, s, i, a = e[4]("downloads.link").replace("{size}", (e[2].size / 1e3 / 1e3).toFixed(2) + "MB").replace("{filename}", e[0]) + "", r = le.a && e[0].endsWith(".html"), l = r && de(e);
            return {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("p"),
                    o = Object(c.v)("a"),
                    s = Object(c.Y)(a),
                    i = Object(c.U)(),
                    l && l.c(),
                    Object(c.g)(o, "href", e[1]),
                    Object(c.g)(o, "download", e[0])
                },
                m(e, a) {
                    Object(c.E)(e, t, a),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    Object(c.d)(o, s),
                    Object(c.d)(t, i),
                    l && l.m(t, null)
                },
                p(e, n) {
                    21 & n && a !== (a = e[4]("downloads.link").replace("{size}", (e[2].size / 1e3 / 1e3).toFixed(2) + "MB").replace("{filename}", e[0]) + "") && Object(c.Q)(s, a),
                    2 & n && Object(c.g)(o, "href", e[1]),
                    1 & n && Object(c.g)(o, "download", e[0]),
                    1 & n && (r = le.a && e[0].endsWith(".html")),
                    r ? l ? l.p(e, n) : (l = de(e),
                    l.c(),
                    l.m(t, null)) : l && (l.d(1),
                    l = null)
                },
                d(e) {
                    e && Object(c.u)(t),
                    l && l.d()
                }
            }
        }
        function Oe(e) {
            let t, n;
            return t = new a.a({
                props: {
                    center: !0,
                    $$slots: {
                        default: [pe]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            {
                c() {
                    Object(c.o)(t.$$.fragment)
                },
                m(e, o) {
                    Object(c.H)(t, e, o),
                    n = !0
                },
                p(e, [n]) {
                    const c = {};
                    95 & n && (c.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    t.$set(c)
                },
                i(e) {
                    n || (Object(c.cb)(t.$$.fragment, e),
                    n = !0)
                },
                o(e) {
                    Object(c.db)(t.$$.fragment, e),
                    n = !1
                },
                d(e) {
                    Object(c.s)(t, e)
                }
            }
        }
        function je(e, t, n) {
            let o;
            Object(c.l)(e, s.a, e=>n(4, o = e));
            let i, {name: a} = t, {url: r} = t, {blob: l} = t;
            return e.$$set = e=>{
                "name"in e && n(0, a = e.name),
                "url"in e && n(1, r = e.url),
                "blob"in e && n(2, l = e.blob)
            }
            ,
            [a, r, l, i, o, async()=>{
                n(3, i = !0);
                try {
                    const e = new (await K());
                    e.file(a, l);
                    const t = await e.generateAsync({
                        type: "blob",
                        compression: "DEFLATE"
                    })
                      , n = a.replace(/\.html$/, ".zip")
                      , c = URL.createObjectURL(t);
                    re(n, c),
                    URL.revokeObjectURL(c)
                } catch (e) {
                    console.error(e)
                }
                n(3, i = !1)
            }
            ]
        }
        class ue extends c.a {
            constructor(e) {
                super(),
                Object(c.C)(this, e, je, Oe, c.M, {
                    name: 0,
                    url: 1,
                    blob: 2
                }, be)
            }
        }
        var ge = ue
          , me = n(10)
          , he = n(8);
        const ve = [];
        class fe {
            constructor(e, t, n) {
                this.name = e,
                this.version = t,
                this.storeName = n,
                this.db = null,
                this.dbPromise = null,
                ve.push(this)
            }
            open() {
                if (this.db)
                    return this.db;
                if (this.dbPromise)
                    return this.dbPromise;
                if ("undefined" == typeof indexedDB)
                    throw new Error("indexedDB is not supported");
                return this.dbPromise = (()=>{
                    if (!(!navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent)) || !indexedDB.databases)
                        return Promise.resolve();
                    let e;
                    return new Promise(t=>{
                        const n = ()=>indexedDB.databases().finally(t);
                        e = setInterval(n, 100),
                        n()
                    }
                    ).finally(()=>clearInterval(e))
                }
                )().then(()=>new Promise((e,t)=>{
                    const n = indexedDB.open(this.name, this.version);
                    n.onupgradeneeded = e=>{
                        e.target.result.createObjectStore(this.storeName, {
                            keyPath: "id"
                        })
                    }
                    ,
                    n.onsuccess = t=>{
                        const n = t.target.result;
                        e(n)
                    }
                    ,
                    n.onerror = e=>{
                        t(new Error("IDB Error " + e.target.error))
                    }
                }
                )).then(e=>(this.dbPromise = null,
                this.db = e,
                e)).catch(e=>{
                    throw this.dbPromise = null,
                    e
                }
                ),
                this.dbPromise
            }
            close() {
                this.db && (this.db.close(),
                this.db = null),
                this.dbPromise && (this.dbPromise.then(e=>{
                    e.close()
                }
                ),
                this.dbPromise = null)
            }
            async createTransaction(e) {
                const t = await this.open()
                  , n = t.transaction(this.storeName, e)
                  , c = n.objectStore(this.storeName);
                return {
                    db: t,
                    transaction: n,
                    store: c
                }
            }
            async deleteEverything() {
                const {transaction: e, store: t} = await this.createTransaction("readwrite");
                return new Promise((n,c)=>{
                    fe.setTransactionErrorHandler(e, c);
                    t.clear().onsuccess = ()=>{
                        n()
                    }
                }
                )
            }
        }
        fe.setTransactionErrorHandler = (e,t)=>{
            e.onerror = ()=>{
                t(new Error("Transaction error: " + e.error))
            }
        }
        ;
        window.addEventListener("pagehide", ()=>{
            for (const e of ve)
                e.close()
        }
        );
        var we = fe;
        const xe = new we("p4-local-settings",1,"blobs")
          , ke = (e,t,n)=>{
            const c = new Blob([e],{
                type: t
            });
            return c.name = n,
            c
        }
          , ye = async e=>{
            const {transaction: t, store: n} = await xe.createTransaction("readonly");
            return new Promise((c,o)=>{
                we.setTransactionErrorHandler(t, o);
                n.get(e).onsuccess = e=>{
                    const t = e.target.result;
                    if (t) {
                        const e = t.data;
                        e instanceof Blob ? c((async e=>{
                            const t = await Object(H.a)(e);
                            return ke(t, e.type, e.name)
                        }
                        )(e)) : c(ke(e, t.type, t.name))
                    } else
                        c(null)
                }
            }
            )
        }
        ;
        var $e = e=>{
            let t = !1;
            const n = Object(he.b)(null, ()=>n.subscribe(n=>{
                t && (async(e,t)=>{
                    const n = t ? await Object(H.a)(t) : null
                      , {transaction: c, store: o} = await xe.createTransaction("readwrite");
                    return new Promise((s,i)=>{
                        we.setTransactionErrorHandler(c, i);
                        (t ? o.put({
                            id: e,
                            data: n,
                            type: t.type,
                            name: t.name
                        }) : o.delete(e)).onsuccess = ()=>{
                            s()
                        }
                    }
                    )
                }
                )(e, n).catch(e=>{
                    console.warn(e)
                }
                )
            }
            ));
            return ye(e).then(e=>{
                t = !0,
                e && n.set(e)
            }
            ),
            n
        }
          , Ee = n(2);
        const Se = le.c ? "*" : location.origin
          , Ue = new WeakMap;
        window.addEventListener("message", e=>{
            if ("*" !== Se && e.origin !== location.origin)
                return;
            const t = e.data;
            if (t && "hello" === t.preview) {
                const t = e.source
                  , n = Ue.get(t);
                n && t.postMessage({
                    blob: n
                }, Se)
            }
        }
        );
        var _e = class {
            constructor() {
                const e = `<!DOCTYPE html>\n<html>\n<head>\n  <title>${L(s.a.translate("preview.loading"))}</title>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n  <style>\n  body {\n    background: black;\n    color: white;\n    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  }\n  .preview-message {\n    background: inherit;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    user-select: none;\n    -webkit-user-select: none;\n  }\n  .preview-progress-outer {\n    width: 200px;\n    height: 10px;\n    border: 1px solid white;\n  }\n  .preview-progress-inner {\n    height: 100%;\n    width: 0;\n    background: white;\n  }\n  [hidden] {\n    display: none;\n  }\n  </style>\n</head>\n<body>\n  <div class="preview-message">\n    <noscript>Enable JavaScript</noscript>\n    <div class="preview-progress-outer"><div class="preview-progress-inner"></div></div>\n  </div>\n  <div class="preview-message preview-error" hidden>\n    <div class="preview-error-message"></div>\n    <div>Go back to the original tab and try again</div>\n  </div>\n  <script>\n  (function() {\n    const origin = ${JSON.stringify(Se)};\n    const err = (message) => {\n      document.querySelector(".preview-error").hidden = false;\n      document.querySelector(".preview-error-message").textContent = "Error: " + message;\n    };\n    if (!window.opener) {\n      err("Can't communicate with main page.");\n      return;\n    }\n    let hasRun = false;\n    const progressBar = document.querySelector(".preview-progress-inner");\n    const progressText = document.querySelector(".preview-progress-text");\n    window.addEventListener("message", (e) => {\n      if (origin !== "*" && e.origin !== location.origin) return;\n      if (hasRun) return;\n      if (e.data.blob) {\n        hasRun = true;\n        const fr = new FileReader();\n        fr.onload = () => {\n          document.open();\n          document.write(fr.result);\n          document.close(); // fixes poor performance in firefox\n        };\n        fr.onerror = () => {\n          err("Something went wrong reading the file: " + fr.error);\n        };\n        fr.readAsText(e.data.blob);\n      }\n      if (typeof e.data.progress === "number") {\n        progressBar.style.width = (e.data.progress * 100) + "%";\n      }\n    });\n    window.opener.postMessage({\n      preview: "hello"\n    }, origin);\n  })();\n  <\/script>\n</body>\n</html>\n`;
                if (!(le.c && le.b)) {
                    const t = URL.createObjectURL(new Blob([e],{
                        type: "text/html"
                    })) + "#do-not-share-this-link-it-will-not-work-for-others";
                    this.window = window.open(t)
                } else
                    this.window = window.open("about:blank"),
                    this.window && this.window.document.write(e);
                if (!this.window)
                    throw new Error("Cannot open popup")
            }
            setContent(e) {
                Ue.set(this.window, e),
                this.window.postMessage({
                    blob: e
                }, Se)
            }
            setProgress(e, t) {
                this.window.postMessage({
                    progress: e,
                    text: t
                }, Se)
            }
            close() {
                this.window.close()
            }
        }
        ;
        const Ce = e=>{
            if (e instanceof Blob)
                return e;
            if (Array.isArray(e)) {
                const t = [];
                for (const n of e)
                    t.push(Ce(n));
                return t
            }
            if (e && "object" == typeof e) {
                const t = {};
                for (const n of Object.keys(e))
                    t[n] = Ce(e[n]);
                return t
            }
            return e
        }
        ;
        var Re = Ce;
        const Te = new we("p4-large-assets",1,"assets")
          , qe = e=>e.sha256 ? e.sha256 : `${Y}-${JSON.stringify(e.src)}`;
        (async()=>{
            const {transaction: e, store: t} = await Te.createTransaction("readwrite");
            new Promise((n,c)=>{
                we.setTransactionErrorHandler(e, c);
                t.getAllKeys().onsuccess = async e=>{
                    const c = e.target.result
                      , o = Object.values(M).map(qe)
                      , s = c.filter(e=>!o.includes(e));
                    for (const e of s)
                        await new Promise(n=>{
                            t.delete(e).onsuccess = ()=>{
                                n()
                            }
                        }
                        );
                    n()
                }
            }
            )
        }
        )();
        var Ie, Ae = async e=>{
            const {transaction: t, store: n} = await Te.createTransaction("readonly");
            return new Promise((c,o)=>{
                we.setTransactionErrorHandler(t, o);
                const s = qe(e);
                n.get(s).onsuccess = e=>{
                    const t = e.target.result;
                    c(t ? t.data : null)
                }
            }
            )
        }
        , Le = async(e,t)=>{
            const {transaction: n, store: c} = await Te.createTransaction("readwrite");
            return new Promise((o,s)=>{
                we.setTransactionErrorHandler(n, s);
                const i = qe(e);
                c.put({
                    id: i,
                    data: t
                }).onsuccess = ()=>{
                    o()
                }
            }
            )
        }
        , Ne = n.p + "assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png";
        Ie = new class {
            getCachedAsset(e) {
                return Ae(e)
            }
            async cacheAsset(e, t) {
                await Le(e, t)
            }
            getAppIcon(e) {
                return e ? "image/png" === e.type ? Object(H.a)(e) : new Promise((t,n)=>{
                    const c = URL.createObjectURL(e)
                      , o = new Image;
                    o.onload = ()=>{
                        o.onload = null,
                        o.onerror = null;
                        const e = document.createElement("canvas")
                          , s = e.getContext("2d");
                        s ? (e.width = o.width,
                        e.height = o.height,
                        s.drawImage(o, 0, 0),
                        e.toBlob(e=>{
                            URL.revokeObjectURL(c),
                            t(Object(H.a)(e))
                        }
                        )) : n(new Error("Cannot get rendering context for icon conversion"))
                    }
                    ,
                    o.onerror = ()=>{
                        o.onload = null,
                        o.onerror = null,
                        n(new Error("Cannot load icon"))
                    }
                    ,
                    o.src = c
                }
                ) : Object(B.a)({
                    url: Ne,
                    type: "arraybuffer"
                })
            }
            readAsURL(e, t) {
                return Object(H.c)(e).catch(e=>{
                    throw new Error(`${t}: ${e}`)
                }
                )
            }
            fetchExtensionScript(e) {
                return Object(B.a)({
                    type: "text",
                    url: e
                })
            }
        }
        ,
        Z = Ie;
        var Pe = ae
          , Me = n(18);
        const Be = e=>{
            let t = "";
            const n = new Uint8Array(e);
            for (let e = 0; e < n.byteLength; e++)
                t += String.fromCharCode(n[e]);
            return btoa(t)
        }
          , He = e=>{
            const t = atob(e)
              , n = new Uint8Array(t.length);
            for (let e = 0; e < t.length; e++)
                n[e] = t.charCodeAt(e);
            return n.buffer
        }
          , ze = e=>null !== e && "object" == typeof e
          , Fe = async e=>{
            if (Array.isArray(e))
                return Promise.all(e.map(Fe));
            const t = {};
            for (const n of Object.keys(e)) {
                if ("__isBlob" === n)
                    throw new Error("Can't serialize special key: __isBlob");
                const c = e[n];
                if (c instanceof Blob) {
                    const e = await Object(H.a)(c);
                    t[n] = {
                        __isBlob: !0,
                        type: c.type,
                        name: c.name || "",
                        data: Be(e)
                    }
                } else
                    ze(c) ? t[n] = await Fe(c) : t[n] = c
            }
            return t
        }
          , Ye = e=>{
            if (Array.isArray(e))
                return e.map(Ye);
            const t = {};
            for (const n of Object.keys(e)) {
                const c = e[n];
                if (ze(c))
                    if (c.__isBlob) {
                        const e = new Blob([He(c.data)],{
                            type: c.type
                        });
                        e.name = c.name,
                        t[n] = e
                    } else
                        t[n] = Ye(c);
                else
                    t[n] = c
            }
            return t
        }
        ;
        var We = n(16);
        function Qe(e) {
            Object(c.e)(e, "svelte-1iqxbmk", '.option.svelte-1iqxbmk{display:block;margin:4px 0}.group.svelte-1iqxbmk{margin:12px 0}p.svelte-1iqxbmk{margin:8px 0}.group.svelte-1iqxbmk:last-child,.option.svelte-1iqxbmk:last-child,p.svelte-1iqxbmk:last-child{margin-bottom:0}textarea.svelte-1iqxbmk{box-sizing:border-box;width:100%;min-width:100%;height:150px}input[type="text"].svelte-1iqxbmk{width:200px}input[type="text"].shorter.svelte-1iqxbmk{width:150px}input[type="number"].svelte-1iqxbmk{width:50px}input.svelte-1iqxbmk:invalid{outline:2px solid red}.warning.svelte-1iqxbmk{font-weight:bold;background:yellow;color:black;padding:10px;border-radius:10px}.buttons.svelte-1iqxbmk{display:flex}.button.svelte-1iqxbmk{margin-right:4px}.side-buttons.svelte-1iqxbmk{display:flex;margin-left:auto}')
        }
        function De(e, t, n) {
            const c = e.slice();
            return c[112] = t[n],
            c[113] = t,
            c[114] = n,
            c
        }
        function Ve(e) {
            let t, n, o = e[7]("options.customUsernameWarning") + "";
            return {
                c() {
                    t = Object(c.v)("p"),
                    n = Object(c.Y)(o),
                    Object(c.g)(t, "class", "warning svelte-1iqxbmk")
                },
                m(e, o) {
                    Object(c.E)(e, t, o),
                    Object(c.d)(t, n)
                },
                p(e, t) {
                    128 & t[0] && o !== (o = e[7]("options.customUsernameWarning") + "") && Object(c.Q)(n, o)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function Ge(e) {
            let t, n, o, s, i, a, r, l, b, d, p, O, j, u, g, m, h, v, f, w, x, k, y, $, E, S, U, C, R, T, q, I, A, L, N, P, M, B, H, z, F, Y, W, Q, D, V, G, J, Z, K, X, ee, te, ne, ce, oe, se, ie, ae, re, le, be, de, pe, Oe, je, ue, ge, me, he, ve, fe, we, xe, ke, ye, $e, Ee, Se, Ue, _e, Ce, Re, Te, qe, Ie, Ae, Le, Ne, Pe, Me, Be, He, ze, Fe, Ye, We, Qe, De, Ge, Je, Ze, Ke, Xe, et, tt = e[7]("options.runtimeOptions") + "", nt = e[7]("options.turbo") + "", ct = e[7]("options.framerate") + "", ot = e[7]("options.interpolation") + "", st = e[7]("options.highQualityPen") + "", it = e[7]("options.infiniteClones") + "", at = e[7]("options.removeFencing") + "", rt = e[7]("options.removeMiscLimits") + "", lt = e[7]("options.username") + "", bt = e[7]("options.closeWhenStopped") + "", dt = e[7]("options.stage") + "", pt = e[7]("options.stageSize") + "", Ot = e[7]("options.preserveRatio") + "", jt = e[7]("options.stretch") + "", ut = e[7]("options.dynamicResize") + "", gt = e[10] && function(e) {
                let t, n, o = e[7]("options.storedWarning") + "";
                return {
                    c() {
                        t = Object(c.v)("div"),
                        n = Object(c.Y)(o),
                        Object(c.g)(t, "class", "group svelte-1iqxbmk")
                    },
                    m(e, o) {
                        Object(c.E)(e, t, o),
                        Object(c.d)(t, n)
                    },
                    p(e, t) {
                        128 & t[0] && o !== (o = e[7]("options.storedWarning") + "") && Object(c.Q)(n, o)
                    },
                    d(e) {
                        e && Object(c.u)(t)
                    }
                }
            }(e);
            h = new _({
                props: {
                    slug: "custom-fps"
                }
            }),
            E = new _({
                props: {
                    slug: "interpolation"
                }
            }),
            A = new _({
                props: {
                    slug: "high-quality-pen"
                }
            }),
            Y = new _({
                props: {
                    slug: "infinite-clones"
                }
            }),
            X = new _({
                props: {
                    slug: "remove-fencing"
                }
            }),
            re = new _({
                props: {
                    slug: "remove-misc-limits"
                }
            });
            let mt = e[0].username !== e[5].username && 0 !== e[8].length && Ve(e);
            return Re = new _({
                props: {
                    slug: "custom-stage-size"
                }
            }),
            Je = new _({
                props: {
                    slug: "packager/dynamic-stage-resize"
                }
            }),
            Ke = Object(c.D)(e[39][4]),
            {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("h2"),
                    o = Object(c.Y)(tt),
                    s = Object(c.U)(),
                    gt && gt.c(),
                    i = Object(c.U)(),
                    a = Object(c.v)("label"),
                    r = Object(c.v)("input"),
                    l = Object(c.U)(),
                    b = Object(c.Y)(nt),
                    d = Object(c.U)(),
                    p = Object(c.v)("div"),
                    O = Object(c.v)("label"),
                    j = Object(c.Y)(ct),
                    u = Object(c.U)(),
                    g = Object(c.v)("input"),
                    m = Object(c.U)(),
                    Object(c.o)(h.$$.fragment),
                    v = Object(c.U)(),
                    f = Object(c.v)("div"),
                    w = Object(c.v)("label"),
                    x = Object(c.v)("input"),
                    k = Object(c.U)(),
                    y = Object(c.Y)(ot),
                    $ = Object(c.U)(),
                    Object(c.o)(E.$$.fragment),
                    S = Object(c.U)(),
                    U = Object(c.v)("div"),
                    C = Object(c.v)("label"),
                    R = Object(c.v)("input"),
                    T = Object(c.U)(),
                    q = Object(c.Y)(st),
                    I = Object(c.U)(),
                    Object(c.o)(A.$$.fragment),
                    L = Object(c.U)(),
                    N = Object(c.v)("div"),
                    P = Object(c.v)("label"),
                    M = Object(c.v)("input"),
                    H = Object(c.U)(),
                    z = Object(c.Y)(it),
                    F = Object(c.U)(),
                    Object(c.o)(Y.$$.fragment),
                    W = Object(c.U)(),
                    Q = Object(c.v)("div"),
                    D = Object(c.v)("label"),
                    V = Object(c.v)("input"),
                    J = Object(c.U)(),
                    Z = Object(c.Y)(at),
                    K = Object(c.U)(),
                    Object(c.o)(X.$$.fragment),
                    ee = Object(c.U)(),
                    te = Object(c.v)("div"),
                    ne = Object(c.v)("label"),
                    ce = Object(c.v)("input"),
                    se = Object(c.U)(),
                    ie = Object(c.Y)(rt),
                    ae = Object(c.U)(),
                    Object(c.o)(re.$$.fragment),
                    le = Object(c.U)(),
                    be = Object(c.v)("label"),
                    de = Object(c.Y)(lt),
                    pe = Object(c.U)(),
                    Oe = Object(c.v)("input"),
                    je = Object(c.U)(),
                    mt && mt.c(),
                    ue = Object(c.U)(),
                    ge = Object(c.v)("label"),
                    me = Object(c.v)("input"),
                    he = Object(c.U)(),
                    ve = Object(c.Y)(bt),
                    fe = Object(c.U)(),
                    we = Object(c.v)("h3"),
                    xe = Object(c.Y)(dt),
                    ke = Object(c.U)(),
                    ye = Object(c.v)("label"),
                    $e = Object(c.Y)(pt),
                    Ee = Object(c.U)(),
                    Se = Object(c.v)("input"),
                    Ue = Object(c.Y)("\n      ×\n      "),
                    _e = Object(c.v)("input"),
                    Ce = Object(c.U)(),
                    Object(c.o)(Re.$$.fragment),
                    Te = Object(c.U)(),
                    qe = Object(c.v)("div"),
                    Ie = Object(c.v)("label"),
                    Ae = Object(c.v)("input"),
                    Le = Object(c.U)(),
                    Ne = Object(c.Y)(Ot),
                    Pe = Object(c.U)(),
                    Me = Object(c.v)("label"),
                    Be = Object(c.v)("input"),
                    He = Object(c.U)(),
                    ze = Object(c.Y)(jt),
                    Fe = Object(c.U)(),
                    Ye = Object(c.v)("label"),
                    We = Object(c.v)("input"),
                    Qe = Object(c.U)(),
                    De = Object(c.Y)(ut),
                    Ge = Object(c.U)(),
                    Object(c.o)(Je.$$.fragment),
                    Object(c.g)(r, "type", "checkbox"),
                    Object(c.g)(r, "class", "svelte-1iqxbmk"),
                    Object(c.g)(a, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(g, "type", "number"),
                    Object(c.g)(g, "min", "0"),
                    Object(c.g)(g, "max", "240"),
                    Object(c.g)(g, "class", "svelte-1iqxbmk"),
                    Object(c.g)(p, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(x, "type", "checkbox"),
                    Object(c.g)(x, "class", "svelte-1iqxbmk"),
                    Object(c.g)(f, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(R, "type", "checkbox"),
                    Object(c.g)(R, "class", "svelte-1iqxbmk"),
                    Object(c.g)(U, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(M, "type", "checkbox"),
                    M.checked = B = e[0].maxClones === Tt,
                    Object(c.g)(M, "class", "svelte-1iqxbmk"),
                    Object(c.g)(N, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(V, "type", "checkbox"),
                    V.checked = G = !e[0].fencing,
                    Object(c.g)(V, "class", "svelte-1iqxbmk"),
                    Object(c.g)(Q, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(ce, "type", "checkbox"),
                    ce.checked = oe = !e[0].miscLimits,
                    Object(c.g)(ce, "class", "svelte-1iqxbmk"),
                    Object(c.g)(te, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(Oe, "type", "text"),
                    Object(c.g)(Oe, "class", "shorter svelte-1iqxbmk"),
                    Object(c.g)(be, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(me, "type", "checkbox"),
                    Object(c.g)(me, "class", "svelte-1iqxbmk"),
                    Object(c.g)(ge, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(Se, "type", "number"),
                    Object(c.g)(Se, "min", "1"),
                    Object(c.g)(Se, "max", "4096"),
                    Object(c.g)(Se, "step", "1"),
                    Object(c.g)(Se, "class", "svelte-1iqxbmk"),
                    Object(c.g)(_e, "type", "number"),
                    Object(c.g)(_e, "min", "1"),
                    Object(c.g)(_e, "max", "4096"),
                    Object(c.g)(_e, "step", "1"),
                    Object(c.g)(_e, "class", "svelte-1iqxbmk"),
                    Object(c.g)(ye, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(Ae, "type", "radio"),
                    Object(c.g)(Ae, "name", "resize-mode"),
                    Ae.__value = "preserve-ratio",
                    Ae.value = Ae.__value,
                    Object(c.g)(Ae, "class", "svelte-1iqxbmk"),
                    Object(c.g)(Ie, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(Be, "type", "radio"),
                    Object(c.g)(Be, "name", "resize-mode"),
                    Be.__value = "stretch",
                    Be.value = Be.__value,
                    Object(c.g)(Be, "class", "svelte-1iqxbmk"),
                    Object(c.g)(Me, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(We, "type", "radio"),
                    Object(c.g)(We, "name", "resize-mode"),
                    We.__value = "dynamic-resize",
                    We.value = We.__value,
                    Object(c.g)(We, "class", "svelte-1iqxbmk"),
                    Object(c.g)(Ye, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(qe, "class", "group svelte-1iqxbmk"),
                    Ke.p(Ae, Be, We)
                },
                m(_, B) {
                    Object(c.E)(_, t, B),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    Object(c.d)(t, s),
                    gt && gt.m(t, null),
                    Object(c.d)(t, i),
                    Object(c.d)(t, a),
                    Object(c.d)(a, r),
                    r.checked = e[0].turbo,
                    Object(c.d)(a, l),
                    Object(c.d)(a, b),
                    Object(c.d)(t, d),
                    Object(c.d)(t, p),
                    Object(c.d)(p, O),
                    Object(c.d)(O, j),
                    Object(c.d)(O, u),
                    Object(c.d)(O, g),
                    Object(c.R)(g, e[0].framerate),
                    Object(c.d)(p, m),
                    Object(c.H)(h, p, null),
                    Object(c.d)(t, v),
                    Object(c.d)(t, f),
                    Object(c.d)(f, w),
                    Object(c.d)(w, x),
                    x.checked = e[0].interpolation,
                    Object(c.d)(w, k),
                    Object(c.d)(w, y),
                    Object(c.d)(f, $),
                    Object(c.H)(E, f, null),
                    Object(c.d)(t, S),
                    Object(c.d)(t, U),
                    Object(c.d)(U, C),
                    Object(c.d)(C, R),
                    R.checked = e[0].highQualityPen,
                    Object(c.d)(C, T),
                    Object(c.d)(C, q),
                    Object(c.d)(U, I),
                    Object(c.H)(A, U, null),
                    Object(c.d)(t, L),
                    Object(c.d)(t, N),
                    Object(c.d)(N, P),
                    Object(c.d)(P, M),
                    Object(c.d)(P, H),
                    Object(c.d)(P, z),
                    Object(c.d)(N, F),
                    Object(c.H)(Y, N, null),
                    Object(c.d)(t, W),
                    Object(c.d)(t, Q),
                    Object(c.d)(Q, D),
                    Object(c.d)(D, V),
                    Object(c.d)(D, J),
                    Object(c.d)(D, Z),
                    Object(c.d)(Q, K),
                    Object(c.H)(X, Q, null),
                    Object(c.d)(t, ee),
                    Object(c.d)(t, te),
                    Object(c.d)(te, ne),
                    Object(c.d)(ne, ce),
                    Object(c.d)(ne, se),
                    Object(c.d)(ne, ie),
                    Object(c.d)(te, ae),
                    Object(c.H)(re, te, null),
                    Object(c.d)(t, le),
                    Object(c.d)(t, be),
                    Object(c.d)(be, de),
                    Object(c.d)(be, pe),
                    Object(c.d)(be, Oe),
                    Object(c.R)(Oe, e[0].username),
                    Object(c.d)(t, je),
                    mt && mt.m(t, null),
                    Object(c.d)(t, ue),
                    Object(c.d)(t, ge),
                    Object(c.d)(ge, me),
                    me.checked = e[0].closeWhenStopped,
                    Object(c.d)(ge, he),
                    Object(c.d)(ge, ve),
                    Object(c.d)(t, fe),
                    Object(c.d)(t, we),
                    Object(c.d)(we, xe),
                    Object(c.d)(t, ke),
                    Object(c.d)(t, ye),
                    Object(c.d)(ye, $e),
                    Object(c.d)(ye, Ee),
                    Object(c.d)(ye, Se),
                    Object(c.R)(Se, e[0].stageWidth),
                    Object(c.d)(ye, Ue),
                    Object(c.d)(ye, _e),
                    Object(c.R)(_e, e[0].stageHeight),
                    Object(c.d)(ye, Ce),
                    Object(c.H)(Re, ye, null),
                    Object(c.d)(t, Te),
                    Object(c.d)(t, qe),
                    Object(c.d)(qe, Ie),
                    Object(c.d)(Ie, Ae),
                    Ae.checked = Ae.__value === e[0].resizeMode,
                    Object(c.d)(Ie, Le),
                    Object(c.d)(Ie, Ne),
                    Object(c.d)(qe, Pe),
                    Object(c.d)(qe, Me),
                    Object(c.d)(Me, Be),
                    Be.checked = Be.__value === e[0].resizeMode,
                    Object(c.d)(Me, He),
                    Object(c.d)(Me, ze),
                    Object(c.d)(qe, Fe),
                    Object(c.d)(qe, Ye),
                    Object(c.d)(Ye, We),
                    We.checked = We.__value === e[0].resizeMode,
                    Object(c.d)(Ye, Qe),
                    Object(c.d)(Ye, De),
                    Object(c.d)(Ye, Ge),
                    Object(c.H)(Je, Ye, null),
                    Ze = !0,
                    Xe || (et = [Object(c.G)(r, "change", e[27]), Object(c.G)(g, "input", e[28]), Object(c.G)(x, "change", e[29]), Object(c.G)(R, "change", e[30]), Object(c.G)(M, "change", e[31]), Object(c.G)(V, "change", e[32]), Object(c.G)(ce, "change", e[33]), Object(c.G)(Oe, "input", e[34]), Object(c.G)(me, "change", e[35]), Object(c.G)(Se, "input", e[36]), Object(c.G)(_e, "input", e[37]), Object(c.G)(Ae, "change", e[38]), Object(c.G)(Be, "change", e[40]), Object(c.G)(We, "change", e[41])],
                    Xe = !0)
                },
                p(e, n) {
                    (!Ze || 128 & n[0]) && tt !== (tt = e[7]("options.runtimeOptions") + "") && Object(c.Q)(o, tt),
                    e[10] && gt.p(e, n),
                    1 & n[0] && (r.checked = e[0].turbo),
                    (!Ze || 128 & n[0]) && nt !== (nt = e[7]("options.turbo") + "") && Object(c.Q)(b, nt),
                    (!Ze || 128 & n[0]) && ct !== (ct = e[7]("options.framerate") + "") && Object(c.Q)(j, ct),
                    1 & n[0] && Object(c.ab)(g.value) !== e[0].framerate && Object(c.R)(g, e[0].framerate),
                    1 & n[0] && (x.checked = e[0].interpolation),
                    (!Ze || 128 & n[0]) && ot !== (ot = e[7]("options.interpolation") + "") && Object(c.Q)(y, ot),
                    1 & n[0] && (R.checked = e[0].highQualityPen),
                    (!Ze || 128 & n[0]) && st !== (st = e[7]("options.highQualityPen") + "") && Object(c.Q)(q, st),
                    (!Ze || 1 & n[0] && B !== (B = e[0].maxClones === Tt)) && (M.checked = B),
                    (!Ze || 128 & n[0]) && it !== (it = e[7]("options.infiniteClones") + "") && Object(c.Q)(z, it),
                    (!Ze || 1 & n[0] && G !== (G = !e[0].fencing)) && (V.checked = G),
                    (!Ze || 128 & n[0]) && at !== (at = e[7]("options.removeFencing") + "") && Object(c.Q)(Z, at),
                    (!Ze || 1 & n[0] && oe !== (oe = !e[0].miscLimits)) && (ce.checked = oe),
                    (!Ze || 128 & n[0]) && rt !== (rt = e[7]("options.removeMiscLimits") + "") && Object(c.Q)(ie, rt),
                    (!Ze || 128 & n[0]) && lt !== (lt = e[7]("options.username") + "") && Object(c.Q)(de, lt),
                    1 & n[0] && Oe.value !== e[0].username && Object(c.R)(Oe, e[0].username),
                    e[0].username !== e[5].username && 0 !== e[8].length ? mt ? mt.p(e, n) : (mt = Ve(e),
                    mt.c(),
                    mt.m(t, ue)) : mt && (mt.d(1),
                    mt = null),
                    1 & n[0] && (me.checked = e[0].closeWhenStopped),
                    (!Ze || 128 & n[0]) && bt !== (bt = e[7]("options.closeWhenStopped") + "") && Object(c.Q)(ve, bt),
                    (!Ze || 128 & n[0]) && dt !== (dt = e[7]("options.stage") + "") && Object(c.Q)(xe, dt),
                    (!Ze || 128 & n[0]) && pt !== (pt = e[7]("options.stageSize") + "") && Object(c.Q)($e, pt),
                    1 & n[0] && Object(c.ab)(Se.value) !== e[0].stageWidth && Object(c.R)(Se, e[0].stageWidth),
                    1 & n[0] && Object(c.ab)(_e.value) !== e[0].stageHeight && Object(c.R)(_e, e[0].stageHeight),
                    1 & n[0] && (Ae.checked = Ae.__value === e[0].resizeMode),
                    (!Ze || 128 & n[0]) && Ot !== (Ot = e[7]("options.preserveRatio") + "") && Object(c.Q)(Ne, Ot),
                    1 & n[0] && (Be.checked = Be.__value === e[0].resizeMode),
                    (!Ze || 128 & n[0]) && jt !== (jt = e[7]("options.stretch") + "") && Object(c.Q)(ze, jt),
                    1 & n[0] && (We.checked = We.__value === e[0].resizeMode),
                    (!Ze || 128 & n[0]) && ut !== (ut = e[7]("options.dynamicResize") + "") && Object(c.Q)(De, ut)
                },
                i(e) {
                    Ze || (Object(c.cb)(h.$$.fragment, e),
                    Object(c.cb)(E.$$.fragment, e),
                    Object(c.cb)(A.$$.fragment, e),
                    Object(c.cb)(Y.$$.fragment, e),
                    Object(c.cb)(X.$$.fragment, e),
                    Object(c.cb)(re.$$.fragment, e),
                    Object(c.cb)(Re.$$.fragment, e),
                    Object(c.cb)(Je.$$.fragment, e),
                    Ze = !0)
                },
                o(e) {
                    Object(c.db)(h.$$.fragment, e),
                    Object(c.db)(E.$$.fragment, e),
                    Object(c.db)(A.$$.fragment, e),
                    Object(c.db)(Y.$$.fragment, e),
                    Object(c.db)(X.$$.fragment, e),
                    Object(c.db)(re.$$.fragment, e),
                    Object(c.db)(Re.$$.fragment, e),
                    Object(c.db)(Je.$$.fragment, e),
                    Ze = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    gt && gt.d(),
                    Object(c.s)(h),
                    Object(c.s)(E),
                    Object(c.s)(A),
                    Object(c.s)(Y),
                    Object(c.s)(X),
                    Object(c.s)(re),
                    mt && mt.d(),
                    Object(c.s)(Re),
                    Object(c.s)(Je),
                    Ke.r(),
                    Xe = !1,
                    Object(c.L)(et)
                }
            }
        }
        function Je(e) {
            let t, n, o, s, i, a, r, l, b, d, p, O, j = e[7]("options.sizeNormal") + "", u = e[7]("options.sizeStretch") + "";
            return d = Object(c.D)(e[39][3]),
            {
                c() {
                    t = Object(c.v)("label"),
                    n = Object(c.v)("input"),
                    o = Object(c.U)(),
                    s = Object(c.Y)(j),
                    i = Object(c.U)(),
                    a = Object(c.v)("label"),
                    r = Object(c.v)("input"),
                    l = Object(c.U)(),
                    b = Object(c.Y)(u),
                    Object(c.g)(n, "type", "radio"),
                    Object(c.g)(n, "name", "loading-screen-mode"),
                    n.__value = "normal",
                    n.value = n.__value,
                    Object(c.g)(n, "class", "svelte-1iqxbmk"),
                    Object(c.g)(t, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(r, "type", "radio"),
                    Object(c.g)(r, "name", "loading-screen-mode"),
                    r.__value = "stretch",
                    r.value = r.__value,
                    Object(c.g)(r, "class", "svelte-1iqxbmk"),
                    Object(c.g)(a, "class", "option svelte-1iqxbmk"),
                    d.p(n, r)
                },
                m(d, j) {
                    Object(c.E)(d, t, j),
                    Object(c.d)(t, n),
                    n.checked = n.__value === e[0].loadingScreen.imageMode,
                    Object(c.d)(t, o),
                    Object(c.d)(t, s),
                    Object(c.E)(d, i, j),
                    Object(c.E)(d, a, j),
                    Object(c.d)(a, r),
                    r.checked = r.__value === e[0].loadingScreen.imageMode,
                    Object(c.d)(a, l),
                    Object(c.d)(a, b),
                    p || (O = [Object(c.G)(n, "change", e[48]), Object(c.G)(r, "change", e[49])],
                    p = !0)
                },
                p(e, t) {
                    1 & t[0] && (n.checked = n.__value === e[0].loadingScreen.imageMode),
                    128 & t[0] && j !== (j = e[7]("options.sizeNormal") + "") && Object(c.Q)(s, j),
                    1 & t[0] && (r.checked = r.__value === e[0].loadingScreen.imageMode),
                    128 & t[0] && u !== (u = e[7]("options.sizeStretch") + "") && Object(c.Q)(b, u)
                },
                d(e) {
                    e && Object(c.u)(t),
                    e && Object(c.u)(i),
                    e && Object(c.u)(a),
                    d.r(),
                    p = !1,
                    Object(c.L)(O)
                }
            }
        }
        function Ze(e) {
            let t, n = e[7]("options.autoplayHint") + "";
            return {
                c() {
                    t = Object(c.Y)(n)
                },
                m(e, n) {
                    Object(c.E)(e, t, n)
                },
                p(e, o) {
                    128 & o[0] && n !== (n = e[7]("options.autoplayHint") + "") && Object(c.Q)(t, n)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function Ke(e) {
            let t, n, o, s, i, a, r, l, b, d, p, O, j, u, g, m, h, f, w, x, k, y, $, E, S, U, _, C, R, T, I, A, L, N, P, M, B, H, z, F, Y, W, Q, D, V, G, J, Z, K, X, ee, te, ne, ce, oe, se, ie, ae, re, le, be, de, pe, Oe, je, ue, ge, me, he, ve, fe, we, xe, ke, ye, $e, Ee, Se, Ue, _e, Ce, Re, Te, qe, Ie, Ae, Le, Ne, Pe, Me, Be, He, ze, Fe, Ye, We, Qe, De, Ve, Ge, Ke, Xe, et, tt, nt, ct, ot, st, it, at, rt, lt, bt = e[7]("options.playerOptions") + "", dt = e[7]("options.pageTitle") + "", pt = e[7]("options.icon") + "", Ot = e[7]("options.loadingScreen") + "", jt = e[7]("options.showProgressBar") + "", ut = e[7]("options.loadingScreenText") + "", gt = e[7]("options.loadingScreenImage") + "", mt = e[7]("options.controls") + "", ht = e[7]("options.autoplay") + "", vt = e[7]("options.showFlag") + "", ft = e[7]("options.showStop") + "", wt = e[7]("options.showPause") + "", xt = e[7]("options.showFullscreen") + "", kt = e[7]("options.controlsHelp") + "", yt = e[7]("options.colors") + "", $t = e[7]("options.backgroundColor") + "", Et = e[7]("options.foregroundColor") + "", St = e[7]("options.accentColor") + "", Ut = e[7]("options.monitors") + "", _t = e[7]("options.editableLists") + "", Ct = e[7]("options.variableColor") + "", Rt = e[7]("options.listColor") + "";
            function Tt(t) {
                e[44](t)
            }
            let qt = {
                previewSizes: [[64, 64], [32, 32], [16, 16]]
            };
            function It(t) {
                e[47](t)
            }
            void 0 !== e[3] && (qt.file = e[3]),
            j = new v({
                props: qt
            }),
            c.i.push(()=>Object(c.h)(j, "file", Tt));
            let At = {
                previewSizes: [["", ""]]
            };
            void 0 !== e[1] && (At.file = e[1]),
            L = new v({
                props: At
            }),
            c.i.push(()=>Object(c.h)(L, "file", It));
            let Lt = e[1] && Je(e)
              , Nt = e[0].autoplay && Ze(e);
            function Pt(t) {
                e[55](t)
            }
            let Mt = {};
            function Bt(t) {
                e[56](t)
            }
            void 0 !== e[0].appearance.background && (Mt.value = e[0].appearance.background),
            ke = new q({
                props: Mt
            }),
            c.i.push(()=>Object(c.h)(ke, "value", Pt));
            let Ht = {};
            function zt(t) {
                e[57](t)
            }
            void 0 !== e[0].appearance.foreground && (Ht.value = e[0].appearance.foreground),
            _e = new q({
                props: Ht
            }),
            c.i.push(()=>Object(c.h)(_e, "value", Bt));
            let Ft = {};
            function Yt(t) {
                e[59](t)
            }
            void 0 !== e[0].appearance.accent && (Ft.value = e[0].appearance.accent),
            Ae = new q({
                props: Ft
            }),
            c.i.push(()=>Object(c.h)(Ae, "value", zt));
            let Wt = {};
            function Qt(t) {
                e[60](t)
            }
            void 0 !== e[0].monitors.variableColor && (Wt.value = e[0].monitors.variableColor),
            Ge = new q({
                props: Wt
            }),
            c.i.push(()=>Object(c.h)(Ge, "value", Yt));
            let Dt = {};
            return void 0 !== e[0].monitors.listColor && (Dt.value = e[0].monitors.listColor),
            ct = new q({
                props: Dt
            }),
            c.i.push(()=>Object(c.h)(ct, "value", Qt)),
            {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("h2"),
                    o = Object(c.Y)(bt),
                    s = Object(c.U)(),
                    i = Object(c.v)("label"),
                    a = Object(c.Y)(dt),
                    r = Object(c.U)(),
                    l = Object(c.v)("input"),
                    b = Object(c.U)(),
                    d = Object(c.v)("div"),
                    p = Object(c.Y)(pt),
                    O = Object(c.U)(),
                    Object(c.o)(j.$$.fragment),
                    g = Object(c.U)(),
                    m = Object(c.v)("h3"),
                    h = Object(c.Y)(Ot),
                    f = Object(c.U)(),
                    w = Object(c.v)("label"),
                    x = Object(c.v)("input"),
                    k = Object(c.U)(),
                    y = Object(c.Y)(jt),
                    $ = Object(c.U)(),
                    E = Object(c.v)("label"),
                    S = Object(c.Y)(ut),
                    U = Object(c.U)(),
                    _ = Object(c.v)("input"),
                    R = Object(c.U)(),
                    T = Object(c.v)("div"),
                    I = Object(c.Y)(gt),
                    A = Object(c.U)(),
                    Object(c.o)(L.$$.fragment),
                    P = Object(c.U)(),
                    Lt && Lt.c(),
                    M = Object(c.U)(),
                    B = Object(c.v)("h3"),
                    H = Object(c.Y)(mt),
                    z = Object(c.U)(),
                    F = Object(c.v)("div"),
                    Y = Object(c.v)("label"),
                    W = Object(c.v)("input"),
                    Q = Object(c.U)(),
                    D = Object(c.Y)(ht),
                    V = Object(c.U)(),
                    Nt && Nt.c(),
                    G = Object(c.U)(),
                    J = Object(c.v)("label"),
                    Z = Object(c.v)("input"),
                    K = Object(c.U)(),
                    X = Object(c.Y)(vt),
                    ee = Object(c.U)(),
                    te = Object(c.v)("label"),
                    ne = Object(c.v)("input"),
                    ce = Object(c.U)(),
                    oe = Object(c.Y)(ft),
                    se = Object(c.U)(),
                    ie = Object(c.v)("label"),
                    ae = Object(c.v)("input"),
                    re = Object(c.U)(),
                    le = Object(c.Y)(wt),
                    be = Object(c.U)(),
                    de = Object(c.v)("label"),
                    pe = Object(c.v)("input"),
                    Oe = Object(c.U)(),
                    je = Object(c.Y)(xt),
                    ue = Object(c.U)(),
                    ge = Object(c.v)("p"),
                    me = Object(c.Y)(kt),
                    he = Object(c.U)(),
                    ve = Object(c.v)("h3"),
                    fe = Object(c.Y)(yt),
                    we = Object(c.U)(),
                    xe = Object(c.v)("label"),
                    Object(c.o)(ke.$$.fragment),
                    $e = Object(c.U)(),
                    Ee = Object(c.Y)($t),
                    Se = Object(c.U)(),
                    Ue = Object(c.v)("label"),
                    Object(c.o)(_e.$$.fragment),
                    Re = Object(c.U)(),
                    Te = Object(c.Y)(Et),
                    qe = Object(c.U)(),
                    Ie = Object(c.v)("label"),
                    Object(c.o)(Ae.$$.fragment),
                    Ne = Object(c.U)(),
                    Pe = Object(c.Y)(St),
                    Me = Object(c.U)(),
                    Be = Object(c.v)("h3"),
                    He = Object(c.Y)(Ut),
                    ze = Object(c.U)(),
                    Fe = Object(c.v)("label"),
                    Ye = Object(c.v)("input"),
                    We = Object(c.U)(),
                    Qe = Object(c.Y)(_t),
                    De = Object(c.U)(),
                    Ve = Object(c.v)("label"),
                    Object(c.o)(Ge.$$.fragment),
                    Xe = Object(c.U)(),
                    et = Object(c.Y)(Ct),
                    tt = Object(c.U)(),
                    nt = Object(c.v)("label"),
                    Object(c.o)(ct.$$.fragment),
                    st = Object(c.U)(),
                    it = Object(c.Y)(Rt),
                    Object(c.g)(l, "type", "text"),
                    Object(c.g)(l, "class", "svelte-1iqxbmk"),
                    Object(c.g)(i, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(d, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(x, "type", "checkbox"),
                    Object(c.g)(x, "class", "svelte-1iqxbmk"),
                    Object(c.g)(w, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(_, "type", "text"),
                    Object(c.g)(_, "placeholder", C = e[7]("options.loadingScreenTextPlaceholder")),
                    Object(c.g)(_, "class", "svelte-1iqxbmk"),
                    Object(c.g)(E, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(T, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(W, "type", "checkbox"),
                    Object(c.g)(W, "class", "svelte-1iqxbmk"),
                    Object(c.g)(Y, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(F, "class", "group svelte-1iqxbmk"),
                    Object(c.g)(Z, "type", "checkbox"),
                    Object(c.g)(Z, "class", "svelte-1iqxbmk"),
                    Object(c.g)(J, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(ne, "type", "checkbox"),
                    Object(c.g)(ne, "class", "svelte-1iqxbmk"),
                    Object(c.g)(te, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(ae, "type", "checkbox"),
                    Object(c.g)(ae, "class", "svelte-1iqxbmk"),
                    Object(c.g)(ie, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(pe, "type", "checkbox"),
                    Object(c.g)(pe, "class", "svelte-1iqxbmk"),
                    Object(c.g)(de, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(ge, "class", "svelte-1iqxbmk"),
                    Object(c.g)(xe, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(Ue, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(Ie, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(Ye, "type", "checkbox"),
                    Object(c.g)(Ye, "class", "svelte-1iqxbmk"),
                    Object(c.g)(Fe, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(Ve, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(nt, "class", "option svelte-1iqxbmk")
                },
                m(u, v) {
                    Object(c.E)(u, t, v),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    Object(c.d)(t, s),
                    Object(c.d)(t, i),
                    Object(c.d)(i, a),
                    Object(c.d)(i, r),
                    Object(c.d)(i, l),
                    Object(c.R)(l, e[0].app.windowTitle),
                    Object(c.d)(t, b),
                    Object(c.d)(t, d),
                    Object(c.d)(d, p),
                    Object(c.d)(d, O),
                    Object(c.H)(j, d, null),
                    Object(c.d)(t, g),
                    Object(c.d)(t, m),
                    Object(c.d)(m, h),
                    Object(c.d)(t, f),
                    Object(c.d)(t, w),
                    Object(c.d)(w, x),
                    x.checked = e[0].loadingScreen.progressBar,
                    Object(c.d)(w, k),
                    Object(c.d)(w, y),
                    Object(c.d)(t, $),
                    Object(c.d)(t, E),
                    Object(c.d)(E, S),
                    Object(c.d)(E, U),
                    Object(c.d)(E, _),
                    Object(c.R)(_, e[0].loadingScreen.text),
                    Object(c.d)(t, R),
                    Object(c.d)(t, T),
                    Object(c.d)(T, I),
                    Object(c.d)(T, A),
                    Object(c.H)(L, T, null),
                    Object(c.d)(t, P),
                    Lt && Lt.m(t, null),
                    Object(c.d)(t, M),
                    Object(c.d)(t, B),
                    Object(c.d)(B, H),
                    Object(c.d)(t, z),
                    Object(c.d)(t, F),
                    Object(c.d)(F, Y),
                    Object(c.d)(Y, W),
                    W.checked = e[0].autoplay,
                    Object(c.d)(Y, Q),
                    Object(c.d)(Y, D),
                    Object(c.d)(F, V),
                    Nt && Nt.m(F, null),
                    Object(c.d)(t, G),
                    Object(c.d)(t, J),
                    Object(c.d)(J, Z),
                    Z.checked = e[0].controls.greenFlag.enabled,
                    Object(c.d)(J, K),
                    Object(c.d)(J, X),
                    Object(c.d)(t, ee),
                    Object(c.d)(t, te),
                    Object(c.d)(te, ne),
                    ne.checked = e[0].controls.stopAll.enabled,
                    Object(c.d)(te, ce),
                    Object(c.d)(te, oe),
                    Object(c.d)(t, se),
                    Object(c.d)(t, ie),
                    Object(c.d)(ie, ae),
                    ae.checked = e[0].controls.pause.enabled,
                    Object(c.d)(ie, re),
                    Object(c.d)(ie, le),
                    Object(c.d)(t, be),
                    Object(c.d)(t, de),
                    Object(c.d)(de, pe),
                    pe.checked = e[0].controls.fullscreen.enabled,
                    Object(c.d)(de, Oe),
                    Object(c.d)(de, je),
                    Object(c.d)(t, ue),
                    Object(c.d)(t, ge),
                    Object(c.d)(ge, me),
                    Object(c.d)(t, he),
                    Object(c.d)(t, ve),
                    Object(c.d)(ve, fe),
                    Object(c.d)(t, we),
                    Object(c.d)(t, xe),
                    Object(c.H)(ke, xe, null),
                    Object(c.d)(xe, $e),
                    Object(c.d)(xe, Ee),
                    Object(c.d)(t, Se),
                    Object(c.d)(t, Ue),
                    Object(c.H)(_e, Ue, null),
                    Object(c.d)(Ue, Re),
                    Object(c.d)(Ue, Te),
                    Object(c.d)(t, qe),
                    Object(c.d)(t, Ie),
                    Object(c.H)(Ae, Ie, null),
                    Object(c.d)(Ie, Ne),
                    Object(c.d)(Ie, Pe),
                    Object(c.d)(t, Me),
                    Object(c.d)(t, Be),
                    Object(c.d)(Be, He),
                    Object(c.d)(t, ze),
                    Object(c.d)(t, Fe),
                    Object(c.d)(Fe, Ye),
                    Ye.checked = e[0].monitors.editableLists,
                    Object(c.d)(Fe, We),
                    Object(c.d)(Fe, Qe),
                    Object(c.d)(t, De),
                    Object(c.d)(t, Ve),
                    Object(c.H)(Ge, Ve, null),
                    Object(c.d)(Ve, Xe),
                    Object(c.d)(Ve, et),
                    Object(c.d)(t, tt),
                    Object(c.d)(t, nt),
                    Object(c.H)(ct, nt, null),
                    Object(c.d)(nt, st),
                    Object(c.d)(nt, it),
                    at = !0,
                    rt || (lt = [Object(c.G)(l, "input", e[43]), Object(c.G)(x, "change", e[45]), Object(c.G)(_, "input", e[46]), Object(c.G)(W, "change", e[50]), Object(c.G)(Z, "change", e[51]), Object(c.G)(ne, "change", e[52]), Object(c.G)(ae, "change", e[53]), Object(c.G)(pe, "change", e[54]), Object(c.G)(Ye, "change", e[58])],
                    rt = !0)
                },
                p(e, n) {
                    (!at || 128 & n[0]) && bt !== (bt = e[7]("options.playerOptions") + "") && Object(c.Q)(o, bt),
                    (!at || 128 & n[0]) && dt !== (dt = e[7]("options.pageTitle") + "") && Object(c.Q)(a, dt),
                    1 & n[0] && l.value !== e[0].app.windowTitle && Object(c.R)(l, e[0].app.windowTitle),
                    (!at || 128 & n[0]) && pt !== (pt = e[7]("options.icon") + "") && Object(c.Q)(p, pt);
                    const s = {};
                    !u && 8 & n[0] && (u = !0,
                    s.file = e[3],
                    Object(c.b)(()=>u = !1)),
                    j.$set(s),
                    (!at || 128 & n[0]) && Ot !== (Ot = e[7]("options.loadingScreen") + "") && Object(c.Q)(h, Ot),
                    1 & n[0] && (x.checked = e[0].loadingScreen.progressBar),
                    (!at || 128 & n[0]) && jt !== (jt = e[7]("options.showProgressBar") + "") && Object(c.Q)(y, jt),
                    (!at || 128 & n[0]) && ut !== (ut = e[7]("options.loadingScreenText") + "") && Object(c.Q)(S, ut),
                    (!at || 128 & n[0] && C !== (C = e[7]("options.loadingScreenTextPlaceholder"))) && Object(c.g)(_, "placeholder", C),
                    1 & n[0] && _.value !== e[0].loadingScreen.text && Object(c.R)(_, e[0].loadingScreen.text),
                    (!at || 128 & n[0]) && gt !== (gt = e[7]("options.loadingScreenImage") + "") && Object(c.Q)(I, gt);
                    const i = {};
                    !N && 2 & n[0] && (N = !0,
                    i.file = e[1],
                    Object(c.b)(()=>N = !1)),
                    L.$set(i),
                    e[1] ? Lt ? Lt.p(e, n) : (Lt = Je(e),
                    Lt.c(),
                    Lt.m(t, M)) : Lt && (Lt.d(1),
                    Lt = null),
                    (!at || 128 & n[0]) && mt !== (mt = e[7]("options.controls") + "") && Object(c.Q)(H, mt),
                    1 & n[0] && (W.checked = e[0].autoplay),
                    (!at || 128 & n[0]) && ht !== (ht = e[7]("options.autoplay") + "") && Object(c.Q)(D, ht),
                    e[0].autoplay ? Nt ? Nt.p(e, n) : (Nt = Ze(e),
                    Nt.c(),
                    Nt.m(F, null)) : Nt && (Nt.d(1),
                    Nt = null),
                    1 & n[0] && (Z.checked = e[0].controls.greenFlag.enabled),
                    (!at || 128 & n[0]) && vt !== (vt = e[7]("options.showFlag") + "") && Object(c.Q)(X, vt),
                    1 & n[0] && (ne.checked = e[0].controls.stopAll.enabled),
                    (!at || 128 & n[0]) && ft !== (ft = e[7]("options.showStop") + "") && Object(c.Q)(oe, ft),
                    1 & n[0] && (ae.checked = e[0].controls.pause.enabled),
                    (!at || 128 & n[0]) && wt !== (wt = e[7]("options.showPause") + "") && Object(c.Q)(le, wt),
                    1 & n[0] && (pe.checked = e[0].controls.fullscreen.enabled),
                    (!at || 128 & n[0]) && xt !== (xt = e[7]("options.showFullscreen") + "") && Object(c.Q)(je, xt),
                    (!at || 128 & n[0]) && kt !== (kt = e[7]("options.controlsHelp") + "") && Object(c.Q)(me, kt),
                    (!at || 128 & n[0]) && yt !== (yt = e[7]("options.colors") + "") && Object(c.Q)(fe, yt);
                    const r = {};
                    !ye && 1 & n[0] && (ye = !0,
                    r.value = e[0].appearance.background,
                    Object(c.b)(()=>ye = !1)),
                    ke.$set(r),
                    (!at || 128 & n[0]) && $t !== ($t = e[7]("options.backgroundColor") + "") && Object(c.Q)(Ee, $t);
                    const b = {};
                    !Ce && 1 & n[0] && (Ce = !0,
                    b.value = e[0].appearance.foreground,
                    Object(c.b)(()=>Ce = !1)),
                    _e.$set(b),
                    (!at || 128 & n[0]) && Et !== (Et = e[7]("options.foregroundColor") + "") && Object(c.Q)(Te, Et);
                    const d = {};
                    !Le && 1 & n[0] && (Le = !0,
                    d.value = e[0].appearance.accent,
                    Object(c.b)(()=>Le = !1)),
                    Ae.$set(d),
                    (!at || 128 & n[0]) && St !== (St = e[7]("options.accentColor") + "") && Object(c.Q)(Pe, St),
                    (!at || 128 & n[0]) && Ut !== (Ut = e[7]("options.monitors") + "") && Object(c.Q)(He, Ut),
                    1 & n[0] && (Ye.checked = e[0].monitors.editableLists),
                    (!at || 128 & n[0]) && _t !== (_t = e[7]("options.editableLists") + "") && Object(c.Q)(Qe, _t);
                    const O = {};
                    !Ke && 1 & n[0] && (Ke = !0,
                    O.value = e[0].monitors.variableColor,
                    Object(c.b)(()=>Ke = !1)),
                    Ge.$set(O),
                    (!at || 128 & n[0]) && Ct !== (Ct = e[7]("options.variableColor") + "") && Object(c.Q)(et, Ct);
                    const g = {};
                    !ot && 1 & n[0] && (ot = !0,
                    g.value = e[0].monitors.listColor,
                    Object(c.b)(()=>ot = !1)),
                    ct.$set(g),
                    (!at || 128 & n[0]) && Rt !== (Rt = e[7]("options.listColor") + "") && Object(c.Q)(it, Rt)
                },
                i(e) {
                    at || (Object(c.cb)(j.$$.fragment, e),
                    Object(c.cb)(L.$$.fragment, e),
                    Object(c.cb)(ke.$$.fragment, e),
                    Object(c.cb)(_e.$$.fragment, e),
                    Object(c.cb)(Ae.$$.fragment, e),
                    Object(c.cb)(Ge.$$.fragment, e),
                    Object(c.cb)(ct.$$.fragment, e),
                    at = !0)
                },
                o(e) {
                    Object(c.db)(j.$$.fragment, e),
                    Object(c.db)(L.$$.fragment, e),
                    Object(c.db)(ke.$$.fragment, e),
                    Object(c.db)(_e.$$.fragment, e),
                    Object(c.db)(Ae.$$.fragment, e),
                    Object(c.db)(Ge.$$.fragment, e),
                    Object(c.db)(ct.$$.fragment, e),
                    at = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    Object(c.s)(j),
                    Object(c.s)(L),
                    Lt && Lt.d(),
                    Nt && Nt.d(),
                    Object(c.s)(ke),
                    Object(c.s)(_e),
                    Object(c.s)(Ae),
                    Object(c.s)(Ge),
                    Object(c.s)(ct),
                    rt = !1,
                    Object(c.L)(lt)
                }
            }
        }
        function Xe(e) {
            let t, n, o, s, a, r, l, b, d, p, O, j, u, g, m, h, f, w, x, k, y, $ = e[7]("options.cursorHelp") + "", E = e[7]("options.cursorCenter") + "", S = e[7]("options.automaticallyCenter") + "";
            function U(t) {
                e[65](t)
            }
            let _ = {
                previewSizes: [[32, 32], [16, 16]]
            };
            return void 0 !== e[2] && (_.file = e[2]),
            n = new v({
                props: _
            }),
            c.i.push(()=>Object(c.h)(n, "file", U)),
            {
                c() {
                    t = Object(c.v)("div"),
                    Object(c.o)(n.$$.fragment),
                    s = Object(c.U)(),
                    a = Object(c.v)("p"),
                    r = Object(c.Y)($),
                    l = Object(c.U)(),
                    b = Object(c.v)("label"),
                    d = Object(c.Y)(E),
                    p = Object(c.Y)("\n          \n          X: "),
                    O = Object(c.v)("input"),
                    j = Object(c.Y)("\n          Y: "),
                    u = Object(c.v)("input"),
                    g = Object(c.U)(),
                    m = Object(c.v)("button"),
                    h = Object(c.Y)(S),
                    Object(c.g)(a, "class", "svelte-1iqxbmk"),
                    Object(c.g)(O, "type", "number"),
                    Object(c.g)(O, "min", "0"),
                    Object(c.g)(O, "class", "svelte-1iqxbmk"),
                    Object(c.g)(u, "type", "number"),
                    Object(c.g)(u, "min", "0"),
                    Object(c.g)(u, "class", "svelte-1iqxbmk"),
                    m.disabled = f = !e[2],
                    Object(c.g)(b, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(t, "class", "option svelte-1iqxbmk")
                },
                m(o, i) {
                    Object(c.E)(o, t, i),
                    Object(c.H)(n, t, null),
                    Object(c.d)(t, s),
                    Object(c.d)(t, a),
                    Object(c.d)(a, r),
                    Object(c.d)(t, l),
                    Object(c.d)(t, b),
                    Object(c.d)(b, d),
                    Object(c.d)(b, p),
                    Object(c.d)(b, O),
                    Object(c.R)(O, e[0].cursor.center.x),
                    Object(c.d)(b, j),
                    Object(c.d)(b, u),
                    Object(c.R)(u, e[0].cursor.center.y),
                    Object(c.d)(b, g),
                    Object(c.d)(b, m),
                    Object(c.d)(m, h),
                    x = !0,
                    k || (y = [Object(c.G)(O, "input", e[66]), Object(c.G)(u, "input", e[67]), Object(c.G)(m, "click", e[16])],
                    k = !0)
                },
                p(e, t) {
                    const s = {};
                    !o && 4 & t[0] && (o = !0,
                    s.file = e[2],
                    Object(c.b)(()=>o = !1)),
                    n.$set(s),
                    (!x || 128 & t[0]) && $ !== ($ = e[7]("options.cursorHelp") + "") && Object(c.Q)(r, $),
                    (!x || 128 & t[0]) && E !== (E = e[7]("options.cursorCenter") + "") && Object(c.Q)(d, E),
                    1 & t[0] && Object(c.ab)(O.value) !== e[0].cursor.center.x && Object(c.R)(O, e[0].cursor.center.x),
                    1 & t[0] && Object(c.ab)(u.value) !== e[0].cursor.center.y && Object(c.R)(u, e[0].cursor.center.y),
                    (!x || 128 & t[0]) && S !== (S = e[7]("options.automaticallyCenter") + "") && Object(c.Q)(h, S),
                    (!x || 4 & t[0] && f !== (f = !e[2])) && (m.disabled = f)
                },
                i(e) {
                    x || (Object(c.cb)(n.$$.fragment, e),
                    w || Object(c.c)(()=>{
                        w = Object(c.p)(t, i.b, {}),
                        w.start()
                    }
                    ),
                    x = !0)
                },
                o(e) {
                    Object(c.db)(n.$$.fragment, e),
                    x = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    Object(c.s)(n),
                    k = !1,
                    Object(c.L)(y)
                }
            }
        }
        function et(e) {
            let t, n, o, s, i, a, r, l, b, d, p, O, j, u, g, m, h, v, f, w, x, k, y, $, E, S, U, _, C, R, T, q, I, A, L, N, P, M, B, H, z, F, Y = e[7]("options.interaction") + "", W = e[7]("options.normalCursor") + "", Q = e[7]("options.noCursor") + "", D = e[7]("options.customCursor") + "", V = e[7]("options.pointerlock") + "", G = e[7]("options.pointerlockHelp") + "", J = e[7]("options.gamepad") + "", Z = e[7]("options.gamepadHelp") + "", K = "custom" === e[0].cursor.type && Xe(e);
            return H = Object(c.D)(e[39][2]),
            {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("h2"),
                    o = Object(c.Y)(Y),
                    s = Object(c.U)(),
                    i = Object(c.v)("div"),
                    a = Object(c.v)("label"),
                    r = Object(c.v)("input"),
                    l = Object(c.U)(),
                    b = Object(c.Y)(W),
                    d = Object(c.U)(),
                    p = Object(c.v)("label"),
                    O = Object(c.v)("input"),
                    j = Object(c.U)(),
                    u = Object(c.Y)(Q),
                    g = Object(c.U)(),
                    m = Object(c.v)("label"),
                    h = Object(c.v)("input"),
                    v = Object(c.U)(),
                    f = Object(c.Y)(D),
                    w = Object(c.U)(),
                    K && K.c(),
                    x = Object(c.U)(),
                    k = Object(c.v)("div"),
                    y = Object(c.v)("label"),
                    $ = Object(c.v)("input"),
                    E = Object(c.U)(),
                    S = Object(c.Y)(V),
                    U = Object(c.U)(),
                    _ = Object(c.v)("a"),
                    C = Object(c.Y)(G),
                    R = Object(c.U)(),
                    T = Object(c.v)("div"),
                    q = Object(c.v)("label"),
                    I = Object(c.v)("input"),
                    A = Object(c.U)(),
                    L = Object(c.Y)(J),
                    N = Object(c.U)(),
                    P = Object(c.v)("a"),
                    M = Object(c.Y)(Z),
                    Object(c.g)(r, "type", "radio"),
                    Object(c.g)(r, "name", "cursor-type"),
                    r.__value = "auto",
                    r.value = r.__value,
                    Object(c.g)(r, "class", "svelte-1iqxbmk"),
                    Object(c.g)(a, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(O, "type", "radio"),
                    Object(c.g)(O, "name", "cursor-type"),
                    O.__value = "none",
                    O.value = O.__value,
                    Object(c.g)(O, "class", "svelte-1iqxbmk"),
                    Object(c.g)(p, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(h, "type", "radio"),
                    Object(c.g)(h, "name", "cursor-type"),
                    h.__value = "custom",
                    h.value = h.__value,
                    Object(c.g)(h, "class", "svelte-1iqxbmk"),
                    Object(c.g)(m, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(i, "class", "group svelte-1iqxbmk"),
                    Object(c.g)($, "type", "checkbox"),
                    Object(c.g)($, "class", "svelte-1iqxbmk"),
                    Object(c.g)(y, "class", "option svelte-1iqxbmk"),
                    // !!! CHANGE !!!
                    // Object(c.g)(_, "href", "https://experiments.turbowarp.org/pointerlock/"),
                    // Object(c.g)(_, "href", "https://mixality.github.io/Sidekick/experiments/pointerlock/"),
                    Object(c.g)(_, "href", "https://menersar.github.io/Sidekick/experiments/pointerlock/"),
                    Object(c.g)(_, "target", "_blank"),
                    Object(c.g)(_, "rel", "noopener noreferrer"),
                    Object(c.g)(k, "class", "group svelte-1iqxbmk"),
                    Object(c.g)(I, "type", "checkbox"),
                    Object(c.g)(I, "class", "svelte-1iqxbmk"),
                    Object(c.g)(q, "class", "option svelte-1iqxbmk"),
                    // !!! CHANGE !!!
                    // Object(c.g)(P, "href", "https://turbowarp.org/addons#gamepad"),
                    // Object(c.g)(P, "href", "https://mixality.github.io/Sidekick/addons#gamepad"),
                    Object(c.g)(P, "href", "https://menersar.github.io/Sidekick/addons#gamepad"),
                    Object(c.g)(P, "target", "_blank"),
                    Object(c.g)(P, "rel", "noopener noreferrer"),
                    Object(c.g)(T, "class", "group svelte-1iqxbmk"),
                    H.p(r, O, h)
                },
                m(H, Y) {
                    Object(c.E)(H, t, Y),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    Object(c.d)(t, s),
                    Object(c.d)(t, i),
                    Object(c.d)(i, a),
                    Object(c.d)(a, r),
                    r.checked = r.__value === e[0].cursor.type,
                    Object(c.d)(a, l),
                    Object(c.d)(a, b),
                    Object(c.d)(i, d),
                    Object(c.d)(i, p),
                    Object(c.d)(p, O),
                    O.checked = O.__value === e[0].cursor.type,
                    Object(c.d)(p, j),
                    Object(c.d)(p, u),
                    Object(c.d)(i, g),
                    Object(c.d)(i, m),
                    Object(c.d)(m, h),
                    h.checked = h.__value === e[0].cursor.type,
                    Object(c.d)(m, v),
                    Object(c.d)(m, f),
                    Object(c.d)(t, w),
                    K && K.m(t, null),
                    Object(c.d)(t, x),
                    Object(c.d)(t, k),
                    Object(c.d)(k, y),
                    Object(c.d)(y, $),
                    $.checked = e[0].chunks.pointerlock,
                    Object(c.d)(y, E),
                    Object(c.d)(y, S),
                    Object(c.d)(k, U),
                    Object(c.d)(k, _),
                    Object(c.d)(_, C),
                    Object(c.d)(t, R),
                    Object(c.d)(t, T),
                    Object(c.d)(T, q),
                    Object(c.d)(q, I),
                    I.checked = e[0].chunks.gamepad,
                    Object(c.d)(q, A),
                    Object(c.d)(q, L),
                    Object(c.d)(T, N),
                    Object(c.d)(T, P),
                    Object(c.d)(P, M),
                    B = !0,
                    z || (F = [Object(c.G)(r, "change", e[62]), Object(c.G)(O, "change", e[63]), Object(c.G)(h, "change", e[64]), Object(c.G)($, "change", e[68]), Object(c.G)(I, "change", e[69])],
                    z = !0)
                },
                p(e, n) {
                    (!B || 128 & n[0]) && Y !== (Y = e[7]("options.interaction") + "") && Object(c.Q)(o, Y),
                    1 & n[0] && (r.checked = r.__value === e[0].cursor.type),
                    (!B || 128 & n[0]) && W !== (W = e[7]("options.normalCursor") + "") && Object(c.Q)(b, W),
                    1 & n[0] && (O.checked = O.__value === e[0].cursor.type),
                    (!B || 128 & n[0]) && Q !== (Q = e[7]("options.noCursor") + "") && Object(c.Q)(u, Q),
                    1 & n[0] && (h.checked = h.__value === e[0].cursor.type),
                    (!B || 128 & n[0]) && D !== (D = e[7]("options.customCursor") + "") && Object(c.Q)(f, D),
                    "custom" === e[0].cursor.type ? K ? (K.p(e, n),
                    1 & n[0] && Object(c.cb)(K, 1)) : (K = Xe(e),
                    K.c(),
                    Object(c.cb)(K, 1),
                    K.m(t, x)) : K && (Object(c.z)(),
                    Object(c.db)(K, 1, 1, ()=>{
                        K = null
                    }
                    ),
                    Object(c.k)()),
                    1 & n[0] && ($.checked = e[0].chunks.pointerlock),
                    (!B || 128 & n[0]) && V !== (V = e[7]("options.pointerlock") + "") && Object(c.Q)(S, V),
                    (!B || 128 & n[0]) && G !== (G = e[7]("options.pointerlockHelp") + "") && Object(c.Q)(C, G),
                    1 & n[0] && (I.checked = e[0].chunks.gamepad),
                    (!B || 128 & n[0]) && J !== (J = e[7]("options.gamepad") + "") && Object(c.Q)(L, J),
                    (!B || 128 & n[0]) && Z !== (Z = e[7]("options.gamepadHelp") + "") && Object(c.Q)(M, Z)
                },
                i(e) {
                    B || (Object(c.cb)(K),
                    B = !0)
                },
                o(e) {
                    Object(c.db)(K),
                    B = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    K && K.d(),
                    H.r(),
                    z = !1,
                    Object(c.L)(F)
                }
            }
        }
        function tt(e) {
            let t, n, o = e[7]("options.noCloudVariables") + "";
            return {
                c() {
                    t = Object(c.v)("p"),
                    n = Object(c.Y)(o),
                    Object(c.g)(t, "class", "svelte-1iqxbmk")
                },
                m(e, o) {
                    Object(c.E)(e, t, o),
                    Object(c.d)(t, n)
                },
                p(e, t) {
                    128 & t[0] && o !== (o = e[7]("options.noCloudVariables") + "") && Object(c.Q)(n, o)
                },
                i: c.I,
                o: c.I,
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function nt(e) {
            let t, n, o, s, i, a, r, l, b, d, p, O, j, u, g, m, h, v, f, w, x, k, y, $, E, S, U, C, R, T, q, I, A, L, N, P, M, B, H, z, F, Y, W, Q, D, V, G, J, Z, K = e[7]("options.mode") + "", X = e[7]("options.cloudVariables-ws") + "", ee = e[7]("options.cloudVariables-local") + "", te = e[7]("options.cloudVariables-ignore") + "", ne = e[7]("options.cloudVariables-custom") + "", ce = e[7]("options.cloudVariables-ws-help") + "", oe = e[7]("options.cloudVariables-local-help") + "", se = e[7]("options.cloudVariables-ignore-help") + "", ie = e[7]("options.cloudVariables-custom-help") + "", ae = e[7]("options.specialCloudBehaviors") + "", re = e[7]("options.unsafeCloudBehaviors") + "", le = e[7]("options.implicitCloudHint").replace("{cloud}", "☁") + "", be = "custom" === e[0].cloudVariables.mode && ct(e), de = ("ws" === e[0].cloudVariables.mode || "custom" === e[0].cloudVariables.mode) && st(e);
            L = new _({
                props: {
                    slug: "packager/special-cloud-behaviors"
                }
            }),
            Y = new _({
                props: {
                    slug: "packager/special-cloud-behaviors#eval"
                }
            });
            let pe = e[0].cloudVariables.unsafeCloudBehaviors && it(e);
            return {
                c() {
                    t = Object(c.v)("label"),
                    n = Object(c.Y)(K),
                    o = Object(c.U)(),
                    s = Object(c.v)("select"),
                    i = Object(c.v)("option"),
                    a = Object(c.Y)(X),
                    r = Object(c.v)("option"),
                    l = Object(c.Y)(ee),
                    b = Object(c.v)("option"),
                    d = Object(c.Y)(te),
                    p = Object(c.v)("option"),
                    O = Object(c.Y)(ne),
                    j = Object(c.U)(),
                    be && be.c(),
                    u = Object(c.U)(),
                    de && de.c(),
                    g = Object(c.U)(),
                    m = Object(c.v)("p"),
                    h = Object(c.Y)(ce),
                    v = Object(c.U)(),
                    f = Object(c.v)("p"),
                    w = Object(c.Y)(oe),
                    x = Object(c.U)(),
                    k = Object(c.v)("p"),
                    y = Object(c.Y)(se),
                    $ = Object(c.U)(),
                    E = Object(c.v)("p"),
                    S = Object(c.Y)(ie),
                    U = Object(c.U)(),
                    C = Object(c.v)("div"),
                    R = Object(c.v)("label"),
                    T = Object(c.v)("input"),
                    q = Object(c.U)(),
                    I = Object(c.Y)(ae),
                    A = Object(c.U)(),
                    Object(c.o)(L.$$.fragment),
                    N = Object(c.U)(),
                    P = Object(c.v)("div"),
                    M = Object(c.v)("label"),
                    B = Object(c.v)("input"),
                    H = Object(c.U)(),
                    z = Object(c.Y)(re),
                    F = Object(c.U)(),
                    Object(c.o)(Y.$$.fragment),
                    W = Object(c.U)(),
                    pe && pe.c(),
                    Q = Object(c.U)(),
                    D = Object(c.v)("p"),
                    V = Object(c.Y)(le),
                    i.__value = "ws",
                    i.value = i.__value,
                    r.__value = "local",
                    r.value = r.__value,
                    b.__value = "",
                    b.value = b.__value,
                    p.__value = "custom",
                    p.value = p.__value,
                    void 0 === e[0].cloudVariables.mode && Object(c.c)(()=>e[71].call(s)),
                    Object(c.g)(t, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(m, "class", "svelte-1iqxbmk"),
                    Object(c.g)(f, "class", "svelte-1iqxbmk"),
                    Object(c.g)(k, "class", "svelte-1iqxbmk"),
                    Object(c.g)(E, "class", "svelte-1iqxbmk"),
                    Object(c.g)(T, "type", "checkbox"),
                    Object(c.g)(T, "class", "svelte-1iqxbmk"),
                    Object(c.g)(C, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(B, "type", "checkbox"),
                    Object(c.g)(B, "class", "svelte-1iqxbmk"),
                    Object(c.g)(P, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(D, "class", "svelte-1iqxbmk")
                },
                m(_, K) {
                    Object(c.E)(_, t, K),
                    Object(c.d)(t, n),
                    Object(c.d)(t, o),
                    Object(c.d)(t, s),
                    Object(c.d)(s, i),
                    Object(c.d)(i, a),
                    Object(c.d)(s, r),
                    Object(c.d)(r, l),
                    Object(c.d)(s, b),
                    Object(c.d)(b, d),
                    Object(c.d)(s, p),
                    Object(c.d)(p, O),
                    Object(c.N)(s, e[0].cloudVariables.mode, !0),
                    Object(c.E)(_, j, K),
                    be && be.m(_, K),
                    Object(c.E)(_, u, K),
                    de && de.m(_, K),
                    Object(c.E)(_, g, K),
                    Object(c.E)(_, m, K),
                    Object(c.d)(m, h),
                    Object(c.E)(_, v, K),
                    Object(c.E)(_, f, K),
                    Object(c.d)(f, w),
                    Object(c.E)(_, x, K),
                    Object(c.E)(_, k, K),
                    Object(c.d)(k, y),
                    Object(c.E)(_, $, K),
                    Object(c.E)(_, E, K),
                    Object(c.d)(E, S),
                    Object(c.E)(_, U, K),
                    Object(c.E)(_, C, K),
                    Object(c.d)(C, R),
                    Object(c.d)(R, T),
                    T.checked = e[0].cloudVariables.specialCloudBehaviors,
                    Object(c.d)(R, q),
                    Object(c.d)(R, I),
                    Object(c.d)(C, A),
                    Object(c.H)(L, C, null),
                    Object(c.E)(_, N, K),
                    Object(c.E)(_, P, K),
                    Object(c.d)(P, M),
                    Object(c.d)(M, B),
                    B.checked = e[0].cloudVariables.unsafeCloudBehaviors,
                    Object(c.d)(M, H),
                    Object(c.d)(M, z),
                    Object(c.d)(P, F),
                    Object(c.H)(Y, P, null),
                    Object(c.E)(_, W, K),
                    pe && pe.m(_, K),
                    Object(c.E)(_, Q, K),
                    Object(c.E)(_, D, K),
                    Object(c.d)(D, V),
                    G = !0,
                    J || (Z = [Object(c.G)(s, "change", e[71]), Object(c.G)(T, "change", e[74]), Object(c.G)(B, "change", e[75])],
                    J = !0)
                },
                p(e, t) {
                    (!G || 128 & t[0]) && K !== (K = e[7]("options.mode") + "") && Object(c.Q)(n, K),
                    (!G || 128 & t[0]) && X !== (X = e[7]("options.cloudVariables-ws") + "") && Object(c.Q)(a, X),
                    (!G || 128 & t[0]) && ee !== (ee = e[7]("options.cloudVariables-local") + "") && Object(c.Q)(l, ee),
                    (!G || 128 & t[0]) && te !== (te = e[7]("options.cloudVariables-ignore") + "") && Object(c.Q)(d, te),
                    (!G || 128 & t[0]) && ne !== (ne = e[7]("options.cloudVariables-custom") + "") && Object(c.Q)(O, ne),
                    1 & t[0] && Object(c.N)(s, e[0].cloudVariables.mode),
                    "custom" === e[0].cloudVariables.mode ? be ? (be.p(e, t),
                    1 & t[0] && Object(c.cb)(be, 1)) : (be = ct(e),
                    be.c(),
                    Object(c.cb)(be, 1),
                    be.m(u.parentNode, u)) : be && (Object(c.z)(),
                    Object(c.db)(be, 1, 1, ()=>{
                        be = null
                    }
                    ),
                    Object(c.k)()),
                    "ws" === e[0].cloudVariables.mode || "custom" === e[0].cloudVariables.mode ? de ? (de.p(e, t),
                    1 & t[0] && Object(c.cb)(de, 1)) : (de = st(e),
                    de.c(),
                    Object(c.cb)(de, 1),
                    de.m(g.parentNode, g)) : de && (Object(c.z)(),
                    Object(c.db)(de, 1, 1, ()=>{
                        de = null
                    }
                    ),
                    Object(c.k)()),
                    (!G || 128 & t[0]) && ce !== (ce = e[7]("options.cloudVariables-ws-help") + "") && Object(c.Q)(h, ce),
                    (!G || 128 & t[0]) && oe !== (oe = e[7]("options.cloudVariables-local-help") + "") && Object(c.Q)(w, oe),
                    (!G || 128 & t[0]) && se !== (se = e[7]("options.cloudVariables-ignore-help") + "") && Object(c.Q)(y, se),
                    (!G || 128 & t[0]) && ie !== (ie = e[7]("options.cloudVariables-custom-help") + "") && Object(c.Q)(S, ie),
                    1 & t[0] && (T.checked = e[0].cloudVariables.specialCloudBehaviors),
                    (!G || 128 & t[0]) && ae !== (ae = e[7]("options.specialCloudBehaviors") + "") && Object(c.Q)(I, ae),
                    1 & t[0] && (B.checked = e[0].cloudVariables.unsafeCloudBehaviors),
                    (!G || 128 & t[0]) && re !== (re = e[7]("options.unsafeCloudBehaviors") + "") && Object(c.Q)(z, re),
                    e[0].cloudVariables.unsafeCloudBehaviors ? pe ? pe.p(e, t) : (pe = it(e),
                    pe.c(),
                    pe.m(Q.parentNode, Q)) : pe && (pe.d(1),
                    pe = null),
                    (!G || 128 & t[0]) && le !== (le = e[7]("options.implicitCloudHint").replace("{cloud}", "☁") + "") && Object(c.Q)(V, le)
                },
                i(e) {
                    G || (Object(c.cb)(be),
                    Object(c.cb)(de),
                    Object(c.cb)(L.$$.fragment, e),
                    Object(c.cb)(Y.$$.fragment, e),
                    G = !0)
                },
                o(e) {
                    Object(c.db)(be),
                    Object(c.db)(de),
                    Object(c.db)(L.$$.fragment, e),
                    Object(c.db)(Y.$$.fragment, e),
                    G = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    e && Object(c.u)(j),
                    be && be.d(e),
                    e && Object(c.u)(u),
                    de && de.d(e),
                    e && Object(c.u)(g),
                    e && Object(c.u)(m),
                    e && Object(c.u)(v),
                    e && Object(c.u)(f),
                    e && Object(c.u)(x),
                    e && Object(c.u)(k),
                    e && Object(c.u)($),
                    e && Object(c.u)(E),
                    e && Object(c.u)(U),
                    e && Object(c.u)(C),
                    Object(c.s)(L),
                    e && Object(c.u)(N),
                    e && Object(c.u)(P),
                    Object(c.s)(Y),
                    e && Object(c.u)(W),
                    pe && pe.d(e),
                    e && Object(c.u)(Q),
                    e && Object(c.u)(D),
                    J = !1,
                    Object(c.L)(Z)
                }
            }
        }
        function ct(e) {
            let t, n, o, s = e[8], a = [];
            for (let t = 0; t < s.length; t += 1)
                a[t] = ot(De(e, s, t));
            return {
                c() {
                    t = Object(c.v)("div");
                    for (let e = 0; e < a.length; e += 1)
                        a[e].c()
                },
                m(e, n) {
                    Object(c.E)(e, t, n);
                    for (let e = 0; e < a.length; e += 1)
                        a[e] && a[e].m(t, null);
                    o = !0
                },
                p(e, n) {
                    if (385 & n[0]) {
                        let c;
                        for (s = e[8],
                        c = 0; c < s.length; c += 1) {
                            const o = De(e, s, c);
                            a[c] ? a[c].p(o, n) : (a[c] = ot(o),
                            a[c].c(),
                            a[c].m(t, null))
                        }
                        for (; c < a.length; c += 1)
                            a[c].d(1);
                        a.length = s.length
                    }
                },
                i(e) {
                    o || (e && Object(c.c)(()=>{
                        o && (n || (n = Object(c.n)(t, i.a, {}, !0)),
                        n.run(1))
                    }
                    ),
                    o = !0)
                },
                o(e) {
                    e && (n || (n = Object(c.n)(t, i.a, {}, !1)),
                    n.run(0)),
                    o = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    Object(c.t)(a, e),
                    e && n && n.end()
                }
            }
        }
        function ot(e) {
            let t, n, o, s, i, a, r, l, b, d, p, O, j, u = e[7]("options.cloudVariables-ws") + "", g = e[7]("options.cloudVariables-local") + "", m = e[7]("options.cloudVariables-ignore") + "", h = e[112] + "";
            function v() {
                e[72].call(n, e[112])
            }
            return {
                c() {
                    t = Object(c.v)("label"),
                    n = Object(c.v)("select"),
                    o = Object(c.v)("option"),
                    s = Object(c.Y)(u),
                    i = Object(c.v)("option"),
                    a = Object(c.Y)(g),
                    r = Object(c.v)("option"),
                    l = Object(c.Y)(m),
                    b = Object(c.U)(),
                    d = Object(c.Y)(h),
                    p = Object(c.U)(),
                    o.__value = "ws",
                    o.value = o.__value,
                    i.__value = "local",
                    i.value = i.__value,
                    r.__value = "",
                    r.value = r.__value,
                    void 0 === e[0].cloudVariables.custom[e[112]] && Object(c.c)(v),
                    Object(c.g)(t, "class", "option svelte-1iqxbmk")
                },
                m(u, g) {
                    Object(c.E)(u, t, g),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    Object(c.d)(o, s),
                    Object(c.d)(n, i),
                    Object(c.d)(i, a),
                    Object(c.d)(n, r),
                    Object(c.d)(r, l),
                    Object(c.N)(n, e[0].cloudVariables.custom[e[112]], !0),
                    Object(c.d)(t, b),
                    Object(c.d)(t, d),
                    Object(c.d)(t, p),
                    O || (j = Object(c.G)(n, "change", v),
                    O = !0)
                },
                p(t, o) {
                    e = t,
                    128 & o[0] && u !== (u = e[7]("options.cloudVariables-ws") + "") && Object(c.Q)(s, u),
                    128 & o[0] && g !== (g = e[7]("options.cloudVariables-local") + "") && Object(c.Q)(a, g),
                    128 & o[0] && m !== (m = e[7]("options.cloudVariables-ignore") + "") && Object(c.Q)(l, m),
                    257 & o[0] && Object(c.N)(n, e[0].cloudVariables.custom[e[112]])
                },
                d(e) {
                    e && Object(c.u)(t),
                    O = !1,
                    j()
                }
            }
        }
        function st(e) {
            let t, n, o, s, a, r, l, b, d, p = e[7]("options.cloudVariablesHost") + "";
            return {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("label"),
                    o = Object(c.Y)(p),
                    s = Object(c.U)(),
                    a = Object(c.v)("input"),
                    Object(c.g)(a, "type", "text"),
                    Object(c.g)(a, "pattern", "wss?:.*"),
                    Object(c.g)(a, "class", "svelte-1iqxbmk"),
                    Object(c.g)(n, "class", "option svelte-1iqxbmk")
                },
                m(i, r) {
                    Object(c.E)(i, t, r),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    Object(c.d)(n, s),
                    Object(c.d)(n, a),
                    Object(c.R)(a, e[0].cloudVariables.cloudHost),
                    l = !0,
                    b || (d = Object(c.G)(a, "input", e[73]),
                    b = !0)
                },
                p(e, t) {
                    (!l || 128 & t[0]) && p !== (p = e[7]("options.cloudVariablesHost") + "") && Object(c.Q)(o, p),
                    1 & t[0] && a.value !== e[0].cloudVariables.cloudHost && Object(c.R)(a, e[0].cloudVariables.cloudHost)
                },
                i(e) {
                    l || (e && Object(c.c)(()=>{
                        l && (r || (r = Object(c.n)(t, i.a, {}, !0)),
                        r.run(1))
                    }
                    ),
                    l = !0)
                },
                o(e) {
                    e && (r || (r = Object(c.n)(t, i.a, {}, !1)),
                    r.run(0)),
                    l = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    e && r && r.end(),
                    b = !1,
                    d()
                }
            }
        }
        function it(e) {
            let t, n, o = e[7]("options.unsafeCloudBehaviorsWarning") + "";
            return {
                c() {
                    t = Object(c.v)("p"),
                    n = Object(c.Y)(o),
                    Object(c.g)(t, "class", "warning svelte-1iqxbmk")
                },
                m(e, o) {
                    Object(c.E)(e, t, o),
                    Object(c.d)(t, n)
                },
                p(e, t) {
                    128 & t[0] && o !== (o = e[7]("options.unsafeCloudBehaviorsWarning") + "") && Object(c.Q)(n, o)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function at(e) {
            let t, n, o, s, i, a, r, l = e[7]("options.cloudVariables") + "";
            const b = [nt, tt]
              , d = [];
            return i = function(e, t) {
                return e[8].length > 0 ? 0 : 1
            }(e),
            a = d[i] = b[i](e),
            {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("h2"),
                    o = Object(c.Y)(l),
                    s = Object(c.U)(),
                    a.c()
                },
                m(e, a) {
                    Object(c.E)(e, t, a),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    Object(c.d)(t, s),
                    d[i].m(t, null),
                    r = !0
                },
                p(e, t) {
                    (!r || 128 & t[0]) && l !== (l = e[7]("options.cloudVariables") + "") && Object(c.Q)(o, l),
                    a.p(e, t)
                },
                i(e) {
                    r || (Object(c.cb)(a),
                    r = !0)
                },
                o(e) {
                    Object(c.db)(a),
                    r = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    d[i].d()
                }
            }
        }
        function rt(e) {
            let t, n, o, s, i, a, r, l, b, d, p, O, j, u, g, m, h, v, f, w, x, k, $, E, S, U, C, R, T, q, I, A, L, N, P, M, B, H, z, F, Y, W, Q, D, V, G, J, Z, K, X, ee, te, ne, ce, oe, se, ie, ae, re, le, be, de, pe, Oe, je, ue, ge, me, he, ve, fe, we = e[7]("options.advancedOptions") + "", xe = e[7]("options.advancedSummary") + "", ke = e[7]("options.enableCompiler") + "", ye = e[7]("options.warpTimer") + "", $e = e[7]("options.customExtensions") + "", Ee = e[7]("options.customExtensionsSecurity") + "", Se = e[7]("options.bakeExtensions") + "", Ue = e[7]("options.customCSS") + "", _e = e[7]("options.customJS") + "", Ce = e[7]("options.projectId") + "", Re = e[7]("options.projectIdHelp") + "", Te = e[7]("options.packagedRuntime") + "", qe = e[7]("options.maxTextureDimension") + "";
            function Ie(t) {
                e[79](t)
            }
            g = new _({
                props: {
                    slug: "disable-compiler"
                }
            }),
            $ = new _({
                props: {
                    slug: "warp-timer"
                }
            }),
            R = new _({
                props: {
                    slug: "development/custom-extensions"
                }
            });
            let Ae = {};
            return void 0 !== e[0].extensions && (Ae.extensions = e[0].extensions),
            q = new y({
                props: Ae
            }),
            c.i.push(()=>Object(c.h)(q, "extensions", Ie)),
            {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("h2"),
                    o = Object(c.Y)(we),
                    s = Object(c.U)(),
                    i = Object(c.v)("details"),
                    a = Object(c.v)("summary"),
                    r = Object(c.Y)(xe),
                    l = Object(c.U)(),
                    b = Object(c.v)("div"),
                    d = Object(c.v)("label"),
                    p = Object(c.v)("input"),
                    O = Object(c.U)(),
                    j = Object(c.Y)(ke),
                    u = Object(c.U)(),
                    Object(c.o)(g.$$.fragment),
                    m = Object(c.U)(),
                    h = Object(c.v)("div"),
                    v = Object(c.v)("label"),
                    f = Object(c.v)("input"),
                    w = Object(c.U)(),
                    x = Object(c.Y)(ye),
                    k = Object(c.U)(),
                    Object(c.o)($.$$.fragment),
                    E = Object(c.U)(),
                    S = Object(c.v)("label"),
                    U = Object(c.Y)($e),
                    C = Object(c.U)(),
                    Object(c.o)(R.$$.fragment),
                    T = Object(c.U)(),
                    Object(c.o)(q.$$.fragment),
                    A = Object(c.U)(),
                    L = Object(c.v)("p"),
                    N = Object(c.Y)(Ee),
                    P = Object(c.U)(),
                    M = Object(c.v)("label"),
                    B = Object(c.v)("input"),
                    H = Object(c.U)(),
                    z = Object(c.Y)(Se),
                    F = Object(c.U)(),
                    Y = Object(c.v)("label"),
                    W = Object(c.Y)(Ue),
                    Q = Object(c.U)(),
                    D = Object(c.v)("textarea"),
                    V = Object(c.U)(),
                    G = Object(c.v)("label"),
                    J = Object(c.Y)(_e),
                    Z = Object(c.U)(),
                    K = Object(c.v)("textarea"),
                    X = Object(c.U)(),
                    ee = Object(c.v)("label"),
                    te = Object(c.Y)(Ce),
                    ne = Object(c.U)(),
                    ce = Object(c.v)("input"),
                    oe = Object(c.U)(),
                    se = Object(c.v)("p"),
                    ie = Object(c.Y)(Re),
                    ae = Object(c.U)(),
                    re = Object(c.v)("label"),
                    le = Object(c.v)("input"),
                    be = Object(c.U)(),
                    de = Object(c.Y)(Te),
                    pe = Object(c.U)(),
                    Oe = Object(c.v)("label"),
                    je = Object(c.v)("input"),
                    ge = Object(c.U)(),
                    me = Object(c.Y)(qe),
                    Object(c.g)(p, "type", "checkbox"),
                    Object(c.g)(p, "class", "svelte-1iqxbmk"),
                    Object(c.g)(b, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(f, "type", "checkbox"),
                    Object(c.g)(f, "class", "svelte-1iqxbmk"),
                    Object(c.g)(h, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(L, "class", "warning svelte-1iqxbmk"),
                    Object(c.g)(S, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(B, "type", "checkbox"),
                    Object(c.g)(B, "class", "svelte-1iqxbmk"),
                    Object(c.g)(M, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(D, "class", "svelte-1iqxbmk"),
                    Object(c.g)(Y, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(K, "class", "svelte-1iqxbmk"),
                    Object(c.g)(G, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(ce, "type", "text"),
                    Object(c.g)(ce, "class", "svelte-1iqxbmk"),
                    Object(c.g)(ee, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(se, "class", "svelte-1iqxbmk"),
                    Object(c.g)(le, "type", "checkbox"),
                    Object(c.g)(le, "class", "svelte-1iqxbmk"),
                    Object(c.g)(re, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(je, "type", "checkbox"),
                    je.checked = ue = e[0].maxTextureDimension !== e[5].maxTextureDimension,
                    Object(c.g)(je, "class", "svelte-1iqxbmk"),
                    Object(c.g)(Oe, "class", "option svelte-1iqxbmk"),
                    i.open = e[15]
                },
                m(y, _) {
                    Object(c.E)(y, t, _),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    Object(c.d)(t, s),
                    Object(c.d)(t, i),
                    Object(c.d)(i, a),
                    Object(c.d)(a, r),
                    Object(c.d)(i, l),
                    Object(c.d)(i, b),
                    Object(c.d)(b, d),
                    Object(c.d)(d, p),
                    p.checked = e[0].compiler.enabled,
                    Object(c.d)(d, O),
                    Object(c.d)(d, j),
                    Object(c.d)(b, u),
                    Object(c.H)(g, b, null),
                    Object(c.d)(i, m),
                    Object(c.d)(i, h),
                    Object(c.d)(h, v),
                    Object(c.d)(v, f),
                    f.checked = e[0].compiler.warpTimer,
                    Object(c.d)(v, w),
                    Object(c.d)(v, x),
                    Object(c.d)(h, k),
                    Object(c.H)($, h, null),
                    Object(c.d)(i, E),
                    Object(c.d)(i, S),
                    Object(c.d)(S, U),
                    Object(c.d)(S, C),
                    Object(c.H)(R, S, null),
                    Object(c.d)(S, T),
                    Object(c.H)(q, S, null),
                    Object(c.d)(S, A),
                    Object(c.d)(S, L),
                    Object(c.d)(L, N),
                    Object(c.d)(i, P),
                    Object(c.d)(i, M),
                    Object(c.d)(M, B),
                    B.checked = e[0].bakeExtensions,
                    Object(c.d)(M, H),
                    Object(c.d)(M, z),
                    Object(c.d)(i, F),
                    Object(c.d)(i, Y),
                    Object(c.d)(Y, W),
                    Object(c.d)(Y, Q),
                    Object(c.d)(Y, D),
                    Object(c.R)(D, e[0].custom.css),
                    Object(c.d)(i, V),
                    Object(c.d)(i, G),
                    Object(c.d)(G, J),
                    Object(c.d)(G, Z),
                    Object(c.d)(G, K),
                    Object(c.R)(K, e[0].custom.js),
                    Object(c.d)(i, X),
                    Object(c.d)(i, ee),
                    Object(c.d)(ee, te),
                    Object(c.d)(ee, ne),
                    Object(c.d)(ee, ce),
                    Object(c.R)(ce, e[0].projectId),
                    Object(c.d)(i, oe),
                    Object(c.d)(i, se),
                    Object(c.d)(se, ie),
                    Object(c.d)(i, ae),
                    Object(c.d)(i, re),
                    Object(c.d)(re, le),
                    le.checked = e[0].packagedRuntime,
                    Object(c.d)(re, be),
                    Object(c.d)(re, de),
                    Object(c.d)(i, pe),
                    Object(c.d)(i, Oe),
                    Object(c.d)(Oe, je),
                    Object(c.d)(Oe, ge),
                    Object(c.d)(Oe, me),
                    he = !0,
                    ve || (fe = [Object(c.G)(p, "change", e[77]), Object(c.G)(f, "change", e[78]), Object(c.G)(B, "change", e[80]), Object(c.G)(D, "input", e[81]), Object(c.G)(K, "input", e[82]), Object(c.G)(ce, "input", e[83]), Object(c.G)(le, "change", e[84]), Object(c.G)(je, "change", e[85])],
                    ve = !0)
                },
                p(e, t) {
                    (!he || 128 & t[0]) && we !== (we = e[7]("options.advancedOptions") + "") && Object(c.Q)(o, we),
                    (!he || 128 & t[0]) && xe !== (xe = e[7]("options.advancedSummary") + "") && Object(c.Q)(r, xe),
                    1 & t[0] && (p.checked = e[0].compiler.enabled),
                    (!he || 128 & t[0]) && ke !== (ke = e[7]("options.enableCompiler") + "") && Object(c.Q)(j, ke),
                    1 & t[0] && (f.checked = e[0].compiler.warpTimer),
                    (!he || 128 & t[0]) && ye !== (ye = e[7]("options.warpTimer") + "") && Object(c.Q)(x, ye),
                    (!he || 128 & t[0]) && $e !== ($e = e[7]("options.customExtensions") + "") && Object(c.Q)(U, $e);
                    const n = {};
                    !I && 1 & t[0] && (I = !0,
                    n.extensions = e[0].extensions,
                    Object(c.b)(()=>I = !1)),
                    q.$set(n),
                    (!he || 128 & t[0]) && Ee !== (Ee = e[7]("options.customExtensionsSecurity") + "") && Object(c.Q)(N, Ee),
                    1 & t[0] && (B.checked = e[0].bakeExtensions),
                    (!he || 128 & t[0]) && Se !== (Se = e[7]("options.bakeExtensions") + "") && Object(c.Q)(z, Se),
                    (!he || 128 & t[0]) && Ue !== (Ue = e[7]("options.customCSS") + "") && Object(c.Q)(W, Ue),
                    1 & t[0] && Object(c.R)(D, e[0].custom.css),
                    (!he || 128 & t[0]) && _e !== (_e = e[7]("options.customJS") + "") && Object(c.Q)(J, _e),
                    1 & t[0] && Object(c.R)(K, e[0].custom.js),
                    (!he || 128 & t[0]) && Ce !== (Ce = e[7]("options.projectId") + "") && Object(c.Q)(te, Ce),
                    1 & t[0] && ce.value !== e[0].projectId && Object(c.R)(ce, e[0].projectId),
                    (!he || 128 & t[0]) && Re !== (Re = e[7]("options.projectIdHelp") + "") && Object(c.Q)(ie, Re),
                    1 & t[0] && (le.checked = e[0].packagedRuntime),
                    (!he || 128 & t[0]) && Te !== (Te = e[7]("options.packagedRuntime") + "") && Object(c.Q)(de, Te),
                    (!he || 33 & t[0] && ue !== (ue = e[0].maxTextureDimension !== e[5].maxTextureDimension)) && (je.checked = ue),
                    (!he || 128 & t[0]) && qe !== (qe = e[7]("options.maxTextureDimension") + "") && Object(c.Q)(me, qe)
                },
                i(e) {
                    he || (Object(c.cb)(g.$$.fragment, e),
                    Object(c.cb)($.$$.fragment, e),
                    Object(c.cb)(R.$$.fragment, e),
                    Object(c.cb)(q.$$.fragment, e),
                    he = !0)
                },
                o(e) {
                    Object(c.db)(g.$$.fragment, e),
                    Object(c.db)($.$$.fragment, e),
                    Object(c.db)(R.$$.fragment, e),
                    Object(c.db)(q.$$.fragment, e),
                    he = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    Object(c.s)(g),
                    Object(c.s)($),
                    Object(c.s)(R),
                    Object(c.s)(q),
                    ve = !1,
                    Object(c.L)(fe)
                }
            }
        }
        function lt(e) {
            let t, n, o, s, i, a, r, l, b, d, p, O, j, u, g, m, h, v, f, w, x, k, y, $, E, S, U, _, C, R, T, q, I, A, L, N, P, M, B, H, z, F, Y, W, Q, D, V, G, J, Z, K, X, ee, te, ne, ce, oe, se, ie, ae, re, le, be, de, pe, Oe, je, ue, ge, me, he, ve, fe, we, xe, ke, ye, $e, Ee = e[7]("options.environment") + "", Se = e[7]("options.html") + "", Ue = e[7]("options.zip") + "", _e = e[7]("options.application-win32").replace("{type}", "Electron") + "", Ce = e[7]("options.application-mac").replace("{type}", "WKWebView") + "", Re = e[7]("options.application-linux64").replace("{type}", "Electron") + "", Te = e[7]("options.otherEnvironments") + "", qe = e[7]("options.otherEnvironmentsHelp") + "", Ie = e[7]("options.zip-one-asset") + "", Ae = e[7]("options.application-win64").replace("{type}", "Electron") + "", Le = e[7]("options.application-mac").replace("{type}", "Electron") + "", Ne = e[7]("options.application-win32").replace("{type}", "NW.js") + "", Pe = e[7]("options.application-win64").replace("{type}", "NW.js") + "", Me = e[7]("options.application-mac").replace("{type}", "NW.js") + "", Be = e[7]("options.application-linux64").replace("{type}", "NW.js") + "";
            return ke = Object(c.D)(e[39][1]),
            {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("h2"),
                    o = Object(c.Y)(Ee),
                    s = Object(c.U)(),
                    i = Object(c.v)("div"),
                    a = Object(c.v)("label"),
                    r = Object(c.v)("input"),
                    l = Object(c.U)(),
                    b = Object(c.Y)(Se),
                    d = Object(c.U)(),
                    p = Object(c.v)("label"),
                    O = Object(c.v)("input"),
                    j = Object(c.U)(),
                    u = Object(c.Y)(Ue),
                    g = Object(c.U)(),
                    m = Object(c.v)("div"),
                    h = Object(c.v)("label"),
                    v = Object(c.v)("input"),
                    f = Object(c.U)(),
                    w = Object(c.Y)(_e),
                    x = Object(c.U)(),
                    k = Object(c.v)("label"),
                    y = Object(c.v)("input"),
                    $ = Object(c.U)(),
                    E = Object(c.Y)(Ce),
                    S = Object(c.U)(),
                    U = Object(c.v)("label"),
                    _ = Object(c.v)("input"),
                    C = Object(c.U)(),
                    R = Object(c.Y)(Re),
                    T = Object(c.U)(),
                    q = Object(c.v)("details"),
                    I = Object(c.v)("summary"),
                    A = Object(c.Y)(Te),
                    L = Object(c.U)(),
                    N = Object(c.v)("p"),
                    P = Object(c.Y)(qe),
                    M = Object(c.U)(),
                    B = Object(c.v)("div"),
                    H = Object(c.v)("label"),
                    z = Object(c.v)("input"),
                    F = Object(c.U)(),
                    Y = Object(c.Y)(Ie),
                    W = Object(c.U)(),
                    Q = Object(c.v)("div"),
                    D = Object(c.v)("label"),
                    V = Object(c.v)("input"),
                    G = Object(c.U)(),
                    J = Object(c.Y)(Ae),
                    Z = Object(c.U)(),
                    K = Object(c.v)("label"),
                    X = Object(c.v)("input"),
                    ee = Object(c.U)(),
                    te = Object(c.Y)(Le),
                    ne = Object(c.U)(),
                    ce = Object(c.v)("div"),
                    oe = Object(c.v)("label"),
                    se = Object(c.v)("input"),
                    ie = Object(c.U)(),
                    ae = Object(c.Y)(Ne),
                    re = Object(c.U)(),
                    le = Object(c.v)("label"),
                    be = Object(c.v)("input"),
                    de = Object(c.U)(),
                    pe = Object(c.Y)(Pe),
                    Oe = Object(c.U)(),
                    je = Object(c.v)("label"),
                    ue = Object(c.v)("input"),
                    ge = Object(c.U)(),
                    me = Object(c.Y)(Me),
                    he = Object(c.U)(),
                    ve = Object(c.v)("label"),
                    fe = Object(c.v)("input"),
                    we = Object(c.U)(),
                    xe = Object(c.Y)(Be),
                    Object(c.g)(r, "type", "radio"),
                    Object(c.g)(r, "name", "environment"),
                    r.__value = "html",
                    r.value = r.__value,
                    Object(c.g)(r, "class", "svelte-1iqxbmk"),
                    Object(c.g)(a, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(O, "type", "radio"),
                    Object(c.g)(O, "name", "environment"),
                    O.__value = "zip",
                    O.value = O.__value,
                    Object(c.g)(O, "class", "svelte-1iqxbmk"),
                    Object(c.g)(p, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(i, "class", "group svelte-1iqxbmk"),
                    Object(c.g)(v, "type", "radio"),
                    Object(c.g)(v, "name", "environment"),
                    v.__value = "electron-win32",
                    v.value = v.__value,
                    Object(c.g)(v, "class", "svelte-1iqxbmk"),
                    Object(c.g)(h, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(y, "type", "radio"),
                    Object(c.g)(y, "name", "environment"),
                    y.__value = "webview-mac",
                    y.value = y.__value,
                    Object(c.g)(y, "class", "svelte-1iqxbmk"),
                    Object(c.g)(k, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(_, "type", "radio"),
                    Object(c.g)(_, "name", "environment"),
                    _.__value = "electron-linux64",
                    _.value = _.__value,
                    Object(c.g)(_, "class", "svelte-1iqxbmk"),
                    Object(c.g)(U, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(m, "class", "group svelte-1iqxbmk"),
                    Object(c.g)(N, "class", "svelte-1iqxbmk"),
                    Object(c.g)(z, "type", "radio"),
                    Object(c.g)(z, "name", "environment"),
                    z.__value = "zip-one-asset",
                    z.value = z.__value,
                    Object(c.g)(z, "class", "svelte-1iqxbmk"),
                    Object(c.g)(H, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(B, "class", "group svelte-1iqxbmk"),
                    Object(c.g)(V, "type", "radio"),
                    Object(c.g)(V, "name", "environment"),
                    V.__value = "electron-win64",
                    V.value = V.__value,
                    Object(c.g)(V, "class", "svelte-1iqxbmk"),
                    Object(c.g)(D, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(X, "type", "radio"),
                    Object(c.g)(X, "name", "environment"),
                    X.__value = "electron-mac",
                    X.value = X.__value,
                    Object(c.g)(X, "class", "svelte-1iqxbmk"),
                    Object(c.g)(K, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(Q, "class", "group svelte-1iqxbmk"),
                    Object(c.g)(se, "type", "radio"),
                    Object(c.g)(se, "name", "environment"),
                    se.__value = "nwjs-win32",
                    se.value = se.__value,
                    Object(c.g)(se, "class", "svelte-1iqxbmk"),
                    Object(c.g)(oe, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(be, "type", "radio"),
                    Object(c.g)(be, "name", "environment"),
                    be.__value = "nwjs-win64",
                    be.value = be.__value,
                    Object(c.g)(be, "class", "svelte-1iqxbmk"),
                    Object(c.g)(le, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(ue, "type", "radio"),
                    Object(c.g)(ue, "name", "environment"),
                    ue.__value = "nwjs-mac",
                    ue.value = ue.__value,
                    Object(c.g)(ue, "class", "svelte-1iqxbmk"),
                    Object(c.g)(je, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(fe, "type", "radio"),
                    Object(c.g)(fe, "name", "environment"),
                    fe.__value = "nwjs-linux-x64",
                    fe.value = fe.__value,
                    Object(c.g)(fe, "class", "svelte-1iqxbmk"),
                    Object(c.g)(ve, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(ce, "class", "group svelte-1iqxbmk"),
                    q.open = e[14],
                    ke.p(r, O, v, y, _, z, V, X, se, be, ue, fe)
                },
                m(ke, Ee) {
                    Object(c.E)(ke, t, Ee),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    Object(c.d)(t, s),
                    Object(c.d)(t, i),
                    Object(c.d)(i, a),
                    Object(c.d)(a, r),
                    r.checked = r.__value === e[0].target,
                    Object(c.d)(a, l),
                    Object(c.d)(a, b),
                    Object(c.d)(i, d),
                    Object(c.d)(i, p),
                    Object(c.d)(p, O),
                    O.checked = O.__value === e[0].target,
                    Object(c.d)(p, j),
                    Object(c.d)(p, u),
                    Object(c.d)(t, g),
                    Object(c.d)(t, m),
                    Object(c.d)(m, h),
                    Object(c.d)(h, v),
                    v.checked = v.__value === e[0].target,
                    Object(c.d)(h, f),
                    Object(c.d)(h, w),
                    Object(c.d)(m, x),
                    Object(c.d)(m, k),
                    Object(c.d)(k, y),
                    y.checked = y.__value === e[0].target,
                    Object(c.d)(k, $),
                    Object(c.d)(k, E),
                    Object(c.d)(m, S),
                    Object(c.d)(m, U),
                    Object(c.d)(U, _),
                    _.checked = _.__value === e[0].target,
                    Object(c.d)(U, C),
                    Object(c.d)(U, R),
                    Object(c.d)(t, T),
                    Object(c.d)(t, q),
                    Object(c.d)(q, I),
                    Object(c.d)(I, A),
                    Object(c.d)(q, L),
                    Object(c.d)(q, N),
                    Object(c.d)(N, P),
                    Object(c.d)(q, M),
                    Object(c.d)(q, B),
                    Object(c.d)(B, H),
                    Object(c.d)(H, z),
                    z.checked = z.__value === e[0].target,
                    Object(c.d)(H, F),
                    Object(c.d)(H, Y),
                    Object(c.d)(q, W),
                    Object(c.d)(q, Q),
                    Object(c.d)(Q, D),
                    Object(c.d)(D, V),
                    V.checked = V.__value === e[0].target,
                    Object(c.d)(D, G),
                    Object(c.d)(D, J),
                    Object(c.d)(Q, Z),
                    Object(c.d)(Q, K),
                    Object(c.d)(K, X),
                    X.checked = X.__value === e[0].target,
                    Object(c.d)(K, ee),
                    Object(c.d)(K, te),
                    Object(c.d)(q, ne),
                    Object(c.d)(q, ce),
                    Object(c.d)(ce, oe),
                    Object(c.d)(oe, se),
                    se.checked = se.__value === e[0].target,
                    Object(c.d)(oe, ie),
                    Object(c.d)(oe, ae),
                    Object(c.d)(ce, re),
                    Object(c.d)(ce, le),
                    Object(c.d)(le, be),
                    be.checked = be.__value === e[0].target,
                    Object(c.d)(le, de),
                    Object(c.d)(le, pe),
                    Object(c.d)(ce, Oe),
                    Object(c.d)(ce, je),
                    Object(c.d)(je, ue),
                    ue.checked = ue.__value === e[0].target,
                    Object(c.d)(je, ge),
                    Object(c.d)(je, me),
                    Object(c.d)(ce, he),
                    Object(c.d)(ce, ve),
                    Object(c.d)(ve, fe),
                    fe.checked = fe.__value === e[0].target,
                    Object(c.d)(ve, we),
                    Object(c.d)(ve, xe),
                    ye || ($e = [Object(c.G)(r, "change", e[87]), Object(c.G)(O, "change", e[88]), Object(c.G)(v, "change", e[89]), Object(c.G)(y, "change", e[90]), Object(c.G)(_, "change", e[91]), Object(c.G)(z, "change", e[92]), Object(c.G)(V, "change", e[93]), Object(c.G)(X, "change", e[94]), Object(c.G)(se, "change", e[95]), Object(c.G)(be, "change", e[96]), Object(c.G)(ue, "change", e[97]), Object(c.G)(fe, "change", e[98])],
                    ye = !0)
                },
                p(e, t) {
                    128 & t[0] && Ee !== (Ee = e[7]("options.environment") + "") && Object(c.Q)(o, Ee),
                    1 & t[0] && (r.checked = r.__value === e[0].target),
                    128 & t[0] && Se !== (Se = e[7]("options.html") + "") && Object(c.Q)(b, Se),
                    1 & t[0] && (O.checked = O.__value === e[0].target),
                    128 & t[0] && Ue !== (Ue = e[7]("options.zip") + "") && Object(c.Q)(u, Ue),
                    1 & t[0] && (v.checked = v.__value === e[0].target),
                    128 & t[0] && _e !== (_e = e[7]("options.application-win32").replace("{type}", "Electron") + "") && Object(c.Q)(w, _e),
                    1 & t[0] && (y.checked = y.__value === e[0].target),
                    128 & t[0] && Ce !== (Ce = e[7]("options.application-mac").replace("{type}", "WKWebView") + "") && Object(c.Q)(E, Ce),
                    1 & t[0] && (_.checked = _.__value === e[0].target),
                    128 & t[0] && Re !== (Re = e[7]("options.application-linux64").replace("{type}", "Electron") + "") && Object(c.Q)(R, Re),
                    128 & t[0] && Te !== (Te = e[7]("options.otherEnvironments") + "") && Object(c.Q)(A, Te),
                    128 & t[0] && qe !== (qe = e[7]("options.otherEnvironmentsHelp") + "") && Object(c.Q)(P, qe),
                    1 & t[0] && (z.checked = z.__value === e[0].target),
                    128 & t[0] && Ie !== (Ie = e[7]("options.zip-one-asset") + "") && Object(c.Q)(Y, Ie),
                    1 & t[0] && (V.checked = V.__value === e[0].target),
                    128 & t[0] && Ae !== (Ae = e[7]("options.application-win64").replace("{type}", "Electron") + "") && Object(c.Q)(J, Ae),
                    1 & t[0] && (X.checked = X.__value === e[0].target),
                    128 & t[0] && Le !== (Le = e[7]("options.application-mac").replace("{type}", "Electron") + "") && Object(c.Q)(te, Le),
                    1 & t[0] && (se.checked = se.__value === e[0].target),
                    128 & t[0] && Ne !== (Ne = e[7]("options.application-win32").replace("{type}", "NW.js") + "") && Object(c.Q)(ae, Ne),
                    1 & t[0] && (be.checked = be.__value === e[0].target),
                    128 & t[0] && Pe !== (Pe = e[7]("options.application-win64").replace("{type}", "NW.js") + "") && Object(c.Q)(pe, Pe),
                    1 & t[0] && (ue.checked = ue.__value === e[0].target),
                    128 & t[0] && Me !== (Me = e[7]("options.application-mac").replace("{type}", "NW.js") + "") && Object(c.Q)(me, Me),
                    1 & t[0] && (fe.checked = fe.__value === e[0].target),
                    128 & t[0] && Be !== (Be = e[7]("options.application-linux64").replace("{type}", "NW.js") + "") && Object(c.Q)(xe, Be)
                },
                d(e) {
                    e && Object(c.u)(t),
                    ke.r(),
                    ye = !1,
                    Object(c.L)($e)
                }
            }
        }
        function bt(e) {
            let t, n, o, s;
            return n = new a.a({
                props: {
                    accent: "#FF661A",
                    reset: e[0].target.startsWith("zip") ? null : e[105],
                    $$slots: {
                        default: [yt]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            {
                c() {
                    t = Object(c.v)("div"),
                    Object(c.o)(n.$$.fragment)
                },
                m(e, o) {
                    Object(c.E)(e, t, o),
                    Object(c.H)(n, t, null),
                    s = !0
                },
                p(e, t) {
                    const c = {};
                    1 & t[0] && (c.reset = e[0].target.startsWith("zip") ? null : e[105]),
                    129 & t[0] | 4194304 & t[3] && (c.$$scope = {
                        dirty: t,
                        ctx: e
                    }),
                    n.$set(c)
                },
                i(e) {
                    s || (Object(c.cb)(n.$$.fragment, e),
                    e && (o || Object(c.c)(()=>{
                        o = Object(c.p)(t, i.a, {}),
                        o.start()
                    }
                    )),
                    s = !0)
                },
                o(e) {
                    Object(c.db)(n.$$.fragment, e),
                    s = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    Object(c.s)(n)
                }
            }
        }
        function dt(e) {
            let t, n, o, s, i, a, r, l, b, d, p, O, j, u, g, m, h, v, f, w, x, k, y, $, E, S, U, _, C, R, T, q, I = e[7]("options.applicationSettings") + "", A = e[7]("options.packageName") + "", L = e[7]("options.packageNameHelp") + "", N = e[7]("options.version") + "", P = e[7]("options.versionHelp") + "", M = e[0].target.includes("electron"), B = M && Ot(e);
            function H(e, t) {
                return 1 & t[0] && (y = null),
                1 & t[0] && ($ = null),
                1 & t[0] && (E = null),
                null == y && (y = !!e[0].target.includes("win")),
                y ? gt : (null == $ && ($ = !!e[0].target.includes("mac")),
                $ ? ut : (null == E && (E = !!e[0].target.includes("linux")),
                E ? jt : void 0))
            }
            let z = H(e, [-1, -1, -1, -1])
              , F = z && z(e);
            function Y(e, t) {
                return 1 & t[0] && (U = null),
                1 & t[0] && (_ = null),
                1 & t[0] && (C = null),
                null == U && (U = !!e[0].target.includes("electron")),
                U ? vt : (null == _ && (_ = !!e[0].target.includes("nwjs")),
                _ ? ht : (null == C && (C = !!e[0].target.includes("webview-mac")),
                C ? mt : void 0))
            }
            let W = Y(e, [-1, -1, -1, -1])
              , Q = W && W(e);
            return {
                c() {
                    t = Object(c.v)("h2"),
                    n = Object(c.Y)(I),
                    o = Object(c.U)(),
                    s = Object(c.v)("label"),
                    i = Object(c.Y)(A),
                    a = Object(c.U)(),
                    r = Object(c.v)("input"),
                    l = Object(c.U)(),
                    b = Object(c.v)("p"),
                    d = Object(c.Y)(L),
                    p = Object(c.U)(),
                    O = Object(c.v)("label"),
                    j = Object(c.Y)(N),
                    u = Object(c.U)(),
                    g = Object(c.v)("input"),
                    m = Object(c.U)(),
                    h = Object(c.v)("p"),
                    v = Object(c.Y)(P),
                    f = Object(c.U)(),
                    B && B.c(),
                    w = Object(c.U)(),
                    x = Object(c.v)("div"),
                    x.innerHTML = "<div>Creating native applications for specific platforms is discouraged. In most cases, Plain HTML or Zip will have numerous advantages:</div> \n            <ul><li>Can be run directly from a website on any platform, even phones</li> \n              <li>Users are significantly less likely to be suspicious of a virus</li> \n              <li>Significantly smaller file size</li> \n              <li>Can still be downloaded locally and run offline</li></ul> \n            <div>If you don&#39;t truly need to make a self-contained application for each platform (we understand there are some cases where this is necessary), we recommend you don&#39;t.</div>",
                    k = Object(c.U)(),
                    F && F.c(),
                    S = Object(c.U)(),
                    Q && Q.c(),
                    R = Object(c.w)(),
                    Object(c.g)(r, "type", "text"),
                    Object(c.g)(r, "pattern", "[a-zA-Z -]+"),
                    Object(c.g)(r, "minlength", "1"),
                    Object(c.g)(r, "class", "svelte-1iqxbmk"),
                    Object(c.g)(s, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(b, "class", "svelte-1iqxbmk"),
                    Object(c.g)(g, "type", "text"),
                    Object(c.g)(g, "pattern", "\\d+\\.\\d+\\.\\d+"),
                    Object(c.g)(g, "minlength", "1"),
                    Object(c.g)(g, "class", "svelte-1iqxbmk"),
                    Object(c.g)(O, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(h, "class", "svelte-1iqxbmk"),
                    Object(c.g)(x, "class", "warning svelte-1iqxbmk")
                },
                m(y, $) {
                    Object(c.E)(y, t, $),
                    Object(c.d)(t, n),
                    Object(c.E)(y, o, $),
                    Object(c.E)(y, s, $),
                    Object(c.d)(s, i),
                    Object(c.d)(s, a),
                    Object(c.d)(s, r),
                    Object(c.R)(r, e[0].app.packageName),
                    Object(c.E)(y, l, $),
                    Object(c.E)(y, b, $),
                    Object(c.d)(b, d),
                    Object(c.E)(y, p, $),
                    Object(c.E)(y, O, $),
                    Object(c.d)(O, j),
                    Object(c.d)(O, u),
                    Object(c.d)(O, g),
                    Object(c.R)(g, e[0].app.version),
                    Object(c.E)(y, m, $),
                    Object(c.E)(y, h, $),
                    Object(c.d)(h, v),
                    Object(c.E)(y, f, $),
                    B && B.m(y, $),
                    Object(c.E)(y, w, $),
                    Object(c.E)(y, x, $),
                    Object(c.E)(y, k, $),
                    F && F.m(y, $),
                    Object(c.E)(y, S, $),
                    Q && Q.m(y, $),
                    Object(c.E)(y, R, $),
                    T || (q = [Object(c.G)(r, "input", e[100]), Object(c.G)(g, "input", e[101])],
                    T = !0)
                },
                p(e, t) {
                    128 & t[0] && I !== (I = e[7]("options.applicationSettings") + "") && Object(c.Q)(n, I),
                    128 & t[0] && A !== (A = e[7]("options.packageName") + "") && Object(c.Q)(i, A),
                    1 & t[0] && r.value !== e[0].app.packageName && Object(c.R)(r, e[0].app.packageName),
                    128 & t[0] && L !== (L = e[7]("options.packageNameHelp") + "") && Object(c.Q)(d, L),
                    128 & t[0] && N !== (N = e[7]("options.version") + "") && Object(c.Q)(j, N),
                    1 & t[0] && g.value !== e[0].app.version && Object(c.R)(g, e[0].app.version),
                    128 & t[0] && P !== (P = e[7]("options.versionHelp") + "") && Object(c.Q)(v, P),
                    1 & t[0] && (M = e[0].target.includes("electron")),
                    M ? B ? B.p(e, t) : (B = Ot(e),
                    B.c(),
                    B.m(w.parentNode, w)) : B && (B.d(1),
                    B = null),
                    z !== (z = H(e, t)) && (F && F.d(1),
                    F = z && z(e),
                    F && (F.c(),
                    F.m(S.parentNode, S))),
                    W === (W = Y(e, t)) && Q ? Q.p(e, t) : (Q && Q.d(1),
                    Q = W && W(e),
                    Q && (Q.c(),
                    Q.m(R.parentNode, R)))
                },
                d(e) {
                    e && Object(c.u)(t),
                    e && Object(c.u)(o),
                    e && Object(c.u)(s),
                    e && Object(c.u)(l),
                    e && Object(c.u)(b),
                    e && Object(c.u)(p),
                    e && Object(c.u)(O),
                    e && Object(c.u)(m),
                    e && Object(c.u)(h),
                    e && Object(c.u)(f),
                    B && B.d(e),
                    e && Object(c.u)(w),
                    e && Object(c.u)(x),
                    e && Object(c.u)(k),
                    F && F.d(e),
                    e && Object(c.u)(S),
                    Q && Q.d(e),
                    e && Object(c.u)(R),
                    T = !1,
                    Object(c.L)(q)
                }
            }
        }
        function pt(e) {
            let t, n, o;
            return {
                c() {
                    t = Object(c.v)("h2"),
                    t.textContent = "Zip",
                    n = Object(c.U)(),
                    o = Object(c.v)("p"),
                    o.textContent = 'The zip environment is intended to be used for publishing to a website. Other uses such as sending your project to a friend over a chat app or email should use "Plain HTML" instead as zip will not work.',
                    Object(c.g)(o, "class", "svelte-1iqxbmk")
                },
                m(e, s) {
                    Object(c.E)(e, t, s),
                    Object(c.E)(e, n, s),
                    Object(c.E)(e, o, s)
                },
                p: c.I,
                d(e) {
                    e && Object(c.u)(t),
                    e && Object(c.u)(n),
                    e && Object(c.u)(o)
                }
            }
        }
        function Ot(e) {
            let t, n, o, s, i, a, r, l, b, d, p, O, j, u, g, m, h, v, f = e[7]("options.startWindow") + "", w = e[7]("options.startMaximized") + "", x = e[7]("options.startFullscreen") + "";
            return m = Object(c.D)(e[39][0]),
            {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("label"),
                    o = Object(c.v)("input"),
                    s = Object(c.U)(),
                    i = Object(c.Y)(f),
                    a = Object(c.U)(),
                    r = Object(c.v)("label"),
                    l = Object(c.v)("input"),
                    b = Object(c.U)(),
                    d = Object(c.Y)(w),
                    p = Object(c.U)(),
                    O = Object(c.v)("label"),
                    j = Object(c.v)("input"),
                    u = Object(c.U)(),
                    g = Object(c.Y)(x),
                    Object(c.g)(o, "type", "radio"),
                    Object(c.g)(o, "name", "app-window-mode"),
                    o.__value = "window",
                    o.value = o.__value,
                    Object(c.g)(o, "class", "svelte-1iqxbmk"),
                    Object(c.g)(n, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(l, "type", "radio"),
                    Object(c.g)(l, "name", "app-window-mode"),
                    l.__value = "maximize",
                    l.value = l.__value,
                    Object(c.g)(l, "class", "svelte-1iqxbmk"),
                    Object(c.g)(r, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(j, "type", "radio"),
                    Object(c.g)(j, "name", "app-window-mode"),
                    j.__value = "fullscreen",
                    j.value = j.__value,
                    Object(c.g)(j, "class", "svelte-1iqxbmk"),
                    Object(c.g)(O, "class", "option svelte-1iqxbmk"),
                    Object(c.g)(t, "class", "group svelte-1iqxbmk"),
                    m.p(o, l, j)
                },
                m(m, f) {
                    Object(c.E)(m, t, f),
                    Object(c.d)(t, n),
                    Object(c.d)(n, o),
                    o.checked = o.__value === e[0].app.windowMode,
                    Object(c.d)(n, s),
                    Object(c.d)(n, i),
                    Object(c.d)(t, a),
                    Object(c.d)(t, r),
                    Object(c.d)(r, l),
                    l.checked = l.__value === e[0].app.windowMode,
                    Object(c.d)(r, b),
                    Object(c.d)(r, d),
                    Object(c.d)(t, p),
                    Object(c.d)(t, O),
                    Object(c.d)(O, j),
                    j.checked = j.__value === e[0].app.windowMode,
                    Object(c.d)(O, u),
                    Object(c.d)(O, g),
                    h || (v = [Object(c.G)(o, "change", e[102]), Object(c.G)(l, "change", e[103]), Object(c.G)(j, "change", e[104])],
                    h = !0)
                },
                p(e, t) {
                    1 & t[0] && (o.checked = o.__value === e[0].app.windowMode),
                    128 & t[0] && f !== (f = e[7]("options.startWindow") + "") && Object(c.Q)(i, f),
                    1 & t[0] && (l.checked = l.__value === e[0].app.windowMode),
                    128 & t[0] && w !== (w = e[7]("options.startMaximized") + "") && Object(c.Q)(d, w),
                    1 & t[0] && (j.checked = j.__value === e[0].app.windowMode),
                    128 & t[0] && x !== (x = e[7]("options.startFullscreen") + "") && Object(c.Q)(g, x)
                },
                d(e) {
                    e && Object(c.u)(t),
                    m.r(),
                    h = !1,
                    Object(c.L)(v)
                }
            }
        }
        function jt(e) {
            let t;
            return {
                c() {
                    t = Object(c.v)("div"),
                    t.innerHTML = '<h2>Linux</h2> \n              <p class="svelte-1iqxbmk">Linux support is still experimental.</p> \n              <p class="svelte-1iqxbmk">Linux support in the packager is limited to 64-bit x86 apps (which will run on most desktops and laptops). 32-bit systems and ARM devices such as Raspberry Pis unfortunately are not supported yet.</p>'
                },
                m(e, n) {
                    Object(c.E)(e, t, n)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function ut(e) {
            let t;
            return {
                c() {
                    t = Object(c.v)("div"),
                    t.innerHTML = '<h2>macOS</h2> \n              <p class="svelte-1iqxbmk">Due to Apple policy, packaging for their platforms is troublesome. You either have to:</p> \n              <ul><li>Instruct users to ignore scary Gatekeeper warnings by opening Finder &gt; Navigating to the application &gt; Right click &gt; Open &gt; Open. This website generates applications that require this workaround.</li> \n                <li>Or pay Apple $100/year for a developer account to sign and notarize the app (very involved process; reach out in feedback for more information)</li></ul>'
                },
                m(e, n) {
                    Object(c.E)(e, t, n)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function gt(e) {
            let t;
            return {
                c() {
                    t = Object(c.v)("div"),
                    // !!! CHANGE !!!
                    // t.innerHTML = '<h2>Windows</h2> \n              <p class="svelte-1iqxbmk">All Windows applications generated by this site are unsigned, so users will see SmartScreen warnings when they try to run it for the first time. They can bypass these warnings by pressing &quot;More info&quot; then &quot;Run anyways&quot;.</p> \n              <p class="svelte-1iqxbmk">To change the icon of the executable file or create an installer program, download and run <a href="https://github.com/Mixality/packager-extras/releases">Sidekick Packager Extras</a> and select the output of this website.</p>'
                    t.innerHTML = '<h2>Windows</h2> \n              <p class="svelte-1iqxbmk">All Windows applications generated by this site are unsigned, so users will see SmartScreen warnings when they try to run it for the first time. They can bypass these warnings by pressing &quot;More info&quot; then &quot;Run anyways&quot;.</p> \n              <p class="svelte-1iqxbmk">To change the icon of the executable file or create an installer program, download and run <a href="https://github.com/Menersar/packager-extras/releases">Sidekick Packager Extras</a> and select the output of this website.</p>'
                },
                m(e, n) {
                    Object(c.E)(e, t, n)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function mt(e) {
            let t;
            return {
                c() {
                    t = Object(c.v)("div"),
                    t.innerHTML = '<h2>WKWebView</h2> \n              <p class="svelte-1iqxbmk">WKWebView is the preferred way to package for macOS. It will be hundreds of MB smaller than the other macOS-specific environments and typically run the fastest.</p> \n              <p class="svelte-1iqxbmk">The app will run natively on both Intel and Apple silicon Macs running macOS 10.13 or later.</p> \n              <p class="svelte-1iqxbmk">Note that:</p> \n              <ul><li>Video sensing and loudness blocks will only work in macOS 12 or later.</li> \n                <li>Pointer lock will not work.</li> \n                <li>Extremely large projects might not work properly.</li></ul> \n              <p class="svelte-1iqxbmk">Use the &quot;Electron macOS Application&quot; (inside Other environments) or &quot;Plain HTML&quot; environments instead if you encounter these issues.</p>'
                },
                m(e, n) {
                    Object(c.E)(e, t, n)
                },
                p: c.I,
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function ht(e) {
            let t, n, o, s, i, a, r, l, b, d = e[0].target.includes("mac"), p = d && ft(e);
            return {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("h2"),
                    n.textContent = "NW.js",
                    o = Object(c.U)(),
                    s = Object(c.v)("p"),
                    s.textContent = "NW.js support is deprecated and may be removed in the future. Use the Electron environments instead. They're better in every way.",
                    i = Object(c.U)(),
                    a = Object(c.v)("p"),
                    a.textContent = "The NW.js environment works by embedding a copy of Chromium (the open source part of Google Chrome) along with your project, which means the app will be very large.",
                    r = Object(c.U)(),
                    l = Object(c.v)("p"),
                    l.innerHTML = 'For further help and steps, see <a href="https://docs.nwjs.io/en/latest/For%20Users/Package%20and%20Distribute/#linux">NW.js Documentation</a>.',
                    b = Object(c.U)(),
                    p && p.c(),
                    Object(c.g)(s, "class", "warning svelte-1iqxbmk"),
                    Object(c.g)(a, "class", "svelte-1iqxbmk"),
                    Object(c.g)(l, "class", "svelte-1iqxbmk")
                },
                m(e, d) {
                    Object(c.E)(e, t, d),
                    Object(c.d)(t, n),
                    Object(c.d)(t, o),
                    Object(c.d)(t, s),
                    Object(c.d)(t, i),
                    Object(c.d)(t, a),
                    Object(c.d)(t, r),
                    Object(c.d)(t, l),
                    Object(c.d)(t, b),
                    p && p.m(t, null)
                },
                p(e, n) {
                    1 & n[0] && (d = e[0].target.includes("mac")),
                    d ? p || (p = ft(e),
                    p.c(),
                    p.m(t, null)) : p && (p.d(1),
                    p = null)
                },
                d(e) {
                    e && Object(c.u)(t),
                    p && p.d()
                }
            }
        }
        function vt(e) {
            let t, n, o, s, i, a, r, l, b = e[0].target.includes("32");
            function d(e, t) {
                return 1 & t[0] && (a = null),
                1 & t[0] && (r = null),
                null == a && (a = !!e[0].target.includes("mac")),
                a ? xt : (null == r && (r = !!e[0].target.includes("linux")),
                r ? wt : void 0)
            }
            let p = d(e, [-1, -1, -1, -1])
              , O = p && p(e)
              , j = b && kt(e);
            return {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("h2"),
                    n.textContent = "Electron",
                    o = Object(c.U)(),
                    s = Object(c.v)("p"),
                    s.textContent = "The Electron environment works by embedding a copy of Chromium (the open source part of Google Chrome) along with your project, which means the app will be very large.",
                    i = Object(c.U)(),
                    O && O.c(),
                    l = Object(c.U)(),
                    j && j.c(),
                    Object(c.g)(s, "class", "svelte-1iqxbmk")
                },
                m(e, a) {
                    Object(c.E)(e, t, a),
                    Object(c.d)(t, n),
                    Object(c.d)(t, o),
                    Object(c.d)(t, s),
                    Object(c.d)(t, i),
                    O && O.m(t, null),
                    Object(c.d)(t, l),
                    j && j.m(t, null)
                },
                p(e, n) {
                    p !== (p = d(e, n)) && (O && O.d(1),
                    O = p && p(e),
                    O && (O.c(),
                    O.m(t, l))),
                    1 & n[0] && (b = e[0].target.includes("32")),
                    b ? j || (j = kt(e),
                    j.c(),
                    j.m(t, null)) : j && (j.d(1),
                    j = null)
                },
                d(e) {
                    e && Object(c.u)(t),
                    O && O.d(),
                    j && j.d()
                }
            }
        }
        function ft(e) {
            let t;
            return {
                c() {
                    t = Object(c.v)("p"),
                    t.textContent = "On macOS, the app will run using Rosetta on Apple Silicon Macs.",
                    Object(c.g)(t, "class", "svelte-1iqxbmk")
                },
                m(e, n) {
                    Object(c.E)(e, t, n)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function wt(e) {
            let t;
            return {
                c() {
                    t = Object(c.v)("p"),
                    t.innerHTML = "On Linux, the application can be started by running <code>start.sh</code>",
                    Object(c.g)(t, "class", "svelte-1iqxbmk")
                },
                m(e, n) {
                    Object(c.E)(e, t, n)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function xt(e) {
            let t;
            return {
                c() {
                    t = Object(c.v)("p"),
                    t.textContent = "On macOS, the app will run natively on both Intel Silicon and Apple Silicon Macs.",
                    Object(c.g)(t, "class", "svelte-1iqxbmk")
                },
                m(e, n) {
                    Object(c.E)(e, t, n)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function kt(e) {
            let t;
            return {
                c() {
                    t = Object(c.v)("p"),
                    t.textContent = 'Note: You have selected the 32-bit or 64-bit mode. This maximizes device compatibility but limits the amount of memory the app can use. If you encounter crashes, try going into "Other environments" and using the 64-bit only mode instead.',
                    Object(c.g)(t, "class", "svelte-1iqxbmk")
                },
                m(e, n) {
                    Object(c.E)(e, t, n)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function yt(e) {
            let t, n;
            function o(e, t) {
                return 1 & t[0] && (n = null),
                null == n && (n = !!e[0].target.startsWith("zip")),
                n ? pt : dt
            }
            let s = o(e, [-1, -1, -1, -1])
              , i = s(e);
            return {
                c() {
                    t = Object(c.v)("div"),
                    i.c()
                },
                m(e, n) {
                    Object(c.E)(e, t, n),
                    i.m(t, null)
                },
                p(e, n) {
                    s === (s = o(e, n)) && i ? i.p(e, n) : (i.d(1),
                    i = s(e),
                    i && (i.c(),
                    i.m(t, null)))
                },
                d(e) {
                    e && Object(c.u)(t),
                    i.d()
                }
            }
        }
        function $t(e) {
            let t, n, o, s, i, a, l, b, d, p;
            return o = new r.a({
                props: {
                    secondary: !0,
                    text: e[7]("options.export")
                }
            }),
            o.$on("click", e[21]),
            a = new r.a({
                props: {
                    secondary: !0,
                    text: e[7]("options.import")
                }
            }),
            a.$on("click", e[22]),
            d = new r.a({
                props: {
                    dangerous: !0,
                    text: e[7]("options.resetAll")
                }
            }),
            d.$on("click", e[20]),
            {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("div"),
                    Object(c.o)(o.$$.fragment),
                    s = Object(c.U)(),
                    i = Object(c.v)("div"),
                    Object(c.o)(a.$$.fragment),
                    l = Object(c.U)(),
                    b = Object(c.v)("div"),
                    Object(c.o)(d.$$.fragment),
                    Object(c.g)(n, "class", "button svelte-1iqxbmk"),
                    Object(c.g)(i, "class", "button svelte-1iqxbmk"),
                    Object(c.g)(b, "class", "side-buttons svelte-1iqxbmk"),
                    Object(c.g)(t, "class", "buttons svelte-1iqxbmk")
                },
                m(e, r) {
                    Object(c.E)(e, t, r),
                    Object(c.d)(t, n),
                    Object(c.H)(o, n, null),
                    Object(c.d)(t, s),
                    Object(c.d)(t, i),
                    Object(c.H)(a, i, null),
                    Object(c.d)(t, l),
                    Object(c.d)(t, b),
                    Object(c.H)(d, b, null),
                    p = !0
                },
                p(e, t) {
                    const n = {};
                    128 & t[0] && (n.text = e[7]("options.export")),
                    o.$set(n);
                    const c = {};
                    128 & t[0] && (c.text = e[7]("options.import")),
                    a.$set(c);
                    const s = {};
                    128 & t[0] && (s.text = e[7]("options.resetAll")),
                    d.$set(s)
                },
                i(e) {
                    p || (Object(c.cb)(o.$$.fragment, e),
                    Object(c.cb)(a.$$.fragment, e),
                    Object(c.cb)(d.$$.fragment, e),
                    p = !0)
                },
                o(e) {
                    Object(c.db)(o.$$.fragment, e),
                    Object(c.db)(a.$$.fragment, e),
                    Object(c.db)(d.$$.fragment, e),
                    p = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    Object(c.s)(o),
                    Object(c.s)(a),
                    Object(c.s)(d)
                }
            }
        }
        function Et(e) {
            let t, n;
            return t = new l.a({
                props: {
                    $$slots: {
                        default: [$t]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            t.$on("drop", e[106]),
            {
                c() {
                    Object(c.o)(t.$$.fragment)
                },
                m(e, o) {
                    Object(c.H)(t, e, o),
                    n = !0
                },
                p(e, n) {
                    const c = {};
                    128 & n[0] | 4194304 & n[3] && (c.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    t.$set(c)
                },
                i(e) {
                    n || (Object(c.cb)(t.$$.fragment, e),
                    n = !0)
                },
                o(e) {
                    Object(c.db)(t.$$.fragment, e),
                    n = !1
                },
                d(e) {
                    Object(c.s)(t, e)
                }
            }
        }
        function St(e) {
            let t, n, o, s, i, a, l;
            return o = new r.a({
                props: {
                    text: e[7]("options.package")
                }
            }),
            o.$on("click", e[17]),
            a = new r.a({
                props: {
                    secondary: !0,
                    text: e[7]("options.preview")
                }
            }),
            a.$on("click", e[18]),
            {
                c() {
                    t = Object(c.v)("div"),
                    n = Object(c.v)("div"),
                    Object(c.o)(o.$$.fragment),
                    s = Object(c.U)(),
                    i = Object(c.v)("div"),
                    Object(c.o)(a.$$.fragment),
                    Object(c.g)(n, "class", "button svelte-1iqxbmk"),
                    Object(c.g)(i, "clas", "button"),
                    Object(c.g)(t, "class", "buttons svelte-1iqxbmk")
                },
                m(e, r) {
                    Object(c.E)(e, t, r),
                    Object(c.d)(t, n),
                    Object(c.H)(o, n, null),
                    Object(c.d)(t, s),
                    Object(c.d)(t, i),
                    Object(c.H)(a, i, null),
                    l = !0
                },
                p(e, t) {
                    const n = {};
                    128 & t[0] && (n.text = e[7]("options.package")),
                    o.$set(n);
                    const c = {};
                    128 & t[0] && (c.text = e[7]("options.preview")),
                    a.$set(c)
                },
                i(e) {
                    l || (Object(c.cb)(o.$$.fragment, e),
                    Object(c.cb)(a.$$.fragment, e),
                    l = !0)
                },
                o(e) {
                    Object(c.db)(o.$$.fragment, e),
                    Object(c.db)(a.$$.fragment, e),
                    l = !1
                },
                d(e) {
                    e && Object(c.u)(t),
                    Object(c.s)(o),
                    Object(c.s)(a)
                }
            }
        }
        function Ut(e) {
            let t, n;
            return t = new a.a({
                props: {
                    caption: !0,
                    $$slots: {
                        default: [Ct]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            {
                c() {
                    Object(c.o)(t.$$.fragment)
                },
                m(e, o) {
                    Object(c.H)(t, e, o),
                    n = !0
                },
                p(e, n) {
                    const c = {};
                    128 & n[0] | 4194304 & n[3] && (c.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    t.$set(c)
                },
                i(e) {
                    n || (Object(c.cb)(t.$$.fragment, e),
                    n = !0)
                },
                o(e) {
                    Object(c.db)(t.$$.fragment, e),
                    n = !1
                },
                d(e) {
                    Object(c.s)(t, e)
                }
            }
        }
        function _t(e) {
            let t, n;
            return t = new ge({
                props: {
                    name: e[6] ? e[6].filename : null,
                    url: e[6] ? e[6].url : null,
                    blob: e[6] ? e[6].blob : null
                }
            }),
            {
                c() {
                    Object(c.o)(t.$$.fragment)
                },
                m(e, o) {
                    Object(c.H)(t, e, o),
                    n = !0
                },
                p(e, n) {
                    const c = {};
                    64 & n[0] && (c.name = e[6] ? e[6].filename : null),
                    64 & n[0] && (c.url = e[6] ? e[6].url : null),
                    64 & n[0] && (c.blob = e[6] ? e[6].blob : null),
                    t.$set(c)
                },
                i(e) {
                    n || (Object(c.cb)(t.$$.fragment, e),
                    n = !0)
                },
                o(e) {
                    Object(c.db)(t.$$.fragment, e),
                    n = !1
                },
                d(e) {
                    Object(c.s)(t, e)
                }
            }
        }
        function Ct(e) {
            let t, n, o = e[7]("options.downloadsWillAppearHere") + "";
            return {
                c() {
                    t = Object(c.v)("p"),
                    n = Object(c.Y)(o),
                    Object(c.g)(t, "class", "svelte-1iqxbmk")
                },
                m(e, o) {
                    Object(c.E)(e, t, o),
                    Object(c.d)(t, n)
                },
                p(e, t) {
                    128 & t[0] && o !== (o = e[7]("options.downloadsWillAppearHere") + "") && Object(c.Q)(n, o)
                },
                d(e) {
                    e && Object(c.u)(t)
                }
            }
        }
        function Rt(e) {
            let t, n, o, s, i, r, l, b, d, p, O, j, u, g, m, h, v, f, w, x, k;
            t = new a.a({
                props: {
                    accent: "#FFAB19",
                    reset: e[42],
                    $$slots: {
                        default: [Ge]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            o = new a.a({
                props: {
                    accent: "#9966FF",
                    reset: e[61],
                    $$slots: {
                        default: [Ke]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            i = new a.a({
                props: {
                    accent: "#4CBFE6",
                    reset: e[70],
                    $$slots: {
                        default: [et]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            l = new a.a({
                props: {
                    accent: "#FF8C1A",
                    reset: 0 === e[8].length ? null : e[76],
                    $$slots: {
                        default: [at]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            d = new a.a({
                props: {
                    accent: "#FF6680",
                    reset: e[86],
                    $$slots: {
                        default: [rt]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            O = new a.a({
                props: {
                    accent: "#0FBD8C",
                    reset: e[99],
                    $$slots: {
                        default: [lt]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            });
            let y = "html" !== e[0].target && bt(e);
            g = new a.a({
                props: {
                    $$slots: {
                        default: [Et]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            }),
            h = new a.a({
                props: {
                    $$slots: {
                        default: [St]
                    },
                    $$scope: {
                        ctx: e
                    }
                }
            });
            const $ = [_t, Ut]
              , E = [];
            function S(e, t) {
                return e[6] ? 0 : e[4].visible ? -1 : 1
            }
            return ~(f = S(e)) && (w = E[f] = $[f](e)),
            {
                c() {
                    Object(c.o)(t.$$.fragment),
                    n = Object(c.U)(),
                    Object(c.o)(o.$$.fragment),
                    s = Object(c.U)(),
                    Object(c.o)(i.$$.fragment),
                    r = Object(c.U)(),
                    Object(c.o)(l.$$.fragment),
                    b = Object(c.U)(),
                    Object(c.o)(d.$$.fragment),
                    p = Object(c.U)(),
                    Object(c.o)(O.$$.fragment),
                    j = Object(c.U)(),
                    y && y.c(),
                    u = Object(c.U)(),
                    Object(c.o)(g.$$.fragment),
                    m = Object(c.U)(),
                    Object(c.o)(h.$$.fragment),
                    v = Object(c.U)(),
                    w && w.c(),
                    x = Object(c.w)()
                },
                m(e, a) {
                    Object(c.H)(t, e, a),
                    Object(c.E)(e, n, a),
                    Object(c.H)(o, e, a),
                    Object(c.E)(e, s, a),
                    Object(c.H)(i, e, a),
                    Object(c.E)(e, r, a),
                    Object(c.H)(l, e, a),
                    Object(c.E)(e, b, a),
                    Object(c.H)(d, e, a),
                    Object(c.E)(e, p, a),
                    Object(c.H)(O, e, a),
                    Object(c.E)(e, j, a),
                    y && y.m(e, a),
                    Object(c.E)(e, u, a),
                    Object(c.H)(g, e, a),
                    Object(c.E)(e, m, a),
                    Object(c.H)(h, e, a),
                    Object(c.E)(e, v, a),
                    ~f && E[f].m(e, a),
                    Object(c.E)(e, x, a),
                    k = !0
                },
                p(e, n) {
                    const s = {};
                    161 & n[0] | 4194304 & n[3] && (s.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    t.$set(s);
                    const a = {};
                    10 & n[0] && (a.reset = e[61]),
                    139 & n[0] | 4194304 & n[3] && (a.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    o.$set(a);
                    const r = {};
                    4 & n[0] && (r.reset = e[70]),
                    133 & n[0] | 4194304 & n[3] && (r.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    i.$set(r);
                    const b = {};
                    129 & n[0] | 4194304 & n[3] && (b.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    l.$set(b);
                    const p = {};
                    161 & n[0] | 4194304 & n[3] && (p.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    d.$set(p);
                    const j = {};
                    129 & n[0] | 4194304 & n[3] && (j.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    O.$set(j),
                    "html" !== e[0].target ? y ? (y.p(e, n),
                    1 & n[0] && Object(c.cb)(y, 1)) : (y = bt(e),
                    y.c(),
                    Object(c.cb)(y, 1),
                    y.m(u.parentNode, u)) : y && (Object(c.z)(),
                    Object(c.db)(y, 1, 1, ()=>{
                        y = null
                    }
                    ),
                    Object(c.k)());
                    const m = {};
                    128 & n[0] | 4194304 & n[3] && (m.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    g.$set(m);
                    const v = {};
                    128 & n[0] | 4194304 & n[3] && (v.$$scope = {
                        dirty: n,
                        ctx: e
                    }),
                    h.$set(v);
                    let k = f;
                    f = S(e),
                    f === k ? ~f && E[f].p(e, n) : (w && (Object(c.z)(),
                    Object(c.db)(E[k], 1, 1, ()=>{
                        E[k] = null
                    }
                    ),
                    Object(c.k)()),
                    ~f ? (w = E[f],
                    w ? w.p(e, n) : (w = E[f] = $[f](e),
                    w.c()),
                    Object(c.cb)(w, 1),
                    w.m(x.parentNode, x)) : w = null)
                },
                i(e) {
                    k || (Object(c.cb)(t.$$.fragment, e),
                    Object(c.cb)(o.$$.fragment, e),
                    Object(c.cb)(i.$$.fragment, e),
                    Object(c.cb)(l.$$.fragment, e),
                    Object(c.cb)(d.$$.fragment, e),
                    Object(c.cb)(O.$$.fragment, e),
                    Object(c.cb)(y),
                    Object(c.cb)(g.$$.fragment, e),
                    Object(c.cb)(h.$$.fragment, e),
                    Object(c.cb)(w),
                    k = !0)
                },
                o(e) {
                    Object(c.db)(t.$$.fragment, e),
                    Object(c.db)(o.$$.fragment, e),
                    Object(c.db)(i.$$.fragment, e),
                    Object(c.db)(l.$$.fragment, e),
                    Object(c.db)(d.$$.fragment, e),
                    Object(c.db)(O.$$.fragment, e),
                    Object(c.db)(y),
                    Object(c.db)(g.$$.fragment, e),
                    Object(c.db)(h.$$.fragment, e),
                    Object(c.db)(w),
                    k = !1
                },
                d(e) {
                    Object(c.s)(t, e),
                    e && Object(c.u)(n),
                    Object(c.s)(o, e),
                    e && Object(c.u)(s),
                    Object(c.s)(i, e),
                    e && Object(c.u)(r),
                    Object(c.s)(l, e),
                    e && Object(c.u)(b),
                    Object(c.s)(d, e),
                    e && Object(c.u)(p),
                    Object(c.s)(O, e),
                    e && Object(c.u)(j),
                    y && y.d(e),
                    e && Object(c.u)(u),
                    Object(c.s)(g, e),
                    e && Object(c.u)(m),
                    Object(c.s)(h, e),
                    e && Object(c.u)(v),
                    ~f && E[f].d(e),
                    e && Object(c.u)(x)
                }
            }
        }
        const Tt = 9999999999;
        function qt(e, t, n) {
            let i, a, r, l, b, d, p;
            Object(c.l)(e, Ee.b, e=>n(107, i = e)),
            Object(c.l)(e, s.a, e=>n(7, a = e)),
            Object(c.l)(e, Ee.c, e=>n(4, p = e));
            let {projectData: O} = t
              , {title: j} = t;
            const u = O.project.analysis.stageVariables.filter(e=>e.isCloud).map(e=>e.name)
              , g = Pe.DEFAULT_OPTIONS();
            g.projectId = O.projectId || "p4-" + O.uniqueId;
            for (const e of u)
                g.cloudVariables.custom[e] = "ws";
            g.app.packageName = Pe.getDefaultPackageNameFromFileName(O.title),
            g.app.windowTitle = Pe.getWindowTitleFromFileName(O.title),
            g.extensions = O.project.analysis.extensions;
            const m = Object(me.a)("PackagerOptions." + O.uniqueId, g);
            Object(c.l)(e, m, e=>n(0, r = e)),
            Object(c.S)(m, r.extensions = r.extensions.map(e=>"object" == typeof e && e ? e.url || "" : e), r);
            const h = (v = " // _twconfig_",
            O.project.analysis.stageComments.find(e=>e.split("\n").find(e=>e.endsWith(v))));
            var v;
            let f = null
              , w = null;
            const x = ()=>{
                n(26, w = null),
                f && URL.revokeObjectURL(f.url),
                n(6, f = null)
            }
              , k = $e("PackagerOptions.icon." + O.uniqueId);
            Object(c.l)(e, k, e=>n(3, d = e));
            const y = $e("PackagerOptions.customCursorIcon." + O.uniqueId);
            Object(c.l)(e, y, e=>n(2, b = e));
            const $ = $e("PackagerOptions.loadingScreenImage." + O.uniqueId);
            Object(c.l)(e, $, e=>n(1, l = e));
            const E = !["html", "zip", "electron-win32", "webview-mac", "electron-linux64"].includes(r.target)
              , S = r.compiler.enabled !== g.compiler.enabled || r.compiler.warpTimer !== g.compiler.warpTimer || 0 !== r.extensions.length || r.bakeExtensions !== g.bakeExtensions || "" !== r.custom.css || "" !== r.custom.js || r.projectId !== g.projectId || r.packagedRuntime !== g.packagedRuntime || r.maxTextureDimension !== g.maxTextureDimension
              , U = async(e,t)=>{
                const n = new Pe;
                n.options = t,
                n.project = O.project,
                e.addEventListener("abort", ()=>{
                    n.abort()
                }
                ),
                e.setProgressText(a("progress.loadingScripts")),
                n.addEventListener("fetch-extensions", ({detail: t})=>{
                    e.setProgressText(a("progress.downloadingExtensions")),
                    e.setProgress(t.progress)
                }
                ),
                n.addEventListener("large-asset-fetch", ({detail: t})=>{
                    let n;
                    t.asset.startsWith("nwjs-") ? n = "NW.js" : t.asset.startsWith("electron-") ? n = "Electron" : "webview-mac" === t.asset && (n = "WKWebView"),
                    n && e.setProgressText(a("progress.loadingLargeAsset").replace("{thing}", n)),
                    e.setProgress(t.progress)
                }
                ),
                n.addEventListener("zip-progress", ({detail: t})=>{
                    e.setProgressText(a("progress.compressingProject")),
                    e.setProgress(t.progress)
                }
                );
                const c = await n.package();
                return c.blob = new Blob([c.data],{
                    type: c.type
                }),
                c.url = URL.createObjectURL(c.blob),
                c
            }
              , _ = e=>{
                for (const t of e) {
                    let e = r
                      , n = g;
                    const c = t.split(".")
                      , o = c.pop();
                    for (const t of c)
                        e = e[t],
                        n = n[t];
                    e[o] = Re(n[o])
                }
                m.set(r)
            }
              , C = async e=>{
                const t = e.files[0];
                var n;
                if (t)
                    try {
                        const e = await Object(H.b)(t)
                          , o = JSON.parse(e)
                          , s = Ye(o)
                          , i = Re(g)
                          , p = Object(We.a)(s, i);
                        Pe.usesUnsafeOptions(p) && !confirm(a("options.confirmImportUnsafe")) || (n = p,
                        Object(c.S)(m, r = n, r),
                        Object(c.S)(k, d = r.app.icon, d),
                        Object(c.S)(y, b = r.cursor.custom, b),
                        Object(c.S)($, l = r.loadingScreen.image, l))
                    } catch (e) {
                        Object(c.S)(Ee.b, i = e, i)
                    }
            }
            ;
            Object(o.b)(()=>{
                f && URL.revokeObjectURL(f.url)
            }
            );
            return e.$$set = e=>{
                "projectData"in e && n(25, O = e.projectData),
                "title"in e && n(24, j = e.title)
            }
            ,
            e.$$.update = ()=>{
                67108880 & e.$$.dirty[0] && w && w.setProgress(p.progress, p.text),
                8 & e.$$.dirty[0] && Object(c.S)(m, r.app.icon = d, r),
                4 & e.$$.dirty[0] && Object(c.S)(m, r.cursor.custom = b, r),
                2 & e.$$.dirty[0] && Object(c.S)(m, r.loadingScreen.image = l, r),
                1 & e.$$.dirty[0] && (x(),
                Ee.a.abort()),
                1 & e.$$.dirty[0] && n(24, j = r.app.windowTitle)
            }
            ,
            [r, l, b, d, p, g, f, a, u, m, h, k, y, $, E, S, ()=>{
                const e = b
                  , t = URL.createObjectURL(e)
                  , n = new Image
                  , o = ()=>{
                    n.onerror = null,
                    n.onload = null,
                    URL.revokeObjectURL(t)
                }
                ;
                n.onload = ()=>{
                    Object(c.S)(m, r.cursor.center.x = Math.round(n.width / 2), r),
                    Object(c.S)(m, r.cursor.center.y = Math.round(n.height / 2), r),
                    o()
                }
                ,
                n.onerror = ()=>{
                    throw o(),
                    Object(c.S)(Ee.b, i = new Error("Image could not be loaded"), i),
                    i
                }
                ,
                n.src = t
            }
            , async()=>{
                x();
                const e = new Me.a;
                n(6, f = await e.do(U(e, Re(r)))),
                e.done(),
                re(f.filename, f.url)
            }
            , async()=>{
                x(),
                n(26, w = new _e);
                const e = new Me.a
                  , t = Re(r);
                t.target = "html";
                try {
                    n(6, f = await e.do(U(e, t))),
                    e.done(),
                    w.setContent(f.blob)
                } catch (e) {
                    w.close()
                }
            }
            , _, ()=>{
                confirm(a("reset.confirmAll")) && (_(Object.keys(r)),
                Object(c.S)(k, d = null, d),
                Object(c.S)(y, b = null, b),
                Object(c.S)($, l = null, l))
            }
            , async()=>{
                const e = await Fe(r)
                  , t = new Blob([JSON.stringify(e)],{
                    type: "application/json"
                })
                  , n = URL.createObjectURL(t)
                  , c = V.APP_NAME.replace(/[^a-z0-9 ]/gi, "").replace(/ /g, "-").toLowerCase();
                re(c + "-settings.json", n),
                URL.revokeObjectURL(n)
            }
            , async()=>{
                const e = document.createElement("input");
                e.type = "file",
                e.accept = ".json",
                e.addEventListener("change", e=>{
                    C(e.target)
                }
                ),
                document.body.appendChild(e),
                e.click(),
                e.remove()
            }
            , C, j, O, w, function() {
                r.turbo = this.checked,
                m.set(r)
            }
            , function() {
                r.framerate = Object(c.ab)(this.value),
                m.set(r)
            }
            , function() {
                r.interpolation = this.checked,
                m.set(r)
            }
            , function() {
                r.highQualityPen = this.checked,
                m.set(r)
            }
            , e=>{
                Object(c.S)(m, r.maxClones = e.target.checked ? Tt : 300, r)
            }
            , e=>{
                Object(c.S)(m, r.fencing = !e.target.checked, r)
            }
            , e=>{
                Object(c.S)(m, r.miscLimits = !e.target.checked, r)
            }
            , function() {
                r.username = this.value,
                m.set(r)
            }
            , function() {
                r.closeWhenStopped = this.checked,
                m.set(r)
            }
            , function() {
                r.stageWidth = Object(c.ab)(this.value),
                m.set(r)
            }
            , function() {
                r.stageHeight = Object(c.ab)(this.value),
                m.set(r)
            }
            , function() {
                r.resizeMode = this.__value,
                m.set(r)
            }
            , [[], [], [], [], []], function() {
                r.resizeMode = this.__value,
                m.set(r)
            }
            , function() {
                r.resizeMode = this.__value,
                m.set(r)
            }
            , ()=>{
                _(["turbo", "framerate", "interpolation", "highQualityPen", "maxClones", "fencing", "miscLimits", "stageWidth", "stageHeight", "resizeMode", "username"])
            }
            , function() {
                r.app.windowTitle = this.value,
                m.set(r)
            }
            , function(e) {
                d = e,
                k.set(d)
            }
            , function() {
                r.loadingScreen.progressBar = this.checked,
                m.set(r)
            }
            , function() {
                r.loadingScreen.text = this.value,
                m.set(r)
            }
            , function(e) {
                l = e,
                $.set(l)
            }
            , function() {
                r.loadingScreen.imageMode = this.__value,
                m.set(r)
            }
            , function() {
                r.loadingScreen.imageMode = this.__value,
                m.set(r)
            }
            , function() {
                r.autoplay = this.checked,
                m.set(r)
            }
            , function() {
                r.controls.greenFlag.enabled = this.checked,
                m.set(r)
            }
            , function() {
                r.controls.stopAll.enabled = this.checked,
                m.set(r)
            }
            , function() {
                r.controls.pause.enabled = this.checked,
                m.set(r)
            }
            , function() {
                r.controls.fullscreen.enabled = this.checked,
                m.set(r)
            }
            , function(t) {
                e.$$.not_equal(r.appearance.background, t) && (r.appearance.background = t,
                m.set(r))
            }
            , function(t) {
                e.$$.not_equal(r.appearance.foreground, t) && (r.appearance.foreground = t,
                m.set(r))
            }
            , function(t) {
                e.$$.not_equal(r.appearance.accent, t) && (r.appearance.accent = t,
                m.set(r))
            }
            , function() {
                r.monitors.editableLists = this.checked,
                m.set(r)
            }
            , function(t) {
                e.$$.not_equal(r.monitors.variableColor, t) && (r.monitors.variableColor = t,
                m.set(r))
            }
            , function(t) {
                e.$$.not_equal(r.monitors.listColor, t) && (r.monitors.listColor = t,
                m.set(r))
            }
            , ()=>{
                Object(c.S)(k, d = null, d),
                Object(c.S)($, l = null, l),
                _(["app.windowTitle", "loadingScreen", "autoplay", "controls", "appearance", "monitors"])
            }
            , function() {
                r.cursor.type = this.__value,
                m.set(r)
            }
            , function() {
                r.cursor.type = this.__value,
                m.set(r)
            }
            , function() {
                r.cursor.type = this.__value,
                m.set(r)
            }
            , function(e) {
                b = e,
                y.set(b)
            }
            , function() {
                r.cursor.center.x = Object(c.ab)(this.value),
                m.set(r)
            }
            , function() {
                r.cursor.center.y = Object(c.ab)(this.value),
                m.set(r)
            }
            , function() {
                r.chunks.pointerlock = this.checked,
                m.set(r)
            }
            , function() {
                r.chunks.gamepad = this.checked,
                m.set(r)
            }
            , ()=>{
                Object(c.S)(y, b = null, b),
                _(["cursor", "chunks"])
            }
            , function() {
                r.cloudVariables.mode = Object(c.O)(this),
                m.set(r)
            }
            , function(e) {
                r.cloudVariables.custom[e] = Object(c.O)(this),
                m.set(r)
            }
            , function() {
                r.cloudVariables.cloudHost = this.value,
                m.set(r)
            }
            , function() {
                r.cloudVariables.specialCloudBehaviors = this.checked,
                m.set(r)
            }
            , function() {
                r.cloudVariables.unsafeCloudBehaviors = this.checked,
                m.set(r)
            }
            , ()=>{
                _(["cloudVariables"])
            }
            , function() {
                r.compiler.enabled = this.checked,
                m.set(r)
            }
            , function() {
                r.compiler.warpTimer = this.checked,
                m.set(r)
            }
            , function(t) {
                e.$$.not_equal(r.extensions, t) && (r.extensions = t,
                m.set(r))
            }
            , function() {
                r.bakeExtensions = this.checked,
                m.set(r)
            }
            , function() {
                r.custom.css = this.value,
                m.set(r)
            }
            , function() {
                r.custom.js = this.value,
                m.set(r)
            }
            , function() {
                r.projectId = this.value,
                m.set(r)
            }
            , function() {
                r.packagedRuntime = this.checked,
                m.set(r)
            }
            , e=>{
                Object(c.S)(m, r.maxTextureDimension = g.maxTextureDimension * (e.target.checked ? 2 : 1), r)
            }
            , ()=>{
                _(["compiler", "extensions", "bakeExtensions", "custom", "projectId", "maxTextureDimension"])
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , function() {
                r.target = this.__value,
                m.set(r)
            }
            , ()=>{
                _(["target"])
            }
            , function() {
                r.app.packageName = this.value,
                m.set(r)
            }
            , function() {
                r.app.version = this.value,
                m.set(r)
            }
            , function() {
                r.app.windowMode = this.__value,
                m.set(r)
            }
            , function() {
                r.app.windowMode = this.__value,
                m.set(r)
            }
            , function() {
                r.app.windowMode = this.__value,
                m.set(r)
            }
            , ()=>{
                _(["app.packageName", "app.windowMode"])
            }
            , e=>C(e.detail)]
        }
        class It extends c.a {
            constructor(e) {
                super(),
                Object(c.C)(this, e, qt, Rt, c.M, {
                    projectData: 25,
                    title: 24
                }, Qe, [-1, -1, -1, -1])
            }
        }
        t.default = It
    }
}]);
//# sourceMappingURL=packager-options-ui.js.map
