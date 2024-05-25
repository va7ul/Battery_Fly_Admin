import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, FieldArray } from 'formik'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { yellow } from '@mui/material/colors';
import { addProductZbirky } from '../../../redux/products/productsOperations';
import { Container, StyledForm, Title, Subtitle, Input, Label, BoxField, AddButton, DeleteButton, LabelCapacity, BoxCapacity, StyledField, CapacityTextField, CapacityField, StyledTextField, SubmitButton, StyledErrorMessage } from "./AddProductZbirky.styled";

export const AddProductZbirky = ({ category }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [images, setImages] = useState('');
    const [sale, setSale] = useState(false);
    const [popular, setPopular] = useState(false);
    const [holder, setHolder] = useState(false);

    const capacityObj = {
        capacity: '',
        description: '',
        price: '',
        holder: ''
    };

      const attachImages = e => {
        setImages(e.currentTarget.files);
    };

      const AddProductButton = () => {
        navigate(
            `/admin/assortment/${category}`
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
                    capacity: [capacityObj],
                }}
                // validationSchema={productSchema}
                onSubmit={(values) => {
                    console.log(values)
                    const formData = new FormData();
                    formData.append('name', values.name);
                    formData.append('price', values.price);
                    formData.append('description', values.description);
                    formData.append('quantity', values.quantity);
                    formData.append('sale', sale);
                    formData.append('discount', values.discount || 10);
                    formData.append('category', category);
                    formData.append('capacity', values.capacity);
                    formData.append('holder', holder);
                    formData.append('popular', popular);
                    formData.append('information', values.information);
                    
                    for (const image of images) {
                        formData.append('files', image)
                    };

                      for (const value of formData.values()) {
      console.log(value);
    }

                     dispatch(addProductZbirky(formData)).then(result => {
                        if (result.meta.requestStatus === 'fulfilled') {
                            AddProductButton();
                        }
                    })
                }}
            >
                {({ values }) => (
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
                                <StyledTextField
                                    name="description"
                                    type="text"
                                    component="textarea"
                                placeholder="Наприкінці кожного пункту ОБОВ'ЯЗКОВО ставте &#171;;&#187;, крім останнього!" 
                                />
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
                                    color: '#1f1f1f',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    '&.Mui-focused': {
                                        color: '#1f1f1f',
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
                                    color: '#1f1f1f',
                                    fontSize: '16px',
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

                        <FieldArray name="capacity">
                            {({ push, remove }) => (
                                <>
                                    {values.capacity.map((cap, index) => {
    
                                        return (
                                            <BoxCapacity key={index}>
                                                <LabelCapacity>
                                                    Значення ємності
                                                    <BoxField>
                                                        <CapacityField name={`capacity[${index}].capacity`}
                                                        
                                                            type="number" />
                                                        <StyledErrorMessage name={`capacity[${index}].capacity`} component="div" />
                                                    </BoxField>
                                                </LabelCapacity>
                                                <LabelCapacity>
                                                    Характеристики
                                                    <BoxField>
                                                        <CapacityTextField name={`capacity[${index}].description`} type="text"  placeholder="Наприкінці кожного пункту ОБОВ'ЯЗКОВО ставте &#171;;&#187;, крім останнього!" component="textarea" />
                                                        <StyledErrorMessage name={`capacity[${index}].description`} component="div" />
                                                    </BoxField>
                                                </LabelCapacity>
                                                <LabelCapacity >
                                                    Ціна
                                                    <BoxField>
                                                        <CapacityField name={`capacity[${index}].price`} type="number" />
                                                        <StyledErrorMessage name={`capacity[${index}].price`} component="div" />
                                                    </BoxField>
                                                </LabelCapacity>
                                                {holder && <LabelCapacity >
                                                    Кількість холдерів
                                                    <BoxField>
                                                        <CapacityField name={`capacity[${index}].holder`} type="number" />
                                                        <StyledErrorMessage name={`capacity[${index}].holder`} component="div" />
                                                    </BoxField>
                                                </LabelCapacity>}
                                                <BoxField>
                                                <DeleteButton type='button'
                                                    onClick={() => {
                                                        if (values.capacity.length === 1) return window.alert('Ти шо, дурний? Єдиний блок він видаляє.. Нахєр я його малювала тоді');
                                                        remove(index)
                                                    }}>
                                                    - видалити блок
                                                    </DeleteButton>
                                                    </BoxField>
                                            </BoxCapacity>
                                        )
                                    })
                                    }
                                    <AddButton type='button'
                                        onClick={() => push(capacityObj)}>
                                        + добавити ємність
                                    </AddButton>
                                </>
                            )}
                        </FieldArray>
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
                )}
            </Formik>
        </Container>
    );
};

