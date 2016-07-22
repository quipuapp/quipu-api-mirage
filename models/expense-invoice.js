import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  contact: belongsTo(),
  items:                 hasMany('bookEntryItem'),
  accountingCategory:    belongsTo(),
  accountingSubcategory: belongsTo()
});
