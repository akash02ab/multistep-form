const Part3 = ({ clickhandler }) => {
	return (
		<div className="part">
			<p>Are you happy now?</p>
			<div className="row">
				<button onClick={() => clickhandler(3, 2)}>No, go back</button>
				<button onClick={() => clickhandler(3, 4)}>Yes, go ahead</button>
			</div>
		</div>
	);
};

export default Part3;
