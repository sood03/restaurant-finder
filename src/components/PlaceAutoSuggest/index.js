/**
 * Created by nitesood on 05-Feb-18.
 */

import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles';
import CircularProgress from 'material-ui/CircularProgress';
import LocationIcon from 'material-ui-icons/LocationOn'
import {Redirect} from 'react-router-dom';

class PlaceAutoSuggest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      loading: false,
      geocodeResults: null
    }
    this.onChange = (address) => this.setState({ address })
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.renderGeocodeFailure = this.renderGeocodeFailure.bind(this)
    this.renderGeocodeSuccess = this.renderGeocodeSuccess.bind(this)
  }

  handleSelect(address) {
    this.setState({
      address,
      loading: true,
    })

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({lat, lng}) => {
        console.log('Success Yay', {lat, lng});
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(lat, lng),
          loading: false,
        })
      })
      .catch(error => {
        console.log('Oh no!', error)
        this.setState({
          loading: false,
          geocodeResults: this.renderGeocodeFailure(error),
        })
      })
  }

  handleChange(address) {
    this.setState({
      address,
      geocodeResults: null,
    })
  }

  renderGeocodeFailure(err) {
    return (
      <div className="alert alert-danger" role="alert">
        <strong>Error!</strong> {err}
      </div>
    )
  }

  renderGeocodeSuccess(lat, lng) {
    return (
      <Redirect
        push
        to={{
          pathname: '/result',
          currentLocation: {
            lat: lat,
            lng: lng
          }
        }}/>
    )
  }


  render() {

    const cssClasses = {
      root: 'form-group',
      input: 'Demo__search-input',
      autocompleteContainer: 'Demo__autocomplete-container',
    }

    const Footer = () => (
      <div className="Demo__dropdown-footer">
        <div>
          <img
            src={require('../../images/powered_by_google_default.png')}
            className="Demo__dropdown-footer-image"
          />
        </div>
      </div>
    )

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="Demo__suggestion-item">
        <LocationIcon style={{marginTop: 2, marginRight: 8, fontSize: 10, color: 'rgb(117, 117, 117)'}}/>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">
          {formattedSuggestion.secondaryText}
        </small>
      </div>
    )

    const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      onBlur: () => {
        console.log('Blur event!')
      },
      onFocus: () => {
        console.log('Focused!')
      },
      autoFocus: true,
      placeholder: 'Enter location',
      name: 'Demo__input',
      id: 'my-input-id',
    }

    const shouldFetchSuggestions = ({ value }) => value.length > 2

    const onError = (status, clearSuggestions) => {
      console.log(
        'Error happened while fetching suggestions from Google Maps API',
        status
      )
      clearSuggestions()
    }

    return (
      <div className="container">
        <PlacesAutocomplete
          onSelect={this.handleSelect}
          onError={onError}
          renderSuggestion={AutocompleteItem}
          renderFooter={Footer}
          onEnterKeyDown={this.handleSelect}
          classNames={cssClasses}
          inputProps={inputProps}
          shouldFetchSuggestions={shouldFetchSuggestions}
        />
        {this.state.loading ? (
          <CircularProgress />
        ) : null}
        {!this.state.loading && this.state.geocodeResults ? (
          <div className="geocoding-results">{this.state.geocodeResults}</div>
        ) : null}
      </div>
    )
  }
}

export default PlaceAutoSuggest;