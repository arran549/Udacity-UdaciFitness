import React from 'react'
import AddEntry from './components/AddEntry'
import { View, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'

export default class App extends React.Component {

  handlePress = () => {
    alert('Hello!')
  }

  store = createStore(reducer)

  render() {


    return (
      <Provider store={this.store}>
        <View style={{flex: 1}} >
          <History />
        </View>
      </Provider>
    );
  }
}

