const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/MY-APP/"
    : "";
};

export { getImagePrefix };
