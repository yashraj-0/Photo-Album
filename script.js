
const APIURL= 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMGPATH= 'https://image.tmdb.org/t/p/w1280'
const SEARCHAPI= 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main =document.getElementById('main')

getMovies(APIURL)

async function getMovies (url) {
    const res =await fetch(url)
    const data =await res.json()

    showMovies(data.results);
}

function showMovies (movies) {
    main.innerHTML =''
    movies.forEach((movie) => {
        const {title,poster_path} = movie

        const movieEl= document.createElement ('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML =`
        <figure class="pic">
          <img src="${IMGPATH + poster_path}" alt="${title}">
          <figcaption>${title}</figcaption>
        </figure>
        `
        main.appendChild(movieEl)
    })
}


