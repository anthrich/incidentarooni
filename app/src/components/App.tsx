import React from 'react';
import './App.css';
import {
	Switch,
	Route
} from "react-router-dom";
import IncidentList from "./IncidentList/IncidentList";
import IncidentEditor from "./IncidentEditor/IncidentEditor";
import Incident from "../incident-management/incident";

const App: React.FC<AppProps> = props => {
	return (
		<div className="App">
			<header className="App-header">
				Incident Management
			</header>
			<Switch>
				<Route path={"/incidents"}>
					<IncidentEditor></IncidentEditor>
				</Route>
				<Route path={"/"}>
					<IncidentList Incidents={props.Incidents}></IncidentList>
				</Route>
			</Switch>
		</div>
	);
}

export interface AppProps {
	Incidents: Array<Incident>;
}

export default App;
