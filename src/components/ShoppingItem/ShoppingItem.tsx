import { IShoppingItemProps } from "../../models/ShoppingItem";
import './ShoppingItem.css';

const ShoppingItem = (props: IShoppingItemProps) => {
  const {  shoppingItem, handleOnPressAddItem, handleOnPressRemoveItem } = props;
  const {item, price, color, badgeLabel, totalItemSelected} = shoppingItem || {};
  return (
    <div>
      <div key={item} className="Shopping-item">
        <p style={{ color }} className="Each-Item">
          {item}
        </p>
        {badgeLabel && <span>{badgeLabel}</span>}

        <div>
          <p className="Each-Item">{price}₹</p>
        </div>
        <div>
          <p>{totalItemSelected}</p>
          <div className="Add-Or-Remove-Button-Container">
            <button
              onClick={() => handleOnPressAddItem && handleOnPressAddItem(shoppingItem)}
              style={{
                backgroundColor: "#05a32a",
                color: "#ffffff",
                marginRight: 8,
                padding: 6,
                borderRadius: 4,
              }}
            >
              Add
            </button>
            <button
              disabled={!totalItemSelected}
              onClick={() => handleOnPressRemoveItem && handleOnPressRemoveItem(shoppingItem)}
              style={{
                backgroundColor: !totalItemSelected ? "gray" : "#cf0621",
                color: "#ffffff",
                padding: 6,
                borderRadius: 4,
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ShoppingItem.defaultProps = {
    shoppingItem: {},
    handleOnPressAddItem: () => {},
    handleOnPressRemoveItem: () => {}
}

export default ShoppingItem;
