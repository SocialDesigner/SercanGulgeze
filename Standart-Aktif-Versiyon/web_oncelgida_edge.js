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
                            id: 'siteadres',
                            display: 'none',
                            type: 'text',
                            rect: ['169px', '204px', '729px', '110px', 'auto', 'auto'],
                            opacity: 0,
                            text: "WWW.ÖNCELGIDALTD.COM",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [44, "px"], "rgba(0,0,0,1)", "800", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'aciklama1',
                            display: 'none',
                            type: 'text',
                            rect: ['40px', '300px', '1000px', '177px', 'auto', 'auto'],
                            opacity: 0,
                            text: "İzmir ve çevresinde gıda toptancılığı yapan ÖNCEL GIDA LTD. firması adına tasarladığım ve kodladığım oncelgidaltd.com sitesini yukarıdaki linkten daha ayrıntılı inceleyebilirsiniz.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'oncelgidaltd1',
                            display: 'none',
                            type: 'image',
                            rect: ['241px', '477px', '617px', '476px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"oncelgidaltd1.png",'0px','0px']
                        },
                        {
                            id: 'aciklama2',
                            display: 'none',
                            type: 'text',
                            rect: ['27px', '1017px', '1033px', '233px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Sitenin kodlama ve tasarım işlemlerini Adobe firmasının Dreamweaver programı ile \"html5\", \"css3\" ve \"javascript\" kullanarak gerçekleştirdim ve sitenin anasayfası için grafik tabanlı bir slider kullanarak giriş sayfasında güzel bir tasarım yakalamayı hedefledim.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'oncelgidaltd2',
                            display: 'none',
                            type: 'image',
                            rect: ['241px', '1223px', '616px', '476px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"oncelgidaltd2.png",'0px','0px']
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
                            "eid141",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${oncelgidaltd2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${siteadres}",
                            '169px',
                            '169px'
                        ],
                        [
                            "eid158",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${aciklama2}",
                            '1033px',
                            '1033px'
                        ],
                        [
                            "eid144",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${siteadres}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid157",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${aciklama2}",
                            '27px',
                            '27px'
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
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
                            "eid81",
                            "location",
                            0,
                            750,
                            "linear",
                            "${sitesercan}",
                            [[550, 858.17, 0, 0, 0, 0,0],[550, 71.84, 0, 0, 0, 0,786.33]]
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
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${siteadres}",
                            '729px',
                            '729px'
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
                            "eid143",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama2}",
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
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oncelgidaltd1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            750,
                            0,
                            "linear",
                            "${oncelgidaltd1}",
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
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${siteadres}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            750,
                            0,
                            "linear",
                            "${siteadres}",
                            'none',
                            'block'
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
                            "eid83",
                            "location",
                            0,
                            750,
                            "linear",
                            "${sitepiton2}",
                            [[550.5, 978.5, 0, 0, 0, 0,0],[540.5, 1848.5, 0, 0, 0, 0,870.06]]
                        ],
                        [
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oncelgidaltd2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            750,
                            0,
                            "linear",
                            "${oncelgidaltd2}",
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
                            "eid142",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${oncelgidaltd1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("web_oncelgida_edgeActions.js");
})("EDGE-5742815");
