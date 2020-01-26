import {IncidentAPI} from "./IncidentAPI";
import Incident from "../incident-management/incident";
import Person from "../incident-management/person";
import IncidentType from "../incident-management/incident-type";

export default class LocalStorageIncidentAPI implements IncidentAPI {

	constructor() {

	}

	public Get = () : Array<Incident> => {
		const data = localStorage.getItem("incidents");
		if(data == null) return [];
		const incidentObjects = JSON.parse(data) as Array<object>;
		const incidents = incidentObjects.map(this.MapIncidentData);
		return incidents;
	}

	private MapIncidentData(obj: any) : Incident {
		const person = new Person(obj._person._id, obj._person._firstName, obj._person._lastName);
		return new Incident(obj._id, person, obj._type as IncidentType, obj._description);
	}

	public GetById = (id: number): Incident => {
		const incidents = this.Get();
		const incident = incidents.find(i => i.getId() == id);
		if (incident == null) throw {type: "IncidentNotFound", message: `Incident ${id} not found`};
		return incident;
	}

	public Update = (incident: Incident): Incident => {
		let incidents = this.Get();
		incidents = incidents.filter(i => i.getId() != incident.getId());
		incidents.push(incident);
		localStorage.setItem("incidents", JSON.stringify(incidents))
		return incident;
	}

	public Add = (incident: Incident): Incident => {
		let incidents = this.Get();
		incidents.push(incident);
		localStorage.setItem("incidents", JSON.stringify(incidents))
		return incident;
	}
}