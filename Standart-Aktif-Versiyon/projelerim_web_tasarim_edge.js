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
                            id: 'piton_bilgisayar',
                            display: 'none',
                            type: 'image',
                            rect: ['292px', '775px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piton_bilgisayar.png",'0px','0px']
                        },
                        {
                            id: 'oncel_gida',
                            display: 'none',
                            type: 'image',
                            rect: ['292px', '775px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"oncel_gida.png",'0px','0px']
                        },
                        {
                            id: 'muzaffer_ozturk_boya',
                            display: 'none',
                            type: 'image',
                            rect: ['292px', '775px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"muzaffer_ozturk_boya.png",'0px','0px']
                        },
                        {
                            id: 'gaziemir_isi',
                            display: 'none',
                            type: 'image',
                            rect: ['292px', '775px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"gaziemir_isi.png",'0px','0px']
                        },
                        {
                            id: 'efesondaj',
                            display: 'none',
                            type: 'image',
                            rect: ['292px', '775px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"efesondaj.png",'0px','0px']
                        },
                        {
                            id: 'sercan_gulgeze',
                            display: 'none',
                            type: 'image',
                            rect: ['292px', '775px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sercan_gulgeze.png",'0px','0px']
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
                            "eid137",
                            "location",
                            750,
                            250,
                            "linear",
                            "${gaziemir_isi}",
                            [[549.5, 960, 0, 0, 0, 0,0],[718.4, 1021.51, 160.6, 101.96, 197.13, 125.15,180.58],[785.51, 1026.33, 0, 0, 0, 0,255.17]]
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
                            "eid149",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sercan_gulgeze}",
                            'none',
                            'none'
                        ],
                        [
                            "eid155",
                            "display",
                            750,
                            0,
                            "linear",
                            "${sercan_gulgeze}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            0,
                            0,
                            "linear",
                            "${efesondaj}",
                            'none',
                            'none'
                        ],
                        [
                            "eid154",
                            "display",
                            750,
                            0,
                            "linear",
                            "${efesondaj}",
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
                            "eid147",
                            "display",
                            0,
                            0,
                            "linear",
                            "${gaziemir_isi}",
                            'none',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            750,
                            0,
                            "linear",
                            "${gaziemir_isi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "location",
                            750,
                            250,
                            "linear",
                            "${muzaffer_ozturk_boya}",
                            [[549.5, 960, 0, 0, 0, 0,0],[401.46, 994.75, -179.17, -36.35, -165.26, -33.53,154.07],[314.51, 826.67, 0, 0, 0, 0,350.86]]
                        ],
                        [
                            "eid141",
                            "location",
                            750,
                            250,
                            "linear",
                            "${oncel_gida}",
                            [[549.5, 960, 0, 0, 0, 0,0],[725.84, 876.11, 187.93, -194.95, 172.95, -179.41,197.62],[785.51, 623.33, 0, 0, 0, 0,462.08]]
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
                            "eid143",
                            "location",
                            750,
                            250,
                            "linear",
                            "${piton_bilgisayar}",
                            [[549.5, 960, 0, 0, 0, 0,0],[375.75, 741.64, -151.84, -297.08, -189.05, -369.88,280.48],[314.51, 423.33, 0, 0, 0, 0,606.32]]
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
                            "eid135",
                            "location",
                            750,
                            250,
                            "linear",
                            "${efesondaj}",
                            [[549.5, 960, 0, 0, 0, 0,0],[371.2, 1137.7, -161.98, 260.58, -181.87, 292.57,253.18],[314.51, 1243.33, 0, 0, 0, 0,373.31]]
                        ],
                        [
                            "eid145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${oncel_gida}",
                            'none',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            750,
                            0,
                            "linear",
                            "${oncel_gida}",
                            'none',
                            'block'
                        ],
                        [
                            "eid133",
                            "location",
                            750,
                            250,
                            "linear",
                            "${sercan_gulgeze}",
                            [[549.5, 960, 0, 0, 0, 0,0],[607.49, 1265.05, 192.36, 460.27, 167.41, 400.57,312.04],[785.51, 1450, 0, 0, 0, 0,576.17]]
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
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${piton_bilgisayar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            750,
                            0,
                            "linear",
                            "${piton_bilgisayar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${muzaffer_ozturk_boya}",
                            'none',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            750,
                            0,
                            "linear",
                            "${muzaffer_ozturk_boya}",
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("projelerim_web_tasarim_edgeActions.js");
})("EDGE-5742815");
