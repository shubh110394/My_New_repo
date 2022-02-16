import React, { useState } from "react";

export default function DropDown9({ setSeasonality }) {
	const [value, setValue] = useState("");
	return (
		<div>
			<label htmlFor="stage">Seasons of high sales</label>
			<select
				name="stage"
				onChange={(e) => setSeasonality(e.target.value)}
			>
				Consistent sales across all seasons, Higher sales in festive seasons,
				High sales in cropping/cultivation season, High sales in peak seasons,
				etc.
				<option value="Consistent_sales_across_all_seasons">Consistent sales across all seasons</option>
				<option value=" Higher_sales_in_festive_seasons"> Higher sales in festive seasons</option>
				<option value="High_sales_in_cropping/cultivation_season">High sales in cropping/cultivation season</option>
				<option value="High sales in peak seasons">High sales in peak seasons</option>
			</select>
			{/* {console.log(value)} */}

			{/* Factory, Mill, Stall, Workshop, Boutique, Vehicle, Centre, Store, Farm, Plant, Processing Unit, Shop, Vending cart, Manufacturing unit */}
		</div>
	);
}
