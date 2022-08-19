import React from "react";
import { StatusBar } from "expo-status-bar";
import Header from "./Header";

function MainLayout({ screenTitle, navigator, children }) {
	return (
		<>
			<StatusBar backgroundColor='rgba(0,0,0,0.3)' />
			<Header screenTitle={screenTitle} navigator={navigator} />
			{children}
		</>
	)
}

export default MainLayout;

