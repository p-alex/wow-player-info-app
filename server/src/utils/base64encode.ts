const base64encode = (string: string) => {
  return Buffer.from(string).toString('base64');
};

export default base64encode;
