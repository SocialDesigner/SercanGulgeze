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
                            id: 'hakkimda_resmi',
                            display: 'none',
                            type: 'image',
                            rect: ['65px', '195px', '300px', '273px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"hakkimda_resmi.png",'0px','0px']
                        },
                        {
                            id: 'sercangulgeze2',
                            display: 'none',
                            type: 'image',
                            rect: ['412px', '200px', '606px', '262px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"sercangulgeze2.png",'0px','0px']
                        },
                        {
                            id: 'aciklama1',
                            display: 'none',
                            type: 'text',
                            rect: ['50px', '501px', '1000px', '303px', 'auto', 'auto'],
                            opacity: 0,
                            text: "<br>Üniversite eğitimimin ilk bölümü olan \"Bilgisayar Programcılığı\" bölümünü 2009-2012 yılları arasında Yaşar Üniversitesinde 3.35 not ortalaması ile bölüm üçüncüsü olarak tamamladım, ardından 2012 yılında kazandığım \"Yazılım Mühendisliği\" bölümüne aynı okul olan Yaşar Üniversitesinde devam etmekteyim. Bu süre zarfında Anadolu Üniversitesi Açık Öğretim fakültesinde \"İşletme (4 yıl)\" bölümünü bitirdim.<br><br>",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'aciklama2',
                            display: 'none',
                            type: 'text',
                            rect: ['50px', '809px', '998px', '180px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Yabancı dil bilgisi olarak; Yaşar Üniversitesi kapsamında \"Upper-Intermediate\" seviyesinde ki yeterlilik sınavında başarılı oldum, Irlanda-Dublin şehrinde ki \"Emerald Cultural Institute\" okulunda \"Intermediate\" seviyesinde başarı sertifikası aldım ve Yaşar Üniversitesi bünyesinde \"Elementary\" seviyesinde \"Japonca\" eğitimi aldım.<br><br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'aciklama3',
                            display: 'none',
                            type: 'text',
                            rect: ['48px', '1037px', '970px', '128px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Yazılım Mühendisliği kariyerimde alan seçimlerimi \"Mobil Uygulama\", \"Mobil Programlama\", \"Web Tasarım\" ve \"Web Programlama üzerine yaptım ve bu konularda uzmanlaşma yolunda adım adım ilerliyorum.<br><br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'aciklama4',
                            display: 'none',
                            type: 'text',
                            rect: ['50px', '1192px', '968px', '110px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Zorunlu staj programımı Yaşar Holding bünyesindeki \"Astron Proje Ofisinde\" 6 hafta süresince mobil ve web uygulamaları üzerinde çalışarak gerçekleştirdim.<br><br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'aciklama5',
                            display: 'none',
                            type: 'text',
                            rect: ['50px', '1339px', '970px', '86px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Gerekli Projelerimi, Araştırmalarımı, Makale ve Yazılarımı kişisel web sitemden yayınlamaya devam edeceğim.<br><br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'aciklama6',
                            display: 'none',
                            type: 'text',
                            rect: ['50px', '1459px', '1000px', '128px', 'auto', 'auto'],
                            opacity: 0,
                            text: "LinkedIn Profilimden Ayrıntılı Olarak İnceleme Yapabilirsiniz;<br>Yazılım Mühendisi / Web Tasarım / Mobil Uygulamalar sercan@sercangulgeze.com<br><br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'linkedin',
                            display: 'none',
                            type: 'text',
                            rect: ['52px', '1617px', '968px', '74px', 'auto', 'auto'],
                            opacity: 0,
                            text: "LinkedIn Bağlantısı için Tıklayınız",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
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
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hakkimda_resmi}",
                            'none',
                            'none'
                        ],
                        [
                            "eid143",
                            "display",
                            750,
                            0,
                            "linear",
                            "${hakkimda_resmi}",
                            'none',
                            'block'
                        ],
                        [
                            "eid161",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid126",
                            "display",
                            0,
                            0,
                            "linear",
                            "${linkedin}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            750,
                            0,
                            "linear",
                            "${linkedin}",
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
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid141",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama1}",
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
                            "eid157",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${linkedin}",
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
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sercangulgeze2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            750,
                            0,
                            "linear",
                            "${sercangulgeze2}",
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
                            "eid156",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama2}",
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
                            "eid160",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${hakkimda_resmi}",
                            '0',
                            '1'
                        ],
                        [
                            "eid159",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama3}",
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
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama6}",
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
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aciklama3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            750,
                            0,
                            "linear",
                            "${aciklama3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${sercangulgeze2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${aciklama2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("hakkimda_edgeActions.js");
})("EDGE-5742815");
