import { useDispatch } from 'react-redux';
import noImage from '../../../assets/images/no-image-available.webp';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import {
  StyledImage,
  StyledName,
  CapacityWrap,
  Capacity,
  SealingHolders,
  QuantityWrap,
  QuantityOrdered,
  Button,
  PriceWrap,
  QuantityInStock,
  DeleteBtn,
} from './OrderCartItem.styled';
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from '../../../redux/orders/oneOrderSlice';

export const OrderCartItem = ({ item, status }) => {
  const {
    codeOfGood,
    name,
    image,
    price,
    quantity,
    quantityOrdered,
    totalPrice,
    capacityKey,
    selectedSealing,
    selectedHolder,
  } = item;

  const dispatch = useDispatch();

  const addDefaultImg = e => {
    e.currentTarget.src = `${noImage}`;
  };

  const decrease = () => {
    if (quantityOrdered > 1) {
      dispatch(decreaseQuantity(item));
    }
  };

  const increase = () => {
    if (quantityOrdered < quantity) {
      dispatch(increaseQuantity(item));
    }
  };

  const deleteFromCart = () => {
    dispatch(
      deleteItem({
        totalPrice,
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
      })
    );
  };

  return (
    <>
      <StyledImage
        loading="lazy"
        src={image[0] || noImage}
        alt={name}
        onError={addDefaultImg}
      />
      <StyledName>{name}</StyledName>
      <p>{price} грн</p>
      {status === 'Нове' ? (
        <>
          <QuantityWrap>
            <Button type="button" onClick={decrease}>
              <FaMinus />
            </Button>
            <QuantityOrdered ordered={quantityOrdered} inStock={quantity}>
              {quantityOrdered} шт
            </QuantityOrdered>
            <Button type="button" onClick={increase}>
              <FaPlus />
            </Button>
          </QuantityWrap>
          <PriceWrap>
            <p>{totalPrice} грн</p>
            <DeleteBtn type="button" onClick={deleteFromCart}>
              <AiOutlineClose />
            </DeleteBtn>
          </PriceWrap>
          <QuantityInStock ordered={quantityOrdered} inStock={quantity}>
            В наявності: {quantity} шт
          </QuantityInStock>
        </>
      ) : (
        <>
          <QuantityOrdered>{quantityOrdered} шт</QuantityOrdered>
          <p>{totalPrice} грн</p>
        </>
      )}
      {capacityKey && (
        <CapacityWrap>
          <Capacity>
            <Battery0BarIcon />
            <p>{capacityKey}Ah</p>
          </Capacity>
          {selectedSealing && (
            <SealingHolders>
              <CheckCircleOutlineIcon />
              <p>Герметизація</p>
            </SealingHolders>
          )}
          {selectedHolder && (
            <SealingHolders>
              <CheckCircleOutlineIcon />
              <p>Використовувати холдери</p>
            </SealingHolders>
          )}
        </CapacityWrap>
      )}
    </>
  );
};
