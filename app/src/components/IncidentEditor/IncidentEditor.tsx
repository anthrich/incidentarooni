import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Route, Switch, useParams, useRouteMatch} from 'react-router-dom';
import Incident from "../../incident-management/incident";
import './IncidentEditor.scss';
import {DescriptionEditor} from "./DescriptionEditor";

const IncidentEditor: React.FC<IncidentEditorProps> = props => {

	let match = useRouteMatch();

	return(
		<div className={"incident-editor"}>
			<Switch>
				<Route path={`${match.path}/:incidentId`}>
					<Editor {...props}></Editor>
				</Route>
				<Route path={match.path}>
					<div>Creating incident</div>
				</Route>
			</Switch>
		</div>);
};

function Editor(props: IncidentEditorProps) {
	let { incidentId } = useParams();
	const id = parseInt(incidentId || "0");
	const [incidentValue, setIncident] = useState(props.GetIncidentById(id));

	const handleDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		incidentValue.setDescription(e.target.value);
		setIncident(incidentValue);
	}

	const handleSave = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		props.UpdateIncident(incidentValue);
	};

	return <form onSubmit={handleSave}>
		<h3>Incident ID: {incidentId}</h3>
		<DescriptionEditor incidentValue={incidentValue} onChange={handleDescriptionChange}/>
	</form>;
}

export interface IncidentEditorProps {
	GetIncidentById(id: number) : Incident
	UpdateIncident(incident: Incident) : Incident;
}

export default IncidentEditor;