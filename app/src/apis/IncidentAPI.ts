import Incident from "../incident-management/incident";

export interface IncidentAPI {
	Get() : Array<Incident>;
	GetById(id: number) : Incident;
	Update(incident: Incident) : Incident;
	Add(incident: Incident) : Incident;
}