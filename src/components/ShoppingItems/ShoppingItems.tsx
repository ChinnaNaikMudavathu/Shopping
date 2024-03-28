import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ShoppingItems.css";
import { AvailableShoppingItems } from "../../shared/constants";
import { IShoppingItems } from "../../models/ShoppingItems";
import { calculateShoppingItemsTotalCost } from "../../shared/utils";
import ShoppingItem from "../ShoppingItem/ShoppingItem";

const ShoppingItems = () => {
  const [shoppingItems, setShoppingItems] = useState<IShoppingItems[]>(
    AvailableShoppingItems
  );
  const [itemsInTheBasket, setItemsInTheBasket] = useState<string[]>([]);
  const [totalItemsCost, setTotalItemsCost] = useState<number>(0);

  useEffect(() => {
    if (itemsInTheBasket?.length) {
      const totalItemsCost = calculateShoppingItemsTotalCost(itemsInTheBasket);
      setTotalItemsCost(totalItemsCost);
    } else {
      setTotalItemsCost(0);
    }
  }, [itemsInTheBasket]);

  const updateSelectedShoppingItems = useCallback(
    (selectedItem: IShoppingItems, isAddNewItem: boolean) => {
      const modifiedShoppingItems = shoppingItems?.map((shoppingItem) => {
        let modifiedItem = { ...shoppingItem };
        if (
          modifiedItem?.item?.toLocaleLowerCase() ===
          selectedItem?.item?.toLocaleLowerCase()
        ) {
          modifiedItem = {
            ...modifiedItem,
            totalItemSelected: isAddNewItem
              ? modifiedItem?.totalItemSelected + 1
              : modifiedItem?.totalItemSelected - 1,
          };
        }
        return modifiedItem;
      });
      const modifiedItemsInTheBasket: string[] = [];
      modifiedShoppingItems.forEach((shoppingItem) => {
        modifiedItemsInTheBasket.push(
          ...new Array(shoppingItem.totalItemSelected)?.fill(shoppingItem?.item)
        );
      });
      setShoppingItems(modifiedShoppingItems);
      setItemsInTheBasket(modifiedItemsInTheBasket);
    },
    [shoppingItems]
  );

  const handleOnPressAddItem = useCallback(
    (selectedItem: IShoppingItems) => {
      updateSelectedShoppingItems(selectedItem, true);
    },
    [shoppingItems]
  );

  const handleOnPressRemoveItem = useCallback(
    (selectedItem: IShoppingItems) => {
      updateSelectedShoppingItems(selectedItem, false);
    },
    [shoppingItems]
  );

  const renderShoppingItems = useCallback(() => {
    return (
      <div>
        {shoppingItems?.map((shoppingItem: IShoppingItems) => {
          return (
            <ShoppingItem
              key={shoppingItem?.item}
              shoppingItem={shoppingItem}
              handleOnPressRemoveItem={handleOnPressRemoveItem}
              handleOnPressAddItem={handleOnPressAddItem}
            />
          );
        })}
      </div>
    );
  }, [shoppingItems]);

  const renderShoppingItemsAvailableInBasket = useCallback(() => {
    if (!itemsInTheBasket?.length) return <p>No items are selected.</p>;
    return (
      <div style={{ display: "flex" }}>
        {itemsInTheBasket.map((shoppingItem, index) => {
          const color = AvailableShoppingItems.find(
            (item) => item.item === shoppingItem
          )?.color;
          return (
            <p key={shoppingItem + index} style={{ margin: 6, color }}>
              {shoppingItem}
            </p>
          );
        })}
      </div>
    );
  }, [itemsInTheBasket]);

  return (
    <div>
      <p className="Total-Item-Cost-Title">
        Total shopping items cost:{" "}
        <b className="Price">{`${totalItemsCost}p`}</b>
      </p>
      {renderShoppingItems()}
      <div>
        Available item in the basket: {renderShoppingItemsAvailableInBasket()}
      </div>
    </div>
  );
};

export default ShoppingItems;
