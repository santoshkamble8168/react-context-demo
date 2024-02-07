import React, { createContext, useReducer, useContext } from "react";

export const OrderContext = createContext();

const initialOrderState = {
	orders: [],
};

const orderReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ORDER":
			return { ...state, orders: [...state.orders, action.payload] };
		default:
			return state;
	}
};

export const OrderProvider = ({ children }) => {
	const [state, dispatch] = useReducer(orderReducer, initialOrderState);

	return <OrderContext.Provider value={{ state, dispatch }}>{children}</OrderContext.Provider>;
};

export const useOrderContext = () => {
	const context = useContext(OrderContext);
	if (!context) {
		throw new Error("useOrderContext must be used within an OrderProvider");
	}
	return context;
};
