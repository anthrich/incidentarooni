import React from 'react';
import {render} from '@testing-library/react';
import App, {AppProps} from './App';
import {MemoryRouter} from "react-router-dom";
import Incident from "../incident-management/incident";
import Person from "../incident-management/person";

test('renders the incident-list component', () => {
	// act
	// assert
	const result = render(
		<MemoryRouter initialEntries={['/']}>
			<App Incidents={new Array<Incident>()}/>
		</MemoryRouter>
	), listElement = result.container.querySelector(".incident-list");
	expect(listElement).toBeInTheDocument();
});

test('renders the incident-editor component', () => {
	// act
	const result = render(
		<MemoryRouter initialEntries={['/incidents/1']}>
			<App Incidents={new Array<Incident>()}/>
		</MemoryRouter>
	);

	// assert
	const listElement = result.container.querySelector(".incident-editor");
	expect(listElement).toBeInTheDocument();
});

test('passes the incidents to the incident list', () => {
	// arrange
	const person = new Person(534, "Anth", "Richardson");
	const appIncidents = [
		new Incident(123, person),
		new Incident(1234, person),
		new Incident(12345, person),
		new Incident(12346, person)
	];

	// act
	const result = render(
		<MemoryRouter initialEntries={['/']}>
			<App Incidents={appIncidents}/>
		</MemoryRouter>
	);

	// assert
	const incidentElements = result.container.querySelectorAll(".incident-list .incident");
	expect(incidentElements.length).toEqual(4);
});