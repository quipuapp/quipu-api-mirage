import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({number(i) {
  return `tk-${i}`;
  },

  issueDate: faker.date.recent,

  recipientName() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  }
});
