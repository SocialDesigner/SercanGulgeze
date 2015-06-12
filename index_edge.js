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
                            id: 'sercangulgeze2',
                            type: 'image',
                            rect: ['42px', '766px', '1000px', '388px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"sercangulgeze2.png",'0px','0px']
                        },
                        {
                            id: 'sitesercan',
                            type: 'image',
                            rect: ['-2px', '0px', '1084px', '143px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sitesercan.png",'0px','0px']
                        },
                        {
                            id: 'sitepiton2',
                            type: 'image',
                            rect: ['3px', '1777px', '1083px', '143px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sitepiton2.png",'0px','0px']
                        },
                        {
                            id: 'yayinlarim2',
                            type: 'image',
                            rect: ['355px', '823px', '370px', '274px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"yayinlarim2.png",'0px','0px']
                        },
                        {
                            id: 'referanslar2',
                            type: 'image',
                            rect: ['355px', '823px', '370px', '274px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"referanslar2.png",'0px','0px']
                        },
                        {
                            id: 'projelerim2',
                            type: 'image',
                            rect: ['355px', '823px', '370px', '274px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"projelerim2.png",'0px','0px']
                        },
                        {
                            id: 'hakkimda2',
                            type: 'image',
                            rect: ['355px', '823px', '370px', '274px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"hakkimda2.png",'0px','0px']
                        },
                        {
                            id: 'iletisim4',
                            type: 'image',
                            rect: ['359px', '1241px', '370px', '274px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"iletisim4.png",'0px','0px']
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
                    duration: 1750,
                    autoPlay: true,
                    data: [
                        [
                            "eid61",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${referanslar2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "location",
                            1000,
                            750,
                            "linear",
                            "${referanslar2}",
                            [[540.34, 960, 0, 0, 0, 0,0],[816.67, 569.67, 0, 0, 0, 0,478.24]]
                        ],
                        [
                            "eid68",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${iletisim4}",
                            '1241px',
                            '1241px'
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
                            "eid38",
                            "location",
                            1000,
                            750,
                            "linear",
                            "${projelerim2}",
                            [[540.34, 960, 0, 0, 0, 0,0],[269.99, 989.67, 0, 0, 0, 0,271.97]]
                        ],
                        [
                            "eid62",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${projelerim2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "opacity",
                            1665,
                            85,
                            "linear",
                            "${iletisim4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${hakkimda2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "location",
                            1000,
                            750,
                            "linear",
                            "${hakkimda2}",
                            [[540.34, 960, 0, 0, 0, 0,0],[270, 570, 0, 0, 0, 0,474.54]]
                        ],
                        [
                            "eid67",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${iletisim4}",
                            '359px',
                            '359px'
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
                            "eid32",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${sercangulgeze2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid60",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${yayinlarim2}",
                            '0',
                            '1'
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
                            "eid63",
                            "display",
                            0,
                            0,
                            "linear",
                            "${iletisim4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            1665,
                            0,
                            "linear",
                            "${iletisim4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${iletisim4}",
                            'block',
                            'block'
                        ],
                        [
                            "eid42",
                            "location",
                            1000,
                            750,
                            "linear",
                            "${yayinlarim2}",
                            [[540.34, 960, 0, 0, 0, 0,0],[815.99, 989.67, 0, 0, 0, 0,277.24]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-5742815");
