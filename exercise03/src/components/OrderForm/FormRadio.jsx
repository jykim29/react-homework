import { translateOptionName } from '@/utils/translateOptionName';
import classes from './FormRadio.module.css';

export default function FormRadio({ data, name, onChange }) {
  return (
    <fieldset className={classes.FormRadio}>
      <legend>
        <b>{translateOptionName(name)} 선택</b>
      </legend>

      {data.map((option, index) => {
        return (
          <div key={option.id}>
            <input
              type="radio"
              role="group"
              name={name}
              id={option.id}
              value={option?.price}
              defaultChecked={index === 0}
              onChange={(e) => onChange(option.name, e)}
            />
            <label htmlFor={option.id}>
              <figure>
                <img src={option.imageUrl} alt={option.name} />
                <figcaption>{option.name}</figcaption>
              </figure>
              {option.price && (
                <span>+{Number(option.price).toLocaleString('ko-KR')}원</span>
              )}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
}
