import React, { createContext, useReducer, useContext } from "react";

export const ProductContext = createContext();

const initialProductState = {
	products: [],
};

const productReducer = (state, action) => {
	switch (action.type) {
		case "ADD_PRODUCT":
			return { ...state, products: [...state.products, action.payload] };
		default:
			return state;
	}
};
export const ProductProvider = ({ children }) => {
	const [state, dispatch] = useReducer(productReducer, initialProductState);

	return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => {
	const context = useContext(ProductContext);
	if (!context) {
		throw new Error("useProductContext must be used within a ProductProvider");
	}
	return context;
};
