import { useTypedSelector, useTypedDispatch } from '../../redux/hooks';

import { useEffect } from 'react';
import {
  changeDiscountValue,
  changeTogether,
} from '../../redux/orders/oneOrderSlice';
import { selectOneOrder } from '../../redux/orders/ordersSelectors';

export const usePromoCode = () => {
  const { cartItems, promoCodeDiscount, total, personalDiscountValue, status } =
    useTypedSelector(selectOneOrder);

  const discountValue =
    personalDiscountValue && personalDiscountValue !== 0
      ? personalDiscountValue
      : Math.round(
          (cartItems
            .filter(item => !item.sale)
            .reduce((discount, item) => {
              return discount + item.totalPrice;
            }, 0) *
            promoCodeDiscount) /
            100
        );

  const together = total - Number(discountValue);

  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (status === 'Нове') {
      dispatch(changeDiscountValue(Number(discountValue)));
      dispatch(changeTogether(together));
    }
  }, [dispatch, discountValue, together, status]);

  return { total, discountValue, together };
};
