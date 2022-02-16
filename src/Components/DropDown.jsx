import React, { useState } from "react";

export default function DropDown({ setDisplay }) {
	const [value, setValue] = useState("");
	return (
		<div>
			<label htmlFor="stage">Stage of business</label>
			<select name="stage" onChange={(e) => setDisplay(e.target.value)}>
				<option value="Scale-up">Scale-up</option>
				<option value="Start-up">Start-up</option>
			</select>
			{/* {console.log(value)} */}
		</div>
	);
}
