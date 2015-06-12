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
                            id: 'sdlc',
                            type: 'text',
                            rect: ['25px', '184px', '1046px', '55px', 'auto', 'auto'],
                            opacity: 0,
                            text: "SDLC (SOFTWARE DEVELOPMENT LIFE CYCLE)",
                            font: ['Arial, Helvetica, sans-serif', [44, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", ""]
                        },
                        {
                            id: 'sdlc-icerik',
                            type: 'text',
                            rect: ['154px', '246px', '767px', '231px', 'auto', 'auto'],
                            opacity: 0,
                            text: "SDLC kısaltmasının iki ayrı anlamı vardır bunlar;<br>-\tSoftware Development Life Cycle<br>Yazılım Geliştirme Yaşam Döngüsü<br>-\tSystems Development Life Cycle<br>Sistem Geliştirme Yaşam Döngüsü",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'sdlc_software_systems_development_life_cycle2',
                            type: 'image',
                            rect: ['130px', '490px', '832px', '487px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"sdlc_software_systems_development_life_cycle2.png",'0px','0px']
                        },
                        {
                            id: 'sdlc-icerik2',
                            type: 'text',
                            rect: ['96px', '1001px', '903px', '297px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Software Development Life Cycle, Yazılım geliştirme sürecinde birçok kurumun haberi olmadığı veya önemsemediği için atladığı fakat yapılacak yazılımın kalitesini belirleyen en önemli süreçlerden birisidir. Kısaca özetleyecek olursak yazılımın planlanmasından, geliştirilmesine, test edilmesine ve ömrünü tamamlamasına kadar kapsayan bir yoldur.<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'sdlc-asama-icerik',
                            type: 'text',
                            rect: ['98px', '1368px', '656px', '342px', 'auto', 'auto'],
                            opacity: 0,
                            text: "•\tİstek, kanun değişikliği, vb. ortaya çıkması<br>•\tKullanıcı gereksinimlerinin belirlenmesi<br>•\tSistem gereksinimlerinin belirlenmesi<br>•\tÜst düzey tasarım hazırlanması<br>•\tDetay tasarımların hazırlanması<br>•\tYazılım geliştirme aşaması<br>•\tTest aşaması<br>•\tYayınlama",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'sdlc-asama',
                            type: 'text',
                            rect: ['98px', '1309px', '363px', '54px', 'auto', 'auto'],
                            opacity: 0,
                            text: "SDLC – Aşamaları;",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'yayinlar_devam',
                            type: 'image',
                            rect: ['668px', '1382px', '370px', '274px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"yayinlar_devam.png",'0px','0px']
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
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sdlc-asama}",
                            'none',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            750,
                            0,
                            "linear",
                            "${sdlc-asama}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sdlc-asama-icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            750,
                            0,
                            "linear",
                            "${sdlc-asama-icerik}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sdlc-icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            750,
                            0,
                            "linear",
                            "${sdlc-icerik}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${sdlc-asama-icerik}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${sdlc-asama}",
                            '1309px',
                            '1309px'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sdlc-icerik2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            750,
                            0,
                            "linear",
                            "${sdlc-icerik2}",
                            'none',
                            'block'
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
                            "eid83",
                            "location",
                            0,
                            750,
                            "linear",
                            "${sitepiton2}",
                            [[550.5, 978.5, 0, 0, 0, 0,0],[540.5, 1848.5, 0, 0, 0, 0,870.06]]
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
                            "eid157",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${sdlc-asama}",
                            '0',
                            '1'
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
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sdlc_software_systems_development_life_cycle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            750,
                            0,
                            "linear",
                            "${sdlc_software_systems_development_life_cycle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${sdlc-icerik}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${yayinlar_devam}",
                            '0',
                            '1'
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
                            "eid160",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${sdlc-icerik2}",
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
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${yayinlar_devam}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            750,
                            0,
                            "linear",
                            "${yayinlar_devam}",
                            'none',
                            'block'
                        ],
                        [
                            "eid154",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${sdlc}",
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
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sdlc}",
                            'none',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            750,
                            0,
                            "linear",
                            "${sdlc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${sdlc-asama-icerik}",
                            '1368px',
                            '1368px'
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
                            "eid158",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${sdlc_software_systems_development_life_cycle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "location",
                            0,
                            750,
                            "linear",
                            "${sitesercan}",
                            [[550, 858.17, 0, 0, 0, 0,0],[550, 71.84, 0, 0, 0, 0,786.33]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("yayinlarim_yazilim_edgeActions.js");
})("EDGE-5742815");
