const container = document.querySelector(".container");
const input = document.querySelector(".input");

let array = [];

const servurl = "https://jsonplaceholder.typicode.com/users";

fetch(servurl)
  .then((data) => {
    return data.text();
  })
  .then((result) => {

    array = JSON.parse(result);
    array.forEach((obj, index) => {
      card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `

      <div class="name">Name</div>
      <div class="name-content">${obj.username}</div>

      <div class="email">Email</div>
      <div class="email-content">${obj.email}</div>
      
      `;

      container.appendChild(card);
  });
});

input.addEventListener("input", (eve) => {
  const srch = eve.target.value.toLowerCase();

  const flt = array.filter((element) => {
    return (
      element.username.toLowerCase().includes(srch) || element.email.toLowerCase().includes(srch)
    );
  });

  displayCard(flt);
});

const displayCard = (arr) => {

  const str = arr
  .map((arr) => {
    return `
    <div class="card">

    <div class="name">Name</div>
    <div class="name-content">${arr.username}</div>

    <div class="email">Email</div>
    <div class="email-content">${arr.email}</div>

    </div>
    `;
  })
  .join('')

  container.innerHTML = str;
};