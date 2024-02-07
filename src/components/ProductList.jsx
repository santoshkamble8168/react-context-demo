import React from "react";
import { useProductContext } from "../context/ProductContext";

const ProductList = () => {
	const { state: productState, dispatch: productDispatch } = useProductContext();

	const addProduct = () => {
		productDispatch({ type: "ADD_PRODUCT", payload: "New Product" });
	};

	return (
		<div>
			<h2>Product List</h2>
			<p>Total Products: {productState.products.length}</p>
			<button onClick={addProduct}>Add Product</button>
		</div>
	);
};

export default ProductList;
