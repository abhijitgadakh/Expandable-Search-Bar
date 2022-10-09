const searchbtn = document.getElementById("search-btn");

const searchInput = document.querySelector(".search-input");

console.log(searchbtn, searchInput);

searchbtn.addEventListener("click", function () {
  // searchInput.classList.add("active-search");
  searchInput.classList.toggle("active-search");
});

console.log(searchInput);

document.querySelector("main").addEventListener("click", () => {
  searchInput.classList.remove("active-search");
});
