'use strict';

function MockUuidService() {
  this.next_ = [];
}

MockUuidService.prototype.next = function() {
  return this.next_.shift();
};

MockUuidService.prototype.setNext = function(values) {
  var next = this.next_;
  angular.forEach(arguments, function(value) {
    next.push(value);
  });
};

MockUuidService.prototype.clear = function() {
  var left = this.next_.length;
  this.next_ = [];
  return left;
};
