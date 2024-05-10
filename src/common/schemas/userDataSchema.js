import * as Yup from 'yup';
import { nameRegex } from '../regex';

export const userDataSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Введіть своє ім'я, будь ласка")
    .max(20, "Введіть своє ім'я, будь ласка")
    .trim("Введіть своє ім'я, будь ласка")
    .matches(nameRegex, "Введіть своє ім'я кирилицею, будь ласка"),
  lastName: Yup.string()
    .min(2, 'Введіть своє прізвище, будь ласка')
    .max(30, 'Введіть своє прізвище, будь ласка')
    .trim('Введіть своє прізвище, будь ласка')
    .matches(nameRegex, 'Введіть своє прізвище кирилицею, будь ласка'),
  patronymic: Yup.string()
    .min(2, "Введіть ім'я по батькові, будь ласка")
    .max(30, "Введіть ім'я по батькові, будь ласка")
    .trim("Введіть ім'я по батькові, будь ласка")
    .matches(nameRegex, "Введіть ім'я по батькові кирилицею, будь ласка"),
  email: Yup.string().email('Введіть свою електронну адресу, будь ласка'),
  password: Yup.string()
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .trim('Введіть пароль, будь ласка')
    .required('Введіть пароль, будь ласка'),
});