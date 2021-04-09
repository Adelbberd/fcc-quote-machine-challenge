const BtnNewQuote = ({ onClick, colors, colorIndex }) => {
	const btnStyles = { backgroundColor: colors[colorIndex], color: 'white' };
	return (
		<>
			<button
				type="button"
				id="new-quote"
				className="btn"
				onClick={onClick}
				style={btnStyles}
			>
				New Quote
			</button>
		</>
	);
};

export default BtnNewQuote;
