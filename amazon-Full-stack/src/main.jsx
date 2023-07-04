import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App/App'
import { StateProvider } from "./StateProvider.jsx";
import reducer, { initialState } from "./reducer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
		<StateProvider initialState={initialState} reducer={reducer}>
			<App />
		</StateProvider>
	// </React.StrictMode>
);
