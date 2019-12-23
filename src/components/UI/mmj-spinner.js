import React, {Component} from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
import {StyleSheet} from "react-native";


 const MmjSpinner = () => {
        return (
            <Container style={styles.container}>
                    <Spinner color='violet' />
            </Container>
        );
}

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default MmjSpinner

