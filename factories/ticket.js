import BookEntry from './book-entry';

export default BookEntry.extend({
  number(i) {
    return `tk-${i}`;
  },

  issueDate: faker.date.recent,
  issuingName() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },
  recipientName() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  }
});
