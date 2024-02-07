import axios from "axios";
import React, { createContext, useReducer, useContext } from "react";

export const UserContext = createContext();
//========================================

const initialUserState = {
	username: "",
	isLoggedIn: false,
};

const userReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return { ...state, isLoggedIn: true, user: action.payload, isLoading: true };
		case "LOGIN_SUCCESS":
			return { ...state, isLoggedIn: true, user: action.payload, isLoading: false };
		case "LOGOUT":
			return { ...state, isLoggedIn: false, user: "" };
		default:
			return state;
	}
};
//====================================
export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, initialUserState);

	return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
//==========================
export const useUserContext = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUserContext must be used within a UserProvider");
	}
	return context;
};

export const loginUser = async (dispatch, username, password) => {
	try {
		dispatch({ type: "LOGIN_REQUEST" });
		const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1", { username, password });
		dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
	} catch (error) {
		console.error("Login failed:", error);
		dispatch({ type: "LOGIN_FAILURE" });
	}
};
