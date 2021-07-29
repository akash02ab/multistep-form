const Part1 = ({ clickhandler }) => {
	return (
		<div className="part">
			<p>Choose title content</p>
			<button onClick={() => clickhandler(1, 2)}>Submit Title</button>
		</div>
	);
};

export default Part1;
