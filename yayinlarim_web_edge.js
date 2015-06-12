/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sitesercan',
                            type: 'image',
                            rect: ['8px', '787px', '1060px', '143px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sitesercan.png",'0px','0px']
                        },
                        {
                            id: 'sitepiton2',
                            type: 'image',
                            rect: ['9px', '907px', '1077px', '143px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sitepiton2.png",'0px','0px']
                        },
                        {
                            id: 'kalip',
                            display: 'none',
                            type: 'image',
                            rect: ['48px', '734px', '1000px', '388px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"sercangulgeze.png",'0px','0px']
                        },
                        {
                            id: 'geri_ok',
                            display: 'none',
                            type: 'image',
                            rect: ['10px', '1782px', '333px', '128px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"geri_ok.png",'0px','0px']
                        },
                        {
                            id: 'home',
                            display: 'none',
                            type: 'image',
                            rect: ['737px', '1778px', '333px', '128px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"home.png",'0px','0px']
                        },
                        {
                            id: 'temel-html5-tags-etiketleri',
                            display: 'none',
                            type: 'image',
                            rect: ['93px', '577px', '894px', '536px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"temel-html5-tags-etiketleri.png",'0px','0px']
                        },
                        {
                            id: 'html-nedir-icerik',
                            display: 'none',
                            type: 'text',
                            rect: ['93px', '206px', '904px', '333px', 'auto', 'auto'],
                            opacity: 0,
                            text: "<br><br>HTML (HyperText Markup Language – Kelime İşaretleme Dili), web sayfalarının tasarımının yapıldığı bir işaretleme dilidir. HTML bir yazılım dili değildir ve diğer yazılım dilleri gibi özel derleyicilere ihtiyacı yoktur. Oluşturulan HTML sayfaları derlenmek veya çalıştırılmak yerine, kullanıcı programı tarafından yorumlanır. ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "0px"]
                        },
                        {
                            id: 'temel-hml5-etiketleri',
                            display: 'none',
                            type: 'text',
                            rect: ['93px', '153px', '894px', '33px', 'auto', 'auto'],
                            opacity: 0,
                            text: "TEMEL HTML5 ETİKETLERİ(TAGS) NEDİR? NASIL KULLANILIR?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'html-nedir',
                            display: 'none',
                            type: 'text',
                            rect: ['93px', '209px', '397px', '47px', 'auto', 'auto'],
                            opacity: 0,
                            text: "HTML NEDİR?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [26, "px"], "rgba(0,0,0,1)", "600", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'h-etiket-boyutlari5',
                            display: 'none',
                            type: 'image',
                            rect: ['70px', '1441px', '620px', '255px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"h-etiket-boyutlari5.png",'0px','0px']
                        },
                        {
                            id: 'yayinlar_devam',
                            display: 'none',
                            type: 'image',
                            rect: ['723px', '1455px', '308px', '228px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"yayinlar_devam.png",'0px','0px']
                        },
                        {
                            id: 'aciklama2',
                            display: 'none',
                            type: 'text',
                            rect: ['88px', '1163px', '904px', '159px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Bu programlara biz Web Tarayıcılar (Browser) diyoruz. Fakat web tasarımcılar kodlama yaparken kullanım rahatlığını sağlamak için Adobe Dreamweaver vb programlar kullanmayı tercih ederler.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'aciklama3',
                            display: 'none',
                            type: 'text',
                            rect: ['72px', '1367px', '567px', '47px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Temel HTML5 etiketlerinden bazıları;",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1080px', '1920px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(150,116,116,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${h-etiket-boyutlari5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            750,
                            0,
                            "linear",
                            "${h-etiket-boyutlari5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid167",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${html-nedir}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            710,
                            40,
                            "linear",
                            "${geri_ok}",
                            '0',
                            '1'
                        ],
                        [
                            "eid137",
                            "font-size",
                            750,
                            0,
                            "linear",
                            "${html-nedir-icerik}",
                            '34px',
                            '34px'
                        ],
                        [
                            "eid171",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${h-etiket-boyutlari5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "display",
                            187,
                            0,
                            "linear",
                            "${kalip}",
                            'none',
                            'block'
                        ],
                        [
                            "eid125",
                            "top",
                            750,
                            0,
                            "linear",
                            "${geri_ok}",
                            '1782px',
                            '1782px'
                        ],
                        [
                            "eid116",
                            "display",
                            710,
                            0,
                            "linear",
                            "${home}",
                            'none',
                            'block'
                        ],
                        [
                            "eid164",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${temel-html5-tags-etiketleri}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${yayinlar_devam}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            750,
                            0,
                            "linear",
                            "${yayinlar_devam}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "top",
                            750,
                            0,
                            "linear",
                            "${html-nedir-icerik}",
                            '206px',
                            '206px'
                        ],
                        [
                            "eid138",
                            "height",
                            750,
                            0,
                            "linear",
                            "${html-nedir-icerik}",
                            '333px',
                            '333px'
                        ],
                        [
                            "eid83",
                            "location",
                            0,
                            750,
                            "linear",
                            "${sitepiton2}",
                            [[550.5, 978.5, 0, 0, 0, 0,0],[540.5, 1848.5, 0, 0, 0, 0,870.06]]
                        ],
                        [
                            "eid29",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '1080px',
                            '1080px'
                        ],
                        [
                            "eid124",
                            "height",
                            750,
                            0,
                            "linear",
                            "${geri_ok}",
                            '128px',
                            '128px'
                        ],
                        [
                            "eid81",
                            "location",
                            0,
                            750,
                            "linear",
                            "${sitesercan}",
                            [[550, 858.17, 0, 0, 0, 0,0],[550, 71.84, 0, 0, 0, 0,786.33]]
                        ],
                        [
                            "eid117",
                            "display",
                            710,
                            0,
                            "linear",
                            "${geri_ok}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${temel-hml5-etiketleri}",
                            '0',
                            '1'
                        ],
                        [
                            "eid120",
                            "opacity",
                            710,
                            40,
                            "linear",
                            "${home}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid149",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "text-indent",
                            750,
                            0,
                            "linear",
                            "${html-nedir-icerik}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid147",
                            "display",
                            0,
                            0,
                            "linear",
                            "${temel-html5-tags-etiketleri}",
                            'none',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            750,
                            0,
                            "linear",
                            "${temel-html5-tags-etiketleri}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "left",
                            750,
                            0,
                            "linear",
                            "${html-nedir-icerik}",
                            '93px',
                            '93px'
                        ],
                        [
                            "eid101",
                            "width",
                            750,
                            0,
                            "linear",
                            "${sitepiton2}",
                            '1077px',
                            '1077px'
                        ],
                        [
                            "eid168",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${html-nedir-icerik}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${html-nedir}",
                            'none',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            750,
                            0,
                            "linear",
                            "${html-nedir}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${yayinlar_devam}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(150,116,116,1.00)',
                            'rgba(150,116,116,1.00)'
                        ],
                        [
                            "eid100",
                            "width",
                            750,
                            0,
                            "linear",
                            "${sitesercan}",
                            '1060px',
                            '1060px'
                        ],
                        [
                            "eid30",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '1920px',
                            '1920px'
                        ],
                        [
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${temel-hml5-etiketleri}",
                            'none',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            750,
                            0,
                            "linear",
                            "${temel-hml5-etiketleri}",
                            'none',
                            'block'
                        ],
                        [
                            "eid113",
                            "opacity",
                            187,
                            563,
                            "linear",
                            "${kalip}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${html-nedir-icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            750,
                            0,
                            "linear",
                            "${html-nedir-icerik}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("yayinlarim_web_edgeActions.js");
})("EDGE-5742815");
