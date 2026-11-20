"use strict"
async function fetchShow (value_from_input){
  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${value_from_input}`)
  const shows = await response.json()
  console.log(shows)
  document.getElementById("results").innerHTML = ""
  for (let i of shows){
    let h2 = document.createElement("h2")
    let a = document.createElement("a")
    let img = document.createElement("img")
    let div = document.createElement("div")
    let article = document.createElement("article")
    article.append(h2)
    article.append(a)
    article.append(img)
    article.append(div)
    h2.innerHTML = i.show.name
    a.innerHTML = i.show.url
    a.href = i.show.url
    a.target = "_blank"
    img.src = `${i.show.image?.medium}`
    img.alt = `${i.show.name}`
    div.innerHTML = i.show.summary
    document.getElementById("results").append(article)

  }

}

  document.addEventListener("submit", function(event) {
    event.preventDefault()
    
    const inputValue = document.getElementById("query").value;
    fetchShow(inputValue)
  })

  // tvShow.show.image?.medium;