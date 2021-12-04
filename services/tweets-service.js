//let tweets = require('../data/tweets.json');
const dao = require('../tweets/tweet-dao');

module.exports = (app) => {
  const findAllTweets = (req, res) =>
      dao.findAllTweets()
      .then(tweets => res.json(tweets));


  const createTweet = (req, res) =>
      dao.createTweet(req.body)
      .then((insertedTweet) => res.json(insertedTweet));

  const deleteTweet = (req, res) =>
      dao.deleteTweet(req.params.id)
      .then((status) => res.send(status));

  const likeTweet = (req, res) =>
      dao.updateTweet(req.params.id, req.body)
      .then(status => res.send(status));

  app.get('/api/tweets', findAllTweets);
  app.put('/api/tweets/:id/like', likeTweet);
  app.delete('/api/tweets/:id', deleteTweet);
  app.post('/api/tweets', createTweet);

  /*const fetchAllTweets = (req, res) => {
    res.json(tweets);
  }
  app.get('/api/tweets', fetchAllTweets);

  const postNewTweet = (req, res) => {
    const newTweet = {
      _id: (new Date()).getTime() + '',
      "topic": "Web Development",
      "userName": "ReactJS",
      "verified": false,
      "handle": "ReactJS",
      "time": "2h",
      "avatar-image": "/a5/twitter/images/react-blue.png",
      "logo-image": "/a5/twitter/images/react-blue.png",
      "liked": false,
      "stats": {
        "comments": 123,
        "retweets": 234,
        "likes": 345
      },
      ...req.body,
    }

    tweets = [
        newTweet,
      ...tweets
    ];
    res.json(newTweet);
  }
  app.post('/api/tweets', postNewTweet);

  const deleteTweet = (req, res) => {
    const id = req.params['id'];
    tweets = tweets.filter(tweet => tweet._id !== id);
    res.sendStatus(200);
  }
  app.delete('/api/tweets/:id', deleteTweet);

  const likeTweet = (req, res) => {
    const id = req.params['id'];
    tweets = tweets.map(tweet => {
      if (tweet._id === id) {
        if (tweet.liked === true) {
          tweet.liked = false;
          tweet.stats.likes--;
        } else {
          tweet.liked = true;
          tweet.stats.likes++;
        }
        return tweet;
      } else {
        return tweet;
      }
    });
    res.sendStatus(200);
  }
  app.put('/api/tweets/:id/like', likeTweet);*/
};