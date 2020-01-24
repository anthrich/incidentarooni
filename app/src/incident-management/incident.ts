import IncidentType from "./incident-type";
import Person from "./person";
import Entity from "./entity";

export default class Incident extends Entity {

	private _type: IncidentType;
	private _description: string;
	private _person: Person;

	constructor(id: number, person: Person, type: IncidentType = IncidentType.Other, description: string = "") {
		super(id);
		this._id = id;
		this._type = type;
		this._description = description;
		this._person = person;
	}

	public getIncidentType() {
		return this._type;
	}

	public getDescription() {
		return this._description;
	}

	public getInvolvedPerson() {
		return this._person;
	}
}