import { useState } from 'react';
import { Formik } from 'formik';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { yellow } from '@mui/material/colors';
// import { productSchema } from 'common/schemas/productSchema';
import { Container, StyledForm, Title, Label, Box, StyledField, StyledTextField, SubmitButton, StyledErrorMessage } from "./AddProduct.styled";

export const AddProduct = ({ category, type }) => {
    const [images, setImages] = useState('');
    const [sale, setSale] = useState(false);
    const [popular, setPopular] = useState(false);

    const attachImages = e => {
        setImages(e.currentTarget.files)
    };

    return (
        <Container>
            <Formik
                initialValues={{
                    name: '',
                    price: '',
                    description: '',
                    quantity: '',
                    discount: '',
                    category: '',
                    type: '',
                    information: '',
                }}
                // validationSchema={productSchema}
                onSubmit={values => {
                    console.log(values);
                    const formData = new FormData();
                    formData.append('name', values.name);
                    formData.append('price', values.price);
                    formData.append('description', values.description);
                    formData.append('image', images);
                    formData.append('quantity', values.quantity);
                    formData.append('sale', sale);
                    formData.append('discount', values.discount);
                    formData.append('category', category);
                    formData.append('type', type);
                    formData.append('popular', popular);
                    formData.append('information', values.information);
                    
                    for (const value of formData) {
                        console.log(value);
                    }  //це для відображення полів, які відправляєш
                }}
            >
                
                <StyledForm>
                    <Title>Додавання товару</Title>
                    <Label>
                        Назва товару
                        <Box>
                            <StyledField name="name" type="text" />
                            <StyledErrorMessage name="name" component="div" />
                        </Box>
                    </Label>

                    <Label>
                        Ціна за одиницю
                        <Box>
                            <StyledField name="price" type="number" />
                            <StyledErrorMessage name="price" component="div" />
                        </Box>
                    </Label>

                    <Label>
                        Повний опис
                        <Box>
                            <StyledTextField name="description" type="text" component="textarea" />
                            <StyledErrorMessage name="description" component="div" />
                        </Box>
                    </Label>
                     
                    <input
                        accept="image/*"
                        type="file"
                        name="image"
                        onChange={attachImages}
                        multiple
                    />
                    <Label>
                        Кількість
                        <Box>
                            <StyledField name="quantity" type="text" />
                            <StyledErrorMessage name="quantity" component="div" />
                        </Box>
                    </Label>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label"
                            sx={{
                                color: 'black',
                                fontSize: '15px',
                                fontWeight: '600',
                                '&.Mui-focused': {
                                    color: 'black',
                                }
                            }}
                        >Знижка</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="yes"
                                onChange={() => { setSale(true) }}
                                control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Так" />
                            <FormControlLabel
                                value="no"
                                onChange={() => { setSale(false) }}
                                control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Ні" />
                        </RadioGroup>
                    </FormControl>
                    <Label>
                        Відсоток знижки
                        <Box>
                            <StyledField name="discount" type="text" />
                            <StyledErrorMessage name="discount" component="div" />
                        </Box>
                    </Label>
                    <Label>
                        Категорія
                        <Box>
                            <StyledField name="category" type="text" value={category} />
                            <StyledErrorMessage name="category" component="div" />
                        </Box>
                    </Label>

                    {type !== "null" && <Label>
                        Тип
                        <Box>
                            <StyledField name="type" type="text" value={type} />
                            <StyledErrorMessage name="type" component="div" />
                        </Box>
                    </Label>}
                     
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label"
                            sx={{
                                color: 'black',
                                fontSize: '15px',
                                fontWeight: '600',
                                '&.Mui-focused': {
                                    color: 'black',
                                }
                            }}
                        >Популярний</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="yes"
                                onChange={() => { setPopular(true) }}
                                control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Так" />
                            <FormControlLabel
                                value="no"
                                onChange={() => { setPopular(false) }}
                                control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Ні" />
                        </RadioGroup>
                    </FormControl>
                    <Label>
                        Інформація
                        <Box>
                            <StyledTextField name="information" type="text" component="textarea" />
                            <StyledErrorMessage name="information" component="div" />
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