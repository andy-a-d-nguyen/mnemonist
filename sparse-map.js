/**
 * Mnemonist SparseMap
 * ====================
 *
 * JavaScript sparse map implemented on top of byte arrays.
 *
 * [Reference]: https://research.swtch.com/sparse
 */
var Iterator = require('obliterator/iterator'),
    getPointerArray = require('./utils/typed-arrays.js').getPointerArray;

/**
 * SparseMap.
 *
 * @constructor
 */
function SparseMap(Values, length) {
  if (arguments.length < 2) {
    length = Values;
    Values = Array;
  }

  var ByteArray = getPointerArray(length);

  // Properties
  this.size = 0;
  this.length = length;
  this.dense = new ByteArray(length);
  this.sparse = new ByteArray(length);
  this.values = new Values(length);
}

/**
 * Method used to clear the structure.
 *
 * @return {undefined}
 */
SparseMap.prototype.clear = function() {
  this.size = 0;
};

/**
 * Method used to check the existence of a member in the set.
 *
 * @param  {number} member - Member to test.
 * @return {SparseMap}
 */
SparseMap.prototype.has = function(member) {
  var index = this.sparse[member];

  return (
    index < this.size &&
    this.dense[index] === member
  );
};

/**
 * Method used to get the value associated to a member in the set.
 *
 * @param  {number} member - Member to test.
 * @return {any}
 */
SparseMap.prototype.get = function(member) {
  var index = this.sparse[member];

  if (index < this.size && this.dense[index] === member)
    return this.values[index];

  return;
};

/**
 * Method used to set a value into the map.
 *
 * @param  {number} member - Member to set.
 * @param  {any}    value  - Associated value.
 * @return {SparseMap}
 */
SparseMap.prototype.set = function(member, value) {
  var index = this.sparse[member];

  if (index < this.size && this.dense[index] === member) {
    this.values[index] = value;
    return this;
  }

  this.dense[this.size] = member;
  this.sparse[member] = this.size;
  this.values[this.size] = value;
  this.size++;

  return this;
};

/**
 * Method used to remove a member from the set.
 *
 * @param  {number} member - Member to delete.
 * @return {boolean}
 */
SparseMap.prototype.delete = function(member) {
  var index = this.sparse[member];

  if (index >= this.size || this.dense[index] !== member)
    return false;

  index = this.dense[this.size - 1];
  this.dense[this.sparse[member]] = index;
  this.sparse[index] = this.sparse[member];
  this.size--;

  return true;
};

/**
 * Method used to iterate over the set's values.
 *
 * @param  {function}  callback - Function to call for each item.
 * @param  {object}    scope    - Optional scope.
 * @return {undefined}
 */
SparseMap.prototype.forEach = function(callback, scope) {
  scope = arguments.length > 1 ? scope : this;

  var item;

  for (var i = 0; i < this.size; i++) {
    item = this.dense[i];

    callback.call(scope, item, item);
  }
};

/**
 * Method used to create an iterator over a set's values.
 *
 * @return {Iterator}
 */
SparseMap.prototype.values = function() {
  var size = this.size,
      dense = this.dense,
      i = 0;

  return new Iterator(function() {
    if (i < size) {
      var item = dense[i];
      i++;

      return {
        value: item
      };
    }

    return {
      done: true
    };
  });
};

/**
 * Attaching the #.values method to Symbol.iterator if possible.
 */
if (typeof Symbol !== 'undefined')
  SparseMap.prototype[Symbol.iterator] = SparseMap.prototype.values;

/**
 * Convenience known methods.
 */
SparseMap.prototype.inspect = function() {
  var proxy = new Map();

  for (var i = 0; i < this.size; i++)
    proxy.set(this.dense[i], this.values[i]);

  // Trick so that node displays the name of the constructor
  Object.defineProperty(proxy, 'constructor', {
    value: SparseMap,
    enumerable: false
  });

  proxy.length = this.length;

  if (this.values.constructor !== Array)
    proxy.type = this.values.constructor.name;

  return proxy;
};

if (typeof Symbol !== 'undefined')
  SparseMap.prototype[Symbol.for('nodejs.util.inspect.custom')] = SparseMap.prototype.inspect;

/**
 * Exporting.
 */
module.exports = SparseMap;
