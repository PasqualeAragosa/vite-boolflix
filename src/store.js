import { reactive } from 'vue';

export const store = reactive({

    movie: null,
    query: 'matrix',
    errorMessage: null,
    API_url: 'https://api.themoviedb.org/3/search/movie',
    api_key: '8902f37ceb167968be0ac7d84334f2bf',

})