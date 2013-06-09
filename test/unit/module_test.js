'use strict';

describe('rpc module', function() {

  beforeEach(module('jsonrpc'));

  it('should inject jsonrpc', inject(function($injector) {
    expect($injector.get('jsonrpc')).toBeDefined();
  }));

});
