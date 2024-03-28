import { IShoppingItems } from "./ShoppingItems"

export interface IShoppingItemProps {
    shoppingItem: IShoppingItems;
    handleOnPressAddItem?: (selectedItem: IShoppingItems) =>  void, 
    handleOnPressRemoveItem?: (selectedItem: IShoppingItems) => void, 
}