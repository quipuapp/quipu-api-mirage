import { faker } from 'ember-cli-mirage';

export default function(server) {

  server.create('user');

  server.create('quipu-account', {
    id: 'testowner',
    default: true,
    preferences: {
      active_income_category_ids: []
    }
  });

  server.createList('quipu-account', 2);

  const contacts = server.createList('contact', 150);

  // EXPENSE INVOICES
  server.createList('expense-invoice', 200, {
    issuingName() {
      return faker.helpers.randomize(contacts).name;
    }
  });

  // EXPENSE TICKETS
  server.createList('expense-ticket', 200);

  server.create('numbering-series', {
    applicableTo: 'invoices',
    prefix: "2016",
    amending: false,
    default: true,
    deletable: false
  });

  server.create('numbering-series', {
    applicableTo: 'invoices',
    prefix: "FCT",
    amending: false,
    default: true,
    deletable: false
  });
}
