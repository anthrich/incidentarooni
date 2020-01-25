import React from 'react';
import Incident from "../../incident-management/incident";
import {Link} from "react-router-dom";
import './IncidentList.scss';

const IncidentList: React.FC<IncidentListProps> = props => {
	return(
		<div className={"incident-list"}>
			<ul>
				{props.Incidents.map((i) =>
					<li key={i.getId()} className={"incident"}>
						<Link to={`incidents/${i.getId()}`} className={"id"}>
							{i.getId()} {i.getInvolvedPerson().getName()}
						</Link>
					</li>)}
			</ul>
		</div>);
}

export interface IncidentListProps {
	Incidents: Array<Incident>;
}

export default IncidentList;