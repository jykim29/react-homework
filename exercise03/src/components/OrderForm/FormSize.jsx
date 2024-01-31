import classes from './FormSize.module.css';

export default function FormSize({ size, onChange }) {
  return (
    <fieldset className={classes.size}>
      <legend>
        <b>사이즈 선택</b>
      </legend>
      {size.map((item, idx) => {
        const price = Number(item.price).toLocaleString('ko-KR');
        return (
          <div role="group" key={item.id}>
            <input
              type="radio"
              name="size"
              id={item.id}
              value={item.price}
              defaultChecked={idx === 0}
              onChange={(e) => onChange(item.name, e)}
            />
            <label htmlFor={item.id}>
              <b>{item.name}</b>
              <span>{price}원</span>
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}
