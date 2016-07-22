import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  contact: belongsTo(),
  items:                 hasMany('bookEntryItem'),
  numeration:            belongsTo('numberingSeries'),
  accountingCategory:    belongsTo(),
  accountingSubcategory: belongsTo()
});
