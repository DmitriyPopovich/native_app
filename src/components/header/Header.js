import React from 'react'
import { View, Image } from 'react-native';
import styles from "./style";

const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../../../assets/react-n.png')}
                style={styles.logo}
            />
        </View>
    )
}
export default Header
