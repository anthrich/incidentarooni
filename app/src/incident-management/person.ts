import Entity from "./entity";

export default class Person extends Entity{

	private _firstName : string;
	private _lastName : string;

	constructor(id: number, firstName: string, lastName: string) {
		super(id);
		this._firstName = firstName;
		this._lastName = lastName;
	}

	public getName() : string {
		return `${this._firstName} ${this._lastName}`;
	}
}