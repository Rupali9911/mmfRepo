import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React from 'react'
import images from '../../Constants/images'
import Colors from '../../Constants/Colors'


const Leagues = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.listContainer}>
                <View style={styles.circleContainer}>
                    <Image source={images.ListImage} style={styles.circleImage} />
                </View>
                <View style={styles.gap} />
                <View style={styles.textColumn}>
                    <Text style={styles.itemText}>First Stripe Earned</Text>
                    <Text style={[styles.itemText, { fontWeight: '500', color: '#727682', maxWidth: '90%' }]}>Top 10% of highest spending players in a month</Text>
                </View>
            </View>
        )
    }


    return (
        <SafeAreaView style={{ backgroundColor: '#FFFFFF', padding: '5%' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topHeading}>
                    <Image source={images.Logo} style={styles.topImg} />
                    <Text>Profile</Text>
                    <Image source={images.Message} style={styles.topImg} />
                </View>
                <View style={styles.profileContainer}>
                    <Image source={images.ProfileImg} style={styles.profileIcon} />

                </View>
                <View style={styles.profileNameCont}>
                    <Text style={styles.profileName}>Jina Simons</Text>
                    <Text style={[styles.profileName, { fontSize: 12, color: '#727682' }]}>6000 Pts</Text>
                    <Text style={[styles.profileDesc]}>I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!</Text>
                </View>


                <View style={styles.container}>
                    <View style={styles.borderTop}>
                        <Image source={images.Star} style={styles.starImage} />
                        <View style={styles.box}>
                            <View style={styles.leftContent}>
                                <Text style={styles.text}>Under or Over</Text>
                                <View style={styles.boxArrowContent}>
                                    <Image source={images.UpArrow} style={styles.contentImage} />
                                    <Text style={styles.text}>81%</Text>
                                </View>
                            </View>
                            <View style={styles.rightContent}>
                                <Text style={styles.text}>Top 5</Text>
                                <View style={styles.boxArrowContent}>
                                    <Image source={images.DownArrow} style={styles.contentImage} />
                                    <Text style={styles.text}>-71%</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>


                <View style={styles.tabContainer}>
                    <View style={styles.leftScreen}>
                        <Text style={styles.screenText}>Games played</Text>
                    </View>
                    <View style={styles.rightScreen}>
                        <Text style={[styles.screenText, { color: '#6231AD' }]}>Badges</Text>
                    </View>
                    <View style={styles.bottomColor} />
                </View>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                    nestedScrollEnabled={false}
                    contentContainerStyle={{ width: '100%', padding: '2%', backgroundColor: '#EEEAF3' }}
                />
            </ScrollView>

        </SafeAreaView >
    )
}

export default Leagues

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    profileContainer: {
        alignItems: 'center',
    },
    profileIcon: {
        width: 100,
        height: 100,
        // borderRadius: 50,
        // marginBottom: 10,
    },
    profileDesc: {
        fontWeight: '500',
        color: '#727682',
        textAlign: 'center',
        padding: '2%'
    },
    profileNameCont: {
        alignItems: 'center',
        marginTop: 5,
        gap: 5
    },
    profileName: {
        // fontSize: 20,
        fontWeight: '500',
        colorL: '#333333'
    },


    container: {
        padding: 16,
    },
    borderTop: {
        borderWidth: 1,
        borderColor: '#EEEAF3',
        alignItems: 'center',
        position: 'relative',
        padding: 16,
        // justifyContent: 'space-between'

    },
    starImage: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: -15,
    },
    box: {
        // borderWidth: 1,
        // borderColor: 'black',
        // padding: 16,
        // marginTop: 15,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'stretch',

        // justifyContent: 'space-between'
    },
    leftContent: {
        // flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'flex-start',
        textAlign: 'left',
        gap: 10
        // paddingLeft: 10
    },
    rightContent: {
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        textAlign: 'right',
        gap: 10


        // marginTop: 8,
        // paddingLeft: 10

    },
    text: {
        // fontSize: 16,
        marginRight: 8,
        fontWeight: '600',
        color: '#727682'
    },
    contentImage: {
        width: 32,
        height: 32,
    },
    boxArrowContent: {
        flexDirection: 'row', gap: 5, alignItems: 'center'
    },




    tabContainer: {
        // flex: 1,
        flexDirection: 'row',
    },
    leftScreen: {
        flex: 1,
        // backgroundColor: 'lightgray', // Customize the background color
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightScreen: {
        flex: 1,
        // backgroundColor: 'lightblue', // Customize the background color
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#6231AD',
        borderBottomWidth: 3
    },
    screenText: {
        // fontSize: 18,
        fontWeight: '500',
        color: '#727682'
    },
    bottomColor: {
        height: 50, // Adjust the height of the bottom color as needed
        backgroundColor: 'orange', // Customize the bottom color
    },
    listContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFFFFF',
        margin: '2%'
    },
    circleContainer: {
        borderRadius: 50,
        overflow: 'hidden',
    },
    circleImage: {
        width: 60,
        height: 60,
        // borderRadius: 50,
    },
    gap: {
        width: 16, // Adjust the gap width as needed
    },
    textColumn: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    itemText: {
        // fontSize: 18,
        marginBottom: 8,
        fontWeight: '600',
        color: '#333333'
    },
    topImg: {
        width: 30,
        height: 30
    },
    topHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingVertical: '8%',
        alignItems: 'center'
    }
})

