import { translateOptionName } from '@/utils/translateOptionName';
import classes from './FormCheckBox.module.css';

export default function FormCheckBox({
  data,
  name: category,
  onChange,
  currentOption,
}) {
  return (
    <fieldset className={classes.FormCheckBox}>
      <legend>
        <b>{translateOptionName(category)} 추가</b>
      </legend>
      <span>
        ※ 피자 1판당 3개 {translateOptionName(category)} 추가 가능합니다.
        (중복불가)
      </span>

      {data.map((option) => {
        const isChecked =
          currentOption.findIndex((item) => item.optionName === option.name) >=
          0;

        return (
          <div role="group" key={option.id}>
            <input
              type="checkbox"
              name={category}
              id={option.id}
              onChange={(e) => onChange(option, category, e)}
              value={option?.price}
              checked={isChecked}
            />
            <label htmlFor={option.id}>
              <figure>
                <img src={option.imageUrl} alt={option.name} />
                <figcaption>{option.name}</figcaption>
              </figure>
              <span>+{Number(option.price).toLocaleString('ko-KR')}원</span>
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}
