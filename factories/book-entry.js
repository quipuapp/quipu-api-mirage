import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  totalAmount: faker.finance.amount,
  currencyCode: 'EUR'
});
