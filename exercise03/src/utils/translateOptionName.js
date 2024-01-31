export const translateOptionName = (name) => {
  switch (name) {
    case 'dough':
      return '도우';
    case 'edge':
      return '엣지';
    case 'topping':
      return '토핑';
    case 'beverage':
      return '음료';
    default:
      return '옵션';
  }
};
