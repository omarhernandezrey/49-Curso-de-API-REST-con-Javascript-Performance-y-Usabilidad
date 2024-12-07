async function getTrendingMoviesPreview() { // Define una función asíncrona para obtener y mostrar películas en tendencia.
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY); // Realiza una solicitud HTTP GET para obtener películas en tendencia.
    const data = await res.json(); // Convierte la respuesta en un objeto JSON.

    const movies = data.results; // Extrae la lista de películas de los resultados del objeto JSON.
    movies.forEach(movie => { // Itera sobre cada película.
      const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview .trendingPreview-movieList') // Busca el contenedor en el DOM.
      
      const movieContainer = document.createElement('div'); // Crea un nuevo div para cada película.
      movieContainer.classList.add('movie-container'); // Añade una clase para estilizar el contenedor de la película.
  
      const movieImg = document.createElement('img'); // Crea un elemento img para la imagen de la película.
      movieImg.classList.add('movie-img'); // Añade una clase para estilizar la imagen.
      movieImg.setAttribute('alt', movie.title); // Establece el atributo alt con el título de la película.
      movieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300' + movie.poster_path); // Configura la URL de la imagen como el src del img.
  
      movieContainer.appendChild(movieImg); // Agrega el elemento img al contenedor de la película.
      trendingPreviewMoviesContainer.appendChild(movieContainer); // Agrega el contenedor de la película al contenedor principal en el DOM.
    });
  }
  
  getTrendingMoviesPreview(); // Llama a la función para ejecutarla al cargar el script.
