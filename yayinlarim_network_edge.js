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
                            id: 'lan',
                            display: 'none',
                            type: 'text',
                            rect: ['91px', '1027px', '920px', '67px', 'auto', 'auto'],
                            opacity: 0,
                            text: "LAN (LOCAL AREA NETWORK-YEREL AĞ)",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [44, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
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
                            id: 'network-nedir',
                            display: 'none',
                            type: 'text',
                            rect: ['307px', '174px', '486px', '67px', 'auto', 'auto'],
                            opacity: 0,
                            text: "NETWORK NEDİR?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [44, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'network-nedir-icerik',
                            display: 'none',
                            type: 'text',
                            rect: ['133px', '248px', '833px', '333px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Türkçesi “Ağ” olarak çevrilebilecek olan network’ü tam olarak şu kelide çevirebiliriz;<br>“Bilgisayarların iletişim hatları aracılığıyla veri aktarımının sağlandığı sistem, bilgisayar ağı”<br>Network birbirine kablolarla bağlanmış server, printer, pc, modem gibi birçok haberleşme ekipmanının en ekonomik ve verimli yoldan kullanılmasıdır. ",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'network_nedir',
                            display: 'none',
                            type: 'image',
                            rect: ['99px', '567px', '905px', '423px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"network_nedir.png",'0px','0px']
                        },
                        {
                            id: 'lan-icerik',
                            display: 'none',
                            type: 'text',
                            rect: ['162px', '1104px', '761px', '170px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Aynı alanda veya bir bina içerisinde bilgisayarları birbirlerine bağlar, ağdaki cihazların ortak kullanılmasını ve veri paylaşılmasını sağlar.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'neden-network',
                            display: 'none',
                            type: 'text',
                            rect: ['77px', '1253px', '946px', '67px', 'auto', 'auto'],
                            opacity: 0,
                            text: "NEDEN NETWORK'E GEREKSİNİM DUYULUR?",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [40, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'neden-network-icerik',
                            display: 'none',
                            type: 'text',
                            rect: ['97px', '1314px', '505px', '410px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Network zaman ve para kazancı sağlar. Başarı için işletmenin sadece ofis içinde değil, tüm dünya ile haberleşmesi gerekir. Paylaşım söz konusu olduğundan donanım tüm personel, tarafından kullanılabilir, her bir birey için extra printer, modem, disk ünitesi gerekmez. Internet erişimi de bir ağ üzerinde paylaştırılabilir.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'yayinlar_devam',
                            display: 'none',
                            type: 'image',
                            rect: ['655px', '1400px', '370px', '274px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"yayinlar_devam.png",'0px','0px']
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
                            "eid164",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${network-nedir}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${neden-network}",
                            '0',
                            '1'
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
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${yayinlar_devam}",
                            'none',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            750,
                            0,
                            "linear",
                            "${yayinlar_devam}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${neden-network-icerik}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${lan-icerik}",
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
                            "eid165",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${network-nedir-icerik}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${network-nedir-icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            750,
                            0,
                            "linear",
                            "${network-nedir-icerik}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${network-nedir}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            750,
                            0,
                            "linear",
                            "${network-nedir}",
                            'none',
                            'block'
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${network_nedir}",
                            'none',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            750,
                            0,
                            "linear",
                            "${network_nedir}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lan-icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            750,
                            0,
                            "linear",
                            "${lan-icerik}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${lan}",
                            '0',
                            '1'
                        ],
                        [
                            "eid168",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${neden-network-icerik}",
                            '1314px',
                            '1314px'
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${neden-network-icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            750,
                            0,
                            "linear",
                            "${neden-network-icerik}",
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
                            "eid167",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${neden-network}",
                            '1253px',
                            '1253px'
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
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${neden-network}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            750,
                            0,
                            "linear",
                            "${neden-network}",
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
                            "eid83",
                            "location",
                            0,
                            750,
                            "linear",
                            "${sitepiton2}",
                            [[550.5, 978.5, 0, 0, 0, 0,0],[540.5, 1848.5, 0, 0, 0, 0,870.06]]
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
                            "eid161",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${yayinlar_devam}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${lan}",
                            'none',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            750,
                            0,
                            "linear",
                            "${lan}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${network_nedir}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("yayinlarim_network_edgeActions.js");
})("EDGE-5742815");
