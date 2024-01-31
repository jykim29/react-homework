import { useState } from 'react';
import './App.css';
import OrderForm from './components/OrderForm/OrderForm';
import OrderResult from './components/OrderResult/OrderResult';
import PizzaInfo from './components/PizzaInfo/PizzaInfo';
import pizzaData from './data/pizza.json';

const INITIAL_ORDER_FORM = {
  size: {
    optionName: 'L',
    price: '33900',
  },
  dough: {
    optionName: '스페셜 엣지 도우 라지',
    price: '',
  },
  edge: {
    optionName: '리치골드 라지',
    price: '5000',
  },
  toppingAndBeverages: [],
  deliveryMessage: '',
  totalPrice: 38900,
};
function App() {
  const [order, setOrder] = useState(INITIAL_ORDER_FORM);

  const caculateTotalPrice = (formData) => {
    return (
      Number(formData.size.price) +
      Number(formData.edge.price) +
      formData.toppingAndBeverages.reduce((acc, cur) => (acc += +cur.price), 0)
    );
  };
  const handleChangeOption = (optionName, { target: { name, value } }) => {
    setOrder((prev) => {
      let nextValue = { ...prev, [name]: { optionName, price: value } };
      const totalPrice = caculateTotalPrice(nextValue);
      return { ...nextValue, totalPrice };
    });
  };
  const handleToggleOption = (
    { id: optionId, name: optionName },
    { target: { value, checked } }
  ) => {
    setOrder((prev) => {
      const isExist =
        prev.toppingAndBeverages.findIndex((item) => item.id === optionId) >= 0;
      if (isExist && !checked) {
        const newValue = prev.toppingAndBeverages.filter(
          (item) => item.id !== optionId
        );
        const nextValue = { ...prev, toppingAndBeverages: newValue };
        const totalPrice = caculateTotalPrice(nextValue);
        return { ...nextValue, totalPrice };
      }
      const nextValue = {
        ...prev,
        toppingAndBeverages: [
          ...prev.toppingAndBeverages,
          { id: optionId, optionName, price: value },
        ],
      };
      const totalPrice = caculateTotalPrice(nextValue);
      return { ...nextValue, totalPrice };
    });
  };
  const handleChangeMessage = ({ target: { value } }) => {
    setOrder((prev) => ({ ...prev, deliveryMessage: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const optionList = order.toppingAndBeverages
      .map((item) => item.optionName)
      .join(', ');
    const optionTotalPrice = order.toppingAndBeverages
      .reduce((acc, { price }) => (acc += +price), 0)
      .toLocaleString('ko-KR');
    if (
      confirm(`
    ✅ 사이즈 : ${order.size.optionName} = ${Number(order.size.price).toLocaleString('ko-KR')}원
    ✅ 도우 : ${order.dough.optionName}
    ✅ 엣지 : ${order.edge.optionName} = ${Number(order.edge.price).toLocaleString('ko-KR')}원
    ✅ 추가선택 : ${optionList} = ${optionTotalPrice}원
    ✅ 주문 전달사항 : ${order.deliveryMessage || '미입력'}
    ✅ 총 ${order.totalPrice.toLocaleString('ko-KR')}원 입니다.
    🏍 주문하시겠습니까?
    `)
    )
      alert('주문이 완료되었습니다.');
    else alert('주문이 취소되었습니다.');
  };

  return (
    <>
      <h1>Pizza Hot</h1>
      <main>
        {pizzaData.items.map((pizza) => {
          return (
            <div key={pizza.id}>
              <PizzaInfo data={pizza.information} />
              <OrderForm
                currentOption={order.toppingAndBeverages}
                onChangeOption={handleChangeOption}
                onToggleOption={handleToggleOption}
                onChangeMessage={handleChangeMessage}
                data={pizza.options}
                deliveryMessage={order.deliveryMessage}
              />
            </div>
          );
        })}
      </main>

      <OrderResult result={order} onSubmit={handleSubmit} />
    </>
  );
}

export default App;
