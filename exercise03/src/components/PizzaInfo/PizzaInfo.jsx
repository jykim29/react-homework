import classes from './PizzaInfo.module.css';

export default function PizzaInfo({
  data: { pizzaName, description, pizzaImageUrl },
}) {
  return (
    <section className={classes.PizzaInfo}>
      <h2 className="sr-only">피자 소개</h2>
      <dl>
        <dt>{pizzaName}</dt>
        <dd>{description}</dd>
        <dd>
          <figure>
            <img src={pizzaImageUrl} alt={pizzaName} />
          </figure>
        </dd>
      </dl>
    </section>
  );
}
