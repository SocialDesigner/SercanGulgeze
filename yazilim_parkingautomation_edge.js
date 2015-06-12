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
                            id: 'baslik',
                            display: 'none',
                            type: 'text',
                            rect: ['38px', '195px', '1010px', '66px', 'auto', 'auto'],
                            opacity: 0,
                            text: "PARKING AUTOMATION (C++)",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [44, "px"], "rgba(0,0,0,1)", "800", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'aciklama',
                            display: 'none',
                            type: 'text',
                            rect: ['33px', '294px', '1015px', '503px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Visual Studio 2010 derleyicisi ile C++ dilinde yazdığım \"Parking Automation\" programı ile bir otopark işletmesinin ihtiyacı olarak görülen aracın plakası, araç sahibinin kişisel bilgileri ve aracın otopark içerisinde kaldığı saate göre ödemesi gereken tutar hesaplanmaktadır. Ayrıca programa otopark görevlisinin dışında bir giriş yapılmaması için görevliye ait bir kullanıcı adı ve şifre bulunmakta ve bu bilgiler doğru girildiğinde program çalışmaktadır. Otoparkın içinde kaç araç bulunduğu bu araçların plaka bilgileri ve günlük elde edilen kazancı raporlama bölümünde gösteren program bir otopark işletmesinin tüm gerekliliklerini sağlamaktadır.Dökümantasyon aracı olarak doxygen ve UML diagramlarla anlatım teknikleri kullanılmıştır. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'Otopark_Otomasyon_UML',
                            display: 'none',
                            type: 'image',
                            rect: ['439px', '1291px', '597px', '398px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"Otopark_Otomasyon_UML.png",'0px','0px']
                        },
                        {
                            id: 'Otopark_Otomasyon',
                            display: 'none',
                            type: 'image',
                            rect: ['38px', '831px', '597px', '398px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"Otopark_Otomasyon.png",'0px','0px']
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
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama}",
                            'none',
                            'block'
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
                            "eid141",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${Otopark_Otomasyon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${baslik}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${baslik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            750,
                            0,
                            "linear",
                            "${baslik}",
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
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Otopark_Otomasyon_UML}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Otopark_Otomasyon_UML}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${Otopark_Otomasyon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Otopark_Otomasyon}",
                            'none',
                            'block'
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
                            "eid138",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${Otopark_Otomasyon_UML}",
                            '0',
                            '1'
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
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("yazilim_parkingautomation_edgeActions.js");
})("EDGE-5742815");
