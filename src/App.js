import TextQuote from './components/TextQuote';
import BtnTweet from './components/BtnTweet';
import BtnNewQuote from './components/BtnNewQuote';
import Footer from './components/Footer';
import quotes from './components/quotes';
import colors from './components/colors';

import { useState } from 'react';

function App() {
	// State
	const [quoteIndex, setQuoteIndex] = useState(
		Math.floor(Math.random() * quotes.length)
	);

	const [colorIndex, setColorIndex] = useState(
		Math.floor(Math.random() * colors.length)
	);

	// Random function.
	const random = () => {
		const qIndex = Math.floor(Math.random() * quotes.length);
		const cIndex = Math.floor(Math.random() * colors.length);
		setQuoteIndex(qIndex);
		setColorIndex(cIndex);
	};

	document.body.style.backgroundColor = colors[colorIndex];

	return (
		<div className="app" id="wrapper">
			<div id="quote-box">
				<TextQuote
					index={quoteIndex}
					quotes={quotes}
					colors={colors}
					colorIndex={colorIndex}
				/>

				<div className="buttons">
					<BtnTweet
						colors={colors}
						colorIndex={colorIndex}
						quote={quotes[quoteIndex]}
					/>{' '}
					<span className="span" style={{ color: colors[colorIndex] }}>
						|
					</span>
					<BtnNewQuote
						onClick={random}
						colors={colors}
						colorIndex={colorIndex}
					/>
				</div>
			</div>

			<Footer colors={colors} colorIndex={colorIndex} />
		</div>
	);
}

export default App;
