import { useEffect, useState } from "react";
import "./App.css";
import DropDown from "./Components/DropDown";
import DropDown10 from "./Components/DropDown10";
import DropDown2 from "./Components/DropDown2";
import DropDown3 from "./Components/DropDown3";
import DropDown4 from "./Components/DropDown4";
import DropDown5 from "./Components/DropDown5";
import DropDown6 from "./Components/DropDown6";
import DropDown7 from "./Components/DropDown7";
import DropDown8 from "./Components/DropDown8";
import DropDown9 from "./Components/DropDown9";
import InputBox from "./Components/InputBox";
import Mutlselect from "./Components/Mutlselect";
import Number from "./Components/Number";

function App() {
	const usp = [
		"the entrepreneur's experience in this field",
		"innovative product/service",
		"high profit margin",
		"high growth potential",
		"superior customer support",
		"quality and affordable products/service",
		"high demand in the target market (forward linkage)",
		"abundant supply of raw materials (backward linkage)",
		"wide range of products/services",
		"robust value-chain of the business",
		"frequency of customer visits",
	];
	const [business_stage, setBusiness_stage] = useState("Start-up");
	const [age_of_establishment, setAge_of_establishment] = useState(0);
	const [primary_product_service_offered, setPrimary_product_service_offered] =
		useState("");
	const [offered_to, setOffered_to] = useState("End customers");
	const [
		secondary_product_service_offered,
		setSecondary_product_service_offered,
	] = useState("");
	const [processed_products, setProcessed_products] = useState("");
	const [relevant_experience, setRelevant_experience] = useState(0);
	const [skill_training, setSkill_training] = useState(
		"No formal skill training"
	);
	const [establishment_type, setEstablishment_type] = useState("Factory");
	const [business_area, setBusiness_area] = useState("");
	const [business_locality, setBusiness_locality] = useState("Urban");
	const [infra_ownership, setInfra_ownership] = useState("Rented");
	const [eastablishment_area, setEstablishment_area] = useState(0);
	const [market_research, setMarket_research] = useState("Not_Conducted");
	const [primary_market, setPrimary_market] = useState("Local");
	const [customers, setCustomers] = useState("");
	const [seasonality, setSeasonality] = useState("Consistent_sales_across_all_seasons");
	const [competition, setCompetition] = useState("Only_a_few_similar_goods");
	const [suppliers, setSuppliers] = useState("");
	const [display, setDisplay] = useState([]);
	useEffect(() => {
		console.log(business_stage);
	},[setDisplay])
	return (
		<div className="App">
			<div className="input_field">
				<Mutlselect usp={usp} setDisplay={setDisplay} />
				{console.log(display)}
				<form>
					<DropDown setDisplay={setBusiness_stage}></DropDown>
					<Number
						age_of_establishment="age_of_establishment"
						setAge_of_establishment={setAge_of_establishment}
					></Number>
					<InputBox
						labelval="Stage of business"
						setVal={setPrimary_product_service_offered}
					/>
					<DropDown2 setOffered_to={setOffered_to}></DropDown2>
					<InputBox
						labelval="Secondary Products"
						setVal={setSecondary_product_service_offered}
					/>
					<InputBox
						labelval="Processed products"
						setVal={setProcessed_products}
					/>
					<Number
						age_of_establishment="Years of relevant experience in this field"
						setAge_of_establishment={setRelevant_experience}
					></Number>
					<DropDown3 setSkill_training={setSkill_training} />
					<DropDown4 setEstablishment_type={setEstablishment_type}></DropDown4>
					<InputBox labelval="Name of the area" setVal={setBusiness_area} />
					<DropDown5 setBusiness_locality={setBusiness_locality} />
					<DropDown6 setInfra_ownership={setInfra_ownership} />
					<Number
						age_of_establishment="Establishment area"
						setAge_of_establishment={setEstablishment_area}
					></Number>
					<DropDown7 setMarket_research={setMarket_research} />
					<DropDown8 setPrimary_market={setPrimary_market} />
					<InputBox labelval="Customers" setVal={setCustomers} />
					<DropDown9 setSeasonality={setSeasonality} ></DropDown9>
					<DropDown10 setCompetition={setCompetition} />
					<InputBox labelval="List of Suppliers" setVal={setSuppliers} />
					
					

				</form>
			</div>
			<div className="output_field">
				{/* {business_stage.map((res)=>{console.log(res)	})} */}
				<div className="intro">
					<p>
						$name is looking to <b>{business_stage}</b> their business of
						$business_idea.
					</p>
					{age_of_establishment > 0 && (
						<p>
							This enterprise has been operational since{" "}
							<b>{age_of_establishment}</b> years and has been serving its
							customers since then.
						</p>
					)}
					<p>
						This establishment offers products/services like-{" "}
						<b>{primary_product_service_offered}</b> to <b>{offered_to}</b>.
					</p>
					<p>
						In addition, the enterprise shall also be involved in-
						<b>{secondary_product_service_offered}</b>
					</p>
					{relevant_experience > 0 && (
						<p>
							This enterprise has been operational since{" "}
							<b>{relevant_experience}</b> years and has been serving its
							customers since then.
						</p>
					)}
					<p>
						The entrepreneur <b>{skill_training}</b> in this field of work.
					</p>
					<p>
						The <b>{establishment_type}</b> is located in{" "}
						<b>{business_locality}</b>
						area of $city in a <b>{infra_ownership}</b> property.
					</p>
					{eastablishment_area > 0 && (
						<p>The size of the establishment is <b>{eastablishment_area}</b> sq.ft.</p>
					)}
					<p>
						<b>{market_research}</b> and the range of products and target market has been identified after that.
					</p>
					<p>
						The enterprise shall focus on offering its products/services to <b>{primary_market}</b> markets. 
					</p>
					<p>
						The enterprise is uniquely positioned because of its - <b>{display.map(res=>(res.name))}</b>
					</p>
					<p>
						Our customers shall include- <b>{customers}</b>
					</p>
					<p>
						The nature of the business is such that we expect <b>{seasonality}</b>
					</p>
					<p>
						Regarding competition, there are <b>{competition}</b>.
					</p>
					<p>
						The enterprise shall procure goods/raw materials from <b>{suppliers}</b>.
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
