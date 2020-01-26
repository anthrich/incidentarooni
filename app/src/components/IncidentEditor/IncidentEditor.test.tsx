import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router";
import React from "react";
import IncidentEditor from "./IncidentEditor";
import {Route, Switch} from "react-router-dom";
import InMemoryIncidentAPI from "../../apis/InMemoryIncidentAPI";
import Incident from "../../incident-management/incident";
import Person from "../../incident-management/person";
import IncidentType from "../../incident-management/incident-type";

describe('incident editor', () => {

	const getIncidentAPI = () => {
		const person = new Person(432, "Anth", "Rich");
		const incidents = [new Incident(1232, person, IncidentType.Other, "The description")];
		return new InMemoryIncidentAPI(incidents);
	};

	test('renders the form', () => {
		// arrange
		const incidentAPI = getIncidentAPI();

		// act
		const result = render(
			<MemoryRouter initialEntries={['/incidents/1232']}>
				<Switch>
					<Route path={"/incidents"}>
						<IncidentEditor GetIncidentById={incidentAPI.GetById}></IncidentEditor>
					</Route>
				</Switch>
			</MemoryRouter>
		);

		// assert
		const form = result.container.querySelector("form");
		expect(form).toBeInTheDocument();
	});

	test('displays the relevant incident description editor', () => {
		// arrange
		const person = new Person(432, "Anth", "Rich");
		const incidents = [new Incident(1232, person, IncidentType.Other, "The description")];
		const incidentAPI = new InMemoryIncidentAPI(incidents);

		// act
		const result = render(
			<MemoryRouter initialEntries={['/incidents/1232']}>
				<Switch>
					<Route path={"/incidents"}>
						<IncidentEditor GetIncidentById={incidentAPI.GetById}></IncidentEditor>
					</Route>
				</Switch>
			</MemoryRouter>
		);

		// assert
		const description = result.container.querySelector("form textarea.description") as HTMLTextAreaElement;
		expect(description.value).toEqual(incidents[0].getDescription());
	});
});