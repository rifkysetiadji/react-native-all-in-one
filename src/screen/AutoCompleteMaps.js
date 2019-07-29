import React from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
/*
The component is child component for location search 
the selected location can be stored in state variable
*/
export default class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  onRegionChange=(region, latitude, longitude) =>{
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      latitude: latitude || this.state.latitude,
      longitude: longitude || this.state.longitude
   });
 }
  render() {
    return (
      <View style={{ paddingTop: 20, flex: 1 }}>
        
      </View>
    );
  }
}