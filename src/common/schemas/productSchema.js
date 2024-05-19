import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  name: Yup.string().required('Ввведіть назву товару'),
  price: Yup.number()
    .required('Ввведіть ціну товару')
    .positive('Число повинно бути позитивним')
    .integer(),
  description: Yup.string()
    .min(2, "Введіть ім'я по батькові, будь ласка")
    .max(30, "Введіть ім'я по батькові, будь ласка")
    .trim("Введіть ім'я по батькові, будь ласка")
    .required('Ввведіть назву товару'),
  image: Yup.string().email('Введіть свою електронну адресу, будь ласка'),
  quantity: Yup.number()
    .required('Ввведіть кількість товару')
    .positive('Число повинно бути позитивним')
    .integer(),
  sale: Boolean(),
  discount: Yup.number()
    .required('Ввведіть відсоток знижки')
    .positive('Число повинно бути позитивним')
    .integer(),
  category: Yup.string().required('Ввведіть назву товару'),
  type: Yup.string().required('Ввведіть назву товару'),
  popular: Boolean(),
  information: Yup.string().required('Ввведіть назву товару'),
});
