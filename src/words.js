const word_set = new Set([
	'песьо',
	'монокль',
	'чепчик',
	'унікум',
	'тюбік',
	'дурбелик',
	'чмоня',
	'тупік',
	'крило',
	'франик',
	'жуйка',
	'тормоз',
	'кальян',
	'мостік',
	'корок',
	'пательня',
	'гуцул',
	'паляниця',
	'скала',
	'рама',
	'край',
	'дрова',
	'ромашки',
	'мюслі',
	'зсу',
	'москаль',
	'свинособака',
	'калуш',
	'тіпок',
	'вишня',
	'барбарис',
	'автозак',
	'омлет',
	'вольво',
	'бандера',
	'камера',
	'мохіто',
	'торчин',
	'дача',
	'священник',
	'секта',
	'байдарка',
	'весло',
	'кондиціонер',
	'кукарача',
	'форт',
	'люцифер',
	'вподобайка',
	'бантик',
	'м‘ясо',
	'ворота',
	'машина',
	'царапина',
	'плуг',
	'мафія',
	'аматор',
	'панель',
	'шабаш',
	'стрічка',
	'інстаграм',
	'мексика',
	'кактус',
	'бусинка',
	'гангстер',
	'ствол',
	'рукоятка',
	'двигун',
	'палка',
	'контроль',
	'закон',
	'вдача',
	'крутелик',
	'лікарня',
	'зіниця',
	'морган',
	'плюшка',
	'бас',
	'жук',
	'трава',
	'шашлик',
	'подушка',
	'зірка',
	'ляпота',
	'булька',
	'пожежа',
	'вподобайка',
	'жираф',
	'біометрія',
	'конфуз',
	'валянок',
	'карта',
	'фірма',
	'сквірт',
	'водоспад',
	'потік',
	'сперма',
	'життя',
	'пуголовок',
	'цикл',
	'кляп',
	'шкіра',
	'чокер',
	'прутень',
	'хлист',
	'очко',
	'чорнобаївка',
	'газ',
	'кондиціонер',
	'нітрофуран',
	'пітая',
	'пітарда',
	'студент',
	'мадагаскар',
	'канал',
	'говерла',
	'карпати',
	'забіяка',
	'бозє',
	'гопник',
	'перу',
	'манчестер',
	'ювентус',
	'бинт',
	'шлем',
	'ракушка',
	'нокаут',
	'ребро',
	'вікно',
	'торба',
	'мерседес',
	'рейнольдс',
	'депп',
	'джонсон',
	'сіна',
	'дедпул',
	'дивергент',
	'сепаратист',
	'мародер',
	'аферист',
	'танцюрист',
	'столяр',
	'стоматолог',
	'арбітр',
	'програміст',
	'бізнесмен',
	'депо',
	'тролейбус',
	'афганістан',
	'альпака',
	'стопка',
	'джек',
	'джеймсон',
	'зубрівка',
	'алкоголік',
	'пастух',
	'анонс',
	'прутень',
	'губи',
	'груди',
	'репетитор',
	'роман',
	'круїз',
	'дзвінок',
	'болт',
	'гайка',
	'безпека',
	'горох',
	'бур’ян',
	'бовдур',
	'банґладеш',
	'карбонара',
	'кавказ',
	'любов',
	'гарбиль',
	'сопільче',
	'свисток',
	'кеш',
	'телеграм',
	'фригідність',
	'крокодил',
	'яма',
	'тікток',
	'снепчат',
	'чмоня',
	'хромосома',
	'шарага',
	'жалюзі',
	'мак',
	'айфон',
	'село',
	'циганка',
	'байдарка',
	'ксіомі',
	'кальян',
	'гвинтокрил',
	'катер',
	'тубус',
	'тиран',
	'голка',
	'банка',
	'ґрунт',
	'сапер',
	'кіт',
	'хом’як',
	'єврей',
	'міністр',
	'народ',
	'розетка',
	'капітан',
	'чізкейк',
	'спагеті',
	'компот',
	'італія',
	'байрактар',
	'вазон',
	'м’яч',
	'патрон',
	'напальчник',
	'ключ',
	'техас',
	'оскар',
	'гопак',
	'офіс',
	'воєнка',
	'кашалот',
	'мавританець',
	'цицька',
	'сосок',
	'вібратор',
	'жмот',
	'корона',
	'вірус',
	'актив',
	'пасив',
	'гей',
	'натюрморт',
	'зевс',
	'розчепірка',
	'кислота',
	'ньютон',
	'єдиноріг',
	'гомосапіенс',
	'картон',
	'шлакоблок',
	'гуру',
	'гордон',
	'гондон',
	'подушка',
	'шланг',
	'штахета',
	'окунь',
	'кєнт',
	'бульдозер',
	'вогонь',
	'тапок',
	'лопух',
	'аквамен',
	'залупа',
	'лупа',
	'тазік',
	'тормоз',
	'акушер',
	'парасоля',
	'презерватив',
	'чебурашка',
	'макітра',
	'гештальт',
	'косплей',
	'бутон',
	'плід',
	'підгузник',
	'роутер',
	'равлик',
	'алабай',
	'осел',
	'паралелепіпед',
	'реприза',
	'мальдіви',
	'ролекс',
	'орк',
	'матча',
	'нігерія',
	'тернопіль',
	'кувалда',
	'вангог',
	'валер’яна',
	'нежить',
	'бобер',
	'зірка',
	'вареник',
	'борщ',
	'ганчірка',
	'панталони',
	'єпископ',
	'викрутка',
	'вазелін',
	'вівця',
	'гангстер',
	'міньйон',
	'дементор',
	'вовкулака',
	'гібрид',
	'гігант',
	'фундамент',
	'батл',
	'рандеву',
	'килим',
	'аванс',
	'барометр',
	'скульптор',
	'хайлайтер',
	'акваланг',
	'нептун',
	'тесла',
	'повія',
	'багно',
	'перегар',
	'рушниця',
	'табуретка',
	'рагуль',
	'розмарин',
	'круасан',
	'макака',
	'самба',
	'румба',
	'румбарбар',
	'акрил',
	'торетто',
	'флеш',
	'браузер',
	'платина',
	'хром',
	'бляха',
	'рейк‘явік',
	'дядя',
	'персик',
	'хуцкер',
	'нація',
	'памп',
	'зброд',
	'піксель',
	'кракен',
	'нфт',
	'шифратор',
	'сухофрукт',
	'живодер',
	'комбат',
	'роман',
	'рішало',
	'перспектива',
	'кактус',
	'прокол',
	'бритва',
	'ерудит',
	'дача',
	'інкогніто',
	'шкварок',
	'качка',
	'віндовс',
	'дєдінсайд',
	'інфузорія',
	'кіберспіртсмен',
	'вазелін',
	'хатіко',
	'паляниця',
	'ром',
	'капець',
	'абстракція',
	'інструктор',
	'макарон',
	'калач',
	'клин',
	'піца',
	'круасан',
	'ковбой',
	'берсерк',
	'унікум',
	'скріншот',
	'абсолют',
	'монополія',
	'валькірія',
	'риф',
	'соло',
	'конфуцій',
	'андроїд',
	'пуск',
	'калина',
	'хвіст',
	'плойка',
	'чек',
	'іржа',
	'аватар',
	'вендета',
	'скала',
	'пульс',
	'наруто',
	'режисер',
	'мотор',
	'шапіто',
	'рамштайн',
	'бумульве',
	'королева',
	'слово',
	'маршал',
	'портупея',
	'фалоімітатор',
	'вульва',
	'бдсм',
	'пірсинг',
	'альберт',
	'отвір',
	'бондаж',
	'лубрикант',
	'євнух',
	'лебідка',
	'камшот',
	'фетіш',
	'домінант',
	'пасив',
	'мойсей',
	'півко',
	'деніелс',
	'квентін',
	'очко',
	'ствол',
	'пенетрація',
	'бульбулятор',
	'водний',
	'кекс',
	'шишичка',
	'місіонер',
	'месія',
	'інквізитор',
	'поляк',
	'парад',
	'шоколад',
	'клик',
	'синька',
	'ніагара',
	'нігер',
	'бобер',
	'центр',
	'шлейф',
	'ондатра',
	'амбассадор',
	'марка',
	'шевченко',
	'екстезі',
	'патруль',
	'неподобство',
	'армагеддон',
	'синяк',
	'олух',
	'пічєнько',
	'ванга',
	'жмурік',
	'куртизанка',
	'амазонка',
	'характерник',
	'катедра',
	'молоко',
	'атб',
	'отрута',
	'токсин',
	'перець',
	'кукурудза',
	'фіаско',
	'патрісія',
	'аладдін',
	'осад',
	'ваніль',
	'кристал',
	'душа',
	'безкінечність',
	'мольфар',
	'лаванда',
	'габелла',
	'кариби',
	'джомолунгма',
	'каньйон',
	'міссісіпі',
	'в’єтнам',
	'спліт',
	'гітлер',
	'діоген',
	'японія',
	'ліхтенштейн',
	'феодал',
	'самурай',
	'харакірі',
	'чилі',
	'трдло',
	'льорнета',
	'біціглі',
	'халапеньйо',
	'фондан',
	'хамоміла',
	'хамон',
	'синдром',
	'карлсон',
	'раґнарок',
	'фантазер',
	'квас',
	'клас',
	'коломойський',
	'ібіс',
	'казино',
	'кіндер',
	'горностай',
	'джоконда',
	'венера',
	'снід',
	'перун',
	'аполлон',
	'арей',
	'білобог',
	'велес',
	'рюрик',
	'січ',
	'леприкон',
	'ганнібал',
	'кунібал',
	'апостол',
	'піп',
	'діоніс',
	'карма',
	'чакра',
	'ельф',
	'валеолог',
	'мистецтво',
	'шовк',
	'емблема',
	'атлас',
	'гусі',
	'армяні',
	'родос',
	'бетмен',
	'лінкольн',
	'щур',
	'халк',
	'маска',
	'сонік',
	'слива',
	'манго',
	'гармонія',
	'пулюй',
	'дуель',
	'міледі',
	'манго',
	'лохина',
	'рокфеллер',
	'фенек',
	'фоса',
	'лорі',
	'росомаха',
	'капібара',
	'панда',
	'тюлень',
	'велоцираптор',
	'птеродактиль',
	'мегалодон',
	'боттічеллі',
	'лічі',
	'фільтр',
	'приціл',
	'оптика',
	'спальня',
	'бункер',
	'бомбосховище',
	'компілятор',
	'соні',
	'туга',
	'суші',
	'двері',
	'вихід',
	'стремено',
	'дефенестрація',
	'люстрація',
	'прага',
	'калаш',
	'хімарс',
	'артилерія',
	'боснія',
	'гільйотина',
	'революція',
	'чегевара',
	'кастро',
	'закладка',
	'мітка',
	'сталлоне',
	'монро',
	'шварценеггер',
	'стейтем',
	'куба',
	'донателло',
	'рафаель',
	'мікеланджело',
	'леонардо',
	'каштан',
	'артемон',
	'артек',
	'терміт',
	'м’ясник',
	'куш',
	'реагент',
	'букет',
	'бонд',
	'агент',
	'даун',
	'мотиватор',
	'шоушенк',
	'швагер',
	'харлей',
	'космос',
	'сузір’я',
	'титан',
	'іо',
	'галілео',
	'супутник',
	'опечатка',
	'клей',
	'блиск',
	'калейдоскоп',
	'обсерваторія',
	'купол',
	'памір',
	'кардамон',
	'гнатолог',
	'пісок',
	'шах',
	'біплан',
]);

// TODO ВОЛОСПАД,

let words = [...word_set];
// words = Array.from(words).sort((a, b) => b - a);
// console.log('====================================');
// console.log(words.sort());
console.log('====================================');

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
// words = shuffle(words);
// const word_list = words.sort();
const word_list = shuffle(words);
export default word_list;
