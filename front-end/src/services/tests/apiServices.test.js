import {callAPI} from '../apiServices';

describe('callAPI', function(){
  beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: '123',
          json: function() {
            return {Id: '123'}
          }
        });
      });
      return p;
    });
  });

  it("callAPI", async function() {
    const response = await callAPI('foo');
    expect(response).toEqual({"Id": "123"});
  });
});