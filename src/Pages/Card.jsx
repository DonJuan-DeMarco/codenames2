import jsPDF from 'jspdf';
import word_list from '../words';
import html2canvas from 'html2canvas';

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
console.log(word_list);
function Card() {
	const options = {
		scale: 2,
	};

	const createPDF = async () => {
		console.log('startedPDF');
		const pdf = new jsPDF('landscapee', 'mm', [66, 44]);
		const chunkSize = 50;
		for (let i = 0; i < word_list.length; i += chunkSize) {
			const chunk = word_list.slice(i, i + chunkSize);
			// do whatever

			const dd = chunk.map(async (word, idx) => {
				try {
					console.log('#' + idx + ' working on ' + word);

					const cleansedWord = word.replace(/[`'"‘’“”]/g, '');
					const data = await html2canvas(
						document.querySelector(`#pdf_${cleansedWord}`),
						options
					);
					console.log(data);
					const img = data.toDataURL(`image_${cleansedWord}/png`);
					const imgProperties = pdf.getImageProperties(img);
					const pdfWidth = pdf.internal.pageSize.getWidth();
					console.log(img);
					const pdfHeight =
						(imgProperties.height * pdfWidth) / imgProperties.width;
					pdf.addPage([66, 44], 'l');
					pdf.addImage(img, 'PNG', 0, 0, pdfWidth + 1, pdfHeight + 1);
					console.log(' finished on ' + word);
				} catch (error) {
					console.log('====================================');
					console.log(word);
					console.warn(error, word);
					console.log('====================================');
					Promise.resolve();
				}
			});
			console.log('preprom', await dd);
			if (await Promise.all(dd)) {
				console.log('PROM');
				pdf.save(`Слова_${i}.pdf`);
			}
		}
	};

	return (
		<>
			<p className='counter'>Сторінок: {wordList.length}</p>
			<p className='counter'>Кількість слів: {word_list.length}</p>
			<button onClick={createPDF} type='button'>
				Download
			</button>
			{/* <div className='wrapper-words'> */}
			{wordList.map((words, pageKey) => (
				// <div
				// 	key={pageKey}
				// 	className={`keys-wrapper ${pageKey === 19 ? 'center' : ''}`}
				// >
				<div key={pageKey} className='keys-wrapper'>
					{words.map((word, index) => {
						const cleansedWord = word.replace(/[`'"‘’“”]/g, '');
						return (
							<div
								className='word-card'
								key={index}
								id={`pdf_${cleansedWord}`}
							>
								{/* {(word.toLowerCase() === 'королева' ||
								word.toLowerCase() === 'міледі' ||
								word.toLowerCase() === 'сонік' ||
								word.toLowerCase() === 'лебідка') && (
								<span></span>
							)} */}

								<p className='word mirrored'>{word}</p>
								{/* <div className='main-field-inner-border' />
							<div className='main-field-outer-border' />
							<div className='pseudo-main-field' /> */}
								<div className='main-field'>
									<p className='word main-word'>{word}</p>
								</div>
							</div>
						);
					})}
				</div>
			))}
			<p className='counter'>Pages Count: {wordList.length}</p>
			<p className='counter'>Words Count: {word_list.length}</p>
		</>
	);
}

export default Card;
