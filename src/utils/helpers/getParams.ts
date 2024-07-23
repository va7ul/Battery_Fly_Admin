type ProductCategories = {
  [key: string]: [string, string, string];
};

type Params = {
  paramsCategory: string | undefined;
  paramsType: string | undefined;
  paramsSubType: string | undefined;
};

export const getParams = (category: string): Params => {
  const productCategories: ProductCategories = {
    'Готові батареї': ['assembly', 'null', 'zbirka'],
    'Батареї для FPV-дронів': ['fpv', 'null', 'zbirka'],
    'Батареї для електротранспорту': ['transport', 'null', 'zbirka'],
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
    const [paramsCategory, paramsType, paramsSubType] =
      productCategories[category];
    return { paramsCategory, paramsType, paramsSubType };
  }

  return {
    paramsCategory: undefined,
    paramsType: undefined,
    paramsSubType: undefined,
  };
};
