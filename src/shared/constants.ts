export const SHOPPING_ITEMS = {
  Apple: "Apple",
  Banana: "Banana",
  Melon: "Melon",
  Lime: "Lime",
};

export const SHOPPING_ITEMS_PRICE = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15,
};

export const AvailableShoppingItems = [
  {
    item: SHOPPING_ITEMS.Apple,
    price: SHOPPING_ITEMS_PRICE.Apple,
    totalItemSelected: 0,
    color: "#cf0621",
  },
  {
    item: SHOPPING_ITEMS.Banana,
    price: SHOPPING_ITEMS_PRICE.Banana,
    totalItemSelected: 0,
    color: "#05a32a",
  },
  {
    item: SHOPPING_ITEMS.Melon,
    price: SHOPPING_ITEMS_PRICE.Melon,
    totalItemSelected: 0,
    color: "#24078c",
    badgeLabel: "One + one offer",
  },
  {
    item: SHOPPING_ITEMS.Lime,
    price: SHOPPING_ITEMS_PRICE.Lime,
    totalItemSelected: 0,
    color: "#9e4524",
    badgeLabel: "Two + one offer",
  },
];

export const AvailableShoppingItemsInTheBasket = [
  SHOPPING_ITEMS.Apple,
  SHOPPING_ITEMS.Apple,
  SHOPPING_ITEMS.Banana,
  SHOPPING_ITEMS.Melon,
  SHOPPING_ITEMS.Melon,
  SHOPPING_ITEMS.Melon,
  SHOPPING_ITEMS.Melon,
  SHOPPING_ITEMS.Lime,
  SHOPPING_ITEMS.Lime,
  SHOPPING_ITEMS.Lime,
  SHOPPING_ITEMS.Lime,
  SHOPPING_ITEMS.Lime,
];
