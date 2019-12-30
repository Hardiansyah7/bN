import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { FlatGrid } from 'react-native-super-grid';

export default class Home extends Component {
    render() {
        const items = [
            { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
            { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
            { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
            { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
            { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
            { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
            { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
            { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
            { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
            { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
            { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' }, 
          ];
        return (
            <View style={{ flex: 1 }}>

                {/* Header */}
                <View style={{ height: 100, backgroundColor: '#458cff', justifyContent: 'center' }}>
                    <Text style={{ alignSelf: 'center', fontSize: 36, color: 'white', fontWeight: 'bold' }}>Biodata 25 Nabi</Text>
                </View>

                {/* CONTENT */}
                <ScrollView style={{ flex: 1}}>
                    <FlatGrid
                        itemDimension={150}
                        spacing={10}
                        itemWidth={200}
                        items={items}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={[styles.itemContainer, { backgroundColor: item.code }]} onPress={null} activeOpacity={.4}>
                              <Text style={styles.itemName}>{item.name}</Text>
                              <Text style={styles.itemCode}>{item.code}</Text>
                            </TouchableOpacity>
                          )}
                    />
                    <TouchableOpacity style={{ backgroundColor: 'red', height: 150,marginBottom: 20, marginTop: -10, marginHorizontal: 10, borderRadius: 5, }}></TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    gridView: {
      marginTop: 20,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });