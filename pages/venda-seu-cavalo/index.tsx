import BreadCrumb from "@/components/Common/BreadCrumb";
import Button from "@/components/Common/Button";
import Header from "@/components/Common/Header";
import Input from "@/components/Common/Input";
import Label from "@/components/Common/Label";
import Select from "@/components/Common/Select";
import ufBrazilList from "@/utils/uf-brazil-list";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Head from "next/head";
import validationSchema from "./validations";

type State = {
  name: string;
  email: string;
  uf: string;
  city: string;
  phone: string;
  quantityHorses: string;
  quantityAnimals: string;
  speciesInterest: Array<string>;
  breedsInterest: Array<string>;
}

const VendaSeuCavalo = () => {
  const handleSubmit = async (values: State) => {
    // Faça o que você precisa com os dados aqui
    console.log(values);
  }

  return (
    <>
      <Head>
          <title>Venda seu cavalo</title>
          <meta name="description" content="Venda seu cavalo na Opportunity Leilões" />
      </Head>
      <div className="container mb-5">
        <div className="row pt-4 mt-1">
          <div className="col-12 mt-5">
            <BreadCrumb lastText="Venda seu cavalo" />
          </div>
        </div>

        <div className="row">
          <div className="col-12 pt-3">
            <Header title="Venda seu cavalo" />
          </div>
        </div>

        <Formik
          initialValues={{
            name: '',
            email: '',
            uf: '',
            city: '',
            phone: '',
            quantityHorses: '',
            quantityAnimals: '',
            speciesInterest: [],
            breedsInterest: [],
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="row">
            <div className="col-12 col-md-6 mb-3">
              <Label required labelFor="name" text="Nome" />
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Digite seu nome"
                as={Input}
              />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="form-group col-12 col-md-6 mb-3">
              <Label required labelFor="email" text="E-mail" />
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Digite seu e-mail"
                as={Input}
              />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="form-group col-12 col-md-12 mb-3">
              <Label required labelFor="uf" text="Estado" />
              <Field
                as={Select}
                options={ufBrazilList}
                id="uf"
                name="uf"
              />
              <ErrorMessage name="uf" component="div" className="text-danger" />
            </div>
            <div className="form-group col-12 col-md-12 mb-3">
              <Label required labelFor="city" text="Cidades" />
              <Field
                as={Select}
                options={ufBrazilList}
                id="city"
                name="city"
              />
              <ErrorMessage name="city" component="div" className="text-danger" />
            </div>
            <div className="col-12 col-md-12 mb-3">
              <Label required labelFor="phone" text="Celular" />
              <Field
                type="text"
                id="phone"
                name="phone"
                placeholder="(DDD) + número"
                as={Input}
              />
              <ErrorMessage name="phone" component="div" className="text-danger" />
            </div>
            <div className="form-group col-12 col-md-6 mb-3">
              <Label required labelFor="quantity-horses" text="Quantos cavalos deseja vender?" />
              <Field
                type="number"
                min="1"
                id="quantity-horses"
                name="quantityHorses"
                as={Input}
              />
              <ErrorMessage name="quantityHorses" component="div" className="text-danger" />
            </div>
            <div className="form-group col-12 col-md-6 mb-3">
              <Label labelFor="quantity-animals" text="Quantos animais deseja vender?" />
              <Field
                type="number"
                min="1"
                id="quantity-animals"
                name="quantityAnimals"
                as={Input}
              />
              <ErrorMessage name="quantityAnimals" component="div" className="text-danger" />
            </div>
            <div className="form-group col-12 col-md-6 mb-3">
              <Label required text="Espécies de interesse" />
              <div className="w-100 py-2">
                <Field
                  className="form-check-input p-2 border"
                  type="checkbox"
                  id="species-interest-0"
                  name="speciesInterest"
                  value="Equinos"
                  as={Input}
                />
                <Label className="text-muted ps-2 pe-4" labelFor="species-interest-0" text="Equinos" />
                <Field
                  className="form-check-input p-2 border"
                  type="checkbox"
                  id="species-interest-1"
                  name="speciesInterest"
                  value="Bovinos"
                  as={Input}
                />
                <Label className="text-muted px-2 pb-2" labelFor="species-interest-1" text="Bovinos" />
                <ErrorMessage name="speciesInterest" component="div" className="text-danger" />
              </div>
            </div>
            <div className="form-group col-12 col-md-6 mb-3">
              <Label required text="Raças de interesse" />
              <div className="w-100 mb-2">
                <div className="mb-4">
                  <Field
                    className="form-check-input p-2 border"
                    type="checkbox"
                    id="breeds-interest-0"
                    name="breedsInterest"
                    value="Brasileiro de hipismo"
                  />
                  <Label
                    className="text-muted ps-2 pe-4"
                    labelFor="breeds-interest-0"
                    text="Brasileiro de hipismo"
                  />
                  <Field
                    className="form-check-input p-2 border"
                    type="checkbox"
                    id="breeds-interest-1"
                    name="breedsInterest"
                    value="Mangalarga"
                  />
                  <Label
                    className="text-muted px-2"
                    labelFor="breeds-interest-1"
                    text="Mangalarga"
                  />
                </div>

                <div className="mb-4">
                  <Field
                    className="form-check-input p-2 border"
                    type="checkbox"
                    id="breeds-interest-2"
                    name="breedsInterest"
                    value="Paint horse"
                  />
                  <Label
                    className="text-muted px-2 pe-4"
                    labelFor="breeds-interest-2"
                    text="Paint horse"
                  />
                  <Field
                    className="form-check-input p-2 border"
                    type="checkbox"
                    id="breeds-interest-3"
                    name="breedsInterest"
                    value="Quarto de milha"
                  />
                  <Label
                    className="text-muted px-2"
                    labelFor="breeds-interest-3"
                    text="Quarto de milha"
                  />
                </div>

                <div>
                  <Field
                    className="form-check-input p-2 border"
                    type="checkbox"
                    id="breeds-interest-4"
                    name="breedsInterest"
                    value="Bovina"
                  />
                  <Label
                    className="text-muted px-2 pb-2"
                    labelFor="breeds-interest-4"
                    text="Bovina"
                  />
                  <ErrorMessage name="breedsInterest" component="div" className="text-danger" />
                </div>
              </div>
            </div>
            <div className="form-group col-12 mb-3">
              <Button type="submit" text="Enviar" />
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default VendaSeuCavalo;
