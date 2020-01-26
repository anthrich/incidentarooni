import Incident from "../incident-management/incident";

export interface IncidentAPI {
	GetById(id: number) : Incident
}