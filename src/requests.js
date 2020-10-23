const API_KEY = 'a458a4e97102ca0b875e24f037561bbd';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/trending/all/week?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=35`,
    fetchNHorrorMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/trending/all/week?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/trending/all/week?api_key=${API_KEY}&with_genres=99`
}

export default requests;