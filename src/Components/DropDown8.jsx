import React, { useState } from "react";

export default function DropDown8({ setPrimary_market }) {
	const [value, setValue] = useState("");
	return (
		<div>
			<label htmlFor="stage">Primary market</label>
			<select name="stage" onChange={(e) => setPrimary_market(e.target.value)}>
				<option value="Local">Local</option>
                <option value="Regional ">Regional </option>
                <option value="National ">National </option>
                <option value="International ">International </option>
                
			</select>
			{/* {console.log(value)} */}

            {/* Local, Regional, National, International */}
		</div>
	);
}
