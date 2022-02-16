import React, { useState } from "react";

export default function DropDown2({ setOffered_to }) {
	const [value, setValue] = useState("");
	return (
		<div>
            <label htmlFor="stage">Offered to</label>
			<select name="stage" onChange={(e) => setOffered_to(e.target.value)}>
				<option value="customers"> End customers</option>
				<option value="Wholesalers">Wholesalers</option>
				<option value="Retailers">Retailers</option>
			</select>
			{/* {console.log(value)} */}
		</div>
	);
}