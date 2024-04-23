const Clientslugu = async () => {
  let data = await fetch("https://maryamkhodayari.github.io/json-2/db.json");
  let res = await data.json();
  let clientslugu = res.clientslugu.map((elem) => {
    return `<a href="#"><img src=${elem.src} style="width: 200px; height: 80px; margin: 20px auto; justify-content: center;"/></a>`;
  });
  document.querySelector(".lugu").innerHTML = clientslugu.join("");
};
export default Clientslugu;
