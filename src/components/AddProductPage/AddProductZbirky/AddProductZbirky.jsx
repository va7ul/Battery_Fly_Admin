import { useState } from 'react';
import { Formik } from 'formik';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { yellow } from '@mui/material/colors';
// import { productSchema } from 'common/schemas/productSchema';
import { Container, StyledForm, Title, Subtitle, Input, Label, BoxField, AddButton, LabelCapacity, BoxCapacity, StyledField, CapacityTextField, CapacityField, StyledTextField, SubmitButton, StyledErrorMessage } from "./AddProductZbirky.styled";

export const AddProductZbirky = ({ category }) => {
    const [images, setImages] = useState('');
    const [sale, setSale] = useState(false);
    const [popular, setPopular] = useState(false);
    const [holder, setHolder] = useState(false);

    const attachImages = e => {
        setImages(e.currentTarget.files)
    };

    const [arr, setArr] = useState([1])

    const addBlock = () => {
        const length = arr.length;
        setArr([...arr, length+1])
        console.log(arr)
    }
    
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
                    formData.append('discount', values.discount || 10);
                    formData.append('category', category);
                    formData.append('holder', holder);
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
                        <BoxField>
                            <StyledField name="name" type="text" />
                            <StyledErrorMessage name="name" component="div" />
                        </BoxField>
                    </Label>

                    <Label>
                        Ціна за одиницю
                        <BoxField>
                            <StyledField name="price" type="number" />
                            <StyledErrorMessage name="price" component="div" />
                        </BoxField>
                    </Label>

                    <Label>
                        Повний опис
                        <BoxField>
                            <StyledTextField name="description" type="text" component="textarea" />
                            <StyledErrorMessage name="description" component="div" />
                        </BoxField>
                    </Label>
                     
                    <Input
                        accept="image/*"
                        type="file"
                        name="image"
                        onChange={attachImages}
                        multiple
                    />
                    <Label>
                        Кількість в наявності
                        <BoxField>
                            <StyledField name="quantity" type="text" />
                            <StyledErrorMessage name="quantity" component="div" />
                        </BoxField>
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
                        <BoxField>
                            <StyledField name="discount" type="number" />
                            <StyledErrorMessage name="discount" component="div" />
                        </BoxField>
                    </Label>}
                  
                    <Label>
                        Категорія
                        <BoxField>
                            <StyledField name="category" type="text" value={category} />
                            <StyledErrorMessage name="category" component="div" />
                        </BoxField>
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
                        >Наявність холдерів</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="yes"
                                onChange={() => { setHolder(true) }}
                                control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Так" />
                            <FormControlLabel
                                value="no"
                                onChange={() => { setHolder(false) }}
                                control={<Radio sx={{
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Ні" />
                        </RadioGroup>
                    </FormControl>

                    <Subtitle>Блок характеристик ємності</Subtitle>
                    
                    {arr.map((elem, index) => {
                        return <BoxCapacity key={index}>
                        <LabelCapacity>
                            Значення ємності
                            <BoxField>
                                <CapacityField name="capacity" type="number" />
                                <StyledErrorMessage name="capacity" component="div" />
                            </BoxField>
                        </LabelCapacity>
                        <LabelCapacity>
                            Характеристики
                            <BoxField>
                                <CapacityTextField name="description" type="text" component="textarea" />
                                <StyledErrorMessage name="description" component="div" />
                            </BoxField>
                        </LabelCapacity>
                        <LabelCapacity>
                            Ціна
                            <BoxField>
                                <CapacityField name="price" type="number" />
                                <StyledErrorMessage name="price" component="div" />
                            </BoxField>
                        </LabelCapacity>
                        { holder && <LabelCapacity>
                            Кількість холдерів
                            <BoxField>
                                <CapacityField name="holder" type="number" />
                                <StyledErrorMessage name="holder" component="div" />
                            </BoxField>
                        </LabelCapacity>}
                        
                    </BoxCapacity>
                  
                    })}

                    <AddButton type='button'
                    onClick={addBlock}>
                        + добавити ємність
                    </AddButton>
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
                        <BoxField>
                            <StyledTextField name="information" type="text" component="textarea" />
                            <StyledErrorMessage name="information" component="div" />
                        </BoxField>
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