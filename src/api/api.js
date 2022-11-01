import axios from "axios"

const getMovies = async () => { 
    const { data } = await axios.get("https://api.themoviedb.org/3/movie/{movie_id}/lists?api_key=<<api_key>>&language=en-US&page=1", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    
}
