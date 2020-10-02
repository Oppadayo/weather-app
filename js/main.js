const APIKEY = '';
const APIURL = 'https://api.themoviedb.org/3/discover/movie?api_key=cec10ecab8ad0684310ec83287fe711a&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=1';

const IMGPATH = 'https://image.tmdb.org/t/p/w1280/'
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?api_key=cec10ecab8ad0684310ec83287fe711a&language=pt-BR&query='

const main = document.querySelector('main')
const form = document.querySelector('form')
const search = document.querySelector('#search')

getMovies(APIURL)

async function getMovies(url){
   const resp = await fetch(url)
   const respData = await resp.json()
   
   showMovies(respData.results)
  
}


function showMovies(movies){

    main.innerHTML = ''

    movies.forEach((movie) =>{ 
        const { poster_path, title, vote_average, overview} = movie
        const movieEl = document.createElement('div')
 
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
         <img src="${IMGPATH + poster_path}" alt="${title}">
         <div class="movie-info">
             <h3>${title}</h3>
             <span class="${getClassByRate(vote_average)}">${vote_average}</span>
         </div>
         <div class="overview">
            <h3>Sinopse:</h3>
            ${overview}
         </div>
        `
 
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green'
    } else if(vote >= 5){
        return 'orange'
    }else{
        return 'red'
    }
}


form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const searchItem = search.value

    if(searchItem){
        getMovies(SEARCHAPI + searchItem)
        search.value = ''
    }
})



