import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const styles = StyleSheet.create({
    heading: {
        fontWeight: '600',
        fontSize: 16,
        margin: '5%'
    },
    icon: {
        height: 13,
        width: 13
    },
    img: {
        width: 12,
        height: 12,
        resizeMode: 'contain'

    },
    container: {
        // padding: 16,
        marginHorizontal: '5%',
        backgroundColor: '#FFFFFF',
        height: 389,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
    },
    BannerImg: {
        height: 104,
        width: '100%'
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.themeColor,
        marginRight: 8,
    },
    iconContainer: {
        // Style your info icon container
    },
    clockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
        gap: 5
    },
    time: {
        marginLeft: 4,
    },
    sentence: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 600,
        color: Colors.themeColor
    },
    priceContainer: {
        // flexDirection: 'row',
        marginTop: 8,
        // backgroundColor: 'blue',
        // padding: 8,
        // borderRadius: 8,
        // alignItems: 'center',
    },
    priceLabel: {
        // fontSize: 16,
        fontWeight: '700',
        color: 'white',
    },
    priceValue: {
        fontSize: 16,
        marginLeft: 4,
        color: 'white',
    },
    // container: {
    //     backgroundColor: Colors.White, flex: 1
    // },
    // headerCont: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center'
    // },
    // leftHeaderCont: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     gap: 5
    // },
    // hembarger: {
    //     height: 20,
    //     width: 20,
    //     tintColor: Colors.themeColor
    // },
    // editButton: {
    //     borderWidth: 1,
    //     borderColor: Colors.themeColor,
    //     padding: 5,
    //     borderRadius: 5
    // },
    // themeColor: {
    //     color: Colors.themeColor
    // }

    secondContainer: {
        padding: 16,
        margin: '2%',
        flex: 1
    },
    prizePool: {
        fontSize: 12,
        fontWeight: '500',
        color: Colors.gray
    },
    prize: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333333'
    },
    secondSent: {
        fontWeight: '600',
        color: '#727682',
        padding: 10
    },
    pricesForAll: {
        marginTop: 8,
        fontSize: 18,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    button: {
        flex: 1,
        backgroundColor: '#452C55',
        borderRadius: 100,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    buttonLabel: {
        color: 'white',
        fontWeight: 'bold',
    },



    thirdContainer: {
        padding: 16,
        backgroundColor: '#F6F3FA'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 5

    },

    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        gap: 5

    },
    playersName: {
        // marginRight: 8,
        fontWeight: '600',
        color: '#727682'
        // fontSize: 16,
    },
    colorView: {
        flexDirection: 'row',
        height: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 100
    },
    colorHalf: {
        flex: 1,
        // width: '70%'
    },
    bottomInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
})

export default styles;
