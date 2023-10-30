import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Campo nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('Campo e-mail é obrigatório'),
  uf: Yup.string().required('Campo estado é obrigatório'),
  city: Yup.string().required('Campo cidade é obrigatório'),
  phone: Yup.string().required('Campo celular é obrigatório'),
  quantityHorses: Yup.number()
    .min(1)
    .typeError('Deve ser um número')
    .positive('Deve ser um número positivo')
    .integer('Deve ser um número inteiro')
    .required('Campo quantidade de cavalos é obrigatório'),
  quantityAnimals: Yup.number()
  .min(1)
  .typeError('Deve ser um número')
  .positive('Deve ser um número positivo')
  .integer('Deve ser um número inteiro')
  .required('Campo quantidade de animais é obrigatório'),
  speciesInterest: Yup.array()
    .of(Yup.string())
    .min(1, 'Deve conter pelo menos 1 espécie selecionada'),
  breedsInterest: Yup.array().of(Yup.string()).min(1, 'Deve conter pelo menos 1 raça selecionada'),
});

export default validationSchema;
