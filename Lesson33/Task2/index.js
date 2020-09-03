export const parseUser = jsonString => {
  try {
    const parseStr = JSON.parse(jsonString);
    return parseStr;
  } catch (error) {
    return null;
  }
}