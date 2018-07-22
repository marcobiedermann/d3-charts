import randomInteger from 'random-int';

export default (n) => {
  const data = [];

  while (n--) {
    data.push([
      (new Date(Date.now() - (n * 1000 * 60 * 60 * 24))).toJSON(),
      randomInteger(0, 12),
    ]);
  }

  return data;
};
