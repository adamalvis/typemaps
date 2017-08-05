import 'googlemaps';
import {Component} from './component';

interface LatLng {
    lat: number;
    lng: number;
}

interface Location {
    position: LatLng;
    name: string;
    link: string;
    markerText: string;
}

export class Map extends Component {
    private map: google.maps.Map;
    
    constructor(center: LatLng, zoom: number, elemId: string) {
        super('infowindow'); // sets component template name
        var mapElem = document.getElementById(elemId);
        
        if (mapElem) {
            this.map = new google.maps.Map(mapElem, {
                zoom: zoom,
                center: center,
            });
        } else {
            console.log('Could not find map element with provided ID: ' + elemId);
        }
        
    }

    addLocations(locations: Array<Location>) {
        for (var i=0; i<locations.length; i++) {
            var marker = new google.maps.Marker({
                position: locations[i].position,
                map: this.map,
            });
            this.createInfoWindow(locations[i], marker);
        }
    }

    createInfoWindow(location: Location, marker: google.maps.Marker) {
        this.getTemplate(function (template: any) {

            var html = template(location),
                infowindow = new google.maps.InfoWindow({
                    content: html,
                });
            
            marker.addListener('click', function () {
                infowindow.open(this.map, marker);
            });

        });
    }
}