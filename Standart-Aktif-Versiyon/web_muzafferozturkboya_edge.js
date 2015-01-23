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
                            rect: ['48px', '198px', '992px', '71px', 'auto', 'auto'],
                            opacity: 0,
                            text: "WWW.MUZAFFERÖZTÜRKBOYA.COM",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [44, "px"], "rgba(0,0,0,1)", "800", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'aciklama1',
                            display: 'none',
                            type: 'text',
                            rect: ['44px', '285px', '1000px', '143px', 'auto', 'auto'],
                            opacity: 0,
                            text: "İzmir bölgesinde dyo bayisi olarak görev yapan muzaffer öztürk boya firması için tasarladığım ve kodladığım muzafferozturkboya.com sitesini yukarıdaki linkten daha ayrıntılı inceleyebilirsiniz.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'muzafferozturkboya1',
                            display: 'none',
                            type: 'image',
                            rect: ['181px', '481px', '738px', '517px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"muzafferozturkboya1.png",'0px','0px']
                        },
                        {
                            id: 'aciklama2',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '1047px', '992px', '143px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Sitenin kodlama ve tasarım işlemlerini Adobe firmasının Dreamweaver programı ile \"html5\", \"css3\" ve \"javascript\" kullanarak gerçekleştirdim.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'muzafferozturkboya3',
                            display: 'none',
                            type: 'image',
                            rect: ['179px', '1222px', '738px', '517px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"muzafferozturkboya3.png",'0px','0px']
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
                            "${muzafferozturkboya1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${siteadres}",
                            '198px',
                            '198px'
                        ],
                        [
                            "eid156",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${siteadres}",
                            '48px',
                            '48px'
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
                            "eid161",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${aciklama1}",
                            '285px',
                            '285px'
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
                            "eid144",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama2}",
                            '0',
                            '1'
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
                            "eid153",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${muzafferozturkboya3}",
                            '1222px',
                            '1222px'
                        ],
                        [
                            "eid154",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${aciklama2}",
                            '1047px',
                            '1047px'
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
                            "${muzafferozturkboya1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid133",
                            "display",
                            750,
                            0,
                            "linear",
                            "${muzafferozturkboya1}",
                            'none',
                            'block'
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
                            "eid151",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${muzafferozturkboya1}",
                            '481px',
                            '481px'
                        ],
                        [
                            "eid143",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${muzafferozturkboya3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "width",
                            1000,
                            0,
                            "linear",
                            "${siteadres}",
                            '992px',
                            '992px'
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
                            "eid160",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${aciklama1}",
                            '44px',
                            '44px'
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
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${muzafferozturkboya3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            750,
                            0,
                            "linear",
                            "${muzafferozturkboya3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${siteadres}",
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
                            "eid142",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama1}",
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
                            "eid113",
                            "opacity",
                            187,
                            563,
                            "linear",
                            "${kalip}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("web_muzafferozturkboya_edgeActions.js");
})("EDGE-5742815");
