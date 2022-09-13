const APIURL= 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fc7f4571c91d868b56d9486debec1966&page=1';

const IMPGPATH = 'https://image.tmdb.org/t/p/w1280';

async function getMovies() {
    const resp = await fetch(APIURL);
    const respData = await resp.json();


    console.log(respData);

    

    return respData;
}

getMovies();


