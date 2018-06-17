import React from 'react'
import AddEntry from './components/AddEntry'

import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
}  from 'react-native'

export default class App extends React.Component {

  handlePress = () => {
    alert('Hello!')
  }

  render() {


    return (
      <View style={styles.container} >
        <AddEntry />
      </View>
    );
  }
}

