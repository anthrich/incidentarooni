import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import Incident from "./incident-management/incident";
import Person from "./incident-management/person";
import LocalStorageIncidentAPI from "./apis/LocalStorageIncidentAPI";

const person = new Person(1, "Anth", "Richardson");

let incidents: Incident[] = [
	new Incident(12345, person),
	new Incident(25432, person),
	new Incident(15432, person),
];

const incidentApi = new LocalStorageIncidentAPI();

if(incidentApi.Get().length == 0) {
	let incidents: Incident[] = [
		new Incident(12345, person),
		new Incident(25432, person),
		new Incident(15432, person),
		new Incident(346634, person),
		new Incident(8655, person),
		new Incident(9867, person),
	];

	incidents.forEach(i => incidentApi.Add(i));
}

ReactDOM.render(
	<BrowserRouter>
		<App IncidentAPI={incidentApi} />
	</BrowserRouter>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
