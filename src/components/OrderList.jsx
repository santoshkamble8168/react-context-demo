import React from "react";
import { useOrderContext } from "../context/OrderContext";

const OrderList = () => {
	const { state: orderState, dispatch: orderDispatch } = useOrderContext();

	const addOrder = () => {
		orderDispatch({ type: "ADD_ORDER", payload: "New Order" });
	};

	return (
		<div>
			<h2>Order List</h2>
			<p>Total Orders: {orderState.orders.length}</p>
			<button onClick={addOrder}>Add Order</button>
		</div>
	);
};

export default OrderList;
