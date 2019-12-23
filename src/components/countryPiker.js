import React from 'react'
import {
    View,
    Text,
    Modal,
    FlatList,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'

import {Icon} from 'native-base'
import data from '../appConfig/countries'
import {color} from "../appConfig/cssConfig";


const defaultFlag = data.filter(
    obj => obj.name === 'Ukraine'
)[0].flag

export default class CountryPiker extends React.Component {
    state = {
    flag: defaultFlag,
    modalVisible: false,
    phoneNumber: '+380',
    value:''
}

    // renderCountry() {
    //     return data.map(item => {
    //
    //         return (
    //             <View
    //                 onPress={() => this.getCountry(item.name)}>
    //                 <View
    //                   >
    //                     <Text style={{fontSize: 45}}>
    //                         {item.flag}
    //                     </Text>
    //                     <Text style={{fontSize: 20, color: '#545254'}}>
    //                         {item.name} ({item.dial_code})
    //                     </Text>
    //                 </View>
    //             </View>
    //
    //         )
    //     })
    // }

    onChangeText = (value) => {
        this.setState({
            value
        }, () => {
            this.props.onChangeText(value);
        })
    }
    showModal() {
        this.setState({ modalVisible: true })
    }
    hideModal() {
        this.setState({ modalVisible: false })
    }

    async getCountry(country) {
        const countryData = await data
        try {
            const countryCode = await countryData.filter(
                obj => obj.name === country
            )[0].dial_code
            const countryFlag = await countryData.filter(
                obj => obj.name === country
            )[0].flag
            this.setState({ phoneNumber: countryCode, flag: countryFlag })
            await this.hideModal()

            const {getValue} = this.props
            getValue(this.state.phoneNumber)
        }
        catch (err) {
            console.log(err)
        }
    }


    render() {
        let { flag } = this.state
        const countryData = data
        return (
                  <View style={styles.itemsStyle}>
                            <Icon
                                active
                                name='call'
                                style={styles.iconStyle}
                            />
                            <Text style={{fontSize: 25}}>{flag}</Text>
                            <Icon
                                active
                                name='md-arrow-dropdown'
                                style={[styles.iconStyle, { marginLeft: 5 }]}
                                onPress={() => this.showModal()}
                            />

                                <Text style={styles.input}>{this.state.phoneNumber}</Text>


                            <Modal
                                animationType="slide" // fade
                                transparent={false}
                                visible={this.state.modalVisible}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flex: 10, paddingTop: 80, backgroundColor: '#d6d4d6' }}>
                                        <FlatList
                                            data={countryData}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem={
                                                ({ item }) =>
                                                    <TouchableWithoutFeedback
                                                        onPress={() => this.getCountry(item.name)}>
                                                        <View
                                                            style={
                                                                [
                                                                    styles.countryStyle,
                                                                    {
                                                                        flexDirection: 'row',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'space-between'
                                                                    }
                                                                ]
                                                            }>
                                                            <Text style={{fontSize: 45}}>
                                                                {item.flag}
                                                            </Text>
                                                            <Text style={{fontSize: 20, color: '#545254'}}>
                                                                {item.name} ({item.dial_code})
                                                            </Text>
                                                        </View>
                                                    </TouchableWithoutFeedback>
                                            }
                                        />
                                        {/*{this.renderCountry()}*/}
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.hideModal()}
                                        style={styles.closeButtonStyle}>
                                        <Text style={styles.textStyle}>
                                            Close
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>
                  </View>

        )
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
    },
    itemsStyle:{
        flexDirection:'row' ,
        alignItems: 'center',
    },
    itemStyle: {
        width:300,
        marginBottom: 10,
        backgroundColor:color,
        borderColor: color
    },
    iconStyle: {
        color: '#fff',
        fontSize: 20,
        marginHorizontal: 10
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#b44666',
        padding: 14,
        marginBottom: 10,
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
    },
    textStyle: {
        padding: 5,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    countryStyle: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopColor: '#bebcbe',
        borderTopWidth: 1,
        padding: 12,
    },
    closeButtonStyle: {
        flex: 1,
        padding: 12,
        alignItems: 'center',
        backgroundColor: '#bebcbe',
    }
})

