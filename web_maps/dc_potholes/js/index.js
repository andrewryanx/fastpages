// Define map instance
var lat = 38.897697;
var long = -77.036579;
var zoom = 12;

var map = L.map('map',{
    minZoom: 12,
    maxZoom: 20,
    zoomControl: false,                // set to false
  }).setView([lat,long], zoom);   // sets the home position

// custom zoom bar control that includes a Zoom Home function
// source: https://github.com/torfsen/leaflet.zoomhome
L.Control.zoomHome = L.Control.extend({
    options: {
        position: 'topleft',
        zoomInText: '+',
        zoomInTitle: 'Zoom in',
        zoomOutText: '-',
        zoomOutTitle: 'Zoom out',
        zoomHomeText: '<i class="fa fa-home" style="line-height:1.65;"></i>',
        zoomHomeTitle: 'Home'
    },

    onAdd: function (map) {
        var controlName = 'gin-control-zoom',
            container = L.DomUtil.create('div', controlName + ' leaflet-bar'),
            options = this.options;

        this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle,
        controlName + '-in', container, this._zoomIn);
        this._zoomHomeButton = this._createButton(options.zoomHomeText, options.zoomHomeTitle,
        controlName + '-home', container, this._zoomHome);
        this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
        controlName + '-out', container, this._zoomOut);

        this._updateDisabled();
        map.on('zoomend zoomlevelschange', this._updateDisabled, this);

        return container;
    },

    onRemove: function (map) {
        map.off('zoomend zoomlevelschange', this._updateDisabled, this);
    },

    _zoomIn: function (e) {
        this._map.zoomIn(e.shiftKey ? 3 : 1);
    },

    _zoomOut: function (e) {
        this._map.zoomOut(e.shiftKey ? 3 : 1);
    },

    _zoomHome: function (e) {
        map.setView([lat, long], zoom);
    },

    _createButton: function (html, title, className, container, fn) {
        var link = L.DomUtil.create('a', className, container);
        link.innerHTML = html;
        link.href = '#';
        link.title = title;

        L.DomEvent.on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.stop)
            .on(link, 'click', fn, this)
            .on(link, 'click', this._refocusOnMap, this);

        return link;
    },

    _updateDisabled: function () {
        var map = this._map,
            className = 'leaflet-disabled';

        L.DomUtil.removeClass(this._zoomInButton, className);
        L.DomUtil.removeClass(this._zoomOutButton, className);

        if (map._zoom === map.getMinZoom()) {
            L.DomUtil.addClass(this._zoomOutButton, className);
        }
        if (map._zoom === map.getMaxZoom()) {
            L.DomUtil.addClass(this._zoomInButton, className);
        }
    }
});
// add the new control to the map
var zoomHome = new L.Control.zoomHome();
zoomHome.addTo(map);

// Variables setting basemap layers
// Mapbox Streets/Satellite max zoom level=20, OSM=18
var MapboxSatellite = L.tileLayer(
  "https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5kcnJ2dDE1IiwiYSI6ImNqbnZjZjZjdDA2ZnEzcWtiaGNnOW0ycWwifQ.Z5TqMbq4qCI0rCV4rZHRGg",
  {
    maxZoom: 20,
    attribution:
      "<a href=\"https://www.mapbox.com/about/maps/\" target=\"_blank\">&copy; Mapbox</a> <a href=\"http://www.openstreetmap.org/about/\" target=\"_blank\">&copy; OpenStreetMap</a> <a class=\"mapbox-improve-map\" href=\"https://www.mapbox.com/map-feedback/\" target=\"_blank\">Improve this map</a> <a href=\"https://www.digitalglobe.com/\" target=\"_blank\">&copy; DigitalGlobe</a>"
  }
).addTo(map);

var OSM = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 18,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }
)

// Variable setting marker clusters
// source: ttps://github.com/Leaflet/Leaflet.markercluster
var group = new L.markerClusterGroup().addTo(map);

// Variable setting marker style
var geojsonMarkerOptions = {
  radius: 6,
  fillColor: "#e01c1c",
  color: "#000",
  weight: .75,
  opacity: .75,
  fillOpacity: .75
};

//MarkerClusterGroup that collects all GeoJSON objects
var group = new L.markerClusterGroup().addTo(map);
var geojsonlayer;

//-----------------------------------------------
// FETCHING GEOJSON DATA FROM CARTODB
// CALL THE CARTODB SQL API HERE IN URL FORMAT
//-----------------------------------------------
			
//access  DC Pothole data via D.C.'s OpenData portal API:
//data source http://opendata.dc.gov/datasets/pothole-last-30-days
//var querystem ="https://opendata.arcgis.com/datasets/5b1de94278154421ab4ccfc94676c269_10.geojson"   

var querystem = "https://andrew-ryan.carto.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM dc_potholes_30d";
var query = querystem

console.log("Initial query: " + query);

 //running the query
$.getJSON(query, function(data) {
geojsonlayer = L.geoJson(data, {
onEachFeature: function(feature, layer) {
// add popup with info
layer.bindPopup("<b>" + "Address: " + "</b>" + feature.properties.streetaddress + '</b><br>' + "<b>" + "City: " + "</b>" + feature.properties.city + '</b><br>' + "<b>" + "State: " + "</b>" + feature.properties.state + '</b><br>' + "<b>" + "Zip Code: " + "</b>" + feature.properties.zipcode + '</b><br>' + "<b>" + "Coordinates: " + "</b>" + feature.properties.y + "," +feature.properties.x + '</b><br>' + "<b>" + "Service Request ID: " + "</b>" + feature.properties.servicerequestid + '</b><br>' + "<b>" + "Service Order Date: " + "</b>" + feature.properties.serviceorderdate + '</b><br>' + "<b>" + "Service Due Date: " + "</b>" + feature.properties.serviceduedate + '</b><br>' + "<b>" + "Service Status: " + "</b>" + feature.properties.serviceorderstatus + '</b><br>' + "<b>" + "Resolution Date: " + "</b>" + feature.properties.resolutiondate);
					 },
//style the point marker
pointToLayer: function(feature, latlng) {
return L.circleMarker(latlng, geojsonMarkerOptions);
}
}).addTo(group);

map.fitBounds(group.getBounds()); // zooms to fit data
});


//-----------------------------------------------
// CONTROL FOR DROPDOWN
//-----------------------------------------------


var myControl = L.Control.extend({
options: {
position: "topleft"
},
onAdd: function(map) {
this._div = L.DomUtil.create("div", "myControl");
this._div.innerHTML =
'<h2 id="title">Request Status</h2>' +
'<select id="selector">' +
'<option value="init">All</option>' +
'<option value="layer1">In-Progress</option>' +
'<option value = "layer2">Closed</option>' +
"</select>";
L.DomEvent.disableClickPropagation(this._div);
return this._div;
}
});
map.addControl(new myControl());

var layer_select = L.DomUtil.get("selector");
//prevent clicks on the selector from propagating through to the map
//(otherwise popups will close immediately after opening)
L.DomEvent.addListener(layer_select, "click", function(e) {
L.DomEvent.stopPropagation(e);
});
L.DomEvent.addListener(layer_select, "change", change);

//-----------------------------------------------
// FUNCTIONS FOR HANDLING DROPDOWN UPDATES
//-----------------------------------------------

var querystem = "https://andrew-ryan.carto.com/api/v2/sql?format=GeoJSON&q=SELECT * FROM dc_potholes_30d"
// button functionality - get value from textfield and change layer
function change(e) {
// updating the layer means deleting the old one and
// adding a new one
//debugger;
group.removeLayer(geojsonlayer);

if (e.target.value == "init") {
 query = querystem;
} else if (e.target.value == "layer1") {
query = querystem + " WHERE serviceorderstatus = 'IN-PROGRESS'";
} else if (e.target.value == "layer2") {
query = querystem + " WHERE serviceorderstatus = 'CLOSED'";
}

console.log("Changed query: " + query);

$.getJSON(query, function(data) {
geojsonlayer = L.geoJson(data, {
onEachFeature: function(feature, layer) {
// add popup with some info
layer.bindPopup("<b>" + "Address: " + "</b>" + feature.properties.streetaddress + '</b><br>' + "<b>" + "City: " + "</b>" + feature.properties.city + '</b><br>' + "<b>" + "State: " + "</b>" + feature.properties.state + '</b><br>' + "<b>" + "Zip Code: " + "</b>" + feature.properties.zipcode + '</b><br>' + "<b>" + "Coordinates: " + "</b>" + feature.properties.y + "," +feature.properties.x + '</b><br>' + "<b>" + "Service Request ID: " + "</b>" + feature.properties.servicerequestid + '</b><br>' + "<b>" + "Service Order Date: " + "</b>" + feature.properties.serviceorderdate + '</b><br>' + "<b>" + "Service Due Date: " + "</b>" + feature.properties.serviceduedate + '</b><br>' + "<b>" + "Service Status: " + "</b>" + feature.properties.serviceorderstatus + '</b><br>' + "<b>" + "Resolution Date: " + "</b>" + feature.properties.resolutiondate);
},
//style the point marker
pointToLayer: function(feature, latlng) {
return L.circleMarker(latlng, geojsonMarkerOptions);
}
}).addTo(group);
});
//map.fitBounds(group.getBounds()); // zooms to fit data
}


// Variables to set layers in layer selection
var baseMaps = {
"Mapbox Satellite": MapboxSatellite,
"OSM": OSM,
};

var overlayMaps = {
"Potholes": group,
};

// Layer selections
// source: https://leafletjs.com/examples/layers-control/
L.control.layers(baseMaps, overlayMaps).addTo(map);
// Box zoom
// source: https://github.com/gregallensworth/L.Control.BoxZoom
L.Control.boxzoom({ position:'topleft' }).addTo(map);
