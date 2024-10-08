import * as Yup from 'yup';

export const productZbirkySchema = Yup.object().shape({
  name: Yup.string().required('Введіть назву товару'),
  price: Yup.string()
    .trim()
    .matches(
      /^\d+-\d+$/,
      'Введіть загальну ціну товару в форматі від і до через дефіс'
    )
    .required('Введіть загальну ціну товару'),
  description: Yup.string().required('Введіть загальний опис товару'),
  quantity: Yup.number()
    .min(0, 'Число повинно бути більшим або дорівнювати 0')
    .required('Введіть кількість товару')
    .integer(),
  discount: Yup.number().min(0, 'Число повинно бути більшим або дорівнювати 0').integer(),
  information: Yup.string().required('Введіть загальну інформацію про товар'),
  capacity: Yup.array()
    .of(
      Yup.object().shape({
        capacity: Yup.number()
          .required('Введіть значення ємності')
          .positive('Число повинно бути позитивним')
          .integer(),
        description: Yup.string().required(
          'Введіть опис товару, згідно даної ємності'
        ),
        price: Yup.number()
          .required('Введіть ціну товару, згідно даної ємності')
          .positive('Число повинно бути позитивним')
          .integer(),
        holder: Yup.number()
          .min(0, 'Число повинно бути більшим або дорівнювати 0')
          .integer(),
      })
    )
    .required(),
});
