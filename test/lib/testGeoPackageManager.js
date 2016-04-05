var GeoPackageManager = require('../../lib/geoPackageManager')
  , should = require('chai').should()
  , path = require('path');

describe('GeoPackageManager tests', function() {

  it('should open the geopackage', function(done) {
    var filename = path.join(__dirname, '..', 'fixtures', 'gdal_sample.gpkg');
    GeoPackageManager.open(filename, function(err, gp) {
      should.not.exist(err);
      should.exist(gp);
      gp.getDatabase().open.should.be.equal(true);
      gp.getPath().should.be.equal(filename);
      done();
    });
  });

  it('should fail to open the geopackage due to the extension', function(done) {
    var filename = path.join(__dirname, __filename);
    GeoPackageManager.open(filename, function(err, gp) {
      should.exist(err);
      should.not.exist(gp);
      done();
    });
  });
});
