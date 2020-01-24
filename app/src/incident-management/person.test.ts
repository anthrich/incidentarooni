import EntityTests from "./entity.test";
import Entity from "./entity";
import Person from "./person";

class PersonEntityTests extends EntityTests {
	protected GetConstructedEntity(id: number): Entity {
		return new Person(id, "First", "Last");
	}
}

const entityTest = new PersonEntityTests();

test('getName returns the name the person was constructed with', () => {
	// act
	var person = new Person(12345, "Anth", "Richardson");

	// assert
	expect(person.getName()).toEqual("Anth Richardson");
});