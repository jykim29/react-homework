import classes from './OrderForm.module.css';
import FormSize from './FormSize';
import FormRadio from './FormRadio';
import FormCheckBox from './FormCheckBox';
import FormTextInput from './FormTextInput';

export default function OrderForm({
  data: { size, dough, edge, topping, beverage },
  deliveryMessage,
  currentOption,
  onChangeMessage,
  onChangeOption,
  onToggleOption,
}) {
  const handleToggleOption = (option, e) => {
    if (currentOption.length > 2 && e.target.checked) {
      return alert('옵션은 3개까지만 선택 가능합니다.');
    }
    onToggleOption(option, e);
  };

  return (
    <section className={classes.container}>
      <h2 className="sr-only">피자 주문 양식</h2>
      <form id="orderForm" className={classes.form}>
        <FormSize size={size} onChange={onChangeOption} />
        <FormRadio data={dough} onChange={onChangeOption} name="dough" />
        <FormRadio data={edge} onChange={onChangeOption} name="edge" />
        <FormCheckBox
          data={topping}
          onChange={handleToggleOption}
          name="topping"
        />
        <FormCheckBox
          data={beverage}
          onChange={handleToggleOption}
          name="beverages"
        />
        <FormTextInput
          name="deliveryMessage"
          onChange={onChangeMessage}
          message={deliveryMessage}
        />
      </form>
    </section>
  );
}
