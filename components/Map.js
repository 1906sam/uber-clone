import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { MapMarker } from 'react-native-maps';
import tw from "twrnc";
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlices';

const Map = () => {
    const origin = useSelector(selectOrigin);
  return (
    <MapView
        style={tw`flex-1`}
        mapType='mutedStandard'
        initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
    }}
    >

    {/* TODO: Continue from this marker */}
    {origin?.location && ( 
        <MapMarker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,  
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
        />
    )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})