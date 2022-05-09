import React, {useState} from "react";
import FilmItem from "../../components/film-item";

const FilmItemContainer = ({film}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const handlerCloseModal = () => {
        setModalVisible(!modalVisible)
    }
    const handlerOpenModal = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <FilmItem
            handlerCloseModal={handlerCloseModal}
            handlerOpenModal={handlerOpenModal}
            modalVisible={modalVisible}
            film={film}
        />
    )
}
export default FilmItemContainer

