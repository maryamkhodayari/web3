const Cards = async () => {
  let data = await fetch("https://maryamkhodayari.github.io/json-2/db.json");
  let res = await data.json();
  let cards = res.cards.map((elem) => {
    return `<div
        class="col-md-6 col-lg-4 wow fadeInUp"
        data-wow-offest="150px"
        data-wow-delay="0.3s"
      >
        <div class="card shadow-sm mb-5">
          <img src=${elem.image} class="card-img-top" />
          <div class="card-body text-center p-4">
            <h3 class="card-title mb-3">${elem.title}</h3>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aperiam consequuntur dignissimos dolorum eligendi, est facere
              facilis harum hic iusto nemo nob is officia quos sapiente
              velit veritatis vero voluptates. Quas, quibusdam.
            </p>
          </div>
        </div>
      </div>`;
  });
  document.querySelector(".row").innerHTML = cards.join("");
};
export default Cards;
