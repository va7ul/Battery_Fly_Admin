import { Formik } from 'formik';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { yellow } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Container, StyledForm, Title, Label, Box, StyledField, StyledTextField, SubmitButton } from "./AddProduct.styled";


export const AddProduct = () => {

    return (
        <Container>
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
                    <Title>Додавання товару</Title>
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
                            <StyledTextField name="description" type="text" component="textarea" />
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
                    <FormControlLabel control={<Checkbox
                        // value={selectedSealing}
                        // checked={selectedSealing}
                        // onChange={handleSealing}
                        // disabled={typeof oneProductPrice === "string"}
                        sx={{
                            '&.Mui-checked': {
                                color: yellow[800],
                            },
                        }} />} label="Знижка" />
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
                    <FormControlLabel control={<Checkbox sx={{
                            '&.Mui-checked': {
                                color: yellow[800],
                            },
                        }}
                        icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                         label="Популярний" />
                    <Label>
                        Інформація
                        <Box>
                            <StyledTextField name="Інформація" type="text" component="textarea" />
                            {/* <StyledErrorMessage name="patronymic" component="div" /> */}
                        </Box>
                    </Label>
                    <SubmitButton
                        type="submit"
                    >
                        Додати товар
                    </SubmitButton>
                </StyledForm>
            </Formik>
        </Container>
    )
};