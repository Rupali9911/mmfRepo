import { SafeAreaView, ScrollView, View, Modal, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import images from '../../Constants/images'
import Colors from '../../Constants/Colors'
import { BlurView } from "@react-native-community/blur";


const HomeScreen = () => {
    const [isModalVisible, setModalVisible] = useState(false);


    const RenderButton = (props) => {
        return (
            <TouchableOpacity style={[styles.button, { backgroundColor: props.color }]} onPress={props.onPress}>
                <Text style={styles.buttonLabel}>{props.title}</Text>
            </TouchableOpacity>
        )
    }


    const toggleModal = () => {
        console.log('jfdkslj')
        setModalVisible(!isModalVisible);
    };

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.heading}>Today's Game</Text>
            </View>
            <View style={styles.container}>
                <View style={{ backgroundColor: '#6231AD', padding: 16 }}>
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>Under or Over</Text>
                        <View style={styles.iconContainer}>
                            {/* Your info icon here */}
                            <Image source={images.InfoIcon} style={styles.icon} />
                        </View>
                        <View style={styles.clockContainer}>
                            {/* Your clock icon here */}
                            <Text style={styles.name}>03:23:12</Text>

                            <Image source={images.Clock} style={styles.icon} />
                            <Text style={styles.name}>03:23:12</Text>
                        </View>
                    </View>
                    <Text style={styles.sentence}>Bitcoin price will be under</Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceLabel}>$24,524 at 7 a ET on 22nd Jan’21</Text>
                    </View>
                </View>

                <View style={styles.secondContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                        <Text style={styles.prizePool}>Prize Pool</Text>
                        <Text style={styles.prizePool}>Under</Text>
                        <Text style={styles.prizePool}>Over</Text>
                        <Text style={styles.prizePool}>Entry Fees</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                        <Text style={styles.prize}>$12,000</Text>
                        <Text style={styles.prize}>3.25x</Text>
                        <Text style={styles.prize}>1.25x</Text>
                        <Text style={styles.prize}>5</Text>
                    </View>
                    <Text style={styles.secondSent}>What’s your prediction?</Text>
                    <View style={styles.buttonContainer}>
                        <RenderButton title={'Under'} color={'#452C55'}
                            onPress={toggleModal}
                        />
                        <RenderButton title={'Over'} color={'#6231AD'}
                            onPress={toggleModal} />

                    </View>
                </View>


                <View style={styles.thirdContainer}>
                    <View style={styles.header}>
                        <View style={styles.leftContainer}>
                            <Image source={images.Players} style={styles.img} />
                            <Text style={styles.playersName}>355 Players</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <Image source={images.ViewChart} style={styles.img} />
                            <Text style={styles.playersName}>View chart</Text>
                        </View>
                    </View>
                    <View style={styles.colorView}>
                        <View style={[styles.colorHalf, { backgroundColor: '#FE4190' }]} />
                        <View style={[styles.colorHalf, { backgroundColor: '#2DABAD' }]} />
                    </View>
                    <View style={styles.bottomInfo}>
                        <Text style={[styles.playersName, { color: Colors.gray }]}>232 predicted under</Text>
                        <Text style={[styles.playersName, { color: Colors.gray }]}>123 predicted over</Text>
                    </View>
                </View>

            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => {
                }}
            >

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Modal</Text>
                </View>
            </Modal>
        </SafeAreaView >
    )
}

export default HomeScreen

