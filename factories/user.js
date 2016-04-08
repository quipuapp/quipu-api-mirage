import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name:     faker.name.firstName,
  surnames: faker.name.lastName,
  email:    faker.internet.email
});
