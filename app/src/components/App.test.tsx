import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import Incident from "../incident-management/incident";
import Person from "../incident-management/person";
import InMemoryIncidentAPI from "../apis/InMemoryIncidentAPI";

describe('the application', () => {

	test('renders the incident-list component', () => {
		// arrange
		const incidentAPI = new InMemoryIncidentAPI([]);

		// act
		const result = render(
			<MemoryRouter initialEntries={['/']}>
				<App IncidentAPI={incidentAPI}/>
			</MemoryRouter>
		), listElement = result.container.querySelector(".incident-list");

		// assert
		expect(listElement).toBeInTheDocument();
	});

	test('renders the incident-editor component', () => {
		// arrange
		const person = new Person(534, "Anth", "Richardson");
		const incidentAPI = new InMemoryIncidentAPI([new Incident(1, person)]);

		// act
		const result = render(
			<MemoryRouter initialEntries={['/incidents/1']}>
				<App IncidentAPI={incidentAPI}/>
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
		const incidentAPI = new InMemoryIncidentAPI(appIncidents);

		// act
		const result = render(
			<MemoryRouter initialEntries={['/']}>
				<App IncidentAPI={incidentAPI}/>
			</MemoryRouter>
		);

		// assert
		const incidentElements = result.container.querySelectorAll(".incident-list .incident");
		expect(incidentElements.length).toEqual(4);
	});

	["Update", "GetById"].forEach(
		(testCase) => {
			test(`passes the incident api ${testCase} method to the incident editor`, () => {
				// arrange
				const person = new Person(534, "Anth", "Richardson");
				const incidentAPI = new InMemoryIncidentAPI([new Incident(123, person)]);

				// act
				const result = render(
					<MemoryRouter initialEntries={['/incidents/123']}>
						<App IncidentAPI={incidentAPI}/>
					</MemoryRouter>
				);

				// assert
				const editForm = result.container.querySelector(".incident-editor form") as HTMLFormElement;
				fireEvent.submit(editForm);
				expect(incidentAPI.Calls).toContain(testCase);
			});
		}
	);
});