describe('randomString service', function() {
	beforeEach(module('randomString'));

	var mockWindow;

	beforeEach(function(){
		mockWindow = {
			Math: {
				random: jasmine.createSpy().andReturn(Math.random()),
				floor: Math.floor
			}
		};

		module(function ($provide) {
			$provide.value('$window', mockWindow);
		});

	});

	it('should generate string 10 chars length', function(){
		inject(function(randomString){
			var str = randomString();
			expect(typeof str).toEqual('string');
			expect(str.length).toEqual(10);
		});
	});

	it('should generate string of ceratin length', function(){
		inject(function(randomString){
			var str = randomString(42);
			expect(str.length).toEqual(42);
		});
	});

	it('should generate _random_ string', function(){
		inject(function(randomString){
			randomString();
			expect(mockWindow.Math.random).toHaveBeenCalled();
		});
	});
});
