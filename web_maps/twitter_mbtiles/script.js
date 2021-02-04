// Define map instance
var lat = 36.09;
var long = -98.85;
var zoom = 5;

var map = L.map('map',{
    minZoom: 3,
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
        zoomHomeTitle: 'Zoom home'
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
  "https://api.mapbox.com/styles/v1/andrrvt15/cjtkk048b0xop1fl5126npyot/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW5kcnJ2dDE1IiwiYSI6ImNqbnZjZjZjdDA2ZnEzcWtiaGNnOW0ycWwifQ.Z5TqMbq4qCI0rCV4rZHRGg",
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

// Variables to set layers in layer selection
var baseMaps = {
"Mapbox Satellite": MapboxSatellite,
"OSM": OSM,
};


// Layer selections
// source: https://leafletjs.com/examples/layers-control/
L.control.layers(baseMaps, overlayMaps).addTo(map);
// Box zoom
// source: https://github.com/gregallensworth/L.Control.BoxZoom
L.Control.boxzoom({ position:'topleft' }).addTo(map);