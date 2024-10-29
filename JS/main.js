fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((unp) => {
    unp.forEach((el) => {
      let table = document.querySelector(".table");
      let tr = document.createElement("tr");
      let img = document.createElement("img");
      let name = document.createElement("th");
      let region = document.createElement("th");
      let population = document.createElement("th");

      table.append(tr);
      tr.append(name);
      tr.append(region);
      tr.append(population);
      tr.append(img);


      img.src = el.flags.png;
      name.innerText = el.name.common;
      region.innerText = el.region;
      population.innerText = el.population;
    });
  });
