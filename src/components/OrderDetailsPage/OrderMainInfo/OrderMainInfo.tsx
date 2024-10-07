import { WheelEvent, useState, ChangeEvent } from 'react';
import { useTypedSelector, useTypedDispatch } from '../../../redux/hooks';
import { usePromoCode } from 'utils/hooks';
import { getPrettyValue } from 'utils/helpers';
import { selectOneOrder } from '../../../redux/orders/ordersSelectors';
import {
  changePersonalDiscountValue,
  changePersonalDiscountRate,
} from '../../../redux/orders/oneOrderSlice';
import {
  Discount,
  PriceContainer,
  Wrapper,
  PaymentInfo,
  DiscountInfo,
  DiscountTitle,
  DiscountInput,
  Input,
  Button,
  Sum,
  Text,
  TextTitle,
  Total,
} from './OrderMainInfo.styled';

export const OrderMainInfo = () => {
  const [inputValue, setInputValue] = useState<number | string>('');
  const [inputRate, setInputRate] = useState<number | string>('');

  const dispatch = useTypedDispatch();
  const orderData = useTypedSelector(selectOneOrder);
  const { deliveryType, city, warehouse, payment, status } = orderData;

  const { total, discountValue, together } = usePromoCode();
  const finalDiscount = orderData.discountValue;
  const finalTogether = orderData.together;

  const prettyTogether =
    !together || getPrettyValue(status === 'Нове' ? together : finalTogether);
  const prettyTotal = !total || getPrettyValue(total);
  const prettyDiscount = finalDiscount
    ? getPrettyValue(status === 'Нове' ? Number(discountValue) : finalDiscount)
    : 0;

  const handleWheel = (e: WheelEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    target.blur();
  };

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setInputRate(
      Math.round((Number(e.target.value) / total) * 100 * 100) / 100
    );
  };

  const handleChangeRate = (e: ChangeEvent<HTMLInputElement>) => {
    setInputRate(e.target.value);
    setInputValue(Math.round((total * Number(e.target.value)) / 100));
  };

  const handleClick = () => {
    if (typeof inputRate === 'number' && inputRate >= 100) {
      return;
    }

    dispatch(changePersonalDiscountRate(inputRate ? inputRate : ''));
    dispatch(changePersonalDiscountValue(inputValue ? inputValue : ''));
  };

  return (
    <PriceContainer>
      <Wrapper>
        <PaymentInfo>
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
        </PaymentInfo>
        {status === 'Нове' && (
          <DiscountInfo>
            <DiscountTitle>
              <span>Знижка, %</span>
              <span>Знижка, грн</span>
            </DiscountTitle>
            <DiscountInput>
              <Input
                type="number"
                min={0}
                onWheel={handleWheel}
                onChange={handleChangeRate}
                value={inputRate}
                onKeyDown={e => e.key === '-' && e.preventDefault()}
              ></Input>
              <Input
                type="number"
                min={0}
                value={inputValue}
                onWheel={handleWheel}
                onChange={handleChangeValue}
                onKeyDown={e =>
                  (e.key === '.' || e.key === ',' || e.key === '-') &&
                  e.preventDefault()
                }
              ></Input>
              <Button type="button" onClick={handleClick}>
                OK
              </Button>
            </DiscountInput>
          </DiscountInfo>
        )}
      </Wrapper>
      <Sum>
        Загальна сума:
        <span> {prettyTotal} грн</span>
      </Sum>
      <Discount discount={finalDiscount}>
        Знижка:
        <span> - {prettyDiscount} грн</span>
      </Discount>
      <Total>
        Разом:
        <span>{prettyTogether} грн</span>
      </Total>
    </PriceContainer>
  );
};
