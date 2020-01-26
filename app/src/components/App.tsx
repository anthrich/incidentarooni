import React from 'react';
import './App.scss';
import {Route, Switch} from "react-router-dom";
import IncidentList from "./IncidentList/IncidentList";
import IncidentEditor from "./IncidentEditor/IncidentEditor";
import Incident from "../incident-management/incident";
import Person from "../incident-management/person";
import IncidentType from "../incident-management/incident-type";
import { IncidentAPI } from '../apis/IncidentAPI';

const App: React.FC<AppProps> = props => {
	return (
		<div className="App">
			<header className="App-header">
				Incident Management
			</header>
			<Switch>
				<Route path={"/incidents"}>
					<IncidentEditor
						GetIncidentById={props.IncidentAPI.GetById}
						UpdateIncident={props.IncidentAPI.Update}/>
				</Route>
				<Route path={"/"}>
					<IncidentList Incidents={props.IncidentAPI.Get()}></IncidentList>
				</Route>
			</Switch>
		</div>
	);
}

export interface AppProps {
	IncidentAPI: IncidentAPI;
}

export default App;
