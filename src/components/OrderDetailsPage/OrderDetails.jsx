import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../../redux/products/productsSelectors';
import { getProducts } from '../../redux/products/productsOperations';
import { selectOneOrder } from '../../redux/orders/ordersSelectors';
import { updateOneOrder } from '../../redux/orders/ordersOperations';
import { OrderCartItem } from './OrderCartItem/OrderCartItem';
import { OrderDetailsTable } from './OrderDetailsTable/OrderDetailsTable';
import { OrderMainInfo } from './OrderMainInfo/OrderMainInfo';
import { OrderActionBtn } from './OrderActionBtn/OrderActionBtn';
import { ModalConfirm } from 'components/Modals/ModalConfirm/ModalConfirm';
import {
  ContentWrapper,
  OrderDetailsContainer,
  OrderDetailsList,
} from './OrderDetails.styled';

export const OrderDetails = () => {
  const orderData = useSelector(selectOneOrder);
  const { _id, cartItems, status } = orderData;

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (status === 'Нове') {
      const codeOfGoods = cartItems.map(item => {
        return item.codeOfGood;
      });
      dispatch(getProducts(codeOfGoods));
    }
  }, [dispatch, cartItems, status]);

  const newCartItems = cartItems.map(item => {
    if (!products || products.length === 0) {
      return item;
    }
    const product = products.find(el => el.codeOfGood === item.codeOfGood);
    if (product && product.quantity !== item.quantity) {
      return { ...item, quantity: product.quantity };
    }
    return item;
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleApproveClick = () => {
    let isOutOfStock = false;

    newCartItems.forEach(item => {
      if (item.quantity < item.quantityOrdered) {
        toast.remove();
        toast.error('Товару немає в наявності!');
        isOutOfStock = true;
        return;
      }
    });

    if (isOutOfStock) {
      return;
    }

    setOpen(true);
    setData({ orderId: _id, orderData: { ...orderData, status: 'В роботі' } });
    setText('Підтвердити замовлення?');
  };

  const handleFinishClick = () => {
    setOpen(true);
    setData({
      orderId: _id,
      orderData: { ...orderData, status: 'Доставлено' },
    });
    setText('Закрити замовлення?');
  };

  const handleCancelClick = id => {
    setOpen(true);
    setData({ orderId: _id, orderData: { ...orderData, status: 'Скасовано' } });
    setText('Скасувати замовлення?');
  };

  return (
    <>
      <ContentWrapper>
        <OrderDetailsTable />
        <OrderDetailsContainer>
          <OrderDetailsList>
            {newCartItems.map((item, index) => (
              <li key={item.codeOfGood + index}>
                <OrderCartItem item={item} status={status} />
              </li>
            ))}
          </OrderDetailsList>
          <OrderMainInfo />
        </OrderDetailsContainer>
        <OrderActionBtn
          status={status}
          handleApproveClick={handleApproveClick}
          handleFinishClick={handleFinishClick}
          handleCancelClick={handleCancelClick}
        />
        <ModalConfirm
          open={open}
          handleClose={handleClose}
          handleAction={() => dispatch(updateOneOrder(data))}
          text={text}
        />
      </ContentWrapper>
    </>
  );
};
