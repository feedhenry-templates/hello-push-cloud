//acceptance tests
var request = require("request");
var util = require('util');
var assert = require('assert');

var baseUrl = "http://127.0.0.1:8052/push";

/*
 * A very simple acceptance test. This test requires the server to be running (this is setup via the 'grunt accept' task)
 */
exports.it_should_test_push_with_GET = function(finish){
  request(baseUrl, function(err, response, body){
    assert.equal(response.statusCode, 202, 'Unexpected statusCode: ', response.statusCode + ' - ' + util.inspect(body));
    var data = JSON.parse(body);
    assert.equal(data.msg, 'Message to internal Push server delivered for further processing!');
    finish();
  });
};
