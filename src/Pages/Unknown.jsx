import word_unknown from '../wordsUnknown';

function Unknown() {
	return (
		<>
			<p className='counter'>Кількість слів: {word_unknown.length}</p>

			<div className='unknown_list'>
				{word_unknown.map((word, index) => (
					<p className='word_unknown' key={index}>
						<span className='word'>{word[0]}</span> - {word[1]}
					</p>
				))}
			</div>
		</>
	);
}

export default Unknown;
