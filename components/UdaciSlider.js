import React from 'react';
import { View, Slider, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    displayUnits: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default function UdaciSlider ({ max, unit, step, value, onChange }) {



    return (
        <View>
            <Slider
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={0}
                onValueChange={onChange}
            />
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
}


