import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  number(i) {
    return i;
  },

  issueDate: faker.date.recent
});
