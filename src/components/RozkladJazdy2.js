import React, { Component } from "react";

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import stops from './../stops'
import tripstops from './../ts'
// import initialState from './state/googlemap'
import GoogleMap from './../Googlemap'

class RozkladJazdy2 extends Component {

    state = {
        routes: [],
        selectedRoute: null,
        trips: [],
        selectedTrip: null,
        stops: [],
        allStops: {}
    }

    setSelectedRoute = (event) => {
        let route = this.state.routes.find( e => e.routeShortName === event.target.value )
        this.setState({
            selectedRoute: route.routeId
        },
        this.getRouteTrips )
    }

    setSelectedTrip = (event) => {
        let trip = this.state.trips.find( e => e.tripHeadsign === event.target.value )
        if( !trip ) return false;
        this.setState({
            selectedTrip: trip.tripId
        },
        this.getRouteTripStops )
    }

    getRoutes(){
        const routesUrl = 'https://cors-anywhere.herokuapp.com/http://91.244.248.19/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4128329f-5adb-4082-b326-6e1aea7caddf/download/routes.json';
        fetch(routesUrl)
            .then(response =>{
                return response.json()
            } )
            .then(response => response[Object.keys(response)[0]].routes )
            .then( this.setRoutes )
            .catch((e) => {
                console.warn(
                    e
                );
            });
    }

    getRouteTrips(){
        const routesUrl = 'https://cors-anywhere.herokuapp.com/http://91.244.248.19/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/33618472-342c-4a4a-ba88-a911ec0ad5a7/download/trips.json';
        fetch(routesUrl)
            .then(response =>{
                return response.json()
            } )
            .then(response => response[Object.keys(response)[0]].trips )
            .then( response => response.filter( e => e.routeId == this.state.selectedRoute) )
            .then( this.setTrips )
            .catch((e) => {
                console.warn(
                    e
                );
            });
    }

    getRouteTripStops(){
        let tripStops = this.state.tripStops[ this.state.selectedTrip ]
        let thisStops = tripStops.map( e => this.state.allStops[ e.stopId ])
        let stop = thisStops.filter( e => e.stopName && e.stopLat )

        let coord = stop.map( e => { return {lat: e.stopLat, lng: e.stopLon} })

        this.setStops(stop)
    }

    setRoutes = routes =>
        this.setState({
            routes: routes
        })

    setTrips = trips => {
        this.setState({
            trips: trips
        })
    }
    setStops = stops => {
        console.log('STOPS', stops)
        this.setState({
            stops: stops
        })
    }

    componentDidMount(){
        this.getRoutes()

        let stops2 = {}
        stops.forEach( e => stops2[ e.stopId ] = e )

        let ts = {}
        tripstops.forEach( e => {
            if( !ts[e.tripId ]) {
                ts[e.tripId] = [];
            }
            ts[e.tripId].push(e)
        })

        this.setState({
            allStops: stops2,
            tripStops: ts,
        })
    }

    render() {
        const {routes, trips, stops} = this.state
        console.log( trips.length)
        return (
            <div className='rozklad-jazdy'>
                <div>
                    <FormGroup>
                        {/*<Label for="exampleSelect">Wybierz linię</Label>*/}
                        <Input type="select" name="select" id="routeSelect" onChange={this.setSelectedRoute}>
                            <option>Wybierz linię</option>
                    {routes && routes.map( e => <option key={e.routeId}>{e.routeShortName}</option> )}
                        </Input>
                    </FormGroup>
                </div>
                <div>
                    {trips.length === 0 && <span>Nie znaleziono tras</span>}
                    {trips.length > 0 &&
                    <FormGroup>
                        {/*<Label for="exampleSelect">Wybierz Trasę</Label>*/}
                        <Input type="select" name="select" id="tripSelect" onChange={this.setSelectedTrip}>
                            <option>Wybierz trasę</option>
                            {trips.map( e => <option key={e.tripId}>{e.tripHeadsign}</option> )}
                        </Input>
                    </FormGroup>}
                </div>
                <div>
                    {stops.length === 0 && <span>Nie znaleziono przystanków</span>}
                    {stops.length > 0 &&
                    <FormGroup>
                        {/*<Label for="exampleSelect">Wybierz przystanek</Label>*/}
                        <Input type="select" name="select" id="stopSelect">
                            <option>Wybierz przystanek</option>
                            {stops.map( e => <option key={e.stopId}>{e.stopName}</option> )}
                        </Input>
                    </FormGroup>}
                </div>
                <div style={{width: '100%', height: '400px'}}>
                    <GoogleMap />
                </div>
            </div>
        );
    }
}

export default RozkladJazdy2;