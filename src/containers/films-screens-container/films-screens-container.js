import axios from "axios";
import React, {useState, useEffect} from "react";
import FilmsScreen from "../../screens/films/FilmsScreen";

const FilmsScreenContainer = () => {
    const [films, setFilms] = useState([])
    useEffect(()=>{
        const getFilms = async() => {
            const res = await axios.get(
                'https://api.themoviedb.org/3/movie/popular?api_key=578ae1e94516c4bfc0b4aa5bbb8ab157&language=en-US'
            )
            setFilms(res.data.results)
        }
        getFilms()
    },[])
    return (
        <FilmsScreen films={films}/>
    )
}
export default FilmsScreenContainer

