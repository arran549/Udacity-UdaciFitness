import React from 'react'
import AddEntry from './components/AddEntry'
import { View, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {

  handlePress = () => {
    alert('Hello!')
  }

  store = createStore(reducer)

  render() {


    return (
      <Provider store={this.store}>
        <View style={styles.container} >
          <AddEntry />
        </View>
      </Provider>
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
