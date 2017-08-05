import {Map} from './map';
import {mapdata} from './data';

export class App {
    constructor() {

    }
    start() {
        var map = new Map({lat: 27.9571272, lng: -82.4373484}, 10, 'themap');
        map.addLocations(mapdata);
    }
}