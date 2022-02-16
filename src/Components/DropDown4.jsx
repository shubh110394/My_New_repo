import React, { useState } from "react";

export default function DropDown4({ setEstablishment_type }) {
	const [value, setValue] = useState("");
	return (
		<div>
			<label htmlFor="stage">Skill_training</label>
			<select name="stage" onChange={(e) => setEstablishment_type(e.target.value)}>
				<option value="Factory">Factory</option>
                <option value="Mill.">Mill</option>
				<option value="Stall.">Stall</option>
				<option value="Workshop.">Workshop</option>
                <option value="Boutique">Boutique</option>
				<option value="Vehicle">Vehicle</option>
                
				<option value="Centre">Centre</option>

				<option value="Store">Store</option>
				<option value="Farm">Farm</option>
				<option value="Plant">Plant</option>
				<option value="Processing">Processing Unit</option>
				<option value="Shop">Shop</option>
				<option value=" Vending"> Vending cart</option>
				<option value=" Manufacturing"> Manufacturing unit</option>
                
                
			</select>
			{/* {console.log(value)} */}

            {/* Factory, Mill, Stall, Workshop, Boutique, Vehicle, Centre, Store, Farm, Plant, Processing Unit, Shop, Vending cart, Manufacturing unit */}
		</div>
	);
}
