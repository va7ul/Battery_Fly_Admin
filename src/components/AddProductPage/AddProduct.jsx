import { Formik } from 'formik';
import { StyledForm, Title, Label, Box, StyledField, StyledTextField } from "./AddProduct.styled";


export const AddProduct = () => {

    return (
     <div>
            <Formik
                initialValues={{
                    // firstName: firstName,
                    // lastName: lastName,
                    // patronymic: patronymic,
                }}
                // validationSchema={userDataSchema}
                // onSubmit={(values, _) => {
                //     const userData = {
                //         firstName: values.firstName,
                //         lastName: values.lastName,
                //         patronymic: values.patronymic,
                //         tel: formikTel,
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
                    <StyledField name="price" type="number" />
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
                </StyledForm>
            </Formik>
            </div>
    )
};