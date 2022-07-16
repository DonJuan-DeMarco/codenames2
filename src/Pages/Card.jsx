import word_list from '../words';

function listToMatrix(list, elementsPerSubArray) {
	var matrix = [],
		i,
		k;

	for (i = 0, k = -1; i < list.length; i++) {
		if (i % elementsPerSubArray === 0) {
			k++;
			matrix[k] = [];
		}

		matrix[k].push(list[i]);
	}

	return matrix;
}
const wordList = listToMatrix(word_list, 16);
function Card() {
	return (
		<>
			<p className='counter'>Pages Count: {wordList.length}</p>
			<p className='counter'>Words Cunt: {word_list.length}</p>
			{/* <div className='wrapper-words'> */}
			{wordList.map((words, pageKey) => (
				<div key={pageKey} className='keys-wrapper'>
					{words.map((word, index) => (
						<div className='word-card' key={index}>
							{(word.toLowerCase() === 'королева' ||
								word.toLowerCase() === 'королева') && (
								<span></span>
							)}
							<p className='word mirrored'>{word}</p>
							<div className='main-field'>
								<p className='word main-word'>{word}</p>
							</div>
						</div>
					))}
				</div>
			))}
		</>
	);
}

export default Card;
