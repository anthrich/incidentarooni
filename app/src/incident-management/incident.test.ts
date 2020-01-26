import Incident from "./incident";
import IncidentType from "./incident-type";
import Person from "./person";
import EntityTests from "./entity-tests";
import Entity from "./entity";


const person = new Person(876, "Guy", "Polay")

describe('incident', () => {

	class IncidentEntityTests extends EntityTests {
		protected GetConstructedEntity(id: number): Entity {
			return new Incident(id, person);
		}
	}

	const entityTests = new IncidentEntityTests();

	test('getIncidentType returns the type the incident was constructed with', () => {
		// arrange
		const incidentType = IncidentType.EquipmentFailure;

		// act
		const incident = new Incident(123234, person, incidentType);

		// assert
		expect(incident.getIncidentType()).toEqual(incidentType);
	});

	test('getDescription returns the description the incident was constructed with', () => {
		// arrange
		const description = "The belay failed and the climber fell";

		// act
		const incident = new Incident(5324, person, IncidentType.Fall, description);

		// assert
		expect(incident.getDescription()).toEqual(description);
	});

	test('getInvolvedPerson returns an the involved person that the incident was constructed with', () => {
		// act
		const incident = new Incident(12464, person);

		// assert
		expect(incident.getInvolvedPerson()).toBe(person);
	});

	test('setDescription updates the description', () => {
		// arrange
		const incident = new Incident(5534, person);

		// act
		incident.setDescription("new description");

		// assert
		expect(incident.getDescription()).toEqual("new description");
	});
});