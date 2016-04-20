var Promise = function() {
	this.doneList = [];
	this.failList = [];
	this.state = 'pending';
};

Promise.prototype = {

	constructor: 'Promise',

	resolve: function(data) {
		this.state = 'resolved';
		var list = this.doneList;
		for (var i = 0; i < list.length; i++) {
			list[0].call(this, data);
			list.shift();
		};
	},
	reject: function(data) {
		this.state = 'reject';
		var list = this.failList;
		for (var i = 0; i < list.length; i++) {
			list[0].call(this, data);
			list.shift();
		};
	},
	then: function(doneFn, failFn) {
		this.done(doneFn).fail(failFn);
	},
	done: function(func) {
		if(typeof func == 'function') {
			this.doneList.push(func);
		}
		return this;
	},
	fail: function(func) {
		if(typeof func == 'function') {
			this.failList.push(func);
		}
		return this;
	},
	always: function(fn) {
		this.done(fn).fail(fn);
		return this;
	}

};

function exec() {

	var promise  = new Promise();

	setTimeout(function() {

		var number = Math.random()*(20-10)+10;

		if((number % 2) > 1) {
			promise.resolve({
				status: 'success'
			});
		}else {
			promise.reject({
				status: 'fail'
			});
		}

	},1000);

	return promise;

}

exec().then(function(data) {
	console.log(data);
}, function(error) {
	console.log(error);
});
