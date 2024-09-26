import { useState, FC, ChangeEvent } from 'react';
import { useTypedDispatch } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { Formik, FormikHelpers } from 'formik';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { yellow } from '@mui/material/colors';
import { addProduct } from '../../../redux/products/productsOperations';
import { productSchema } from '../../../common/schemas/productSchema'
import { Container, StyledForm, Title, SubTitle, Label, Box, StyledField, Input, StyledTextField, SubmitButton, StyledErrorMessage } from "./AddProduct.styled";

export type AddProductProps = {
    category: string | undefined;
    type?: string | undefined;
};

interface MyFormValues {
    name: string;
    price: string;
    description: string;
    quantity: string;
    discount: string;
    information: string;
};

export const AddProduct: FC<AddProductProps>  = ({ category, type }) => {
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    const [images, setImages] = useState<File[]>([]);
    const [sale, setSale] = useState(false);
    const [popular, setPopular] = useState(false);

    const attachImages = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const fileArray = Array.from(e.currentTarget.files);
            setImages(fileArray);
        }
    };

       const changeType = () => {
        return type === 'null' ? category : type;
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
                onSubmit={(
                    values: MyFormValues,
                    { setSubmitting }: FormikHelpers<MyFormValues>
                ) => {
                    const formData = new FormData();
                    formData.append('name', values.name);
                    formData.append('price', values.price);
                    formData.append('description', values.description);
                    formData.append('quantity', values.quantity);
                    formData.append('sale', sale.toString());
                    formData.append('discount', sale ? values.discount : '0');
                    formData.append('category', category || '');
                    formData.append('type', changeType() || '');
                    formData.append('popular', popular.toString());
                    formData.append('information', values.information);

                    for (const image of images) {
                        formData.append('files', image);
                    }

                    dispatch(addProduct(formData)).then((result: any) => {
                        if (result.meta.requestStatus === 'fulfilled') {
                            AddProductButton();
                        }
                    }).finally(() => setSubmitting(false));
                }}
            >
                {({ isSubmitting }) => (
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
                                <StyledTextField
                                    name="description"
                                    type="text"
                                    component="textarea"
                                    placeholder="Наприкінці кожного пункту ОБОВ'ЯЗКОВО ставте &#171;;&#187;, крім останнього!"
                                />
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
                            <FormLabel
                                id="demo-row-radio-buttons-group-label"
                                sx={{
                                    color: '#1f1f1f',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    '&.Mui-focused': {
                                        color: '#1f1f1f',
                                    },
                                }}
                            >
                                Знижка
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="yes"
                                    onChange={() => {
                                        setSale(true);
                                    }}
                                    control={
                                        <Radio
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: yellow[800],
                                                },
                                            }}
                                        />
                                    }
                                    label="Так"
                                />
                                <FormControlLabel
                                    value="no"
                                    onChange={() => {
                                        setSale(false);
                                    }}
                                    control={
                                        <Radio
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: yellow[800],
                                                },
                                            }}
                                        />
                                    }
                                    label="Ні"
                                />
                            </RadioGroup>
                        </FormControl>
                        {sale && (
                            <Label>
                                Відсоток знижки
                                <Box>
                                    <StyledField name="discount" type="number" />
                                    <StyledErrorMessage name="discount" component="div" />
                                </Box>
                            </Label>
                        )}

                        <Label>
                            Категорія
                            <Box>
                                <StyledField name="category" type="text" value={category} disabled />
                            </Box>
                        </Label>

                        {type !== 'null' && (
                            <Label>
                                Тип
                                <Box>
                                    <StyledField name="type" type="text" value={type} disabled />
                                </Box>
                            </Label>
                        )}

                        <FormControl>
                            <FormLabel
                                id="demo-row-radio-buttons-group-label"
                                sx={{
                                    color: '#1f1f1f',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    '&.Mui-focused': {
                                        color: '#1f1f1f',
                                    },
                                }}
                            >
                                Популярний
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value="yes"
                                    onChange={() => {
                                        setPopular(true);
                                    }}
                                    control={
                                        <Radio
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: yellow[800],
                                                },
                                            }}
                                        />
                                    }
                                    label="Так"
                                />
                                <FormControlLabel
                                    value="no"
                                    onChange={() => {
                                        setPopular(false);
                                    }}
                                    control={
                                        <Radio
                                            sx={{
                                                '&.Mui-checked': {
                                                    color: yellow[800],
                                                },
                                            }}
                                        />
                                    }
                                    label="Ні"
                                />
                            </RadioGroup>
                        </FormControl>
                        <Label>
                            Інформація
                            <Box>
                                <StyledTextField
                                    name="information"
                                    type="text"
                                    placeholder="Наприкінці кожного абзацу ОБОВ'ЯЗКОВО ставте &#171;;&#187;, крім останнього!"
                                    component="textarea"
                                />
                                <StyledErrorMessage name="information" component="div" />
                            </Box>
                        </Label>
                        <SubmitButton type="submit" disabled={isSubmitting}>
                            Додати товар
                        </SubmitButton>
                    </StyledForm>
                )}
            </Formik>
        </Container>
    );
};