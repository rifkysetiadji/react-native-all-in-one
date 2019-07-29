import {View,Text,StyleSheet,Platform,TextInput,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import MapView from 'react-native-maps'
import TextField from '../component/textField.1'
import Icon from 'react-native-vector-icons/FontAwesome';
import Map from './AutoCompleteMaps'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import RNGooglePlaces from 'react-native-google-places';
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 500,
      width: 410,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      // marginBottom:20,
      height:'80%',
      width:'100%'
    },
   });
export default class mapScreen extends Component {
    static navigationOptions = {
        title: 'Maps',
        
      }; 
      state={
        mapRegion: null,
        latitude: null,
        longitude: null
      }
      handler=(arg)=>{
        this.setState({loc:arg})
        return;
      }
      onRegionChange=(region, latitude, longitude) =>{
        this.setState({
          mapRegion: region,
          // If there are no new values set the current ones
          latitude: latitude || this.state.latitude,
          longitude: longitude || this.state.longitude
       });
      }
      openSearchModal() {
        RNGooglePlaces.openAutocompleteModal()
        .then((place) => {
            console.log(place);
            // place represents user's selection from the
            // suggestions and it is a simplified Google Place object.
        })
        .catch(error => console.log(error.message));  // error is a Javascript Error object
      }
    render() {
        return (
            
           
           <View style={{flex:1}}>

                 
                {/* <Map handler={this.handler}/> */}
                {/* <View style={{position:'absolute',zIndex:1}}>
                <GooglePlacesAutocomplete
                placeholder='Enter Location'
                returnKeyType={'search'}
                minLength={2}
                autoFocus={false}
                // fetchDetails
                listViewDisplayed='auto'
                query={{
                    key: 'AIzaSyALIgTPHVBSRXzQz097PF4Qp7DVbIciR6Y',
                    language: 'en',
                    types: 'geocode',
                }}
                styles={{
                  textInputContainer: {
                    width: 400
                  },
                  description: {
                    fontWeight: 'bold'
                  },
                  predefinedPlacesDescription: {
                    color: '#1faadb'
                  },
                  listView:{
                    backgroundColor:'white'
                  }
                }}
                currentLocation={false}
                onPress={(data, details = null) => {
                  const region = {
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                    latitudeDelta: 0.00922 * 1.5,
                    longitudeDelta: 0.00421 * 1.5
                  };
                  this.onRegionChange(region, region.latitude, region.longitude);
                }}
              />
            </View> */}
                <MapView
                style={styles.map}
                initialRegion={{
                  latitude: -6.2309248,
                  longitude: 106.80406,
                  latitudeDelta: 0.00922 * 1.5,
                  longitudeDelta: 0.00421 * 1.5,
                }}
                >
                  <MapView.Marker
                    coordinate={{
                        latitude: -6.2309248,
                        longitude: 106.804063,
                    }}
                    title="Lokasi"
                    description="Hello" />
                </MapView>
                <View style={{flex:1,flexDirection:'row'}}>
                  <TextInput
                    style={{width:300,borderWidth:2,height:Platform.OS==='ios'?40:50,textAlign:'center',borderRadius:10,margin:5,fontSize:25,position:'relative',}}
                  />
                  <TouchableOpacity onPress={() => this.openSearchModal()} style={{width:60,height:50,backgroundColor:'black',borderRadius:10,alignItems:'center',justifyContent:'center'}}>
                    <Icon name='arrow-right' size={26} color='white' />
                  </TouchableOpacity> 
                </View>
                
                </View>
        )
    }
}
