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
        <View style={{flex: 1}} >
          <AddEntry />
        </View>
      </Provider>
    );
  }
}

