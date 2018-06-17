import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'
import DateHeader from './DateHeader'
import { timeToString } from '../utils/helpers'


function SubmitBtn ({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
                <Text>SUBMIT</Text>
        </TouchableOpacity>
    )
}

export default class AddEntry extends Component {

state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
}

increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)

    this.setState((state) => {
        const count = state[metric] + step

        return {
            ...state,
            [metric]: count > max ? max : count
        }
    })
}

slide = (metric, value) => {
    this.setState(() => ({
        [metric]: value
    }))
}

decrement = (metric) => {
    this.setState((state) => {
        const count = state[metric] - getMetaInfo(metric).step

        return {
            ...state,
            [metric]: count < 0 ? 0 : count
        }
    })
}

submit = () => {
    const key = timeToString()
    const entry = this.state

    // Update Redux 

    this.setState({
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0
    })

    // Navigate to HJome

    // Save to 'Db'

    // Clear the local notification
}

    render() {
        const metaInfo = getMetricMetaInfo()

        return (
            <View>
                <DateHeader date={new Date().toLocaleDateString()}/>
                <Text>{JSON.stringify(this.state)}</Text>
                {Object.keys(metaInfo).map((key) => {
                    const { getIcon, type, ...rest } = metaInfo[key]
                    const value = this.state[key]

                    return (
                        <View key={key}>
                            {getIcon()}
                            {type === 'slider' 
                            ? <UdaciSlider value={value} 
                                            onChange={(value) => this.slide(key, value)} 
                                            {...rest} />
                            : <UdaciSteppers value={value} 
                                             onIncrement={() => this.increment(key)} 
                                             onDecrement={() => this.decrement(key)} />
                            }
                        </View>
                    )
                })}

                <SubmitBtn onPress={this.submit} />
            </View>
        )
    }
}