import React, { useState } from "react";

export default function DropDown5({ setBusiness_locality }) {
	const [value, setValue] = useState("");
	return (
		<div>
			<label htmlFor="stage">Locality of business</label>
			<select name="stage" onChange={(e) => setBusiness_locality(e.target.value)}>
				<option value="Urban">Urban</option>
                <option value="Rural">Rural</option>
                <option value="Slum">Slum</option>
                <option value="Semi-urban">Semi-urban</option>
                
                
			</select>
			{/* {console.log(value)} */}

            {/* Factory, Mill, Stall, Workshop, Boutique, Vehicle, Centre, Store, Farm, Plant, Processing Unit, Shop, Vending cart, Manufacturing unit */}
		</div>
	);
}
