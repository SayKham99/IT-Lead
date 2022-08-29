const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart') ?? '[]'),
    totalQuantity:JSON.parse(localStorage.getItem('quantity') ?? 0),
    totalAmount:JSON.parse(localStorage.getItem('amount') ?? 0),
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
            localStorage.setItem('cart',JSON.stringify(state.cart))
            localStorage.setItem('quantity',JSON.stringify(state.totalQuantity))
            localStorage.setItem('amount',JSON.stringify(state.totalAmount))
        },
        remove(state, action) {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            localStorage.setItem('p',JSON.stringify(state.cart))
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
