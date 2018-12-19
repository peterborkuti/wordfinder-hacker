var customMatchers = {
  toEqualAfterSort: function (util, customEqualityTesters) {

		return {

			compare: function (actual, expected) {

				if (expected === undefined) {
					expected = [];
				}

				var result = {};

				result.pass = util.equals(actual.sort(), expected.sort(), customEqualityTesters);

				if (result.pass) {

					result.message = "Expected " + actual + " was equal after sorting.";
				} else {

					result.message = "Expected " + actual + " was not equal after sorting";
				}

				return result;
			}
		};
	}
};


beforeEach(function(){
  jasmine.addMatchers(customMatchers)
});
