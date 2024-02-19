// OrderApp.js

const orderState = {
    orders: []
};

const orderReducer = (state = orderState, action) => { 
    switch(action.type){
        case "add":
            return {
                orders: [...state.orders, action.payload]
            };
        case "remove":
            return {
                orders: state.orders.filter(order => order.id !== action.payload)
            };
        default:
            return state;
    }
};

export const remove = (id) => ({
    type: "remove",
    payload: id
});

export default orderReducer; // Оставьте только этот экспорт
