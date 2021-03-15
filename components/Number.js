import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function Number(props) {

  //Used to eliiminate the Number type if it doesn't exist
  let numberText = (props.number.type ? props.number.type + ": ": "") + props.number.number

  //Return JSX
  return (
    <View>
      <Text>
        {numberText}
      </Text>
      <Button title="Open Number" onPress={() => props.showNumber(props.number.number)} />
    </View>
  )
}

