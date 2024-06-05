import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  changeDiscount,
  changeTogether,
} from '../../redux/orders/oneOrderSlice';
import { selectOneOrder } from '../../redux/orders/ordersSelectors';

export const usePromoCode = () => {
  const { cartItems, promoCodeDiscount, total } = useSelector(selectOneOrder);

  const discountValue = Math.round(
    (cartItems
      .filter(item => !item.sale)
      .reduce((discount, item) => {
        return discount + item.totalPrice;
      }, 0) *
      promoCodeDiscount) /
      100
  );

  const together = total - discountValue;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeDiscount(discountValue));
    dispatch(changeTogether(together));
  }, [dispatch, discountValue, together]);

  return { total, discountValue, together };
};
