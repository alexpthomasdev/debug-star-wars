const episodeConverter = (id) => {
  if (id < 4) return id + 3;
  return id - 3;
};

export default episodeConverter;
