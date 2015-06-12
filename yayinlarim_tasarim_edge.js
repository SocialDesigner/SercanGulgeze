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
                            id: 'uml-modelleme',
                            display: 'none',
                            type: 'text',
                            rect: ['139px', '180px', '801px', '63px', 'auto', 'auto'],
                            opacity: 0,
                            text: "UML MODELLEME NEDİR? NASIL KULLANILIR?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'uml-modelleme-nedir-icerik',
                            display: 'none',
                            type: 'text',
                            rect: ['179px', '243px', '719px', '217px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Yazılımı görsel olarak ortaya koymak, yazılımın planını, akışlarını çıkarmak için kullanılan çok amaçlı modelleme dilidir. Aynı şeye farklı perspektif açılardan bakmak olarak yorumlanabilir..",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'uml_modelleme_nedir_nasil_kullanilir',
                            display: 'none',
                            type: 'image',
                            rect: ['145px', '477px', '806px', '377px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"uml_modelleme_nedir_nasil_kullanilir.png",'0px','0px']
                        },
                        {
                            id: 'uml-neden-onemlidir',
                            display: 'none',
                            type: 'text',
                            rect: ['145px', '900px', '482px', '76px', 'auto', 'auto'],
                            opacity: 0,
                            text: "UML NEDEN ÖNEMLİDİR?",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "700", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'uml-neden-onemlidir-icerik',
                            display: 'none',
                            type: 'text',
                            rect: ['92px', '971px', '915px', '282px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Yazılım geliştirme sürecinin tamamında kullanılacak olan planlama ve tasarım işlerinin tamamını kapsaması en önemli özelliklerindendir.Yapılan yazılım projesinin büyüklüğüne göre ücretli, ücretsiz veya kapsamlı, düşük kapsamlı olarak birçok geliştirme aracı bulunmaktadır.Yazılım projesinin yapımında oluşacak anlaşmazlıklardan veya fikir farklılıklarından doğan sorunları büyük ölçüde ortadan kaldırır.<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'uml-neden-onemlidir-icerik-2',
                            display: 'none',
                            type: 'text',
                            rect: ['92px', '1287px', '470px', '458px', 'auto', 'auto'],
                            opacity: 0,
                            text: "Modellemenin ardından oluşturulan bir yazılım farklı platformlara taşınmak istendiğinde UML modellemesi sayesinde tasarım aşaması hızla geçilerek istenen diğer platforma taşınabilir.Oluşturulan yazılım projesinin sunum aşamasında anlaşılması kolay bir görüntü sergileyerek soru işaretlerini ortadan kaldırır.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'yayinlar_devam',
                            display: 'none',
                            type: 'image',
                            rect: ['604px', '1355px', '435px', '322px', 'auto', 'auto'],
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
                            "eid127",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uml-neden-onemlidir-icerik-2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid134",
                            "display",
                            750,
                            0,
                            "linear",
                            "${uml-neden-onemlidir-icerik-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uml-neden-onemlidir}",
                            'none',
                            'none'
                        ],
                        [
                            "eid136",
                            "display",
                            750,
                            0,
                            "linear",
                            "${uml-neden-onemlidir}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${uml-neden-onemlidir-icerik}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${uml-modelleme-nedir-icerik}",
                            '0',
                            '1'
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
                            "eid154",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${uml-neden-onemlidir-icerik-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uml_modelleme_nedir_nasil_kullanilir}",
                            'none',
                            'none'
                        ],
                        [
                            "eid137",
                            "display",
                            750,
                            0,
                            "linear",
                            "${uml_modelleme_nedir_nasil_kullanilir}",
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
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uml-neden-onemlidir-icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            750,
                            0,
                            "linear",
                            "${uml-neden-onemlidir-icerik}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uml-modelleme-nedir-icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid139",
                            "display",
                            750,
                            0,
                            "linear",
                            "${uml-modelleme-nedir-icerik}",
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
                            "eid158",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${yayinlar_devam}",
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
                            "eid159",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${uml_modelleme_nedir_nasil_kullanilir}",
                            '0',
                            '1'
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
                            "eid160",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${uml-neden-onemlidir}",
                            '0',
                            '1'
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
                            "eid133",
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
                            "height",
                            1000,
                            0,
                            "linear",
                            "${uml-neden-onemlidir-icerik}",
                            '282px',
                            '282px'
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
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uml-modelleme}",
                            'none',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            750,
                            0,
                            "linear",
                            "${uml-modelleme}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${uml-modelleme}",
                            '0',
                            '1'
                        ],
                        [
                            "eid164",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${uml-neden-onemlidir-icerik-2}",
                            '1287px',
                            '1287px'
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("yayinlarim_tasarim_edgeActions.js");
})("EDGE-5742815");
