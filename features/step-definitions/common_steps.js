var request = require('request');

module.exports = function () {
  var genre;

  this.Given(/^I make an API call to spotify$/, function () {

    request('https://api.spotify.com/v1/search?q=arcade%20fire&type=artist', function (error, response, body) {

      expect(response).to.not.be.undefined;
      expect(response.statusCode).to.equal(200);

      if (!error) {
        artistResponse = JSON.parse(body);
      }

      genre = artistResponse.artists.items[0].genres[0];

      expect(genre).to.contain('chamber pop');
    })

  });

  this.Given(/^I navigate to wikipedia$/, function () {
    return this.browser
      .url('http://www.wikipedia.org');
  });

  this.When(/^I enter the artist genre in the search$/, function () {
    return this.browser
      .setValue('#searchInput', genre)
      .click('button');
  });

  this.Then(/^I will see information about my artist$/, function () {
    return this.browser
      .pause(3000);
  });
};
