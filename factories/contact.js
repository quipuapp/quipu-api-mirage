import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  name:                   function() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },
  email:                  faker.internet.email,
  tax_id:                 faker.finance.account,
  address:                faker.address.streetAddress,
  zip_code:               faker.address.zipCode,
  town:                   faker.address.city,
  country_code:           'es',
  phone:                  faker.phone.phoneNumber,
  bank_account_number:    faker.finance.account,
  bank_account_swift_bic: faker.finance.account,
  is_client:              false,
  is_supplier:            false,
  client_number:          null,
  supplier_number:        null,
  total_paid:             null,
  total_unpaid:           null,
  total_paid_incomes:     null,
  total_unpaid_incomes:   null,
  total_incomes:          null,
  total_paid_expenses:    null,
  total_unpaid_expenses:  null,
  total_expenses:         null,
  deletable:              function() {
    return faker.random.boolean();
  }
});
