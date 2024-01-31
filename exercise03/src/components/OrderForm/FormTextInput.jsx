import { useId } from 'react';
import classes from './FormTextInput.module.css';

export default function FormTextInput({
  as: ComponentName = 'input',
  name,
  message,
  onChange,
}) {
  const id = useId();
  return (
    <fieldset className={classes.FormInput}>
      <legend>
        <b>주문 전달사항 메세지 입력</b>
      </legend>
      <div role="group">
        <label className="sr-only" htmlFor={id}>
          <b>전달사항</b>
        </label>
        <ComponentName
          type="text"
          name={name}
          id={id}
          value={message}
          onChange={onChange}
          placeholder="주문 시 전달할 메세지를 입력해주세요."
        />
      </div>
    </fieldset>
  );
}
