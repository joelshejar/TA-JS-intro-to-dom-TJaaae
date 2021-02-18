let random = got.houses.map(elm => {
    return elm.people.map(x => {
        return `
        <div class="card box">
        <div class="img-cont flex">
            <img src= ${x.image}>
          <h2>${x.name}</h2>
        </div>
        <p>${x.description}</p>
        <button class="btn">Learn More!</button>
      </div>
        `
    })
}).join('')

container = document.querySelector(".container")
container.innerHTML = random















