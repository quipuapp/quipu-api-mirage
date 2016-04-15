import BookEntry from './book-entry';

export default BookEntry.extend({
  number(i) {
    return `fact-${i}`;
  }
});
