const URL = "https://cat-fact.herokuapp.com/facts";
const factp = document.querySelector("#fact");
const btn = document.querySelector("#but");

// const getFacts = async () => {
//   console.log("getting data......");
//   let res = await fetch(URL);
//   console.log(res);
//   let data = await res.json();
//   console.log(data);
//   factp.innerText = data[1].text;
// };

const getFacts = () => {
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      factp.innerText = data[1].text;
    });
};

btn.addEventListener("click", getFacts);
