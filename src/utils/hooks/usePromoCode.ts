import { useTypedSelector, useTypedDispatch } from '../../redux/hooks';

import { useEffect } from 'react';
import {
  changeDiscountValue,
  changeTogether,
} from '../../redux/orders/oneOrderSlice';
import { selectOneOrder } from '../../redux/orders/ordersSelectors';

export const usePromoCode = () => {
  const { cartItems, promoCodeDiscount, total, personalDiscountValue } =
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

  const together = total - discountValue;

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(changeDiscountValue(discountValue));
    dispatch(changeTogether(together));
  }, [dispatch, discountValue, together]);

  return { total, discountValue, together };
};
