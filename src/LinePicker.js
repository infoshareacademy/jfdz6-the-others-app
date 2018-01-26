import React from 'react';
import { connect } from 'react-redux';

const tramwaje = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
const autobusy = ['100', '106', '107', '108',  '110',
  '111',  '112',  '113',  '115',   '116',  '117',  '118',  '122',
  '123',  '124',  '126',  '127',  '129',  '130',  '131',  '132',
  '136',  '138',  '139',  '143',  '148',  '149',  '154',  '155',
  '156',  '157',  '158',  '161',  '162',  '164',  '166',  '167',
  '168',  '169',  '171',  '174',  '175',  '178',  '179',  '184',
  '186',  '188',  '189',  '195',  '199',  '200',  '205',  '207',
  '210',  '212',  '213',  '227',  '232',  '255',  '256',  '262',
  '267',  '268',  '269', '283', '295', '315', '512', '574'];
const nocne = ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N8', 'N9', 'N11', 'N12', 'N13'];

export class LinePicker extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const line = e.target.value;
    this.props.onChange(line);
  }

  render() {
    return (

      <div>
        <select
          id="lines"
          onChange={this.handleChange}>
          <optgroup label="Tramwaje">
            {tramwaje.map(item => <option value={item}>{item}</option>)}
          </optgroup>
          <optgroup label="Autobusy">
            {autobusy.map(item => <option value={item}>{item}</option>)}
          </optgroup>
          <optgroup label="Nocne autobusy">
            {nocne.map(item => <option value={item}>{item}</option>)}
          </optgroup>

        </select>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  linepicker: state.linepicker
});

export default connect(
  mapStateToProps,
  null
)(LinePicker);
