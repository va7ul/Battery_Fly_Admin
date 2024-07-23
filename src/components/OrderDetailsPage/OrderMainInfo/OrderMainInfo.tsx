import { useTypedSelector } from '../../../redux/hooks';
import { usePromoCode } from 'utils/hooks';
import { getPrettyValue } from 'utils/helpers';
import { selectOneOrder } from '../../../redux/orders/ordersSelectors';
import {
  Discount,
  PriceContainer,
  Sum,
  Text,
  TextTitle,
  Total,
} from './OrderMainInfo.styled';

export const OrderMainInfo = () => {
  const orderData = useTypedSelector(selectOneOrder);
  const { promoCodeDiscount, deliveryType, city, warehouse, payment } =
    orderData;

  const { total, discountValue, together } = usePromoCode();
  const prettyTogether = !together || getPrettyValue(together);
  const prettyTotal = !total || getPrettyValue(total);
  const prettyDiscount = discountValue ? getPrettyValue(discountValue) : 0;

  return (
    <PriceContainer>
      <p>
        <TextTitle>Доставка: </TextTitle>
        <Text>{deliveryType}</Text>
      </p>
      <p>
        <TextTitle>Адреса: </TextTitle>
        <Text>
          {city}, {warehouse}
        </Text>
      </p>
      <p>
        <TextTitle>Спосіб оплати: </TextTitle>
        <Text>{payment}</Text>
      </p>
      <Sum>
        Загальна сума:
        <span> {prettyTotal} грн</span>
      </Sum>
      <Discount discount={promoCodeDiscount}>
        Знижка за промокодом:
        <span> - {prettyDiscount} грн</span>
      </Discount>
      <Total>
        Разом:
        <span>{prettyTogether} грн</span>
      </Total>
    </PriceContainer>
  );
};
