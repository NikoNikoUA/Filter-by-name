const tech = [
  { label: "Dragon" },
  { label: "Berserk" },
  { label: "Paladin" },
  { label: "DogStar" },
  { label: "Witch" },
  { label: "Enchantress" },
  { label: "Assassin" },
  { label: "Hitman" },
  { label: "Lazy" },
];

const list = document.querySelector(".js-list");
const input = document.querySelector("#filter");

input.addEventListener("input", _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(tech);
populateList(listItemsMarkup);

function createListItemsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

function onFilterChange(event) {
  const filter = event.target.value.toLowerCase();

  const filteredItems = tech.filter((t) =>
    t.label.toLowerCase().includes(filter)
  );

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function populateList(markup) {
  list.innerHTML = markup;
}
