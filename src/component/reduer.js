export const initialState = {
  basket: [],
  user: null,
};

export const getbasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //LOGIC
      return {
        ...state,
        //returing new data look
        basket: [...state.basket, action.item],
      };

      break;
    case "REMOVE_FORM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exit in baskt
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove produc it${action.id} as  its not`);
      }

      return {
        ...state,
        basket: newBasket,
      };

      break;
    default:
      return state;
  }
};
export default reducer;
