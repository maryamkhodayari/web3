const Teammembers = async () => {
  let data = await fetch("http://localhost:3000/teamMembers");
  let res = await data.json();
  let teammembers = res.map((elem) => {
    return `<img src=${elem.link} class="col-lg-2 col-md-5" />`;
  });
  document.querySelector(".teamm").innerHTML = teammembers.join("");
};
export default Teammembers;
