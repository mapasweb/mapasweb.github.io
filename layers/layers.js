var wms_layers = [];


        var lyr_MAPAESRIGrayDark_0 = new ol.layer.Tile({
            'title': 'MAPA ESRI Gray Dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_MAPAGoogleStreets_1 = new ol.layer.Tile({
            'title': 'MAPA Google Streets',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_MAPAGoogleHybrid_2 = new ol.layer.Tile({
            'title': 'MAPA Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_MAPASATELITAL_3 = new ol.layer.Tile({
            'title': 'MAPA SATELITAL',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LMITEPAS_4 = new ol.format.GeoJSON();
var features_LMITEPAS_4 = format_LMITEPAS_4.readFeatures(json_LMITEPAS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LMITEPAS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEPAS_4.addFeatures(features_LMITEPAS_4);
var lyr_LMITEPAS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LMITEPAS_4, 
                style: style_LMITEPAS_4,
                interactive: true,
                title: '<img src="styles/legend/LMITEPAS_4.png" /> LÍMITE PAÍS'
            });
var format_LMITEESTATAL_5 = new ol.format.GeoJSON();
var features_LMITEESTATAL_5 = format_LMITEESTATAL_5.readFeatures(json_LMITEESTATAL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LMITEESTATAL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LMITEESTATAL_5.addFeatures(features_LMITEESTATAL_5);
var lyr_LMITEESTATAL_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LMITEESTATAL_5, 
                style: style_LMITEESTATAL_5,
                interactive: true,
                title: '<img src="styles/legend/LMITEESTATAL_5.png" /> LÍMITE ESTATAL'
            });
var format_NCLEOSAGRARIOSRAN_6 = new ol.format.GeoJSON();
var features_NCLEOSAGRARIOSRAN_6 = format_NCLEOSAGRARIOSRAN_6.readFeatures(json_NCLEOSAGRARIOSRAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NCLEOSAGRARIOSRAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NCLEOSAGRARIOSRAN_6.addFeatures(features_NCLEOSAGRARIOSRAN_6);
var lyr_NCLEOSAGRARIOSRAN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NCLEOSAGRARIOSRAN_6, 
                style: style_NCLEOSAGRARIOSRAN_6,
                interactive: true,
                title: '<img src="styles/legend/NCLEOSAGRARIOSRAN_6.png" /> NÚCLEOS AGRARIOS RAN'
            });
var format_ANPESTATAL_7 = new ol.format.GeoJSON();
var features_ANPESTATAL_7 = format_ANPESTATAL_7.readFeatures(json_ANPESTATAL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANPESTATAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANPESTATAL_7.addFeatures(features_ANPESTATAL_7);
var lyr_ANPESTATAL_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ANPESTATAL_7, 
                style: style_ANPESTATAL_7,
                interactive: true,
                title: '<img src="styles/legend/ANPESTATAL_7.png" /> ANP ESTATAL'
            });
var format_ANPFEDERAL_8 = new ol.format.GeoJSON();
var features_ANPFEDERAL_8 = format_ANPFEDERAL_8.readFeatures(json_ANPFEDERAL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANPFEDERAL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANPFEDERAL_8.addFeatures(features_ANPFEDERAL_8);
var lyr_ANPFEDERAL_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ANPFEDERAL_8, 
                style: style_ANPFEDERAL_8,
                interactive: true,
                title: '<img src="styles/legend/ANPFEDERAL_8.png" /> ANP FEDERAL'
            });
var format_RESERVAECOLGICAELCUXTALYUCATN_9 = new ol.format.GeoJSON();
var features_RESERVAECOLGICAELCUXTALYUCATN_9 = format_RESERVAECOLGICAELCUXTALYUCATN_9.readFeatures(json_RESERVAECOLGICAELCUXTALYUCATN_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RESERVAECOLGICAELCUXTALYUCATN_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RESERVAECOLGICAELCUXTALYUCATN_9.addFeatures(features_RESERVAECOLGICAELCUXTALYUCATN_9);
var lyr_RESERVAECOLGICAELCUXTALYUCATN_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RESERVAECOLGICAELCUXTALYUCATN_9, 
                style: style_RESERVAECOLGICAELCUXTALYUCATN_9,
                interactive: true,
                title: '<img src="styles/legend/RESERVAECOLGICAELCUXTALYUCATN_9.png" /> RESERVA ECOLÓGICA - EL CUXTAL, YUCATÁN'
            });
var format_ZONASARQUEOLGICASPOLGONOSINAH_10 = new ol.format.GeoJSON();
var features_ZONASARQUEOLGICASPOLGONOSINAH_10 = format_ZONASARQUEOLGICASPOLGONOSINAH_10.readFeatures(json_ZONASARQUEOLGICASPOLGONOSINAH_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONASARQUEOLGICASPOLGONOSINAH_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONASARQUEOLGICASPOLGONOSINAH_10.addFeatures(features_ZONASARQUEOLGICASPOLGONOSINAH_10);
var lyr_ZONASARQUEOLGICASPOLGONOSINAH_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONASARQUEOLGICASPOLGONOSINAH_10, 
                style: style_ZONASARQUEOLGICASPOLGONOSINAH_10,
                interactive: true,
                title: '<img src="styles/legend/ZONASARQUEOLGICASPOLGONOSINAH_10.png" /> ZONAS ARQUEOLÓGICAS POLÍGONOS INAH'
            });
var format_TRAMO7252KmAprox_11 = new ol.format.GeoJSON();
var features_TRAMO7252KmAprox_11 = format_TRAMO7252KmAprox_11.readFeatures(json_TRAMO7252KmAprox_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMO7252KmAprox_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMO7252KmAprox_11.addFeatures(features_TRAMO7252KmAprox_11);
var lyr_TRAMO7252KmAprox_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMO7252KmAprox_11, 
                style: style_TRAMO7252KmAprox_11,
                interactive: true,
                title: '<img src="styles/legend/TRAMO7252KmAprox_11.png" /> TRAMO 7 - 252 Km Aprox'
            });
var format_TRAMO6237KmAprox_12 = new ol.format.GeoJSON();
var features_TRAMO6237KmAprox_12 = format_TRAMO6237KmAprox_12.readFeatures(json_TRAMO6237KmAprox_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMO6237KmAprox_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMO6237KmAprox_12.addFeatures(features_TRAMO6237KmAprox_12);
var lyr_TRAMO6237KmAprox_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMO6237KmAprox_12, 
                style: style_TRAMO6237KmAprox_12,
                interactive: true,
                title: '<img src="styles/legend/TRAMO6237KmAprox_12.png" /> TRAMO 6 - 237 Km Aprox'
            });
var format_TRAMO5110KmAprox_13 = new ol.format.GeoJSON();
var features_TRAMO5110KmAprox_13 = format_TRAMO5110KmAprox_13.readFeatures(json_TRAMO5110KmAprox_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMO5110KmAprox_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMO5110KmAprox_13.addFeatures(features_TRAMO5110KmAprox_13);
var lyr_TRAMO5110KmAprox_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMO5110KmAprox_13, 
                style: style_TRAMO5110KmAprox_13,
                interactive: true,
                title: '<img src="styles/legend/TRAMO5110KmAprox_13.png" /> TRAMO 5 - 110 Km Aprox'
            });
var format_TRAMO4186KmAprox_14 = new ol.format.GeoJSON();
var features_TRAMO4186KmAprox_14 = format_TRAMO4186KmAprox_14.readFeatures(json_TRAMO4186KmAprox_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMO4186KmAprox_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMO4186KmAprox_14.addFeatures(features_TRAMO4186KmAprox_14);
var lyr_TRAMO4186KmAprox_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMO4186KmAprox_14, 
                style: style_TRAMO4186KmAprox_14,
                interactive: true,
                title: '<img src="styles/legend/TRAMO4186KmAprox_14.png" /> TRAMO 4 - 186 Km Aprox'
            });
var format_TRAMO3160KmAprox_15 = new ol.format.GeoJSON();
var features_TRAMO3160KmAprox_15 = format_TRAMO3160KmAprox_15.readFeatures(json_TRAMO3160KmAprox_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMO3160KmAprox_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMO3160KmAprox_15.addFeatures(features_TRAMO3160KmAprox_15);
var lyr_TRAMO3160KmAprox_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMO3160KmAprox_15, 
                style: style_TRAMO3160KmAprox_15,
                interactive: true,
                title: '<img src="styles/legend/TRAMO3160KmAprox_15.png" /> TRAMO 3 - 160 Km Aprox'
            });
var format_TRAMO2253KmAprox_16 = new ol.format.GeoJSON();
var features_TRAMO2253KmAprox_16 = format_TRAMO2253KmAprox_16.readFeatures(json_TRAMO2253KmAprox_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMO2253KmAprox_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMO2253KmAprox_16.addFeatures(features_TRAMO2253KmAprox_16);
var lyr_TRAMO2253KmAprox_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMO2253KmAprox_16, 
                style: style_TRAMO2253KmAprox_16,
                interactive: true,
                title: '<img src="styles/legend/TRAMO2253KmAprox_16.png" /> TRAMO 2 - 253 Km Aprox'
            });
var format_TRAMO1227KmAprox_17 = new ol.format.GeoJSON();
var features_TRAMO1227KmAprox_17 = format_TRAMO1227KmAprox_17.readFeatures(json_TRAMO1227KmAprox_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAMO1227KmAprox_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAMO1227KmAprox_17.addFeatures(features_TRAMO1227KmAprox_17);
var lyr_TRAMO1227KmAprox_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRAMO1227KmAprox_17, 
                style: style_TRAMO1227KmAprox_17,
                interactive: true,
                title: '<img src="styles/legend/TRAMO1227KmAprox_17.png" /> TRAMO 1 - 227 Km Aprox'
            });
var format_DERECHODEVAEXISTENTEFIT_18 = new ol.format.GeoJSON();
var features_DERECHODEVAEXISTENTEFIT_18 = format_DERECHODEVAEXISTENTEFIT_18.readFeatures(json_DERECHODEVAEXISTENTEFIT_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERECHODEVAEXISTENTEFIT_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERECHODEVAEXISTENTEFIT_18.addFeatures(features_DERECHODEVAEXISTENTEFIT_18);
var lyr_DERECHODEVAEXISTENTEFIT_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DERECHODEVAEXISTENTEFIT_18, 
                style: style_DERECHODEVAEXISTENTEFIT_18,
                interactive: true,
                title: '<img src="styles/legend/DERECHODEVAEXISTENTEFIT_18.png" /> DERECHO DE VÍA EXISTENTE FIT'
            });
var format_EJEDEVAEXISTENTEFIT_19 = new ol.format.GeoJSON();
var features_EJEDEVAEXISTENTEFIT_19 = format_EJEDEVAEXISTENTEFIT_19.readFeatures(json_EJEDEVAEXISTENTEFIT_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EJEDEVAEXISTENTEFIT_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EJEDEVAEXISTENTEFIT_19.addFeatures(features_EJEDEVAEXISTENTEFIT_19);
var lyr_EJEDEVAEXISTENTEFIT_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EJEDEVAEXISTENTEFIT_19, 
                style: style_EJEDEVAEXISTENTEFIT_19,
                interactive: true,
                title: '<img src="styles/legend/EJEDEVAEXISTENTEFIT_19.png" /> EJE DE VÍA EXISTENTE FIT'
            });
var format_ZONASARQUEOLGICASINAH_20 = new ol.format.GeoJSON();
var features_ZONASARQUEOLGICASINAH_20 = format_ZONASARQUEOLGICASINAH_20.readFeatures(json_ZONASARQUEOLGICASINAH_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONASARQUEOLGICASINAH_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONASARQUEOLGICASINAH_20.addFeatures(features_ZONASARQUEOLGICASINAH_20);
var lyr_ZONASARQUEOLGICASINAH_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONASARQUEOLGICASINAH_20, 
                style: style_ZONASARQUEOLGICASINAH_20,
                interactive: true,
                title: '<img src="styles/legend/ZONASARQUEOLGICASINAH_20.png" /> ZONAS ARQUEOLÓGICAS INAH'
            });
var format_ESTACIONESEXISTENTESFIT_21 = new ol.format.GeoJSON();
var features_ESTACIONESEXISTENTESFIT_21 = format_ESTACIONESEXISTENTESFIT_21.readFeatures(json_ESTACIONESEXISTENTESFIT_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONESEXISTENTESFIT_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONESEXISTENTESFIT_21.addFeatures(features_ESTACIONESEXISTENTESFIT_21);
var lyr_ESTACIONESEXISTENTESFIT_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTACIONESEXISTENTESFIT_21, 
                style: style_ESTACIONESEXISTENTESFIT_21,
                interactive: true,
                title: '<img src="styles/legend/ESTACIONESEXISTENTESFIT_21.png" /> ESTACIONES EXISTENTES FIT'
            });
var format_PARADEROSTRENMAYAX12_22 = new ol.format.GeoJSON();
var features_PARADEROSTRENMAYAX12_22 = format_PARADEROSTRENMAYAX12_22.readFeatures(json_PARADEROSTRENMAYAX12_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PARADEROSTRENMAYAX12_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARADEROSTRENMAYAX12_22.addFeatures(features_PARADEROSTRENMAYAX12_22);
var lyr_PARADEROSTRENMAYAX12_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PARADEROSTRENMAYAX12_22, 
                style: style_PARADEROSTRENMAYAX12_22,
                interactive: true,
                title: '<img src="styles/legend/PARADEROSTRENMAYAX12_22.png" /> PARADEROS TREN MAYA X12'
            });
var format_ESTACIONESTRENMAYAX18_23 = new ol.format.GeoJSON();
var features_ESTACIONESTRENMAYAX18_23 = format_ESTACIONESTRENMAYAX18_23.readFeatures(json_ESTACIONESTRENMAYAX18_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONESTRENMAYAX18_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONESTRENMAYAX18_23.addFeatures(features_ESTACIONESTRENMAYAX18_23);
var lyr_ESTACIONESTRENMAYAX18_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTACIONESTRENMAYAX18_23, 
                style: style_ESTACIONESTRENMAYAX18_23,
                interactive: true,
                title: '<img src="styles/legend/ESTACIONESTRENMAYAX18_23.png" /> ESTACIONES TREN MAYA X18'
            });
var format_T3PUENTESYVIADUCTOSFERROVIARIOS_24 = new ol.format.GeoJSON();
var features_T3PUENTESYVIADUCTOSFERROVIARIOS_24 = format_T3PUENTESYVIADUCTOSFERROVIARIOS_24.readFeatures(json_T3PUENTESYVIADUCTOSFERROVIARIOS_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3PUENTESYVIADUCTOSFERROVIARIOS_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3PUENTESYVIADUCTOSFERROVIARIOS_24.addFeatures(features_T3PUENTESYVIADUCTOSFERROVIARIOS_24);
var lyr_T3PUENTESYVIADUCTOSFERROVIARIOS_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_T3PUENTESYVIADUCTOSFERROVIARIOS_24, 
                style: style_T3PUENTESYVIADUCTOSFERROVIARIOS_24,
                interactive: true,
                title: '<img src="styles/legend/T3PUENTESYVIADUCTOSFERROVIARIOS_24.png" /> T3 PUENTES Y VIADUCTOS FERROVIARIOS'
            });
var format_T3PASOSVEHICULARES_25 = new ol.format.GeoJSON();
var features_T3PASOSVEHICULARES_25 = format_T3PASOSVEHICULARES_25.readFeatures(json_T3PASOSVEHICULARES_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3PASOSVEHICULARES_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3PASOSVEHICULARES_25.addFeatures(features_T3PASOSVEHICULARES_25);
var lyr_T3PASOSVEHICULARES_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_T3PASOSVEHICULARES_25, 
                style: style_T3PASOSVEHICULARES_25,
                interactive: true,
                title: '<img src="styles/legend/T3PASOSVEHICULARES_25.png" /> T3 PASOS VEHICULARES'
            });
var format_T3PASARELASPEATONALES_26 = new ol.format.GeoJSON();
var features_T3PASARELASPEATONALES_26 = format_T3PASARELASPEATONALES_26.readFeatures(json_T3PASARELASPEATONALES_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3PASARELASPEATONALES_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3PASARELASPEATONALES_26.addFeatures(features_T3PASARELASPEATONALES_26);
var lyr_T3PASARELASPEATONALES_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_T3PASARELASPEATONALES_26, 
                style: style_T3PASARELASPEATONALES_26,
                interactive: true,
                title: '<img src="styles/legend/T3PASARELASPEATONALES_26.png" /> T3 PASARELAS PEATONALES'
            });
var format_T3DRENAJESTRANSVERSALES_27 = new ol.format.GeoJSON();
var features_T3DRENAJESTRANSVERSALES_27 = format_T3DRENAJESTRANSVERSALES_27.readFeatures(json_T3DRENAJESTRANSVERSALES_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T3DRENAJESTRANSVERSALES_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T3DRENAJESTRANSVERSALES_27.addFeatures(features_T3DRENAJESTRANSVERSALES_27);
var lyr_T3DRENAJESTRANSVERSALES_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_T3DRENAJESTRANSVERSALES_27, 
                style: style_T3DRENAJESTRANSVERSALES_27,
                interactive: true,
                title: '<img src="styles/legend/T3DRENAJESTRANSVERSALES_27.png" /> T3 DRENAJES TRANSVERSALES'
            });
var lyr_SIMBOLOGA_28 = new ol.layer.Image({
                            opacity: 1,
                            title: "SIMBOLOGÍA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SIMBOLOGA_28.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10764854.123793, 1899544.731622, -9401013.736729, 2551201.281541]
                            })
                        });

lyr_MAPAESRIGrayDark_0.setVisible(true);lyr_MAPAGoogleStreets_1.setVisible(true);lyr_MAPAGoogleHybrid_2.setVisible(true);lyr_MAPASATELITAL_3.setVisible(true);lyr_LMITEPAS_4.setVisible(true);lyr_LMITEESTATAL_5.setVisible(true);lyr_NCLEOSAGRARIOSRAN_6.setVisible(true);lyr_ANPESTATAL_7.setVisible(true);lyr_ANPFEDERAL_8.setVisible(true);lyr_RESERVAECOLGICAELCUXTALYUCATN_9.setVisible(true);lyr_ZONASARQUEOLGICASPOLGONOSINAH_10.setVisible(true);lyr_TRAMO7252KmAprox_11.setVisible(true);lyr_TRAMO6237KmAprox_12.setVisible(true);lyr_TRAMO5110KmAprox_13.setVisible(true);lyr_TRAMO4186KmAprox_14.setVisible(true);lyr_TRAMO3160KmAprox_15.setVisible(true);lyr_TRAMO2253KmAprox_16.setVisible(true);lyr_TRAMO1227KmAprox_17.setVisible(true);lyr_DERECHODEVAEXISTENTEFIT_18.setVisible(true);lyr_EJEDEVAEXISTENTEFIT_19.setVisible(true);lyr_ZONASARQUEOLGICASINAH_20.setVisible(true);lyr_ESTACIONESEXISTENTESFIT_21.setVisible(true);lyr_PARADEROSTRENMAYAX12_22.setVisible(true);lyr_ESTACIONESTRENMAYAX18_23.setVisible(true);lyr_T3PUENTESYVIADUCTOSFERROVIARIOS_24.setVisible(true);lyr_T3PASOSVEHICULARES_25.setVisible(true);lyr_T3PASARELASPEATONALES_26.setVisible(true);lyr_T3DRENAJESTRANSVERSALES_27.setVisible(true);lyr_SIMBOLOGA_28.setVisible(true);
var layersList = [lyr_MAPAESRIGrayDark_0,lyr_MAPAGoogleStreets_1,lyr_MAPAGoogleHybrid_2,lyr_MAPASATELITAL_3,lyr_LMITEPAS_4,lyr_LMITEESTATAL_5,lyr_NCLEOSAGRARIOSRAN_6,lyr_ANPESTATAL_7,lyr_ANPFEDERAL_8,lyr_RESERVAECOLGICAELCUXTALYUCATN_9,lyr_ZONASARQUEOLGICASPOLGONOSINAH_10,lyr_TRAMO7252KmAprox_11,lyr_TRAMO6237KmAprox_12,lyr_TRAMO5110KmAprox_13,lyr_TRAMO4186KmAprox_14,lyr_TRAMO3160KmAprox_15,lyr_TRAMO2253KmAprox_16,lyr_TRAMO1227KmAprox_17,lyr_DERECHODEVAEXISTENTEFIT_18,lyr_EJEDEVAEXISTENTEFIT_19,lyr_ZONASARQUEOLGICASINAH_20,lyr_ESTACIONESEXISTENTESFIT_21,lyr_PARADEROSTRENMAYAX12_22,lyr_ESTACIONESTRENMAYAX18_23,lyr_T3PUENTESYVIADUCTOSFERROVIARIOS_24,lyr_T3PASOSVEHICULARES_25,lyr_T3PASARELASPEATONALES_26,lyr_T3DRENAJESTRANSVERSALES_27,lyr_SIMBOLOGA_28];
lyr_LMITEPAS_4.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'OBJECTID_1': 'OBJECTID_1', });
lyr_LMITEESTATAL_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ID': 'ID', 'NOMBRE': 'NOMBRE', });
lyr_NCLEOSAGRARIOSRAN_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_ANPESTATAL_7.set('fieldAliases', {'CLAVE': 'CLAVE', 'TIPO': 'TIPO', 'CAT_MANEJO': 'CAT_MANEJO', 'NOM_ANP': 'NOM_ANP', 'TIPO_POL': 'TIPO_POL', 'NOM_POLIG': 'NOM_POLIG', 'FEC_DECRET': 'FEC_DECRET', 'ESTADO': 'ESTADO', 'MUNICIPIO': 'MUNICIPIO', 'CAT_UICN': 'CAT_UICN', 'FUENTE': 'FUENTE', 'SUP_DECRE': 'SUP_DECRE', 'HECTARES': 'HECTARES', 'SUPTER_CAL': 'SUPTER_CAL', 'SUPMAR_CAL': 'SUPMAR_CAL', 'sel': 'sel', 'FECHA': 'FECHA', });
lyr_ANPFEDERAL_8.set('fieldAliases', {'ID_ANP': 'ID_ANP', 'NOMBRE': 'NOMBRE', 'CAT_DECRET': 'CAT_DECRET', 'CAT_MANEJO': 'CAT_MANEJO', 'ESTADOS': 'ESTADOS', 'MUNICIPIOS': 'MUNICIPIOS', 'REGION': 'REGION', 'SUPERFICIE': 'SUPERFICIE', 'S_TERRES': 'S_TERRES', 'S_MARINA': 'S_MARINA', 'PRIM_DEC': 'PRIM_DEC', 'ULT_DOF': 'ULT_DOF', 'PCM1': 'PCM1', 'SINAP': 'SINAP', 'FECHA': 'FECHA', });
lyr_RESERVAECOLGICAELCUXTALYUCATN_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'FID_reserv': 'FID_reserv', 'ID': 'ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', 'FID_Areas_': 'FID_Areas_', 'NOMBRE': 'NOMBRE', 'CAT': 'CAT', 'TIPO': 'TIPO', 'UBICACION': 'UBICACION', 'CAT_UICN': 'CAT_UICN', 'AREA_1': 'AREA_1', 'PERIMETE_1': 'PERIMETE_1', 'HECTARES_1': 'HECTARES_1', 'HAS': 'HAS', 'HA_2014': 'HA_2014', });
lyr_ZONASARQUEOLGICASPOLGONOSINAH_10.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_TRAMO7252KmAprox_11.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_TRAMO6237KmAprox_12.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_TRAMO5110KmAprox_13.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_TRAMO4186KmAprox_14.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_TRAMO3160KmAprox_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_TRAMO2253KmAprox_16.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_TRAMO1227KmAprox_17.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_DERECHODEVAEXISTENTEFIT_18.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'linea': 'linea', });
lyr_EJEDEVAEXISTENTEFIT_19.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'tramo_fit': 'tramo_fit', 'long_km': 'long_km', });
lyr_ZONASARQUEOLGICASINAH_20.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ESTACIONESEXISTENTESFIT_21.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'nom_est': 'nom_est', 'eje_fit': 'eje_fit', });
lyr_PARADEROSTRENMAYAX12_22.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'id': 'id', 'PARADERO': 'PARADERO', });
lyr_ESTACIONESTRENMAYAX18_23.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_T3PUENTESYVIADUCTOSFERROVIARIOS_24.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'path': 'path', });
lyr_T3PASOSVEHICULARES_25.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Text': 'Text', 'No. LISTA': 'No. LISTA', });
lyr_T3PASARELASPEATONALES_26.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_T3DRENAJESTRANSVERSALES_27.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'path': 'path', });
lyr_LMITEPAS_4.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'OBJECTID_1': 'TextEdit', });
lyr_LMITEESTATAL_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'ID': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_NCLEOSAGRARIOSRAN_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_ANPESTATAL_7.set('fieldImages', {'CLAVE': 'TextEdit', 'TIPO': 'TextEdit', 'CAT_MANEJO': 'TextEdit', 'NOM_ANP': 'TextEdit', 'TIPO_POL': 'TextEdit', 'NOM_POLIG': 'TextEdit', 'FEC_DECRET': 'DateTime', 'ESTADO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CAT_UICN': 'TextEdit', 'FUENTE': 'TextEdit', 'SUP_DECRE': 'TextEdit', 'HECTARES': 'TextEdit', 'SUPTER_CAL': 'TextEdit', 'SUPMAR_CAL': 'TextEdit', 'sel': 'Range', 'FECHA': 'TextEdit', });
lyr_ANPFEDERAL_8.set('fieldImages', {'ID_ANP': 'TextEdit', 'NOMBRE': 'TextEdit', 'CAT_DECRET': 'TextEdit', 'CAT_MANEJO': 'TextEdit', 'ESTADOS': 'TextEdit', 'MUNICIPIOS': 'TextEdit', 'REGION': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'S_TERRES': 'TextEdit', 'S_MARINA': 'TextEdit', 'PRIM_DEC': 'DateTime', 'ULT_DOF': 'DateTime', 'PCM1': 'DateTime', 'SINAP': 'TextEdit', 'FECHA': 'TextEdit', });
lyr_RESERVAECOLGICAELCUXTALYUCATN_9.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'FID_reserv': 'TextEdit', 'ID': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', 'FID_Areas_': 'TextEdit', 'NOMBRE': 'TextEdit', 'CAT': 'TextEdit', 'TIPO': 'TextEdit', 'UBICACION': 'TextEdit', 'CAT_UICN': 'TextEdit', 'AREA_1': 'TextEdit', 'PERIMETE_1': 'TextEdit', 'HECTARES_1': 'TextEdit', 'HAS': 'TextEdit', 'HA_2014': 'TextEdit', });
lyr_ZONASARQUEOLGICASPOLGONOSINAH_10.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_TRAMO7252KmAprox_11.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_TRAMO6237KmAprox_12.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_TRAMO5110KmAprox_13.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_TRAMO4186KmAprox_14.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_TRAMO3160KmAprox_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_TRAMO2253KmAprox_16.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_TRAMO1227KmAprox_17.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_DERECHODEVAEXISTENTEFIT_18.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'linea': 'TextEdit', });
lyr_EJEDEVAEXISTENTEFIT_19.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'tramo_fit': 'TextEdit', 'long_km': 'TextEdit', });
lyr_ZONASARQUEOLGICASINAH_20.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_ESTACIONESEXISTENTESFIT_21.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'nom_est': 'TextEdit', 'eje_fit': 'TextEdit', });
lyr_PARADEROSTRENMAYAX12_22.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'id': 'TextEdit', 'PARADERO': 'TextEdit', });
lyr_ESTACIONESTRENMAYAX18_23.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_T3PUENTESYVIADUCTOSFERROVIARIOS_24.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'path': 'TextEdit', });
lyr_T3PASOSVEHICULARES_25.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Text': 'TextEdit', 'No. LISTA': 'TextEdit', });
lyr_T3PASARELASPEATONALES_26.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_T3DRENAJESTRANSVERSALES_27.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'TextEdit', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'path': 'TextEdit', });
lyr_LMITEPAS_4.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'OBJECTID_1': 'no label', });
lyr_LMITEESTATAL_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ID': 'no label', 'NOMBRE': 'no label', });
lyr_NCLEOSAGRARIOSRAN_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_ANPESTATAL_7.set('fieldLabels', {'CLAVE': 'no label', 'TIPO': 'no label', 'CAT_MANEJO': 'no label', 'NOM_ANP': 'no label', 'TIPO_POL': 'no label', 'NOM_POLIG': 'no label', 'FEC_DECRET': 'no label', 'ESTADO': 'no label', 'MUNICIPIO': 'no label', 'CAT_UICN': 'no label', 'FUENTE': 'no label', 'SUP_DECRE': 'no label', 'HECTARES': 'no label', 'SUPTER_CAL': 'no label', 'SUPMAR_CAL': 'no label', 'sel': 'no label', 'FECHA': 'no label', });
lyr_ANPFEDERAL_8.set('fieldLabels', {'ID_ANP': 'no label', 'NOMBRE': 'no label', 'CAT_DECRET': 'no label', 'CAT_MANEJO': 'no label', 'ESTADOS': 'no label', 'MUNICIPIOS': 'no label', 'REGION': 'no label', 'SUPERFICIE': 'no label', 'S_TERRES': 'no label', 'S_MARINA': 'no label', 'PRIM_DEC': 'no label', 'ULT_DOF': 'no label', 'PCM1': 'no label', 'SINAP': 'no label', 'FECHA': 'no label', });
lyr_RESERVAECOLGICAELCUXTALYUCATN_9.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'FID_reserv': 'no label', 'ID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'ACRES': 'no label', 'HECTARES': 'no label', 'FID_Areas_': 'no label', 'NOMBRE': 'no label', 'CAT': 'no label', 'TIPO': 'no label', 'UBICACION': 'no label', 'CAT_UICN': 'no label', 'AREA_1': 'no label', 'PERIMETE_1': 'no label', 'HECTARES_1': 'no label', 'HAS': 'no label', 'HA_2014': 'no label', });
lyr_ZONASARQUEOLGICASPOLGONOSINAH_10.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_TRAMO7252KmAprox_11.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_TRAMO6237KmAprox_12.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_TRAMO5110KmAprox_13.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_TRAMO4186KmAprox_14.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_TRAMO3160KmAprox_15.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_TRAMO2253KmAprox_16.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_TRAMO1227KmAprox_17.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_DERECHODEVAEXISTENTEFIT_18.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'linea': 'no label', });
lyr_EJEDEVAEXISTENTEFIT_19.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'tramo_fit': 'no label', 'long_km': 'no label', });
lyr_ZONASARQUEOLGICASINAH_20.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ESTACIONESEXISTENTESFIT_21.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'nom_est': 'no label', 'eje_fit': 'no label', });
lyr_PARADEROSTRENMAYAX12_22.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'id': 'no label', 'PARADERO': 'no label', });
lyr_ESTACIONESTRENMAYAX18_23.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_T3PUENTESYVIADUCTOSFERROVIARIOS_24.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'path': 'no label', });
lyr_T3PASOSVEHICULARES_25.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Text': 'no label', 'No. LISTA': 'no label', });
lyr_T3PASARELASPEATONALES_26.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_T3DRENAJESTRANSVERSALES_27.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'path': 'no label', });
lyr_T3DRENAJESTRANSVERSALES_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});