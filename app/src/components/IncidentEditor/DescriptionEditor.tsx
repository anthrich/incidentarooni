import Incident from "../../incident-management/incident";
import React from "react";

export function DescriptionEditor(props: { incidentValue: Incident, onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
	return <section>
		<label htmlFor={"description"}>Description</label>
		<textarea
			className={"description"}
			defaultValue={props.incidentValue.getDescription()}
			name={"description"}
			onChange={props.onChange}/>
		<button className={"save"} type={"submit"}>Save</button>
	</section>;
}