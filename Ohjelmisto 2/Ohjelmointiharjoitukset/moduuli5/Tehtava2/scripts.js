
async function fetchShow (value_from_input){
   const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`)
   const show = await response.json()
   console.log(show)
   return show
}

  document.addEventListener("submit", function(event) {
    event.preventDefault()
    
    const inputValue = document.getElementById("query").value;
    fetchShow(inputValue)
  })
