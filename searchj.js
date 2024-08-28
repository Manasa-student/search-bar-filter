const fruitList = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Ice Cream Bean",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Ugli Fruit",
    "Victoria Plum",
    "Watermelon",
    "Xigua",
    "Yellow Passion Fruit",
    "Ziziphus"
  ];
  
  const searchInput = document.getElementById("search-bar");
  const fruitListElement = document.getElementById("fruit-list");
  
  function renderFruitList(fruits) {
    fruitListElement.innerHTML = "";
    fruits.forEach(fruit => {
      const listItem = document.createElement("li");
      listItem.textContent = fruit;
      fruitListElement.appendChild(listItem);
    });
  }
  
  function searchFruits(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredFruits = fruitList.filter(fruit => fruit.toLowerCase().includes(searchTerm));
    renderFruitList(filteredFruits);
  }
  
  searchInput.addEventListener("input", searchFruits);
  
  renderFruitList(fruitList);