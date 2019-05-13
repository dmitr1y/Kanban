const Card = require('../models/card').model;

exports.get = (req, res) => {
    Card.findById(req.body.id, (err, card) => {
        if (err || card == null) {
            return res.status(400).json({
                message: "Card not found."
            });
        } else {
            res.json({
                card
            });
        }
    });
};

exports.create = (req, res) => {
    let newCard = new Card;
    newCard.name = req.body.name;
    newCard.save((err, card) => {
        if (err) {
            return res.status(401).json({
                message: "Failed to create card.",
            });
        } else {
            return res.json({
                card
            });
        }
    });

};

exports.delete = (req, res) => {
    Card.findOneAndRemove({_id: req.body.id})
        .then((docs)=>{
            if(docs) {
                res.json({
                    message: "Card deleted"
                })
            } else {
                res.status(404).json({message: "Card didn't exist"})
            }
        }).catch((err)=>{
        res.status(400).json({
            message: "Error"
        })
    })
};
exports.getList = (req, res) => {
    Card.find({}, (err, cards) => {
        if (err) {
            return res.status(401).json({
                message: "Failed to get cards.",
            });
        }
        let cardMap = {};
        cards.forEach(function (card) {
            cardMap[card._id] = card;
        });
        res.json({cardMap})
    });
}