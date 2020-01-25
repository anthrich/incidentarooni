import {render} from "@testing-library/react";
import React from "react";
import IncidentList from "./IncidentList";
import Incident from "../../incident-management/incident";
import Person from "../../incident-management/person";
import {MemoryRouter} from "react-router";

test('renders the ul', () => {
	// act
	const result = render(
		<MemoryRouter initialEntries={['/']}>
			<IncidentList Incidents={[]}></IncidentList>
		</MemoryRouter>
	);

	// assert
	const ul = result.container.querySelector("ul");
	expect(ul).toBeInTheDocument();
});

test('renders the the list of given incidents', () => {
	// arrange
	const person = new Person(323, "Anth", "Richardson");
	const incidents = new Array<Incident>();
	incidents.push(new Incident(1, person));
	incidents.push(new Incident(2, person));
	incidents.push(new Incident(3, person));

	// act
	const result = render(
		<MemoryRouter initialEntries={['/']}>
			<IncidentList Incidents={incidents}></IncidentList>
		</MemoryRouter>
	);

	// assert
	const incidentElements = result.container.querySelectorAll("li.incident");
	expect(incidentElements.length).toEqual(3);
});

test('renders the incident anchors', () => {
	const person = new Person(323, "Anth", "Richardson");
	const incidents = new Array<Incident>();
	incidents.push(new Incident(12345, person));
	incidents.push(new Incident(23456, person));

	// act
	const result = render(
		<MemoryRouter initialEntries={['/']}>
			<IncidentList Incidents={incidents}></IncidentList>
		</MemoryRouter>
	);

	// assert
	const incidentElements = result.container.querySelectorAll("li.incident");
	incidentElements.forEach((ele, i) => {
		const a = ele.querySelector('a.id') as HTMLAnchorElement;
		const incident = incidents[i];
		expect(a.href).toEqual(`http://localhost/incidents/${incident.getId()}`);
		expect(a?.innerHTML).toEqual(`${incident.getId()} ${incident.getInvolvedPerson().getName()}`)
	});
});