import BaseSerializer from './application';

export default BaseSerializer.extend({
  serialize(response) {
    let json = BaseSerializer.prototype.serialize.apply(this, arguments);

    if (response.total_pages) {
      json.meta = {
        pagination: {
          total_pages: response.total_pages
        }
      };
    }

    return json;
  }
});
