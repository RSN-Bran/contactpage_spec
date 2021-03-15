import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, ScrollView, View, StyleSheet, Button, Image, Alert } from 'react-native';

//Import Contacts from data file
import contacts from './data/contacts.json'

// Import Components
import ContactList from './components/ContactList';


export default function App() {

  //State variables and update functions
  const [showContacts, updateShowContacts] = useState(false)
  const [showContactButton, updateShowContactButton] = useState(true)
  const [number, updateNumber] = useState(null)

  //Display the list of contacts
  function fetchContacts() {
    updateShowContactButton(false)
    updateShowContacts(true)
    updateNumber(number => null)
  }

  //Go back to the homescreen and show the selected number
  function showNumber(number) {
    updateShowContacts(false)
    updateShowContactButton(true)
    updateNumber(value => number)

  }

  //Button to fetch Contacts
  const contactButton = <Button
    title="Open Contacts"
    color="blue"
    onPress={() => fetchContacts()}
  />

  //Return JSX
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <Text>
        {number === null ? null : number}
      </Text>
      {showContactButton ? contactButton : null}
      {showContacts ? <ContactList contacts={contacts} updateNumber={updateNumber} showNumber={showNumber} /> : null}
    </ScrollView>
  );
}
