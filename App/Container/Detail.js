import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, BackHandler } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Detail extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackEvent)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackEvent)
    }

    onBackEvent = () => {
        this.props.navigation.goBack()
        return true
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>

                <View style={{ backgroundColor: '#ff9800', justifyContent: 'center', alignItems: "center", height: 150 }}>
                    <Text style={styles.textUtama}> {this.props.navigation.state.params.nama} </Text>
                    <Text style={styles.textAlias}> {this.props.navigation.state.params.alias} </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ backgroundColor: '#00BFFF', justifyContent: 'center', alignItems: "center", height: 150, width: '50%' }}>
                        <Text style={styles.textKedua}> {this.props.navigation.state.params.usia} </Text>
                        <Text style={styles.textLabel}>Usia</Text>
                    </View>
                    <View style={{ backgroundColor: '#9370DB', justifyContent: "center", alignItems: "center", height: 150, width: '50%' }}>
                        <Text style={styles.textKedua}> {this.props.navigation.state.params.periode} </Text>
                        <Text style={styles.textLabel}>Periode</Text>
                    </View>
                </View>
                <View style={{ marginBottom: 30, display: 'flex', justifyContent: "space-around", marginTop: 20, marginHorizontal: 10 }}>
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: '10%', justifyContent: 'center' }}>
                                <Ionicons name='md-pin' size={30} color='orange' style={{ alignSelf: 'center' }} />
                            </View>
                            <View style={{ marginLeft: 20, flex: 1 }}>
                                <Text style={styles.textJudulDetail}>Tempat Diutus</Text>
                                <Text style={styles.textDetail}>{this.props.navigation.state.params.tempat_diutus}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: '10%', justifyContent: 'center' }}>
                                <Ionicons name='ios-book' size={30} color='orange' style={{ alignSelf: 'center' }} />
                            </View>
                            <View style={{ marginLeft: 20, flex: 1 }}>
                                <Text style={styles.textJudulDetail}>Disebut Dalam Al-Quran</Text>
                                <Text style={styles.textDetail}>{this.props.navigation.state.params.disebut}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: '10%', justifyContent: 'center' }}>
                                <Ionicons name='md-git-network' size={30} color='orange' style={{ alignSelf: 'center' }} />
                            </View>
                            <View style={{ marginLeft: 20, flex: 1 }}>
                                <Text style={styles.textJudulDetail}>Jumlah Keturunan</Text>
                                <Text style={styles.textDetail}>{this.props.navigation.state.params.keturunan}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: '10%', justifyContent: 'center' }}>
                                <Ionicons name='ios-people' size={30} color='orange' style={{ alignSelf: 'center' }} />
                            </View>
                            <View style={{ marginLeft: 20, flex: 1 }}>
                                <Text style={styles.textJudulDetail}>Sebutan Kaum</Text>
                                <Text style={styles.textDetail}>{this.props.navigation.state.params.kaum}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: '10%', justifyContent: 'center' }}>
                                <Ionicons name='ios-remove-circle' size={30} color='orange' style={{ alignSelf: 'center' }} />
                            </View>
                            <View style={{ marginLeft: 20, flex: 1 }}>
                                <Text style={styles.textJudulDetail}>Tempat Wafat</Text>
                                <Text style={styles.textDetail}>{this.props.navigation.state.params.tempat_wafat}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ width: '10%', justifyContent: 'center' }}>
                                <Ionicons name='ios-bookmark' size={30} color='orange' style={{ alignSelf: 'center' }} />
                            </View>
                            <View style={{ marginLeft: 20, flex: 1 }}>
                                <Text style={styles.textJudulDetail}>Disyar'i kan dari</Text>
                                <Text style={styles.textDetail}>Qashash al-Anbiya' Ibn Katsir, Badai' az-Zuhur Imam as-Suyuthi dan selainnya</Text>
                            </View>
                        </View>
                    </View> 
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    textUtama: {
        color: 'white',
        fontSize: 40,
        textAlign: "center",
    },
    textAlias: {
        color: 'white',
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
        paddingLeft: 5,
        paddingRight: 5
    },
    textKedua: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        paddingLeft: 5,
        paddingRight: 5
    },
    textLabel: {
        color: 'white',
        fontSize: 20,
    },
    iconDetail: {
        margin: 10,
    },
    textJudulDetail: {
        fontSize: 18,
    },
    textDetail: {
        color: '#545454',
    }
});