import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  name: Yup.string().required('Ввведіть назву товару'),
  price: Yup.number()
    .required('Ввведіть ціну товару')
    .positive('Число повинно бути позитивним')
    .integer(),
  description: Yup.string().required('Введіть опис товару'),
  quantity: Yup.number()
    .required('Ввведіть кількість товару')
    .positive('Число повинно бути позитивним')
    .integer(),
  discount: Yup.number()
    .required('Ввведіть відсоток знижки')
    .positive('Число повинно бути позитивним')
    .integer(),
  information: Yup.string().required('Ввведіть інформацію про товар'),
});
