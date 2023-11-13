import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LeaderBoard = () => {
    return (
        <View style={styles.container}>
            <Text>LeaderBoard</Text>
        </View>
    )
}

export default LeaderBoard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})