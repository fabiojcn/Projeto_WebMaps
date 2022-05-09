ol.proj.proj4.register(proj4);
ol.proj.get("").setExtent([-53.198483, -25.703263, -40.037215, -18.939645]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IndiceCoberturaVegetalNativa_1 = new ol.format.GeoJSON();
var features_IndiceCoberturaVegetalNativa_1 = format_IndiceCoberturaVegetalNativa_1.readFeatures(json_IndiceCoberturaVegetalNativa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_IndiceCoberturaVegetalNativa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IndiceCoberturaVegetalNativa_1.addFeatures(features_IndiceCoberturaVegetalNativa_1);
var lyr_IndiceCoberturaVegetalNativa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IndiceCoberturaVegetalNativa_1, 
                style: style_IndiceCoberturaVegetalNativa_1,
                interactive: false,
    title: 'Indice Cobertura Vegetal Nativa<br />\
    <img src="styles/legend/IndiceCoberturaVegetalNativa_1_0.png" /> 0,1 - 10^-0.5<br />\
    <img src="styles/legend/IndiceCoberturaVegetalNativa_1_1.png" /> 10^-0.5 - 10^0<br />\
    <img src="styles/legend/IndiceCoberturaVegetalNativa_1_2.png" /> 10^0 - 10^0.5<br />\
    <img src="styles/legend/IndiceCoberturaVegetalNativa_1_3.png" /> 10^0.5 - 10^1<br />\
    <img src="styles/legend/IndiceCoberturaVegetalNativa_1_4.png" /> 10^1 - 10^1.5<br />\
    <img src="styles/legend/IndiceCoberturaVegetalNativa_1_5.png" /> 10^1.5 - 10^2<br />'
        });
var format_DensidadeDemografica2020_2 = new ol.format.GeoJSON();
var features_DensidadeDemografica2020_2 = format_DensidadeDemografica2020_2.readFeatures(json_DensidadeDemografica2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_DensidadeDemografica2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadeDemografica2020_2.addFeatures(features_DensidadeDemografica2020_2);
var lyr_DensidadeDemografica2020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DensidadeDemografica2020_2, 
                style: style_DensidadeDemografica2020_2,
                interactive: false,
    title: 'Densidade Demografica 2020<br />\
    <img src="styles/legend/DensidadeDemografica2020_2_0.png" /> 0 - 10^1<br />\
    <img src="styles/legend/DensidadeDemografica2020_2_1.png" /> 10^1 - 10^2<br />\
    <img src="styles/legend/DensidadeDemografica2020_2_2.png" /> 10^2 - 10^3<br />\
    <img src="styles/legend/DensidadeDemografica2020_2_3.png" /> 10^3 - 10^4<br />\
    <img src="styles/legend/DensidadeDemografica2020_2_4.png" /> 10^4 - 10^5<br />'
        });
var format_BIOMASSP_3 = new ol.format.GeoJSON();
var features_BIOMASSP_3 = format_BIOMASSP_3.readFeatures(json_BIOMASSP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_BIOMASSP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BIOMASSP_3.addFeatures(features_BIOMASSP_3);
var lyr_BIOMASSP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BIOMASSP_3, 
                style: style_BIOMASSP_3,
                interactive: false,
    title: 'BIOMAS-SP<br />\
    <img src="styles/legend/BIOMASSP_3_0.png" /> Cerrado<br />\
    <img src="styles/legend/BIOMASSP_3_1.png" /> Mata Atlântica<br />'
        });
var format_readetransicoRBMA_4 = new ol.format.GeoJSON();
var features_readetransicoRBMA_4 = format_readetransicoRBMA_4.readFeatures(json_readetransicoRBMA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_readetransicoRBMA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readetransicoRBMA_4.addFeatures(features_readetransicoRBMA_4);
var lyr_readetransicoRBMA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readetransicoRBMA_4, 
                style: style_readetransicoRBMA_4,
                interactive: false,
                title: '<img src="styles/legend/readetransicoRBMA_4.png" /> Área de transicão RBMA'
            });
var format_readencleoRBMA_5 = new ol.format.GeoJSON();
var features_readencleoRBMA_5 = format_readencleoRBMA_5.readFeatures(json_readencleoRBMA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_readencleoRBMA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readencleoRBMA_5.addFeatures(features_readencleoRBMA_5);
var lyr_readencleoRBMA_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readencleoRBMA_5, 
                style: style_readencleoRBMA_5,
                interactive: false,
                title: '<img src="styles/legend/readencleoRBMA_5.png" /> Área de núcleo RBMA'
            });
var format_readeamortecimentoRBMA_6 = new ol.format.GeoJSON();
var features_readeamortecimentoRBMA_6 = format_readeamortecimentoRBMA_6.readFeatures(json_readeamortecimentoRBMA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_readeamortecimentoRBMA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeamortecimentoRBMA_6.addFeatures(features_readeamortecimentoRBMA_6);
var lyr_readeamortecimentoRBMA_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeamortecimentoRBMA_6, 
                style: style_readeamortecimentoRBMA_6,
                interactive: false,
                title: '<img src="styles/legend/readeamortecimentoRBMA_6.png" /> Área de amortecimento RBMA'
            });
var format_reaUrbana_7 = new ol.format.GeoJSON();
var features_reaUrbana_7 = format_reaUrbana_7.readFeatures(json_reaUrbana_7, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_reaUrbana_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaUrbana_7.addFeatures(features_reaUrbana_7);
var lyr_reaUrbana_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaUrbana_7, 
                style: style_reaUrbana_7,
                interactive: false,
                title: '<img src="styles/legend/reaUrbana_7.png" /> Área Urbana'
            });

lyr_OSMStandard_0.setVisible(true);lyr_IndiceCoberturaVegetalNativa_1.setVisible(true);lyr_DensidadeDemografica2020_2.setVisible(false);lyr_BIOMASSP_3.setVisible(false);lyr_readetransicoRBMA_4.setVisible(true);lyr_readencleoRBMA_5.setVisible(true);lyr_readeamortecimentoRBMA_6.setVisible(true);lyr_reaUrbana_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_IndiceCoberturaVegetalNativa_1,lyr_DensidadeDemografica2020_2,lyr_BIOMASSP_3,lyr_readetransicoRBMA_4,lyr_readencleoRBMA_5,lyr_readeamortecimentoRBMA_6,lyr_reaUrbana_7];
lyr_IndiceCoberturaVegetalNativa_1.set('fieldAliases', {'Codigo': 'Codigo', 'Nome': 'Nome', 'Indice_Cob': 'Indice_Cob', });
lyr_DensidadeDemografica2020_2.set('fieldAliases', {'Codigo': 'Codigo', 'Nome': 'Nome', 'Area_km': 'Area_km', 'Densidadem': 'Densidadem', 'Populacao': 'Populacao', });
lyr_BIOMASSP_3.set('fieldAliases', {'Bioma': 'Bioma', });
lyr_readetransicoRBMA_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_readencleoRBMA_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_readeamortecimentoRBMA_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_reaUrbana_7.set('fieldAliases', {'CID': 'CID', 'QAREA': 'QAREA', });
lyr_IndiceCoberturaVegetalNativa_1.set('fieldImages', {'Codigo': 'Range', 'Nome': 'TextEdit', 'Indice_Cob': 'TextEdit', });
lyr_DensidadeDemografica2020_2.set('fieldImages', {'Codigo': 'Range', 'Nome': 'TextEdit', 'Area_km': 'TextEdit', 'Densidadem': 'TextEdit', 'Populacao': 'TextEdit', });
lyr_BIOMASSP_3.set('fieldImages', {'Bioma': 'TextEdit', });
lyr_readetransicoRBMA_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_readencleoRBMA_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_readeamortecimentoRBMA_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_reaUrbana_7.set('fieldImages', {'CID': 'TextEdit', 'QAREA': 'TextEdit', });
lyr_IndiceCoberturaVegetalNativa_1.set('fieldLabels', {'Codigo': 'no label', 'Nome': 'no label', 'Indice_Cob': 'no label', });
lyr_DensidadeDemografica2020_2.set('fieldLabels', {'Codigo': 'no label', 'Nome': 'no label', 'Area_km': 'no label', 'Densidadem': 'no label', 'Populacao': 'no label', });
lyr_BIOMASSP_3.set('fieldLabels', {'Bioma': 'no label', });
lyr_readetransicoRBMA_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_readencleoRBMA_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_readeamortecimentoRBMA_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_reaUrbana_7.set('fieldLabels', {'CID': 'no label', 'QAREA': 'no label', });
lyr_reaUrbana_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});