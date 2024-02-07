import React, { useContext } from "react";
import UserList from "./UserList";
import OrderList from "./OrderList";
import ProductList from "./ProductList";
import { UserContext, UserProvider, useUserContext, loginUser } from "../context/UserContext";

const Dashboard = () => {
	const { state: userState, dispatch: userDispatch } = useUserContext();
	//const {dispathc, this.st} = useContext(UserContext)

	const handleLogin = () => {
		//userDispatch({ type: "LOGIN", payload: "JohnDoe" });
		loginUser(userDispatch, "user name", "password");
	};

	return (
		<div>
			<h1>Main Component</h1>
			{!userState.isLoggedIn && (
				<div>
					<h2>Login</h2>
					<button onClick={handleLogin}>Login</button>
				</div>
			)}
			<UserList />

			{userState.isLoggedIn && (
				<>
					<ProductList />
					<OrderList />
				</>
			)}
		</div>
	);
};

export default Dashboard;
