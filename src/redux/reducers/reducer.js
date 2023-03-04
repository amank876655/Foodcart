const INIT_STATE = {
  cart: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
        const IteamIndex = state.cart.findIndex((iteam) => iteam.id === action.payload.id);
        if(IteamIndex >= 0){
            state.cart[IteamIndex].qnty += 1
        }else{
            const temp = {...action.payload, qnty:1}
               return {
        ...state,
        cart: [...state.cart, temp],
      };
        }
    case "RMV_CART":
        const data = state.cart.filter((el) => el.id !== action.payload);
        return{
            ...state,
            cart:data
        }
    case "RMV_ONE": 
    const Iteam_Remove = state.cart.findIndex((iteam) => iteam.id === action.payload.id);
      if(state.cart[Iteam_Remove].qnty >=1){
        const dltitem = state.cart[Iteam_Remove].qnty -= 1
        return{
            ...state,
            cart: [...state.cart]
          }
      }   
      else if(state.cart[Iteam_Remove].qnty === 1) {
        const data = state.cart.filter((el) => el.id !== action.payload);
        return{
            ...state,
            cart:data
        }
      }  
      

    default:
      return state;
  }
};
