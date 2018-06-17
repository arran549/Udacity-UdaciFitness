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
        <TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='#d4271b'>
          <Text style={styles.btnText}>Touchable Highlight</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Touchable Opacity</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback  onPress={this.handlePress}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Touchable without feedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <AddEntry />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  }
});


