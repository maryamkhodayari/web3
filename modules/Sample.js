const Sample = async () => {
  let data = await fetch("https://maryamkhodayari.github.io/json-2/db.json");
  let res = await data.json();
  let sample = res.sample.map((elem) => {
    return `<div class="card">
        <img src=${elem.imgsorce} class="card-img-top" style="width: 345.73px; height: 259.29px;" />
        <h4 class="card-title pt-4">${elem.Title}</h4>
        <p class="card-body" style="font-size: 18px">${elem.text}</p>
      </div>`;
  });
  document.querySelector("#saamplee").innerHTML = sample.join("");
};
export default Sample;
