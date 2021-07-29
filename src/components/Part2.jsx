const Part2 = ({ clickhandler }) => {
	return (
		<div className="part">
			<p>Choose description content</p>
			<div className="row">
				<button onClick={() => clickhandler(2, 1)}>Back</button>
				<button onClick={() => clickhandler(2, 3)}>Submit Title</button>
			</div>
		</div>
	);
};

export default Part2;
