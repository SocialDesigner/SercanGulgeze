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
                            id: 'matrix_of_relations',
                            display: 'none',
                            type: 'image',
                            rect: ['282px', '743px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"matrix_of_relations.png",'0px','0px']
                        },
                        {
                            id: 'distance_converter',
                            display: 'none',
                            type: 'image',
                            rect: ['282px', '743px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"distance_converter.png",'0px','0px']
                        },
                        {
                            id: 'degree_converter',
                            display: 'none',
                            type: 'image',
                            rect: ['282px', '743px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"degree_converter.png",'0px','0px']
                        },
                        {
                            id: 'day_finder',
                            display: 'none',
                            type: 'image',
                            rect: ['282px', '743px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"day_finder.png",'0px','0px']
                        },
                        {
                            id: 'air_crew_levels',
                            display: 'none',
                            type: 'image',
                            rect: ['282px', '743px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"air_crew_levels.png",'0px','0px']
                        },
                        {
                            id: 'snake_game',
                            display: 'none',
                            type: 'image',
                            rect: ['282px', '743px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"snake_game.png",'0px','0px']
                        },
                        {
                            id: 'parking_automation',
                            display: 'none',
                            type: 'image',
                            rect: ['282px', '743px', '515px', '370px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"parking_automation.png",'0px','0px']
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
                            "eid127",
                            "location",
                            750,
                            250,
                            "linear",
                            "${parking_automation}",
                            [[539.5, 928, 0, 0, 0, 0,0],[354.52, 675.27, -202.33, -468.5, -190.3, -440.65,315.31],[282.5, 339, 0, 0, 0, 0,660.9]]
                        ],
                        [
                            "eid129",
                            "location",
                            750,
                            250,
                            "linear",
                            "${snake_game}",
                            [[539.5, 928, 0, 0, 0, 0,0],[722.7, 737.19, 190.52, -346.63, 185.92, -338.26,266.74],[795.5, 525, 0, 0, 0, 0,492.26]]
                        ],
                        [
                            "eid133",
                            "location",
                            750,
                            250,
                            "linear",
                            "${day_finder}",
                            [[539.5, 928, 0, 0, 0, 0,0],[677.92, 953.95, 190.69, -16.78, 184.2, -16.21,141.88],[794.5, 953, 0, 0, 0, 0,258.57]]
                        ],
                        [
                            "eid141",
                            "display",
                            0,
                            0,
                            "linear",
                            "${distance_converter}",
                            'none',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            750,
                            0,
                            "linear",
                            "${distance_converter}",
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
                            "eid137",
                            "location",
                            750,
                            250,
                            "linear",
                            "${distance_converter}",
                            [[539.5, 928, 0, 0, 0, 0,0],[614.78, 1198.35, 157.01, 238.03, 210.14, 318.57,283.5],[794.5, 1375, 0, 0, 0, 0,536.37]]
                        ],
                        [
                            "eid144",
                            "display",
                            0,
                            0,
                            "linear",
                            "${air_crew_levels}",
                            'none',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            750,
                            0,
                            "linear",
                            "${air_crew_levels}",
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
                            "eid145",
                            "display",
                            0,
                            0,
                            "linear",
                            "${snake_game}",
                            'none',
                            'none'
                        ],
                        [
                            "eid152",
                            "display",
                            750,
                            0,
                            "linear",
                            "${snake_game}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            0,
                            0,
                            "linear",
                            "${parking_automation}",
                            'none',
                            'none'
                        ],
                        [
                            "eid153",
                            "display",
                            750,
                            0,
                            "linear",
                            "${parking_automation}",
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
                            "eid139",
                            "location",
                            750,
                            250,
                            "linear",
                            "${matrix_of_relations}",
                            [[539.5, 928, 0, 0, 0, 0,0],[313.65, 1256.8, -168.75, 399.32, -217.9, 515.65,400.75],[282.5, 1566, 0, 0, 0, 0,714.6]]
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
                            "eid131",
                            "location",
                            750,
                            250,
                            "linear",
                            "${air_crew_levels}",
                            [[539.5, 928, 0, 0, 0, 0,0],[358.83, 863, -189.96, -149.84, -202.63, -159.83,194.06],[282.5, 739, 0, 0, 0, 0,342.4]]
                        ],
                        [
                            "eid140",
                            "display",
                            0,
                            0,
                            "linear",
                            "${matrix_of_relations}",
                            'none',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            750,
                            0,
                            "linear",
                            "${matrix_of_relations}",
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
                            "eid143",
                            "display",
                            0,
                            0,
                            "linear",
                            "${day_finder}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            750,
                            0,
                            "linear",
                            "${day_finder}",
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
                            "eid142",
                            "display",
                            0,
                            0,
                            "linear",
                            "${degree_converter}",
                            'none',
                            'none'
                        ],
                        [
                            "eid149",
                            "display",
                            750,
                            0,
                            "linear",
                            "${degree_converter}",
                            'none',
                            'block'
                        ],
                        [
                            "eid135",
                            "location",
                            750,
                            250,
                            "linear",
                            "${degree_converter}",
                            [[539.5, 928, 0, 0, 0, 0,0],[430.22, 1097.16, -184.23, 145.32, -207.4, 163.6,203.53],[282.5, 1153, 0, 0, 0, 0,363.3]]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("projelerim_yazilim_gelistirme_edgeActions.js");
})("EDGE-5742815");
