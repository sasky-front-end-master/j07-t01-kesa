// Luodaan console.login "matkija" global-kontekstiin.
global.console = {
  log: jest.fn(),
}

describe('Tarkistetaan console.login sisältö', () => {
  it('pitäisi sisältää "XXX paivaa"', () => {
    
    const tehtava = require('../tehtava.js');

    tehtava();

    let pvjakaja = 1000*3600*24;
    let ms = new Date(2021,5,1,0,0,0,0) - Date.now();
    let k = Math.round(ms/pvjakaja);
    let vert = k + " paivaa";
    expect(global.console.log).toHaveBeenCalledWith(vert)
  });
});

