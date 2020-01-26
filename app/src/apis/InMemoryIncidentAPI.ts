import {IncidentAPI} from "./IncidentAPI";
import Incident from "../incident-management/incident";

export default class InMemoryIncidentAPI implements IncidentAPI {
	private _incidents: Incident[];

	constructor(incidents: Array<Incident>) {
		this._incidents = incidents.map(i => i);
		this.GetById = this.GetById.bind(this);
	}

	GetById(id: number): Incident {
		const incident = this._incidents.find(i => i.getId() == id)
		if(incident == null) throw { type: "IncidentNotFound", message: `Incident ${id} not found`}
		return incident;
	}
}