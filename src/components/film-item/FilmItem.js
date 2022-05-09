import React from "react";
import {TouchableOpacity, Text, Image, Modal,
    SafeAreaView
 } from "react-native"
import styles from './style'

const FilmItem = ({film, handlerCloseModal, handlerOpenModal, modalVisible}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.3}
            style={styles.filmItem}
            onPress={handlerOpenModal}
        >
            <Image 
                source={{uri: `https://image.tmdb.org/t/p/w200${film.poster_path}`}}
                style={styles.image}
            />
            <Text style={styles.title}>
                {film.title}
            </Text>
            <Modal
                animationType="slide"
                presentationStyle="formSheet"
                visible={modalVisible}
            >
                <SafeAreaView 
                style={styles.modal}>
                    <Text
                        onPress={handlerCloseModal}
                        style={styles.close}
                    >&times;</Text>
                </SafeAreaView>
                <Image
                    source={{uri: `https://image.tmdb.org/t/p/w200${film.poster_path}`}}
                    style={styles.modalImg}
                />
                <Text style={styles.overview}>{film.overview}</Text>
            </Modal>
        </TouchableOpacity>
    )
}
export default FilmItem