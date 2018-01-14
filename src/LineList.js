import React from 'react';
import { connect } from 'react-redux'


export default class LineList extends React.Component {
  componentWillMount() {
    this.props = ({
      lines: [
        {
          id: 1,
          name: "N9",
          stopId: "1231989389102830"
        },
        {
          id: 1,
          name: "N10",
          stopId: "1231989389102830"
        }
      ]
    });
  }

  render() {
    const { lines } = this.props;

    return ( lines === null
      ? this.loader()
      :
      <ul>
      {
        lines.map((line, index) =>
          <li key={index}>
            {line.name}
          </li>)
      }
    </ul>);
  }

  loader() {
    return <p>Loading...</p>
  }
}




