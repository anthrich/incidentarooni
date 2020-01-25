import React from 'react';
import { Switch, useRouteMatch, Route, useParams} from 'react-router-dom';

const IncidentEditor: React.FC = () => {

	let match = useRouteMatch();

	return(
		<div className={"incident-editor"}>
			Incident Editor
			<Switch>
				<Route path={`${match.path}/:incidentId`}>
					<Editor></Editor>
				</Route>
				<Route path={match.path}>
					<div>Creating incident</div>
				</Route>
			</Switch>
		</div>);
};

function Editor() {
	let { incidentId } = useParams();
	return <h3>Requested incidentId ID: {incidentId}</h3>;
}

export default IncidentEditor;