import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({

    movie: 'matrix',
    query: null,
    errorMessage: null,
    API_url: 'https://api.themoviedb.org/3/search/movie',
    api_key: '8902f37ceb167968be0ac7d84334f2bf',
    // Esempio di chiamata 
    // ${API_url}?api_key=${api_key}&query=matrix
    callApi(url) {
        axios.get(url)
            .then(response => {
                url += `?api_key=${this.api_key}&query=${this.query}`
                this.movie = response.data.results;
            })
            .catch(error => {
                console.log(error.message);
                this.errorMessage = error.message;
            })
    }



    // config: {
    //     method: 'GET',
    //     url: 'https://api.themoviedb.org/3/search/movie',

    //     params: {
    //         api_key: '8902f37ceb167968be0ac7d84334f2bf',
    //         query: '',
    //         language: '',

    //     }
    // }



})