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
                            rect: ['48px', '195px', '967px', '76px', 'auto', 'auto'],
                            opacity: 0,
                            text: "DEGREE CONVERTER (JAVA)",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [44, "px"], "rgba(0,0,0,1)", "800", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'aciklama',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '278px', '990px', '320px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Java SE7 ile yazmış olduğum \"Degree Converter\" programı java'nın kendi içinde bulunan GUI arayüz tasarım aracı ile geliştirilmiş bir sıcaklık derecelerini birbirine çeviren programdır. Programda button altı kod kullanmak yerine daha profesyonel olan sınıf ayırma methodu kullandım, ayrıca programın her aşaması Java bünyesindeki JUNIT TEST ile test edilmektedir. Dökümantasyon aracı olarak JAVADOC kullanılmıştır. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'degree_converter_java_test',
                            display: 'none',
                            type: 'image',
                            rect: ['288px', '1192px', '760px', '507px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"degree_converter_java_test.png",'0px','0px']
                        },
                        {
                            id: 'degree_converter_java_gui',
                            display: 'none',
                            type: 'image',
                            rect: ['43px', '625px', '761px', '507px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"degree_converter_java_gui.png",'0px','0px']
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
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama}",
                            'none',
                            'none'
                        ],
                        [
                            "eid132",
                            "display",
                            790,
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
                            "eid144",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${degree_converter_java_gui}",
                            '625px',
                            '625px'
                        ],
                        [
                            "eid141",
                            "opacity",
                            790,
                            210,
                            "linear",
                            "${aciklama}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            790,
                            210,
                            "linear",
                            "${degree_converter_java_gui}",
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
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${baslik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            790,
                            0,
                            "linear",
                            "${baslik}",
                            'none',
                            'block'
                        ],
                        [
                            "eid138",
                            "opacity",
                            790,
                            210,
                            "linear",
                            "${baslik}",
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
                            "${degree_converter_java_gui}",
                            'none',
                            'none'
                        ],
                        [
                            "eid130",
                            "display",
                            790,
                            0,
                            "linear",
                            "${degree_converter_java_gui}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${degree_converter_java_test}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            790,
                            0,
                            "linear",
                            "${degree_converter_java_test}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${degree_converter_java_test}",
                            '1192px',
                            '1192px'
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
                            "eid139",
                            "opacity",
                            790,
                            210,
                            "linear",
                            "${degree_converter_java_test}",
                            '0',
                            '1'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("yazilim_degreeconverter_edgeActions.js");
})("EDGE-5742815");
