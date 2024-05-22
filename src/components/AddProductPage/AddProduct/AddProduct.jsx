import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { yellow } from '@mui/material/colors';
import { addProduct } from '../../../redux/products/productsOperations';
import { productSchema } from '../../../common/schemas/productSchema'
import { Container, StyledForm, Title, Label, Box, StyledField, Input, StyledTextField, SubmitButton, StyledErrorMessage } from "./AddProduct.styled";

export const AddProduct = ({ category, type }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [images, setImages] = useState([]);
    const [sale, setSale] = useState(false);
    const [popular, setPopular] = useState(false);

    const attachImages = e => {
        setImages(e.currentTarget.files);
    };

    const changeType = () => {
        if (type === 'null') {
            return category;
        }
    };

    const AddProductButton = () => {
        navigate(
            `/admin/assortment/batteries-${type}`
        );
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
                    information: '',
                }}
                enctype="multipart/form-data"
                validationSchema={productSchema}
                onSubmit={values => {
                    const formData = new FormData();
                    formData.append('name', values.name);
                    formData.append('price', values.price);
                    formData.append('description', values.description);
                    formData.append('quantity', values.quantity);
                    formData.append('sale', sale);
                    formData.append('discount', values.discount || 10);
                    formData.append('category', category);
                    formData.append('type', type = changeType() || type);
                    formData.append('popular', popular);
                    formData.append('information', values.information);

                    for (const image of images) {
                        formData.append('files', image)
                    }
                    
                    dispatch(addProduct(formData)).then(result => {
                        if (result.meta.requestStatus === 'fulfilled') {
                            AddProductButton();
                        }
                    
                    })
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
                            <StyledTextField name="description" type="text" component="textarea" placeholder="Наприкінці кожного пункту ОБОВ'ЯЗКОВО ставте &#171;;&#187;, крім останнього!" />
                            <StyledErrorMessage name="description" component="div" />
                        </Box>
                    </Label>
                     
                    <Input
                        accept="image/*"
                        type="file"
                        name="files"
                        onChange={attachImages}
                        multiple
                    />
                    <Label>
                        Кількість в наявності
                        <Box>
                            <StyledField name="quantity" type="number" />
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
                    {sale && <Label>
                        Відсоток знижки
                        <Box>
                            <StyledField name="discount" type="number" />
                            <StyledErrorMessage name="discount" component="div" />
                        </Box>
                    </Label>}
                  
                    <Label>
                        Категорія
                            <StyledField name="category" type="text" value={category} />
                    </Label>

                    {type !== "null" && <Label>
                        Тип
                            <StyledField name="type" type="text" value={type} />
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
    );
};