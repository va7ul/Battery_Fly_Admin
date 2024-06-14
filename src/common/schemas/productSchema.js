import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  name: Yup.string().required('Введіть назву товару'),
  price: Yup.number()
    .required('Введіть ціну товару')
    .positive('Число повинно бути позитивним')
    .integer(),
  description: Yup.string().required('Введіть опис товару'),
  quantity: Yup.number()
    .required('Введіть кількість товару')
    .min(0, 'Число повинно бути більшим або дорівнювати 0')
    .integer(),
  discount: Yup.number().positive('Число повинно бути позитивним').integer(),
  information: Yup.string().required('Введіть інформацію про товар'),
});
