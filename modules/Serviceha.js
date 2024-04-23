const Serviceha = async () => {
  let data = await fetch("http://localhost:3000/services");
  let res = await data.json();
  let serviceha = res.map((elem) => {
    return `<div
        class="col-md-6 col-lg-4 wow bounceInUp"
        data-wow-duration="1.5s"
      >
        <div class="float-right text-success">
          <i class="${elem.logo}"></i>
        </div>
        <h4>${elem.title}</h4>
        <p class="description">
        ${elem.text}
        </p>
      </div>`;
  });
  document.querySelector(".khadamat").innerHTML = serviceha.join("");
};
export default Serviceha;
