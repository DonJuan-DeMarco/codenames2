function Keys() {
	let redStarter = 0,
		blueStarter = 0;
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
	let starter;
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
		if (redStarter === 21) {
			starter = 'blue';
		} else if (blueStarter === 21) {
			starter = 'red';
		} else {
			starter = Math.random() < 0.5 ? 'red' : 'blue';
		}
		starter === 'red' ? redStarter++ : blueStarter++;
		console.log(redStarter);
		cells.push(starter);
		cells = shuffle(cells);

		return cells;
	};
	return (
		<>
			{Array(7)
				.fill(true)
				.map((_, pageKey) => (
					<div key={pageKey} className='keys-wrapper'>
						{Array(6)
							.fill(true)
							.map((_, iKey) => (
								<div key={iKey} className='key-wrapper-1'>
									<div
										className='key-board clearfix'
										id='key-board'
									>
										{generateKeys().map((cell, i) => {
											return (
												<div
													key={i}
													className={`cell ${cell}`}
												></div>
											);
										})}
									</div>
									<div
										className={`lamp top ${
											starter === 'blue' ? 'blue' : 'red'
										}`}
									></div>
									<div
										className={`lamp right side ${
											starter === 'blue' ? 'blue' : 'red'
										}`}
									></div>
									<div
										className={`lamp left  side ${
											starter === 'blue' ? 'blue' : 'red'
										}`}
									></div>
									<div
										className={`lamp bottom ${
											starter === 'blue' ? 'blue' : 'red'
										}`}
									></div>
									<div className='bezel top'></div>
									<div className='bezel right'></div>
									<div className='bezel left'></div>
									<div className='bezel bottom'></div>
								</div>
							))}
					</div>
				))}
			{Array(7)
				.fill(true)
				.map((_, pageKey) => (
					<div key={pageKey} className='keys-wrapper'>
						{Array(6)
							.fill(true)
							.map((_, iKey) => (
								<div
									key={iKey}
									className='key-wrapper-shirt'
								></div>
							))}
					</div>
				))}
		</>
	);
}

export default Keys;
