import { useSelector } from 'react-redux';
import { getPrettyValue } from 'utils/helpers';
import { selectOneOrder } from '../../redux/orders/ordersSelectors';
import { OrderCart } from './OrderCart/OrderCart';
import {
  ContentWrapper,
  // StyledOrdersHistoryEl,
  // StyledText,
  OrderDetailsContainer,
  OrderDetailsList,
  PriceContainer,
  Sum,
  Discount,
  Total,
} from './OrderDetails.styled';

export const OrderDetails = () => {
  const {
    // numberOfOrder,
    // status,
    // createdAt,
    together,
    total,
    discountValue,
    promoCodeDiscount,
    cartItems,
  } = useSelector(selectOneOrder);

  // const dateCorrected = createdAt.toLocaleString().slice(0, 10);
  const prettyTogether = !together || getPrettyValue(together);
  const prettyTotal = !total || getPrettyValue(total);
  const prettyDiscount = discountValue ? getPrettyValue(discountValue) : 0;

  return (
    <>
      <ContentWrapper>
        {/* <StyledOrdersHistoryEl>
          <p>Замовлення</p>
          <p>Статус</p>
          <p>Дата</p>
          <p>Сума</p>
        </StyledOrdersHistoryEl>
        <StyledOrdersHistoryEl>
          <p>№{numberOfOrder}</p>
          <StyledText type={status}>{status}</StyledText>
          <p>{dateCorrected}</p>
          <p>{prettyTogether} грн</p> */}
        <OrderDetailsContainer>
          <OrderDetailsList>
            {cartItems?.map(el => (
              <li key={el._id}>
                <OrderCart el={el} />
              </li>
            ))}
          </OrderDetailsList>
          <PriceContainer>
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
        </OrderDetailsContainer>
        {/* </StyledOrdersHistoryEl> */}
      </ContentWrapper>
    </>
  );
};
