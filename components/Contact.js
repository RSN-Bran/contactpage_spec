import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

import Number from './Number';

'use strict';

import images from '../assets/images'

export default function Contact(props) {

  //Load an image for the contact, if one doesn't exist use the placeholder. All images currently stored in ../assets
let image = images[props.contact.image];
if (!image) {
  image = images["placeholder"]
}


  //Get the contacts full name. If the firstName or lastName fields are blank do not display them. If both are blank set the name as 'CONTACT NAME UNKNOWN"
  let contactFullName
  if (props.contact.firstName || props.contact.lastName) {
    contactFullName = `${props.contact.firstName ? props.contact.firstName : ""} ${props.contact.lastName ? props.contact.lastName : ""}`.trim()
  }
  else {
    contactFullName = "CONTACT NAME UNKNOWN"
  }
   
  //Create a Component for each valid phone number the user has and store them into an array
  let numberComponents = []
  try {
    props.contact.phoneNumbers.forEach(function (number, i) {
      if(number.number)
        numberComponents.push(<Number key={i} number={number} showNumber={props.showNumber} />)
    })
  }
  catch {}

  //Create a Button to display the contact. If no numbers are available for this user, disable the button and give it a different title
  let contactButton;
  if (numberComponents.length === 0) {
    contactButton = <Button buttonStyle={{ width: "20%" }} disabled title="No Numbers Available" />
  }

  //Return JSX
  return (
    <View >
      <Image style={{ width: 50, height: 50 }} source={image}/>
        <Text>
          {contactFullName}
        </Text>
      {numberComponents}
      {contactButton}
      </View>
    )
} 
