import Collection from 'ember-cli-mirage/orm/collection';

const defaultPerPage = 20;

const paginateRecords = function(records, page, perPage) {
  perPage = perPage || defaultPerPage;

  const offset = (page - 1) * perPage;

  if (records.length > perPage) {
    const newCollectionElements = [];

    for (let i = 0; i < perPage; i++) {
      const recordsIndex = offset + i;

      if (records.models[recordsIndex]) {
        newCollectionElements.push(records.models[recordsIndex]);
      }
    }

    return new Collection(records.modelName, newCollectionElements);
  } else {
    return records;
  }
};

export default function() {
  this.logging = false;

  this.post('/oauth/token', function() {

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

  this.get('/testowner/contacts', ({ contacts }, request) => {
    const allContacts = contacts.all();
    const page     = request.queryParams['page[number]'];
    const perPage  = request.queryParams['page[size]'];
    const totalPages = Math.ceil(allContacts.models.length / defaultPerPage);

    const paginatedContacts = paginateRecords(allContacts, page, perPage);

    paginatedContacts.total_pages = totalPages;

    return paginatedContacts;
  });

  this.post('/testowner/contacts');

  this.get('/testowner/contacts/:id');

  this.get('/testowner/book_entries', ({ expenseInvoices }, request) => {
    const bookEntries = expenseInvoices.all();
    const page        = request.queryParams['page[number]'];
    const perPage     = request.queryParams['page[size]'];
    const totalPages  = Math.ceil(bookEntries.length / defaultPerPage);

    const paginatedBookEntries = paginateRecords(bookEntries, page, perPage);

    paginatedBookEntries.total_pages = totalPages;

    return paginatedBookEntries;
  });

  this.get('/testowner/numbering_series');
  this.get('/testowner/numbering_series/:id');

  this.get('testowner/accounting_categories', ({ accountingCategories }, request) => {
    let categoryIds;

    if (request.queryParams['filter[id]']) {
      categoryIds = request.queryParams['filter[id]'];

      return accountingCategories.find(categoryIds.split(','));
    } else {
      return accountingCategories.all();
    }
  });
  this.get('/testowner/accounting_categories/:id');

  this.get('/testowner/accounting_subcategories');
  this.get('/testowner/accounting_subcategories/:id');

  this.post('/testowner/income_tickets');
  this.patch('/testowner/income_tickets/:id');

  this.post('/testowner/expense_tickets');
  this.patch('/testowner/expense_tickets/:id');

  this.post('/testowner/expense_invoices');
  this.patch('/testowner/expense_invoices/:id');

  this.post('/testowner/income_invoices');

  this.get('testowner/book_entries/:id', function(schema, request) {
    const id = request.params.id;
    const bookEntry =
      schema.incomeInvoices.find(id)  ||
      schema.incomeTickets.find(id)   ||
      schema.expenseInvoices.find(id) ||
      schema.expenseTickets.find(id);

    return bookEntry;
  });
}
