const Menu = async () => {
  let data = await fetch("https://maryamkhodayari.github.io/json-2/db.json");
  let res = await data.json();
  let menu = res.menu.map((elem) => {
    return `<li><a href="${elem.link}">${elem.name}</a></li>`;
  });
  document.querySelector(".menutitle").innerHTML = menu.join("");
};
export default Menu;
