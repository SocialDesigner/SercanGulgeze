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
                            id: 'yazilimsal_tasarim',
                            display: 'none',
                            type: 'image',
                            rect: ['265px', '758px', '549px', '404px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"yazilimsal_tasarim.png",'0px','0px']
                        },
                        {
                            id: 'yazilim',
                            display: 'none',
                            type: 'image',
                            rect: ['265px', '758px', '549px', '404px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"yazilim.png",'0px','0px']
                        },
                        {
                            id: 'web_programlama',
                            display: 'none',
                            type: 'image',
                            rect: ['265px', '758px', '549px', '404px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"web_programlama.png",'0px','0px']
                        },
                        {
                            id: 'network',
                            display: 'none',
                            type: 'image',
                            rect: ['265px', '758px', '549px', '404px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"network.png",'0px','0px']
                        },
                        {
                            id: 'mobil',
                            display: 'none',
                            type: 'image',
                            rect: ['265px', '758px', '549px', '404px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mobil.png",'0px','0px']
                        },
                        {
                            id: 'database',
                            display: 'none',
                            type: 'image',
                            rect: ['258px', '758px', '549px', '404px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"database.png",'0px','0px']
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
                            "eid130",
                            "location",
                            750,
                            250,
                            "linear",
                            "${mobil}",
                            [[539.5, 960, 0, 0, 0, 0,0],[726.83, 839.85, 158.7, -200.7, 179.96, -227.6,224.92],[753.5, 576.67, 0, 0, 0, 0,494.24]]
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${yazilimsal_tasarim}",
                            'none',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            750,
                            0,
                            "linear",
                            "${yazilimsal_tasarim}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${yazilimsal_tasarim}",
                            'block',
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
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mobil}",
                            'none',
                            'none'
                        ],
                        [
                            "eid158",
                            "display",
                            750,
                            0,
                            "linear",
                            "${mobil}",
                            'none',
                            'block'
                        ],
                        [
                            "eid152",
                            "display",
                            1000,
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
                            "eid138",
                            "location",
                            750,
                            250,
                            "linear",
                            "${yazilimsal_tasarim}",
                            [[539.5, 960, 0, 0, 0, 0,0],[704.87, 1302.92, 180.32, 584.12, 170.4, 551.97,381.86],[776.83, 1554.67, 0, 0, 0, 0,643.73]]
                        ],
                        [
                            "eid134",
                            "location",
                            750,
                            250,
                            "linear",
                            "${web_programlama}",
                            [[539.5, 960, 0, 0, 0, 0,0],[634.65, 1122.66, 157.84, 171.51, 181.06, 196.75,189.45],[753.51, 1076.67, 0, 0, 0, 0,338.11]]
                        ],
                        [
                            "eid139",
                            "display",
                            0,
                            0,
                            "linear",
                            "${database}",
                            'none',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            750,
                            0,
                            "linear",
                            "${database}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${database}",
                            'block',
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
                            "eid136",
                            "location",
                            750,
                            250,
                            "linear",
                            "${yazilim}",
                            [[539.5, 960, 0, 0, 0, 0,0],[349.55, 1178.53, -173.73, 397.97, -166.62, 381.69,292.68],[300.51, 1330, 0, 0, 0, 0,452.86]]
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
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${network}",
                            'none',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            750,
                            0,
                            "linear",
                            "${network}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${network}",
                            'block',
                            'block'
                        ],
                        [
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${yazilim}",
                            'none',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            750,
                            0,
                            "linear",
                            "${yazilim}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${yazilim}",
                            'block',
                            'block'
                        ],
                        [
                            "eid142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${web_programlama}",
                            'none',
                            'none'
                        ],
                        [
                            "eid160",
                            "display",
                            750,
                            0,
                            "linear",
                            "${web_programlama}",
                            'none',
                            'block'
                        ],
                        [
                            "eid154",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${web_programlama}",
                            'block',
                            'block'
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
                            "location",
                            750,
                            250,
                            "linear",
                            "${network}",
                            [[539.5, 960, 0, 0, 0, 0,0],[424.6, 978.23, -168.84, -12.4, -171.64, -12.6,117.11],[299.51, 827, 0, 0, 0, 0,318.89]]
                        ],
                        [
                            "eid128",
                            "location",
                            750,
                            250,
                            "linear",
                            "${database}",
                            [[532.83, 960, 0, 0, 0, 0,0],[375.72, 711.1, -168.25, -427.62, -162.14, -412.09,295.7],[299.17, 333.33, 0, 0, 0, 0,682.15]]
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
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("yayinlarim_edgeActions.js");
})("EDGE-5742815");
