import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  items:                 hasMany('bookEntryItem'),
  accountingCategory:    belongsTo(),
  accountingSubcategory: belongsTo()
});
