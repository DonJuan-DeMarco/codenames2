import word_list from '../words';

function Card() {
	return (
		<>
			<p className='counter'>Кількість слів: {word_list.length}</p>
		</>
	);
}

export default Card;
