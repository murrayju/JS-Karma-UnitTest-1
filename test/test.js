describe('add', function () {
    it('should add two numbers and return the result', function () {
        expect(window.add(1, 2)).toBe(3);
    });
});

describe('subtract', function () {
    it('should subtract two numbers', function () {
        expect(window.subtract(2, 1)).toBe(1);
    });
});

describe('updateAppState', function () {
    for (var i=0; i<300; i++) {
        it('should push a new state into the browser history ' + i, function () {
            window.updateAppState({
                message: 'hi'
            });
            expect(window.history.state).toEqual({
                message: 'hi'
            })
        });
    }
});