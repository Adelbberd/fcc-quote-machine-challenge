const TextQuote = ({ index, quotes, colorIndex, colors }) => {
	// CSS Styles
	const commonStyles = {
		borderTop: `2px solid ${colors[colorIndex]}`,
		padding: `10px`,
		color: `${colors[colorIndex]}`,
		borderRadius: `5px`,
		boxShadow: `5px 5px`,
	};

	const border = {
		borderBottom: `2px solid ${colors[colorIndex]}`,
	};

	const topLeftBorder = {
		borderLeft: `2px solid ${colors[colorIndex]}`,
	};

	return (
		<>
			<div id="text">
				<p style={{ ...topLeftBorder, ...commonStyles }}>
					<i className="fa fa-quote-left quote-icon"></i> {quotes[index].quote}{' '}
					<i className="fa fa-quote-right quote-icon"></i>
				</p>
			</div>

			<div id="author">
				<p style={{ ...border, ...commonStyles }}>- {quotes[index].author}</p>
			</div>
		</>
	);
};

export default TextQuote;
