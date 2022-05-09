import React from "react";
import {SafeAreaView, ImageBackground, FlatList} from 'react-native'
import FilmItemContainer from "../../containers/film-item-container";
import styles from './style'

const FilmsScreen = ({films}) => {
    return (
        <SafeAreaView style={styles.app}>
            <ImageBackground
                source={require('../../../assets/bg.png')}
                style={styles.bg}
            >
                <FlatList
                    columnWrapperStyle={{
                        flex: 1,
                        justifyContent: 'space-around'
                    }}
                    numColumns={3}
                    contentContainerStyle={{paddingBottom:100}}
                    keyExtractor={item=>item.id.toString()}
                    data={films}
                    renderItem={({item}) => <FilmItemContainer film={item} />}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}
export default FilmsScreen

