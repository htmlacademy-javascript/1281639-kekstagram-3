const GALLERY_LENGTH = 25;

const NAMES = [
  'Николай',
  'Елена',
  'Артем',
  'Никита',
  'Света',
  'Ирина',
  'Сергей',
  'Юлия',
  'Вечеслав',
  'Игорь'
];

const COMMENTS = [
  'Всё отлично',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Вид на пляж с отелем на заднем фоне',
  'Указатель пути к пляжу',
  'Вид на бухту с берега',
  'Девушка на пляже',
  'Овощное рагу',
  'Черный автомобиль с открытой дверью',
  'Разрезанная клубника в тарелке',
  'Сок и ягоды на столе',
  'Самолет пролетает над пляжем',
  'Обувь в обувнице',
  'Дорога и огороженные участки',
  'Автомобиль Ауди',
  'Салат в тарелке',
  'Котик в виде суши',
  'Ноги в сапогах на диване и журныльный столик',
  'Летящий самолет',
  'Хор на сцене',
  'Красный автомобиль',
  'Тапочки с подсветкой',
  'Пальмы и дома',
  'Салат в тарелке',
  'Закат на пляже',
  'Краб',
  'Фото с концерта',
  'Автомобиль и бегемот'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () =>
    getRandomArrayElement(COMMENTS)
  ).join(' ');

const createIdGenerator = () => {
  let currentId = 0;
  return () => ++currentId;
};

const createCommentId = createIdGenerator();

const createComment = () =>({
  id: createCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[index], //добавляем описания к соответствующим фото, порядок фото известен
  likes: getRandomInteger(15, 200),
  comments: Array.from(
    { length: getRandomInteger(0, 30) },
    () => createComment()
  ),
});

const getGallery = () =>
  Array.from({ length: GALLERY_LENGTH }, (_, pictureIndex) =>
    createPicture(pictureIndex)
  );

getGallery();
