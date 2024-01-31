import { translateOptionName } from '@/utils/translateOptionName';
import classes from './FormCheckBox.module.css';

export default function FormCheckBox({ data, name, onChange }) {
  return (
    <fieldset className={classes.FormCheckBox}>
      <legend>
        <b>{translateOptionName(name)} 추가</b>
      </legend>
      <span>
        ※ 피자 1판당 3개 {translateOptionName(name)} 추가 가능합니다. (중복불가)
      </span>

      {data.map((option) => {
        return (
          <div role="group" key={option.id}>
            <input
              type="checkbox"
              name={name}
              id={option.id}
              onChange={(e) => onChange(option, e)}
              value={option?.price}
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
