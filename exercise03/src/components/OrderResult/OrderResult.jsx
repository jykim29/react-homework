import classes from './OrderResult.module.css';

export default function OrderResult({
  result: { edge, toppingAndBeverages, totalPrice },
  onSubmit,
}) {
  return (
    <footer className={classes.OrderResult}>
      <div>
        <div>
          <b>피자</b>
          <span>슈퍼슈프림L({edge.optionName})</span>
        </div>
        <div>
          <b>토핑</b>
          <span>
            {toppingAndBeverages
              .reduce((acc, cur) => {
                if (cur.category === 'topping') return [...acc, cur.optionName];
                return acc;
              }, [])
              .join(', ')}
          </span>
        </div>
        <div>
          <b>음료</b>
          <span>
            {toppingAndBeverages
              .reduce((acc, cur) => {
                if (cur.category === 'beverages')
                  return [...acc, cur.optionName];
                return acc;
              }, [])
              .join(', ')}
          </span>
        </div>
        <div>
          <button type="submit" form="orderForm" onClick={(e) => onSubmit(e)}>
            <span>총 {totalPrice.toLocaleString('ko-KR')}원 담기</span>
            <span>
              배달 선택 시 {(totalPrice * 0.8).toLocaleString('ko-KR')}원(20%)
            </span>
            <span>
              포장 선택 시 {(totalPrice * 0.7).toLocaleString('ko-KR')}원(30%)
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
