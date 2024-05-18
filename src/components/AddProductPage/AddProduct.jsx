import { Formik } from 'formik';
import { StyledForm, Title, Label, Box, StyledField, StyledTextField } from "./AddProduct.styled";


export const AddProduct = () => {

    return (
     <div>
            <Formik
                initialValues={{
                    // name: name,
                    // price: price,
                    // description: description,
                }}
                // validationSchema={userDataSchema}
                // onSubmit={(values, _) => {
                //     const userData = {
                //         name: values.name,
                //         price: values.price,
                //         description: values.description,

                //     };
                // }}
            >
                
                <StyledForm>
                    <Title>Додати товар</Title>
                    <Label>
                        Назва товару
                        <Box>
                    <StyledField name="name" type="text" />
                    {/* <StyledErrorMessage name="firstName" component="div" /> */}
                </Box>
                    </Label>

                    <Label>
                        Ціна за одиницю
                        <Box>
                    <StyledField name="price" type="text" />
                    {/* <StyledErrorMessage name="lastName" component="div" /> */}
                </Box>
                    </Label>

                    <Label>
                        Повний опис
                        <Box>
                    <StyledTextField name="description" type="text" component="textarea"/>
                    {/* <StyledErrorMessage name="patronymic" component="div" /> */}
                </Box>
                    </Label>
                     <Label>
                        Кількість
                        <Box>
                    <StyledField name="quantity" type="text" />
                    {/* <StyledErrorMessage name="lastName" component="div" /> */}
                </Box>
                    </Label>
                     <Label>
                        Відсоток знижки
                        <Box>
                    <StyledField name="discount" type="text" />
                    {/* <StyledErrorMessage name="lastName" component="div" /> */}
                </Box>
                    </Label>
                     <Label>
                        Категорія
                        <Box>
                    <StyledField name="category" type="text" />
                    {/* <StyledErrorMessage name="lastName" component="div" /> */}
                </Box>
                    </Label>
                      <Label>
                        Тип
                        <Box>
                    <StyledField name="type" type="text" />
                    {/* <StyledErrorMessage name="lastName" component="div" /> */}
                </Box>
                    </Label>
                </StyledForm>
            </Formik>
            </div>
    )
};