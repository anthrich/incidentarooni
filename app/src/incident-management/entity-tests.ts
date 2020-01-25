import Incident from "./incident";
import Person from "./person";
import Entity from "./entity";

export default abstract class EntityTests {
	constructor() {
		test(`${typeof this} getId returns the ID it was constructed with`, () => {
			// arrange
			const id = 11723;

			// act
			const entity = this.GetConstructedEntity(id);

			// assert
			expect(entity.getId()).toEqual(id);
		});
	}

	protected abstract GetConstructedEntity(id: number): Entity;
}