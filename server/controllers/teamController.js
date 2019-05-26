const Team = require('../models/team');

exports.get = (req, res) => {
  Team.findOne({_id: req.query._id}, (err, team) => {
    if (err || !team) {
      res.status(404).json({
        message: 'Team not found.',
      });
    } else {
      res.json({
        team: {
          name: team.name,
          users: team.users,
        },
      });
    }
  });
};

exports.getList = (req, res) => {
  Team.find({}, (err, teams) => {
    if (err || !teams) {
      res.status(404).json({
        message: 'Team not found.',
      });
    } else {
      res.json({teams});
    }
  });
};

exports.create = (req, res, next) => {
  if (!req.body.name) {
    res.stat(401).json({
      message: 'Wrong name',
    });

    next();
  }

  let team = new Team({
    name: req.body.name,
  });

  team.save((err, team) => {
    if (err) {
      return res.status(400).json({
        message: 'Failed to create team',
      });
    } else {
      return res.json({team});
    }
  });
};

exports.update = (req, res, next) => {
  if (!req.body.team || !req.body.team._id) {
    res.stat(401).json({
      message: 'Wrong team',
    });

    next();
  }

  const reqTeam = req.body.team;

  Team.findOne({_id: reqTeam._id}, (err, team) => {
    if (err || !team) {
      return res.code(404).json({
        message: 'Team bot found',
      });
    }

    team.name = reqTeam.name;
    team.users = reqTeam.users;

    return team.save((err, team) => {
      if (err || !team) {
        return res.code(500).json({
          message: 'Failed to update team',
        });
      }
      return res.json({
        team,
      });
    });
  });
};
