import React from 'react';

export default class Busys extends React.Component {

    constructor(props) {
        let routes = []
        super(props)
        fetch(
            'http://91.244.248.19/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4128329f-5adb-4082-b326-6e1aea7caddf/download/routes.json', {
                method: 'get',
                mode: 'no-cors',
            })
            .then(
                response =>array.filter(function() {
                    return routeShortName, routeLongName, activationDate = response.json()
                })).then(
            response => routes = response.json()
        ).then(
            json => console.log(json)
        ).catch(console.log)
    }

  render(){

    return (
      <h2>aaa</h2>
    )
  }
}