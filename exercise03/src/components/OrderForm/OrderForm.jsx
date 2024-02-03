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
  return (
    <section className={classes.container}>
      <h2 className="sr-only">피자 주문 양식</h2>
      <form id="orderForm" className={classes.form}>
        <FormSize size={size} onChange={onChangeOption} />
        <FormRadio data={dough} onChange={onChangeOption} name="dough" />
        <FormRadio data={edge} onChange={onChangeOption} name="edge" />
        <FormCheckBox
          data={topping}
          currentOption={currentOption}
          onChange={onToggleOption}
          name="topping"
        />
        <FormCheckBox
          data={beverage}
          currentOption={currentOption}
          onChange={onToggleOption}
          name="beverages"
        />
        <FormTextInput
          name="deliveryMessage"
          currentOption={currentOption}
          onChange={onChangeMessage}
          message={deliveryMessage}
        />
      </form>
    </section>
  );
}
