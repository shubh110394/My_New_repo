import React from "react";
import { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import { useEffect } from "react";
import Showmulti from "./Showmulti";

export default function Mutlselect({ usp, setDisplay }) {
	// console.log(usp);
	let arr = [];
	for (let i = 1; i < usp.length; i++) {
		let obj = {};
		obj["sno"] = i - 1;
		obj["name"] = usp[i - 1];
		arr.push(obj);
	}
	useEffect(() => {
		console.log("hi");
	}, [setDisplay]);
	const [state, setState] = useState(arr);
	const [res, setRes] = useState([]);
	const HandleValue = (d) => (
		setDisplay(d)
		// <Showmulti show={d} />
	);
	// console.log(value);

	return (
		<>
			<div>
				<label htmlFor="multi">Unique Selling Proposition</label>
				<Multiselect
					options={state}
					displayValue={"name"}
					// value={state}
					name="multi"
					onSelect={HandleValue}
					onRemove={HandleValue}
				></Multiselect>
			</div>
		</>
	);
}
