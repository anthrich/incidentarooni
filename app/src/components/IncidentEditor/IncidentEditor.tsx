import React from 'react';
import { Switch, useRouteMatch, Route, useParams} from 'react-router-dom';
import Incident from "../../incident-management/incident";
import './IncidentEditor.scss';

const IncidentEditor: React.FC<IncidentEditorProps> = props => {

	let match = useRouteMatch();

	return(
		<div className={"incident-editor"}>
			<Switch>
				<Route path={`${match.path}/:incidentId`}>
					<Editor GetIncidentById={props.GetIncidentById}></Editor>
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
	const incident = props.GetIncidentById(id);
	return <form>
		<h3>Incident ID: {incidentId}</h3>
		<textarea className={"description"} defaultValue={incident.getDescription()}></textarea>
	</form>;
}

export interface IncidentEditorProps {
	GetIncidentById(id: number) : Incident
}

export default IncidentEditor;