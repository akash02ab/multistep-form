import { useState } from "react";
import Final from "./Final";
import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";
import "../style.css";

const App = () => {
	const [steps, setSteps] = useState([1]);
	const [current, setCurrent] = useState(1);

	const stephandler = (to) => {
		if (steps.includes(to)) {
			setCurrent(to);
		}
	};

	const clickhandler = (from, to) => {
		if (from < to) {
			let stepsCopy = [...steps];
			stepsCopy.push(to);
			setSteps(stepsCopy);
		} else {
			let stepsCopy = [...steps];
			for (let i = 0; i < stepsCopy.length; i++) {
				if (stepsCopy[i] >= from) {
					stepsCopy.splice(i, 1);
					i -= 1;
				}
			}
			// let index = stepsCopy.indexOf(from);
			// stepsCopy.splice(index, 1);
			setSteps(stepsCopy);
		}
		setCurrent(to);
	};

	return (
		<div className="container">
			<div className="card">
				<div className="titles">
					<div className={steps.includes(1) ? "active rowt" : "rowt"}>
						<span>1</span>
						<p onClick={() => stephandler(1)}>Choose title</p>
					</div>

					<div className={steps.includes(2) ? "active rowt" : "rowt"}>
						<span>2</span>
						<p onClick={() => stephandler(2)}>Choose description</p>
					</div>

					<div className={steps.includes(3) ? "active rowt" : "rowt"}>
						<span>3</span>
						<p onClick={() => stephandler(3)}>Confirm data</p>
					</div>
				</div>

				<div className="selector">
					{current === 1 && <Part1 clickhandler={clickhandler} />}
					{current === 2 && <Part2 clickhandler={clickhandler} />}
					{current === 3 && <Part3 clickhandler={clickhandler} />}
					{current === 4 && <Final clickhandler={clickhandler} />}
				</div>
			</div>
		</div>
	);
};

export default App;
