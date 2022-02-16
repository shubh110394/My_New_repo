import React, { useState } from "react";

export default function DropDown10({ setCompetition }) {
	const [value, setValue] = useState("");
	return (
		<div>
			<label htmlFor="stage">Seasons of high sales</label>
			<select name="stage" onChange={(e) => setCompetition(e.target.value)}>
				<option value="No_similar_goods/service_provider_in_this_locality">
					No similar goods/service provider in this locality
				</option>
				<option
					value="Only_a_few_similar_goods/service_providers_in_this_locality"
				>
					{" "}
					Only a few similar goods/service providers in this locality
				</option>
				<option value="Many_similar_goods/service_providers_in_this_locality">
                    Many similar goods/
                    service providers in this locality
				</option>
			</select>
			{/* {console.log(value)} */}

			{/* Factory, Mill, Stall, Workshop, Boutique, Vehicle, Centre, Store, Farm, Plant, Processing Unit, Shop, Vending cart, Manufacturing unit */}
		</div>
	);
}
