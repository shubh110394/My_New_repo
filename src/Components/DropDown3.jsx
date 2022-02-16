import React, { useState } from "react";

export default function DropDown3({ setSkill_training }) {
	const [value, setValue] = useState("");
	return (
		<div>
			<label htmlFor="stage">Skill_training</label>
			<select name="stage" onChange={(e) => setSkill_training(e.target.value)}>
				<option value="No_formal_training"> No formal skill training</option>
				<option value="Has_formal_skill_training_and_certificate.">Has formal skill training and certificate.</option>
			</select>
			{/* {console.log(value)} */}

            {/* No formal skill training, Has formal skill training and certificate. */}
		</div>
	);
}
