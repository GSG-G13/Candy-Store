const {getCandy,addCandy,deleteCandy}  = require('../../src/database/queries/candy');
beforeAll(()=>{
    return buildDB();
  });
  afterAll(()=>{
    return connection.end();
  });
  describe('test get all candy query',()=>{
    test('should return all the candy in success state',()=>{
        
    });
  })