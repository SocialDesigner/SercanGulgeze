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
                            id: 'yazilim',
                            display: 'none',
                            type: 'image',
                            rect: ['266px', '726px', '549px', '404px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"yazilim.png",'0px','0px']
                        },
                        {
                            id: 'web_tasarim',
                            display: 'none',
                            type: 'image',
                            rect: ['266px', '726px', '549px', '404px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"web_tasarim.png",'0px','0px']
                        },
                        {
                            id: 'mobil',
                            display: 'none',
                            type: 'image',
                            rect: ['266px', '726px', '549px', '404px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mobil.png",'0px','0px']
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
                    duration: 1250,
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
                            "eid130",
                            "location",
                            1000,
                            250,
                            "linear",
                            "${mobil}",
                            [[540.5, 928.34, 0, 0, 0, 0,0],[372.14, 801.43, -169.62, -296.43, -143.12, -250.13,214.42],[370.5, 488.01, 0, 0, 0, 0,533.61]]
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
                            "eid135",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mobil}",
                            'none',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            750,
                            0,
                            "linear",
                            "${mobil}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${mobil}",
                            'block',
                            'block'
                        ],
                        [
                            "eid138",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${mobil}",
                            'block',
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
                            "eid132",
                            "location",
                            1000,
                            250,
                            "linear",
                            "${web_tasarim}",
                            [[540.5, 928, 0, 0, 0, 0,0],[683.85, 930.45, 115.36, 64.34, 141.88, 79.12,145.89],[753.83, 951.34, 0, 0, 0, 0,219.57]]
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
                            "eid136",
                            "display",
                            0,
                            0,
                            "linear",
                            "${web_tasarim}",
                            'none',
                            'none'
                        ],
                        [
                            "eid145",
                            "display",
                            750,
                            0,
                            "linear",
                            "${web_tasarim}",
                            'none',
                            'block'
                        ],
                        [
                            "eid142",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${web_tasarim}",
                            'block',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${web_tasarim}",
                            'block',
                            'block'
                        ],
                        [
                            "eid134",
                            "location",
                            1000,
                            250,
                            "linear",
                            "${yazilim}",
                            [[540.5, 928, 0, 0, 0, 0,0],[562.74, 1282.13, -95.39, 412.55, -104.22, 450.76,357.79],[447.17, 1431.34, 0, 0, 0, 0,556.29]]
                        ],
                        [
                            "eid137",
                            "display",
                            0,
                            0,
                            "linear",
                            "${yazilim}",
                            'none',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            750,
                            0,
                            "linear",
                            "${yazilim}",
                            'none',
                            'block'
                        ],
                        [
                            "eid143",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${yazilim}",
                            'block',
                            'block'
                        ],
                        [
                            "eid140",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${yazilim}",
                            'block',
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("projelerim_edgeActions.js");
})("EDGE-5742815");
