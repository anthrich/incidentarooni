import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import IncidentList from "./IncidentList/IncidentList";
import IncidentEditor from "./IncidentEditor/IncidentEditor";
import Incident from "../incident-management/incident";
import Person from "../incident-management/person";
import IncidentType from "../incident-management/incident-type";

const App: React.FC<AppProps> = props => {
	return (
		<div className="App">
			<header className="App-header">
				Incident Management
			</header>
			<Switch>
				<Route path={"/incidents"}>
					<IncidentEditor
						GetIncidentById={
							(id) => new Incident(id, new Person(1, "1", "1"), IncidentType.Other, "Desc")
						}/>
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
