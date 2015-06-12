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
                            rect: ['50px', '731px', '1000px', '388px', 'auto', 'auto'],
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
                            id: 'adonet-nedir',
                            type: 'text',
                            rect: ['100px', '183px', '910px', '57px', 'auto', 'auto'],
                            opacity: 0,
                            text: "ADO.NET NEDİR? NE İŞE YARAR?<br><br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [44, "px"], "rgba(0,0,0,1)", "700", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'adonet-nedir-icerik',
                            type: 'text',
                            rect: ['114px', '240px', '863px', '330px', 'auto', 'auto'],
                            opacity: 0,
                            text: "ADO.NET’ in açılımı ‘ActiveX Data Objects.NET’ olarak adlandırılır. Microsoft tarafından bize sunulan, veri tabanı ile uygulamalarımız arasında köprü görevini görmektedir. ADO.NET ile uygulama tarafımızda veri tabanımıza bağlanabilir, verilerimizi buradan listeleyebilir, güncelleyebilir, veri ekleyebilir veya silebiliriz. ADO.NET ile MSSQL sorguları, komutlarını uygulama tarafımızda kullanabiliriz.",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'adonet_nedir',
                            type: 'image',
                            rect: ['130px', '592px', '829px', '388px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"adonet_nedir.png",'0px','0px']
                        },
                        {
                            id: 'icerik',
                            type: 'text',
                            rect: ['114px', '1007px', '856px', '479px', 'auto', 'auto'],
                            opacity: 0,
                            text: "ADO.NET platformu sadece MSSQL için değil, ACCESS, ORACLE gibi diğer veri tabanları içinde kullanabiliriz. Ado.Net mimarisinde kullanılan temel nesneler Connection, Command, DataReader, DataAdapterve ve DataSet nesneleridir.<br>Connection Nesnesi: Projede veri tabanı kullanımı için olmazsa olmaz nesnedir. Connection nesnesi veri tabanı ile uygulama arasında bağlantı kurmak için kullanılır.<br>Command Nesnesi: Veri tabanı ile uygulama arasındaki veri akışını iki yönlü olarak kontrol etmeye yarar. Execute.NonQuery, ExecuteScalar ve ExecuteReader olmak üzere 3 alt nesnesi vardır.",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'sol-icerik',
                            type: 'text',
                            rect: ['109px', '1526px', '446px', '204px', 'auto', 'auto'],
                            opacity: 0,
                            text: ".Net Framework ile veri tabanından veri çekmek için kullanılan System.Data komutu ADO.NET mimarisinin temelini içerir.<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [34, "px"], "rgba(0,0,0,1)", "500", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'yayinlar_devam',
                            type: 'image',
                            rect: ['618px', '1491px', '370px', '274px', 'auto', 'auto'],
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
                            "eid131",
                            "display",
                            0,
                            0,
                            "linear",
                            "${adonet_nedir}",
                            'none',
                            'none'
                        ],
                        [
                            "eid149",
                            "display",
                            750,
                            0,
                            "linear",
                            "${adonet_nedir}",
                            'none',
                            'block'
                        ],
                        [
                            "eid164",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${adonet-nedir}",
                            '0',
                            '1'
                        ],
                        [
                            "eid170",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${yayinlar_devam}",
                            '618px',
                            '618px'
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
                            "eid81",
                            "location",
                            0,
                            750,
                            "linear",
                            "${sitesercan}",
                            [[550, 858.17, 0, 0, 0, 0,0],[550, 71.84, 0, 0, 0, 0,786.33]]
                        ],
                        [
                            "eid133",
                            "display",
                            0,
                            0,
                            "linear",
                            "${adonet-nedir}",
                            'none',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            750,
                            0,
                            "linear",
                            "${adonet-nedir}",
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
                            "eid83",
                            "location",
                            0,
                            750,
                            "linear",
                            "${sitepiton2}",
                            [[550.5, 978.5, 0, 0, 0, 0,0],[540.5, 1848.5, 0, 0, 0, 0,870.06]]
                        ],
                        [
                            "eid130",
                            "display",
                            0,
                            0,
                            "linear",
                            "${icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid148",
                            "display",
                            750,
                            0,
                            "linear",
                            "${icerik}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${yayinlar_devam}",
                            '0',
                            '1'
                        ],
                        [
                            "eid129",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sol-icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid147",
                            "display",
                            750,
                            0,
                            "linear",
                            "${sol-icerik}",
                            'none',
                            'block'
                        ],
                        [
                            "eid127",
                            "top",
                            750,
                            0,
                            "linear",
                            "${kalip}",
                            '731px',
                            '731px'
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
                            "eid126",
                            "left",
                            750,
                            0,
                            "linear",
                            "${kalip}",
                            '50px',
                            '50px'
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
                            "eid166",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${adonet-nedir-icerik}",
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
                            "eid128",
                            "display",
                            0,
                            0,
                            "linear",
                            "${yayinlar_devam}",
                            'none',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            750,
                            0,
                            "linear",
                            "${yayinlar_devam}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            0,
                            0,
                            "linear",
                            "${adonet-nedir-icerik}",
                            'none',
                            'none'
                        ],
                        [
                            "eid150",
                            "display",
                            750,
                            0,
                            "linear",
                            "${adonet-nedir-icerik}",
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
                            "eid168",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${sol-icerik}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${adonet_nedir}",
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
                            "eid167",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${icerik}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("yayinlarim_database_edgeActions.js");
})("EDGE-5742815");
