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
                            id: 'efesondaj_urun2',
                            display: 'none',
                            type: 'image',
                            rect: ['245px', '1309px', '600px', '421px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"efesondaj_urun2.jpg",'0px','0px']
                        },
                        {
                            id: 'aciklama2',
                            display: 'none',
                            type: 'text',
                            rect: ['75px', '1059px', '940px', '235px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Sitenin kodlama ve tasarım işlemlerini Adobe firmasının Dreamweaver programı ile \"html5\", \"css3\" ve \"javascript\" kullanarak gerçekleştirdim ve sitenin anasayfası için grafik tabanlı bir slider kullanarak giriş sayfasında güzel bir tasarım yakalamayı hedefledim.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'efesondaj_anasayfa4',
                            display: 'none',
                            type: 'image',
                            rect: ['248px', '482px', '600px', '523px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"efesondaj_anasayfa4.jpg",'0px','0px']
                        },
                        {
                            id: 'aciklama1',
                            display: 'none',
                            type: 'text',
                            rect: ['61px', '277px', '954px', '191px', 'auto', 'auto'],
                            opacity: 0,
                            text: "İzmir ve çevresinde sondaj ve su sayacı işlemleri yapan EFESONDAJ firması adına tasarladığım ve kodladığım efesondaj.com.tr sitesini yukarıdaki linkten daha ayrıntılı inceleyebilirsiniz.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'wwwefesondajcomtr',
                            display: 'none',
                            type: 'text',
                            rect: ['75px', '185px', '940px', '85px', 'auto', 'auto'],
                            opacity: 0,
                            text: "WWW.EFESONDAJ.COM.TR",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [44, "px"], "rgba(0,0,0,1)", "800", "none", "", "break-word", "normal"]
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
                    duration: 1640,
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
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${efesondaj_anasayfa4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            750,
                            0,
                            "linear",
                            "${efesondaj_anasayfa4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama2}",
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
                            "eid135",
                            "display",
                            0,
                            0,
                            "linear",
                            "${wwwefesondajcomtr}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            750,
                            0,
                            "linear",
                            "${wwwefesondajcomtr}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${efesondaj_anasayfa4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${efesondaj_urun2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            750,
                            0,
                            "linear",
                            "${efesondaj_urun2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "opacity",
                            750,
                            121,
                            "linear",
                            "${wwwefesondajcomtr}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid147",
                            "opacity",
                            750,
                            321,
                            "linear",
                            "${aciklama1}",
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
                            "eid149",
                            "opacity",
                            750,
                            685,
                            "linear",
                            "${aciklama2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "opacity",
                            750,
                            890,
                            "linear",
                            "${efesondaj_urun2}",
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("web_efesondaj_edgeActions.js");
})("EDGE-5742815");
