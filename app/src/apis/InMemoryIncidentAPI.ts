import {IncidentAPI} from "./IncidentAPI";
import Incident from "../incident-management/incident";

export default class InMemoryIncidentAPI implements IncidentAPI {
	private _incidents: Incident[];
	public Calls: Array<string>;

	constructor(incidents: Array<Incident>) {
		this._incidents = incidents.map(i => i);
		this.Calls = new Array<string>();
		this.GetById = this.GetById.bind(this);
		this.Update = this.Update.bind(this);
	}

	GetById(id: number): Incident {
		this.Calls.push("GetById");
		const incident = this._incidents.find(i => i.getId() == id)
		if(incident == null) throw { type: "IncidentNotFound", message: `Incident ${id} not found`}
		return incident;
	}

	Update(incident: Incident) : Incident {
		this.Calls.push("Update");
		this._incidents = this._incidents.filter(i => i.getId() != incident.getId());
		this._incidents.push(incident);
		return incident;
	}

	Get(): Array<Incident> {
		this.Calls.push("Get");
		return this._incidents.map(i => i);
	}

	Add(incident: Incident): Incident {
		this._incidents.push(incident);
		return incident;
	}
}