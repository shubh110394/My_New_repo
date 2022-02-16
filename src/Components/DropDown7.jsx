import React, { useState } from "react";

export default function DropDown7({ setMarket_research }) {
	const [value, setValue] = useState("");
	return (
		<div>
			<label htmlFor="stage">Market research</label>
			<select name="stage" onChange={(e) => setMarket_research(e.target.value)}>
				<option value="Not_conducted">Not conducted</option>
                <option value="Market_research_has_been_conducted ">Market research has been conducted </option>
                
			</select>
			{/* {console.log(value)} */}

            {/* Factory, Mill, Stall, Workshop, Boutique, Vehicle, Centre, Store, Farm, Plant, Processing Unit, Shop, Vending cart, Manufacturing unit */}
		</div>
	);
}
