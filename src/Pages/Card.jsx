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
		scale: 11,
		useCORS: true,
	};

	const createPDF = async () => {
		console.log('startedPDF');
		const pdf = new jsPDF('landscapee', 'cm', [6.6, 4.4]);
		word_list.length = 10;
		const dd = word_list.map(async (word, idx) => {
			console.log('#' + idx + ' working on ' + word);
			const data = await html2canvas(
				document.querySelector(`#pdf_${idx}`),
				options
			);
			console.log(data);
			const img = data.toDataURL(`image${idx + 1}/png`);
			const imgProperties = pdf.getImageProperties(img);
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight =
				(imgProperties.height * pdfWidth) / imgProperties.width;
			pdf.addPage([pdfWidth, pdfHeight], 'l');
			pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
			console.log(' finished on ' + word);
		});
		console.log('preprom');
		if (await Promise.all(dd)) {
			console.log('PROM');
			pdf.save(`card_2.pdf`);
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
					{words.map((word, index) => (
						<div
							className='word-card'
							key={index}
							id={`pdf_${pageKey * index + index}`}
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
					))}
				</div>
			))}
			<p className='counter'>Pages Count: {wordList.length}</p>
			<p className='counter'>Words Count: {word_list.length}</p>
		</>
	);
}

export default Card;
