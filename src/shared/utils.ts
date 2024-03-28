import { IShoppingItems } from "../models/ShoppingItems";
import { SHOPPING_ITEMS, SHOPPING_ITEMS_PRICE } from "./constants";

export const calculateShoppingItemsTotalCost = (itemsInTheBasket: string[]) => {
  let previouslyBoughtTotalMelonItems = 0;
  let previouslyBoughtTotalLimeItems = 0;
  const totalItemsCost = itemsInTheBasket.reduce(
    (previousItemsTotalCost, currentItem) => {
      if (currentItem === SHOPPING_ITEMS.Apple) {
        return previousItemsTotalCost + SHOPPING_ITEMS_PRICE.Apple;
      } else if (currentItem === SHOPPING_ITEMS.Banana) {
        return previousItemsTotalCost + SHOPPING_ITEMS_PRICE.Banana;
      } else if (currentItem === SHOPPING_ITEMS.Melon) {
        if (previouslyBoughtTotalMelonItems === 0) {
          previouslyBoughtTotalMelonItems = 1;
          return previousItemsTotalCost + SHOPPING_ITEMS_PRICE.Melon;
        } else {
          previouslyBoughtTotalMelonItems = 0;
          return previousItemsTotalCost;
        }
      } else if (currentItem === SHOPPING_ITEMS.Lime) {
        if (previouslyBoughtTotalLimeItems < 2) {
          previouslyBoughtTotalLimeItems++;
          return previousItemsTotalCost + SHOPPING_ITEMS_PRICE.Lime;
        } else {
          previouslyBoughtTotalLimeItems = 0;
          return previousItemsTotalCost;
        }
      } else {
        return previousItemsTotalCost;
      }
    },
    0
  );
  return totalItemsCost;
};
