export default function cleanSet(set, startString) {
    if (startString === '') {
      return '';
    }

    const result = [];

    for (const value of set) {
      if (value.startsWith(startString)) {
        const cleanValue = value.slice(startString.length);
        result.push(cleanValue);
      }
    }
    return result.join('-');
};
