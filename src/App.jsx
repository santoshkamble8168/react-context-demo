import { useState } from "react";
import "./App.css";
import { UserProvider, useUserContext } from "./context/UserContext";
import { ProductProvider } from "./context/ProductContext";
import { OrderProvider } from "./context/OrderContext";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<>
			<UserProvider>
				<OrderProvider>
					<ProductProvider>
						<Dashboard />
					</ProductProvider>
				</OrderProvider>
			</UserProvider>
		</>
	);
}

export default App;
