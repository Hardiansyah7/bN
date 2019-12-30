import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Detail extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                {/* HEADER */}
                <View style={{ height: 80, backgroundColor: '#458cff', justifyContent: 'center', paddingHorizontal: 20 }}>
                    <Ionicons name='ios-arrow-back' size={28} color='white' onPress={()=> this.props.navigation.goBack() }/>
                </View>
                <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
                    <Text> {this.props.navigation.state.params.nama} </Text>
                </View>
            </View>
        )
    }
}
