// fuunction for dark mode

function invertColors() {
    document.body.classList.toggle('inverted');
  }
  
  document.getElementById('invertColors').addEventListener('click', invertColors);
  

// function to hide sad movies
function hideSadMovies() {
    const sadMovies = document.querySelectorAll('.sad');
    sadMovies.forEach(movie => {
        if (movie.style.display === 'none') {
            movie.style.display = 'list-item';
        } else {
            movie.style.display = 'none';
        }
    });
}

document.getElementById('hideSad').addEventListener('click', hideSadMovies);