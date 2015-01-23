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
                            id: 'astron',
                            display: 'none',
                            type: 'image',
                            rect: ['48px', '318px', '150px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"astron.png",'0px','0px']
                        },
                        {
                            id: 'tuncay_ercan',
                            display: 'none',
                            type: 'image',
                            rect: ['879px', '1374px', '150px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"tuncay_ercan.png",'0px','0px']
                        },
                        {
                            id: 'tohid_ahmed_rana',
                            display: 'none',
                            type: 'image',
                            rect: ['48px', '1024px', '150px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"tohid_ahmed_rana.png",'0px','0px']
                        },
                        {
                            id: 'samsun_mustafa_basarici',
                            display: 'none',
                            type: 'image',
                            rect: ['48px', '674px', '150px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"samsun_mustafa_basarici.png",'0px','0px']
                        },
                        {
                            id: 'mustafa_cinar',
                            display: 'none',
                            type: 'image',
                            rect: ['879px', '1024px', '150px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"mustafa_cinar.png",'0px','0px']
                        },
                        {
                            id: 'murat_komesli',
                            display: 'none',
                            type: 'image',
                            rect: ['879px', '318px', '150px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"murat_komesli.png",'0px','0px']
                        },
                        {
                            id: 'korhan_karabulut',
                            display: 'none',
                            type: 'image',
                            rect: ['48px', '1374px', '150px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"korhan_karabulut.png",'0px','0px']
                        },
                        {
                            id: 'astron1',
                            display: 'none',
                            type: 'image',
                            rect: ['879px', '674px', '150px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"astron1.png",'0px','0px']
                        },
                        {
                            id: 'ferudun_text',
                            display: 'none',
                            type: 'text',
                            rect: ['219px', '318px', '302px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            text: "FERUDUN ATAKAN<br>Astron Bilgi İşlem Ltd. Şti. <br>0 232 355 10 00<br>ferudun.atakan<br>@astron.yasar.com.tr<br>http://astron.ws ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'samsun_text',
                            display: 'none',
                            type: 'text',
                            rect: ['219px', '674px', '302px', '197px', 'auto', 'auto'],
                            opacity: 0,
                            text: "MUSTAFA SAMSUN BAŞARICI<br>Yaşar Üniversitesi<br>0 232 411 53 47<br>samsun.basarici<br>@yasar.edu.tr<br>http://myo.yasar.edu.tr",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'murat_text',
                            display: 'none',
                            type: 'text',
                            rect: ['548px', '318px', '320px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            text: "MURAT KOMESLİ<br>Yaşar Üniversitesi<br>0 232 411 50 00<br>murat.komesli<br>@yasar.edu.tr<br>http://muhfak@yasar.edu.tr<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'emrullah_text',
                            display: 'none',
                            type: 'text',
                            rect: ['550px', '674px', '302px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            text: "EMRULLAH ÖZDEMİR<br>Astron Bilgi İşlem Ltd. Şti. <br>0 232 355 10 00<br>emrullah.ozdemir<br>@astron.yasar.com.tr<br>http://astron.ws ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'tohid_text',
                            display: 'none',
                            type: 'text',
                            rect: ['219px', '1024px', '302px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            text: "TOHİD AHMED RANA<br>Yaşar Üniversitesi<br>0 232 411 53 48<br>ahmed.rana<br>@yasar.edu.tr<br>http://myo.yasar.edu.tr ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'korhan_text',
                            display: 'none',
                            type: 'text',
                            rect: ['219px', '1374px', '302px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            text: "KORHAN KARABULUT<br>Yaşar Üniversitesi<br>0 232 411 52 91<br>korhan.karabulut<br>@yasar.edu.tr<br>http://muhfak.yasar.edu.tr ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'tuncay_text',
                            display: 'none',
                            type: 'text',
                            rect: ['550px', '1374px', '302px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            text: "TUNCAY ERCAN<br>Yaşar Üniversitesi<br>0 232 411 52 87<br>tuncay.ercan<br>@yasar.edu.tr<br>http://tercan.yasar.edu.tr ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'mustafa_text',
                            display: 'none',
                            type: 'text',
                            rect: ['559px', '1024px', '302px', '175px', 'auto', 'auto'],
                            opacity: 0,
                            text: "MUSTAFA ÇINAR<br>Yaşar Üniversitesi<br>0 232 411 54 92<br>mustafa.cinar<br>@yasar.edu.tr<br>http://muhfak.yasar.edu.tr ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
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
                    duration: 820,
                    autoPlay: true,
                    data: [
                        [
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${korhan_karabulut}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            750,
                            0,
                            "linear",
                            "${korhan_karabulut}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tohid_ahmed_rana}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            750,
                            0,
                            "linear",
                            "${tohid_ahmed_rana}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${tuncay_ercan}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            750,
                            0,
                            "linear",
                            "${tuncay_ercan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid152",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${astron}",
                            '0',
                            '1'
                        ],
                        [
                            "eid175",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${murat_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mustafa_cinar}",
                            'none',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            750,
                            0,
                            "linear",
                            "${mustafa_cinar}",
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
                            "eid160",
                            "display",
                            750,
                            0,
                            "linear",
                            "${tuncay_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${astron}",
                            'none',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            750,
                            0,
                            "linear",
                            "${astron}",
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
                            "eid176",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${mustafa_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "top",
                            820,
                            0,
                            "linear",
                            "${astron1}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid161",
                            "display",
                            750,
                            0,
                            "linear",
                            "${korhan_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid178",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${korhan_text}",
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
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${korhan_karabulut}",
                            '0',
                            '1'
                        ],
                        [
                            "eid166",
                            "display",
                            750,
                            0,
                            "linear",
                            "${ferudun_text}",
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
                            "eid182",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${emrullah_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${murat_komesli}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            750,
                            0,
                            "linear",
                            "${murat_komesli}",
                            'none',
                            'block'
                        ],
                        [
                            "eid181",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${tohid_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "display",
                            750,
                            0,
                            "linear",
                            "${mustafa_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid180",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${ferudun_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${murat_komesli}",
                            '0',
                            '1'
                        ],
                        [
                            "eid177",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${tuncay_text}",
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
                            "eid164",
                            "display",
                            750,
                            0,
                            "linear",
                            "${murat_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${tuncay_ercan}",
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
                            "eid163",
                            "display",
                            750,
                            0,
                            "linear",
                            "${emrullah_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${samsun_mustafa_basarici}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "display",
                            750,
                            0,
                            "linear",
                            "${tohid_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "display",
                            750,
                            0,
                            "linear",
                            "${samsun_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid179",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${samsun_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${mustafa_cinar}",
                            '0',
                            '1'
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
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${samsun_mustafa_basarici}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            750,
                            0,
                            "linear",
                            "${samsun_mustafa_basarici}",
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
                            "eid150",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${tohid_ahmed_rana}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${astron1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            750,
                            0,
                            "linear",
                            "${astron1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "opacity",
                            750,
                            70,
                            "linear",
                            "${astron1}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("referanslarim_edgeActions.js");
})("EDGE-5742815");
