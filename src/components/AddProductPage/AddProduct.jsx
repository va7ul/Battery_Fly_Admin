import { Formik } from 'formik';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { yellow } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Container, StyledForm, Title, Label, Box, StyledField, StyledTextField, SubmitButton, StyledErrorMessage } from "./AddProduct.styled";
import { productSchema } from 'common/schemas/productSchema';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const AddProduct = () => {

    return (
        <Container>
            <Formik
                initialValues={{
                    name: '',
                    price: '',
                    description: '',
                    image: [],
                    quantity: '',
                    sale: false,
                    discount: '',
                    category: '',
                    type: '',
                    popular: false,
                    information: '',

                }}
            validationSchema={productSchema}
                onSubmit={values => {
         console.log(values);
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
                        name="image"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Завантажити фото
                        <VisuallyHiddenInput
                            accept="image/*"
                            type="file"
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
                    <FormControlLabel control={<Checkbox
                        // value={selectedSealing}
                        // checked={selectedSealing}
                        // onChange={handleSealing}
                        // disabled={typeof oneProductPrice === "string"}
                        sx={{
                            '&.Mui-checked': {
                                color: yellow[800],
                            },
                        }} />} label="Знижка" name="sale" />
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
                    <FormControlLabel control={<Checkbox sx={{
                            '&.Mui-checked': {
                                color: yellow[800],
                            },
                        }}
                        icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                         label="Популярний" name="popular" />
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