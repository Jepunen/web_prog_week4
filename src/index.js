import "./styles.css";

const nameOfShow = document.getElementById("input-show");
const searchBtn = document.getElementById("submit-data");
const userJSON = "";

searchBtn.addEventListener("click", function () {
  getJSON(nameOfShow.value);
});

async function getJSON(text) {
  const url = "https://api.tvmaze.com/search/shows?q=" + text;
  const usersPromise = await fetch(url);
  const userJSON = await usersPromise.json();

  console.log(userJSON);

  userJSON.forEach((value) => {
    const show = value["show"];

    const dataDIV = document.getElementById("div-data");

    const outerDIV = document.createElement("div");
    const innerDIV = document.createElement("div");
    const imgElement = document.createElement("img");
    const showTitle = document.createElement("h1");
    const showSummary = document.createElement("p");

    outerDIV.setAttribute("class", "show-data");
    innerDIV.setAttribute("class", "show-info");

    if (show["image"]) {
      imgElement.setAttribute("src", show["image"]["medium"]);
    }

    showTitle.innerText = show["name"];
    showSummary.innerHTML = show["summary"];

    innerDIV.appendChild(showTitle);
    innerDIV.appendChild(showSummary);

    outerDIV.appendChild(imgElement);
    outerDIV.appendChild(innerDIV);

    dataDIV.appendChild(outerDIV);
  });
}
