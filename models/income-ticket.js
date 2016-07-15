import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  items:                 hasMany('bookEntryItem'),
  numeration:            belongsTo('numberingSeries'),
  accountingCategory:    belongsTo(),
  accountingSubcategory: belongsTo()
});
