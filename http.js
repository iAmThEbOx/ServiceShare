import axios from 'axios';
import * as maps from './maps';

exports.EventResponse = class {
    constructor(id, title, description, creationDate, startDate, endDate, lat, long, type, purpose, estimatedTurnout) {
        this.title = title;
        this.description = description;
        this.creationDate = creationDate;
        this.startDate = startDate;
        this.endDate = endDate;
        this.lat = lat;
        this.long = long;
        this.type = type;
        this.purpose = purpose;
        this.estimatedTurnout = estimatedTurnout;
    }
}

exports.getAllEvents = async function () {
    const res = await axios.get('localhost:8000/events');
    return res.body;
}

exports.filterEvents = async function ({type, minDate, maxDate, distance, location}) {
    const res = await getAllEvents();
    return res.body.filter(
        event =>
        event.type === type &&
        Date(event.startDate) < maxDate && 
        Date(event.startDate) >= minDate &&
        Number(maps.distanceLatLng({lat1:location.lat,lng1:location.lng,lat2:event.lat,lng2:event.lng}).slice(0, -4)) < distance
    );
}


