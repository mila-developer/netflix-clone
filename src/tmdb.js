const API_KEY =  "cf8019c27d8add0966aadea7f5a5200d";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) =>{
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()
  return json 
}

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
  getHomeList: async () => {
    return [
      {
          slug: 'originals',
          title: 'Originals of Netflix',
          items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
          slug: 'trending',
          title: 'Recommends for You',
          items: await basicFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY}`)
      },
      {
          slug: 'top rated',
          title: 'Top Rated',
          items: await basicFetch(`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)
      },
      {
          slug: 'action',
          title: 'Action',
          items: await basicFetch(`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`)
      },
      {
          slug: 'comedy',
          title: 'Comedy',
          items: await basicFetch(`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`)
      },
      {
          slug: 'horror',
          title: 'Horror',
          items: await basicFetch(`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`)
      },
      {
          slug: 'romance',
          title: 'Romance',
          items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`)
      },
      {
          slug: 'documentary',
          title: 'Documentaries',
          items: await basicFetch(`/discover/movie?with_genres=99&language=pt-br&api_key=${API_KEY}`)
      }
    ];
  },
  getMovieInfo: async (movieId, type) => {
    let info = {}
    if(movieId){
      switch (type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-br&api_key=${API_KEY}`);
          break
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-br&api_key=${API_KEY}`);
          break
        default:
          return info;
      }
    }
    return info;
  }
}