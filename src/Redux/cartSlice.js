const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    cart: JSON.parse(localStorage.getItem('p') ?? '[]'),
    totalQuantity:0,
    totalAmount:0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            const newProd = action.payload;
            const exitingProd = state.cart.find((item)=>item.id === newProd.id);
            state.totalQuantity++;
            if (!exitingProd){
                state.cart.push({
                    id:newProd.id,
                    title:newProd.title,
                    image:newProd.image,
                    price:newProd.price,
                    quantity:1,
                    totalPrice:newProd.price,
                });
            } else {
                exitingProd.quantity++;
                exitingProd.totalPrice = Number(exitingProd.totalPrice) + Number(newProd.price);
            }

            state.totalAmount = state.cart.reduce((total,prod)=>total + Number(prod.price) * Number(prod.quantity),0)

            /*state.cart.push(action.payload);*/
            localStorage.setItem('p',JSON.stringify(state.cart))
        },
        remove(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            localStorage.setItem('p',JSON.stringify(state.cart))
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
