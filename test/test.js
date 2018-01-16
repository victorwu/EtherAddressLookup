var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});


var Web3 = require("web3");
describe('rpc_provider', function() {
	describe('web3 rpc_provider', function() {
    it('should return -1 if rpc_provider is not found', function() {
      // chrome.runtime.sendMessage({func: "rpc_provider"}, function(objResponse) {
        var web3 = new Web3(new Web3.providers.HttpProvider("http://parity.kovan.whalenodes.com/"));

        // Get current block number of the latest sync
        web3.eth.isSyncing(function (error, sync) {
            
          // stop all app activity
          if(!error) {

            // using "true" so all filters stopped but not not web3.eth.syncing polling
            if(sync === true) {
              web3.reset(true);
            }

            // show sync info
            else if(sync) {
              return true;
            }

            // run the app
            else {
            }
          } else return -1;
        });

      // });
    });
	});
});
