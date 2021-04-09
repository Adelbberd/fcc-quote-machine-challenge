const BtnTweet = ({ colors, colorIndex, quote }) => {
	const btnStyles = { backgroundColor: colors[colorIndex] };

	var quoteText = quote.quote;
	var quoteAuthor = quote.author;
	console.log(`quote is ${quoteText} and author is ${quoteAuthor}`);

	return (
		<>
			<button className="btn" style={btnStyles}>
				<a
					id="tweet-quote"
					style={{ color: 'white', textDecoration: 'none' }}
					href={`http://twitter.com/intent/tweet?hashtags=MothusisQuoteGenerator&text=${quoteText} -${quoteAuthor}`}
					target="_blank"
				>
					<i className="fab fa-twitter"></i> Tweet
				</a>
			</button>
		</>
	);
};

export default BtnTweet;
