import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=8902f37ceb167968be0ac7d84334f2bf&language=en-US&query=',
    movies: '',
    search_title: '',
    original_title: '',
    language: '',
    rate: 0,

    callApi(nameMovie) {
        const url = `${this.API_URL}${nameMovie}`;
        console.log(url);

        axios
            .get(url)
            .then(response => {
                console.log(response.data);
                this.movies = response.data.results;
            })
            .catch(error => {
                console.log(error.message);
            })
    }
})