const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data; // this is ES2015's' way of showing cards = data.cards

router.get('/', (req, res) => {
  const cardNum = cards.length;
  const id = Math.floor(Math.random()*(cards.length));
  res.redirect(`/cards/${id}?side=question`);

});



router.get('/:id', (req, res) => {
  const side = req.query.side;
  const { id } = req.params;
  if (!side) {
    return res.redirect(`/cards/${id}?side=question`);
  }
  const text = cards[id][side];
  const name = req.cookies.username;
  const hint = side === 'question' ? cards[id].hint : '';
  const redirectSide = side === 'question' ? 'answer' : 'question';
  const buttonText = side === 'question' ? 'Answer' : 'Question';
  const templateData = { text, hint, id, redirectSide, buttonText, name, side };
  res.render('card', templateData);
});

module.exports = router;
