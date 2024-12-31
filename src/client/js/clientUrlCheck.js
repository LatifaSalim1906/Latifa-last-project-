function checkUrl(url) {
  const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(:\d+)?(\/[^\s]*)?$/i;
  return urlRegex.test(url);
}

export { checkUrl };
