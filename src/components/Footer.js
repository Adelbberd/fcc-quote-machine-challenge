const Footer = ({ colors, colorIndex }) => {
	// CSS Styles
	const footStyles = {
		color: `${colors[colorIndex]}`,
	};
	return (
		<>
			<footer>
				<div>
					<h3 style={{ marginTop: 5 }}>Reach me here...</h3>

					<span>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/adelbberd"
							style={footStyles}
							className="fab fa-github-square"
						>
							{' '}
							GitHub
						</a>
					</span>

					<span>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://facebook.com/adelberdo.madriguez"
							style={{ ...footStyles, marginLeft: '10px' }}
							className="fab fa-facebook-square"
						>
							{' '}
							Facebook
						</a>
					</span>
				</div>

				<p>&copy; Created by Adelberd Mothusi</p>
			</footer>
		</>
	);
};

export default Footer;
