const Number = async () => {
  let data = await fetch("http://localhost:3000/numbers");
  let res = await data.json();
  let numberr = res.map((elem) => {
    return `<div class="col-sm-6 col-lg-3 text-center" id="hi">
        <h2 class="counter">${elem.number}</h2>
        <h3>${elem.ntitle}</h3>
      </div>`;
  });
  document.querySelector(".numbermumber").innerHTML = numberr.join("");
};
export default Number;
