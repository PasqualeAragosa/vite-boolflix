import { reactive } from 'vue';

export const store = reactive({

    movies: null,
    query: null,
    errorMessage: null,
    API_url: 'https://api.themoviedb.org/3/search/movie',
    API_images: 'https://image.tmdb.org/t/p/w342/',
    api_key: '8902f37ceb167968be0ac7d84334f2bf',

})