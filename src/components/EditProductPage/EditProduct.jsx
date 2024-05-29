import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { yellow } from '@mui/material/colors';
import { editProduct } from '../../redux/products/productsOperations';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { productSchema } from '../../common/schemas/productSchema'
import { Container, StyledForm, Title, SubTitle, Label, Box, StyledField, Input, StyledTextField, StyledErrorMessage } from "../AddProductPage/AddProduct/AddProduct.styled";
import { SubmitButton, ButtonBox, BackButton } from './EditProduct.styled';

export const EditProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { codeOfGood, name, description, image, price, quantity, sale, popular, category, type, information, discount } = useSelector(selectOneProduct)
    
    const [imagesLocal, setImagesLocal] = useState(image);
    const [saleLocal, setSaleLocal] = useState(sale);
    const [popularLocal, setPopularLocal] = useState(popular);


    const attachImages = e => {
        setImagesLocal(e.currentTarget.files);
    };

    const changeType = () => {
        if (type === 'null') {
            return category;
        }
    };

    const editProductButton = () => {
        navigate(
            `/admin/assortment/batteries-${type}`
        );
    };

    const getBack = () => {
        navigate(-1);
    };

    return (
        <Container>
            <Formik
                initialValues={{
                    name: name,
                    price: price,
                    description: description,
                    quantity: quantity,
                    sale: sale,
                    discount: discount,
                    information: information,
                    category: category,
                    type: type,
                    popular: popular,
                    image: image,

                }}
                enctype="multipart/form-data"
                validationSchema={productSchema}
                onSubmit={values => {
                    const formData = new FormData();
                    formData.append('name', values.name);
                    formData.append('price', values.price);
                    formData.append('description', values.description);
                    formData.append('quantity', values.quantity);
                    formData.append('sale', saleLocal);
                    formData.append('discount', values.discount || 10);
                    formData.append('category', values.category);
                    formData.append('type', values.type = changeType() || type);
                    formData.append('popular', popularLocal);
                    formData.append('information', values.information);

                    for (const i of imagesLocal) {
                        formData.append('files', i)
                        // for (const i of formData) {
                        //     console.log(i)
                        // }
                    }
                    dispatch(editProduct({ formData, codeOfGood })).then(result => {
                        if (result.meta.requestStatus === 'fulfilled') {
                            editProductButton();
                        }
                    })
                }}
            >
                <StyledForm>
                    <Title>Редагування товару</Title>
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
                    <Box>
                        <SubTitle>Додати фото</SubTitle>
                        
                        <Input
                            accept="image/*"
                            type="file"
                            name="files"
                            onChange={attachImages}
                            multiple
                        />
                    </Box>
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
                                color: '#1f1f1f',
                                fontSize: '16px',
                                fontWeight: '600',
                                '&.Mui-focused': {
                                    color: '#1f1f1f',
                                }
                            }}
                        >Знижка</FormLabel>
                        <RadioGroup
                            value={saleLocal}
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value={true}
                                onChange={() => { setSaleLocal(true) }}
                                control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Так" />
                            <FormControlLabel
                                value={false}
                                onChange={() => { setSaleLocal(false) }}
                                control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Ні" />
                        </RadioGroup>
                    </FormControl>
                    {saleLocal && <Label>
                        Відсоток знижки
                        <Box>
                            <StyledField name="discount" type="number" />
                            <StyledErrorMessage name="discount" component="div" />
                        </Box>
                    </Label>}
                  
                    <Label>
                        Категорія
                        <Box>
                            <StyledField name="category" type="text" value={category} disabled/>
                        </Box>
                    </Label>

                    {type !== "null" && <Label>
                        Тип
                        <Box>
                            <StyledField name="type" type="text" value={type} disabled/>
                        </Box>
                    </Label>}
                     
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label"
                            sx={{
                                color: '#1f1f1f',
                                fontSize: '16px',
                                fontWeight: '600',
                                '&.Mui-focused': {
                                    color: '#1f1f1f',
                                }
                            }}
                        >Популярний</FormLabel>
                        <RadioGroup
                            value={popularLocal}
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value={true}
                                onChange={() => { setPopularLocal(true) }}
                                control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Так" />
                            <FormControlLabel
                                value={false}
                                onChange={() => { setPopularLocal(false) }}
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
                    <ButtonBox>
                        <BackButton onClick={getBack}>Назад</BackButton>
                        <SubmitButton
                            type="submit"
                        >
                            Зберегти
                        </SubmitButton>
                    </ButtonBox>
                </StyledForm>
            </Formik>
        </Container>
    );
};