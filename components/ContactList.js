import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Contact from './Contact';


export default function ContactList(props) {

  //Create a Component for each contact has and store them into an array
  let contactComponents = []
  props.contacts.forEach((contact, i) => contactComponents.push(<Contact key={i} contact={contact} updateNumber={props.updateNumber} showNumber={props.showNumber} />))

  //Return JSX
  return (
    <View>
      {contactComponents}
    </View>
  );
}