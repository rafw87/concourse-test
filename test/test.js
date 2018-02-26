describe('Suite 1', function() {
  describe('Suite 1.1', function() {
    it('test1', function() {

    });
    it('test2', function() {
      console.log("test2 modified");
    });
  });
  describe('Suite 1.1', function() {
    it('test1', function() {

    });
    it('test2', function() {
      this.skip();
    });
  });
});