import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Detail extends Component {
    render() {
        return (
            <View>
                <Text> {this.props.navigation.state.params.nama} </Text>
            </View>
        )
    }
}
