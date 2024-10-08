import { useState, ChangeEvent, WheelEvent } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { Formik, FieldArray } from 'formik'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { yellow } from '@mui/material/colors';
import { selectOneProduct } from '../../../redux/products/productsSelectors';
import { editProductZbirky } from '../../../redux/products/productsOperations';
import { productZbirkySchema } from '../../../common/schemas/productZbirkySchema'
import { Container, Box, StyledForm, Title, Subtitle, SubTitle, Input, Label, BoxField, AddButton, DeleteButton, LabelCapacity, BoxCapacity, StyledField, CapacityTextField, CapacityField, StyledTextField, StyledErrorMessage } from "../../AddProductPage/AddProductZbirky/AddProductZbirky.styled";
import { SubmitButton, ButtonBox, BackButton } from './EditProductZbirky.styled';
import { CategoryMap, CapacityObj, BatteryConfig } from '../../../@types/products.types';

export const EditProductZbirky = () => {
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const { codeOfGood, name, description, image, price, quantity, sale, popular, category, holder, capacity, information, discount } = useTypedSelector(selectOneProduct)

    const [imagesLocal, setImagesLocal] = useState(image);
    const [saleLocal, setSaleLocal] = useState(sale);
    const [popularLocal, setPopularLocal] = useState(popular);
    const [holderLocal, setHolderLocal] = useState(holder);

    const categoryMapping: CategoryMap = {
        assembly: 'assembly',
        fpv: 'batteries-for-fpv',
        transport: 'batteries-for-transport',
        toys: 'batteries-for-toys',
    };

    const categoryForAdd = categoryMapping[category];

    const capacityObj: CapacityObj = {
        capacity: "",
        description: "",
        price: 0,
        holder: 0,
    };

    let newCapacity: CapacityObj[] = [];

    if (capacity) {
        const keys = Object.keys(capacity)

        for (let i = 0; i < keys.length; i++) {
        
            const obg = {
                capacity: keys[i],
                description: capacity[keys[i]].description,
                price: capacity[keys[i]].price,
                holder: capacity[keys[i]].holder
            }
            newCapacity.push(obg)
        }
    };

    const attachImages = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const fileArray = Array.from(e.currentTarget.files);
            setImagesLocal(fileArray);
        }
    };

    const editProductButton = () => {
        navigate(
            `/admin/assortment/${categoryForAdd}`
        );
    };

    const getBack = () => {
        navigate(-1);
    };

    const removeScroll = (e: WheelEvent<HTMLElement>) => {
        e.currentTarget.blur();
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
                    popular: popular,
                    image: image,
                    capacity: [...newCapacity],
                }}
                validationSchema={productZbirkySchema}
                onSubmit={(values) => {
                    let newCapacity: BatteryConfig[] = [];
                    for (const cap of values.capacity) {

                        const obj: BatteryConfig = {
                            [cap["capacity"].toString()]: {
                                description: cap.description,
                                holder: cap.holder,
                                price: cap.price
                            }
                        }
                        newCapacity.push(obj)
                    }
                    
                    const formData = new FormData();
                    formData.append('name', values.name);
                    formData.append('price', values.price.toString());
                    formData.append('description', values.description);
                    formData.append('quantity', values.quantity.toString());
                    formData.append('sale', saleLocal.toString());
                    formData.append('discount', values.discount.toString());
                    formData.append('category', values.category);
                    formData.append('capacity', JSON.stringify(newCapacity));
                    formData.append('holder', holderLocal.toString());
                    formData.append('popular', popularLocal.toString());
                    formData.append('information', values.information);
                    
                    for (const i of imagesLocal) {
                        formData.append('files', i)
                    }

                    dispatch(editProductZbirky({ formData, codeOfGood })).then((result: any) => {
                        if (result.meta.requestStatus === 'fulfilled') {
                            editProductButton();
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
                                <StyledField name="price" type="text" placeholder='Приклад: 4100-9500' />
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
                        <Box>
                            <SubTitle>Додати фото</SubTitle>
                            <Input
                                accept="image/*"
                                type="file"
                                name="image"
                                onChange={attachImages}
                                multiple
                            />
                        </Box>
                        <Label>
                            Кількість в наявності
                            <BoxField>
                                <StyledField name="quantity" type="number" onWheel={removeScroll} />
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
                            <BoxField>
                                <StyledField name="discount" type="number" onWheel={removeScroll} />
                                <StyledErrorMessage name="discount" component="div" />
                            </BoxField>
                        </Label>}
                  
                        <Label>
                            Категорія
                            <BoxField>
                                <StyledField name="category" type="text" value={category} disabled />
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
                                value={holderLocal}
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel
                                    value={true}
                                    onChange={() => { setHolderLocal(true) }}
                                    control={<Radio sx={{
                                        '&.Mui-checked': {
                                            color: yellow[800],
                                        },
                                    }} />} label="Так" />
                                <FormControlLabel
                                    value={false}
                                    onChange={() => { setHolderLocal(false) }}
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
                                                            value={cap.capacity}
                                                        
                                                            type="number"
                                                            onWheel={removeScroll}
                                                        />
                                                        <StyledErrorMessage name={`capacity[${index}].capacity`} component="div" />
                                                    </BoxField>
                                                </LabelCapacity>
                                                <LabelCapacity>
                                                    Характеристики
                                                    <BoxField>
                                                        <CapacityTextField name={`capacity[${index}].description`} value={cap.description} type="text" placeholder="Наприкінці кожного пункту ОБОВ'ЯЗКОВО ставте &#171;;&#187;, крім останнього!" component="textarea" />
                                                        <StyledErrorMessage name={`capacity[${index}].description`} component="div" />
                                                    </BoxField>
                                                </LabelCapacity>
                                                <LabelCapacity >
                                                    Ціна
                                                    <BoxField>

                                                        <CapacityField name={`capacity[${index}].price`} type="number" onWheel={removeScroll}
                                                            value={cap.price}
                                                        />
                                                        <StyledErrorMessage name={`capacity[${index}].price`} component="div" />
                                                    </BoxField>
                                                </LabelCapacity>
                                                {holderLocal && <LabelCapacity >
                                                    Кількість холдерів
                                                    <BoxField>

                                                        <CapacityField name={`capacity[${index}].holder`} type="number" onWheel={removeScroll}
                                                            value={cap.holder}
                                                        />
                                                        <StyledErrorMessage name={`capacity[${index}].holder`} component="div" />
                                                    </BoxField>
                                                </LabelCapacity>}
                                                <BoxField>
                                                    <DeleteButton type='button'
                                                        onClick={() => {
                                                            if (values.capacity.length === 1) return window.alert('Не можна видалити єдиний блок');
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
                            <BoxField>
                                <StyledTextField name="information" type="text" component="textarea" />
                                <StyledErrorMessage name="information" component="div" />
                            </BoxField>
                        </Label>
                        <ButtonBox>
                            <BackButton type="button" onClick={getBack}>Назад</BackButton>
                            <SubmitButton
                                type="submit"
                            >
                                Зберегти
                            </SubmitButton>
                        </ButtonBox>
                    </StyledForm>
                )}
            </Formik>
        </Container>
    );
};
