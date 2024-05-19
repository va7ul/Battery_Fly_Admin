import { useState } from 'react';
import { Formik } from 'formik';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { yellow } from '@mui/material/colors';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Container, StyledForm, Title, Label, Box, StyledField, StyledTextField, SubmitButton, StyledErrorMessage } from "./AddProduct.styled";
import { productSchema } from 'common/schemas/productSchema';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
//   overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const AddProduct = () => {
    const [images, setImages] = useState('');
    
    const attachImages = e => {
        setImages(e.currentTarget.files)
        console.log(e.currentTarget.files)
    };

    return (
        <Container>
            <Formik
                initialValues={{
                    name: '',
                    price: '',
                    description: '',
                    image: '',
                    quantity: '',
                    sale: false,
                    discount: '',
                    category: '',
                    type: '',
                    popular: false,
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
                    formData.append('sale', values.sale);
                    formData.append('discount', values.discount);
                    formData.append('category', values.category);
                    formData.append('type', values.type);
                    formData.append('popular', values.popular);
                    formData.append('information', values.information);
                    console.log(formData);
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
                    <Button
                        component="label"
                        
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        
                    >
                        Завантажити фото
                        <VisuallyHiddenInput
                            accept="image/*"
                            type="file"
                            name="image"
                            onChange={attachImages}
                            multiple
                        />
                    </Button>
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
                            <FormControlLabel value="yes" control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: yellow[800],
                                },
                            }} />} label="Так" />
                            <FormControlLabel value="no" control={<Radio sx={{
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
                            <StyledField name="category" type="text" />
                            <StyledErrorMessage name="category" component="div" />
                        </Box>
                    </Label>
                    <Label>
                        Тип
                        <Box>
                            <StyledField name="type" type="text" />
                            <StyledErrorMessage name="type" component="div" />
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
                        >Популярний</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="yes" control={<Radio sx={{
                                '&.Mui-checked': {
                                    color: yellow[800],
                                },
                            }} />} label="Так" />
                            <FormControlLabel value="no" control={<Radio sx={{
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