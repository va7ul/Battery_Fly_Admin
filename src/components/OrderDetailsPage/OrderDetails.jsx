import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOneOrder } from '../../redux/orders/ordersSelectors';
import { selectProducts } from '../../redux/products/productsSelectors';
import { updateOneOrder } from '../../redux/orders/ordersOperations';
import { OrderCart } from './OrderCart/OrderCart';
import {
  ContentWrapper,
  OrderDetailsContainer,
  OrderDetailsList,
} from './OrderDetails.styled';
import { OrderDetailsTable } from './OrderDetailsTable/OrderDetailsTable';
import { OrderMainInfo } from './OrderMainInfo/OrderMainInfo';
import { OrderActionBtn } from './OrderActionBtn/OrderActionBtn';
import { ModalConfirm } from 'components/Modals/ModalConfirm/ModalConfirm';
import toast from 'react-hot-toast';

export const OrderDetails = () => {
  const orderData = useSelector(selectOneOrder);
  const products = useSelector(selectProducts);
  const { _id, cartItems, status } = orderData;

  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleApproveClick = () => {
    let isOutOfStock = false;

    cartItems.forEach(item => {
      const product = products.find(el => el.codeOfGood === item.codeOfGood);

      if (product.quantity < item.quantityOrdered) {
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
            {cartItems?.map((item, index) => (
              <li key={item.codeOfGood + index}>
                <OrderCart item={item} status={status} />
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
