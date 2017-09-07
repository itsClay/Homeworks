document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const addPlace = (e) => {
    e.preventDefault();
    const ul = document.getElementById('sf-places');
    const li = document.createElement('li');
    const input = document.querySelector('.favorite-input');
    const newFave = input.value;

    li.textContext = newFave;
    ul.appendChild(li);
    input = "";
  };



  // adding new photos

  // --- your code here!



});
