export const getParams = category => {
  const productCategories = {
    'Готові батареї': ['assembly', 'null', 'zbirka'],
    'Батареї для FPV-дронів': ['fpv', 'null', 'zbirka'],
    'Батареї для електротранпорту': ['transport', 'null', 'zbirka'],
    'Батареї для іграшок': ['toys', 'null', 'zbirka'],

    Прилади: ['devices', 'null', 'product'],
    'Розхідні матеріали': ['materials', 'null', 'product'],
    'Акумулятори 18650': ['battery', '18650', 'product'],
    'Акумулятори 21700': ['battery', '21700', 'product'],
    'Акумулятори 32650': ['battery', '32650', 'product'],
    'Акумулятори Li-Po': ['battery', 'li-po', 'product'],
    'Акумулятори LiFePo4': ['battery', 'lifepo4', 'product'],
  };

  if (productCategories[category]) {
    const paramsCategory = productCategories[category][0];
    const paramsType = productCategories[category][1];
    const paramsSubType = productCategories[category][2];
    return { paramsCategory, paramsType, paramsSubType };
  }

  return undefined;
};
