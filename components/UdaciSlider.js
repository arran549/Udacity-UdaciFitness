import React from 'react';
import { View, Slider, Text } from 'react-native'

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


// export default class UdaciSlider extends Component {
//     state = {
//         value: 0
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <Slider
//                     minimumValue={-10}
//                     maximumValue={10}
//                     step={1}
//                     value={this.state.value}
//                     onValueChange={(value) => this.setState(() => ({ value }))}
//                 />
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginLeft: 10,
//         marginRight: 10,
//         alignItems: "stretch",
//         justifyContent: "center"
//     }
// })