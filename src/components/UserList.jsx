import React from "react";
import { useUserContext } from "../context/UserContext";

const UserList = () => {
	const { state: userState, dispatch: userDispatch } = useUserContext();

	const handleLogout = () => {
		userDispatch({ type: "LOGOUT" });
	};

	return (
		<div>
			<h2>User List</h2>
			{userState.user?.userId ? (
				<>
					<p>Username: {userState.user.title}</p>
					<button onClick={handleLogout}>Logout</button>
				</>
			) : (
				<>No user loggedIn!</>
			)}
		</div>
	);
};

export default UserList;
