function Keys() {
	const shuffle = (array) => {
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	};
	const generateKeys = () => {
		let cells = [
			'blue',
			'blue',
			'blue',
			'blue',
			'blue',
			'blue',
			'blue',
			'blue',
			'red',
			'red',
			'red',
			'red',
			'red',
			'red',
			'red',
			'red',
			'white',
			'white',
			'white',
			'white',
			'white',
			'white',
			'white',
			'Black',
		];
		let starter = Math.random() < 0.5 ? 'red' : 'blue';
		cells.push(starter);
		cells = shuffle(cells);

		drawCells(cells);
		return cells;
	};
	const drawCells = (cells) => {
		let str = '';
		let blueCount = 0;

		cells.forEach((cell) => {
			if (cell === 'blue') blueCount++;

			str += cell.charAt(0);
		});
	};
	let blueCount = 0;
	return (
		<>
			<div className='key-wrapper-1'>
				<div className='key-board clearfix' id='key-board'>
					{generateKeys().map((cellur, i) => {
						if (cellur === 'blue') blueCount++;
						return <div key={i} className={`cell ${cellur}`}></div>;
					})}
				</div>
				<div
					className={`lamp top ${blueCount === 9 ? 'blue' : 'red'}`}
				></div>
				<div
					className={`lamp right side ${
						blueCount === 9 ? 'blue' : 'red'
					}`}
				></div>
				<div
					className={`lamp left  side ${
						blueCount === 9 ? 'blue' : 'red'
					}`}
				></div>
				<div
					className={`lamp bottom ${
						blueCount === 9 ? 'blue' : 'red'
					}`}
				></div>
				<div className='bezel top'></div>
				<div className='bezel right'></div>
				<div className='bezel left'></div>
				<div className='bezel bottom'></div>
			</div>
			<div className='key-wrapper-shirt'> </div>
		</>
	);
}

export default Keys;
