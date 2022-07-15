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
			{/* <div className='wrapper-words'>
					{word_list.map((word, index) => (
						<div className='word-card' key={index}>
							{(word.toLowerCase() === 'королева' ||
								word.toLowerCase() === 'королева') && <span></span>}
							<p className='word mirrored'>{word}</p>
							<div className='main-field'>
								<p className='word main-word'>{word}</p>
							</div>
						</div>
					))} */}
			{/* <div className='word-card'>
				 <span></span> 
				<p className='word mirrored'>Королева</p>
				<div className='main-field'>
					<p className='word main-word'>Королева</p>
				</div>
			</div>
			<div className='word-card'>
				<p className='word mirrored'>Безперспектива</p>
				<div className='main-field'>
					<p className='word main-word'>Безперспектива</p>
				</div>
			</div>
			<div className='word-card'>
				<p className='word mirrored'>Гордон</p>
				<div className='main-field'>
					<p className='word main-word'>Гордон</p>
				</div>
			</div>
			<div className='word-card'>
				<p className='word mirrored'>Чайка</p>
				<div className='main-field'>
					<p className='word main-word'>Чайка</p>
				</div>
			</div> */}
			{/* </div> */}
		</>
	);
}

export default Card;
