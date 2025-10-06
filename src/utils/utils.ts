const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/luma-finance-landing-page/"
    : "";
};

export { getImagePrefix };
