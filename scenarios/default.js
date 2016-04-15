import { faker } from 'ember-cli-mirage';

export default function(server) {

  server.create('user');

  server.create('quipu-account', {
    id: 'testowner',
    default: true
  });

  server.createList('quipu-account', 2);

  const contacts = server.createList('contact', 50);

  // EXPENSE INVOICES
  server.createList('invoice', 200, {
    kind: 'expenses',
    issuingName() {
      return faker.helpers.randomize(contacts).name
    }
  });

  // EXPENSE TICKETS
  server.createList('ticket', 200, {
    kind: 'expenses'
  });
}
