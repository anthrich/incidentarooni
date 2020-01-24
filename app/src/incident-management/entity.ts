export default class Entity {

	protected _id: number;

	constructor(id: number) {
		this._id = id;
	}

	public getId() : number {
		return this._id;
	}
}