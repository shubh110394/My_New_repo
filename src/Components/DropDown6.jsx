import React, { useState } from "react";

export default function DropDown6({ setInfra_ownership }) {
	const [value, setValue] = useState("");
	return (
		<div>
			<label htmlFor="stage">Locality of business</label>
			<select name="stage" onChange={(e) => setInfra_ownership(e.target.value)}>
				<option value="Rented">Rented</option>
                <option value="Leased">Leased</option>
                <option value="Self-owned">Self-owned</option>
                
                
			</select>
			{/* {console.log(value)} */}

            {/* Factory, Mill, Stall, Workshop, Boutique, Vehicle, Centre, Store, Farm, Plant, Processing Unit, Shop, Vending cart, Manufacturing unit */}
		</div>
	);
}
