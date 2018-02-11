/**
 * Created by nitesood on 05-Feb-18.
 */

import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import CircularProgress from 'material-ui/CircularProgress';
import LocationIcon from 'material-ui-icons/LocationOn'
import {Redirect} from 'react-router-dom';
import * as constant from '../common/constants';
import { ApiUtils } from '../common/APIUtils';

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
      redirect : false,
      lat : '',
      lng : '',
      data : ''
    })

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(({lat, lng}) => {
        console.log('Success Yay', {lat, lng});
        this.setState({
          geocodeResults: this.renderGeocodeSuccess(lat, lng),
        })
      })
      .catch(error => {
        console.log('Oh no!', error)
        this.setState({
          loading: false,
          geocodeResults: this.renderGeocodeFailure(constant.MAPS_API_ERROR),
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
      <div className="alert alert-danger" role="alert" style={{color: 'white', marginTop: 15}}>
        <strong>Oops!</strong> {err}
      </div>
    )
  }

  renderGeocodeSuccess(lat, lng) {
    const URL = constant.ZOMATO_FETCH_BY_LOCATION_URL + constant.LATITUDE + constant.EQUAL+ lat + constant.AND + constant.LONGITUDE + constant.EQUAL + lng;

    fetch(URL, {
      method : "GET",
      headers : {
        Accept: 'application/json',
        'user-key' : constant.ZOMATO_API_KEY
      }
    }).then(ApiUtils.checkStatus)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          loading: false,
          redirect: true,
          lat: lat,
          lng: lng,
          data: responseJson
        })
      })
      .catch((error) => {
        this.setState({
          loading: false,
          geocodeResults: this.renderGeocodeFailure(error.name),
        });
        console.error(error);
      });
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
      placeholder: 'Enter location to search restaurants around you',
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

        {
          this.state.loading ?
            <CircularProgress size={30} color="white" style={{margin: 10, top:10, zIndex: 10}}/>
            :
            <div/>
        }
        {
          (this.state.redirect)
            ?
            <Redirect
              push
              to={{
                pathname: '/result',
                currentLocation: {
                  lat: this.state.lat,
                  lng: this.state.lng,
                  data : this.state.data
                }
              }}/>
            :
            null
        }

        {!this.state.loading && this.state.geocodeResults ? (
          <div className="geocoding-results">{this.state.geocodeResults}</div>
        ) : null}
      </div>
    )
  }
}

export default PlaceAutoSuggest;