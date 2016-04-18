import Collection from 'ember-cli-mirage/orm/collection';

const defaultPerPage = 20;

const paginateRecords = function(records, page, perPage) {
  perPage = perPage || defaultPerPage;

  const offset = (page - 1) * perPage;
  const offsetEnd = perPage * page;

  if (records.length > perPage) {
    const newCollection = new Collection(records.modelName);

    for (let i = 0; i < perPage; i++) {
      const key = i.toString();
      const recordsIndex = offset + i;

      if (records[recordsIndex]) {
        newCollection.push(records[recordsIndex]);
      }
    }

    return newCollection;
  } else {
    return records;
  }
};

export default function() {
  this.post('/oauth/token', function(db) {

    return {
      access_token: "a08bd89e8fde90f06eac199165ff414bc10e276b5b73a3effa27bad786c36a33",
      token_type: "bearer",
      expires_in: 2943,
      refresh_token: "9aba732caa2c269b6e502341fd7cd8118b2353b84eaef5800dfe0e3faa45eeb1",
      created_at: 1450714792,
      resource_owner_id: 1
    };
  });

  this.get('/users/:id');

  this.get('/quipu_accounts');

  this.get('/quipu_accounts/:id');

  this.get('/testowner/contacts', ({ contact }, request) => {
    const contacts = contact.all();
    const page     = request.queryParams['page[number]'];
    const perPage  = request.queryParams['page[size]'];
    const totalPages = Math.ceil(contacts.length / defaultPerPage)

    const paginatedContacts = paginateRecords(contacts, page, perPage);

    paginatedContacts.total_pages = totalPages;

    return paginatedContacts;
  });

  this.get('/testowner/contacts/:id');

  this.get('/testowner/book_entries', ({ bookEntry, invoice, ticket }, request) => {
    const bookEntries = invoice.all();
    const page        = request.queryParams['page[number]'];
    const perPage     = request.queryParams['page[size]'];
    const totalPages  = Math.ceil(bookEntries.length / defaultPerPage)

    const paginatedBookEntries = paginateRecords(bookEntries, page, perPage);

    paginatedBookEntries.total_pages = totalPages;

    return paginatedBookEntries;
  });
}