const Dashboard = require('../models/dashboard').model;

exports.get = (req, res) => {
  Dashboard.findById(req.query.id, (err, dashboard) => {
    if (err || dashboard == null) {
      res.status(400).json({
        message: 'Dashboard not found.',
      });
    } else {
      res.json({
        dashboard,
      });
    }
  });
};

exports.create = (req, res) => {
  let newDashboard = new Dashboard;
  newDashboard.name = req.body.name;
  newDashboard.save((err, dashboard) => {
    if (err) {
      return res.status(401).json({
        message: 'Failed to create dashboard.',
      });
    } else {
      return res.json({
        dashboard,
      });
    }
  });

};

exports.delete = (req, res) => {
  Dashboard.findOneAndRemove({_id: req.body.id})
      .then((docs) => {
        if (docs) {
          res.json({
            message: 'Dashboard deleted',
          });
        } else {
          res.status(404).json({message: 'Dashboard didn\'t exist'});
        }
      }).catch((err) => {
    res.status(400).json({
      message: 'Error',
    });
  });
};
exports.getList = (req, res) => {
  Dashboard.find({}, (err, dashboards) => {
    if (err) {
      return res.status(401).json({
        message: 'Failed to get dashboards.',
      });
    }

    res.json({dashboards});
  });
};
exports.getColumns = (req, res) => {
  Dashboard.findById(req.body.id, (err, dashboard) => {
    if (err || dashboard == null) {
      return res.status(400).json({
        message: 'Dashboard not found.',
      });
    } else {
      return res.json({
        columns: dashboard.columns,
      });
    }
  });
};
exports.update = (req, res) => {
  if (!req.body.name || !req.body.id) {
    return res.status(404).json({
      message: 'Not found',
    });
  }
  Dashboard.findById(req.body.id, (err, dashboard) => {
    if (err || dashboard == null) {
      return res.status(404).json({
        message: 'Failed to get dashboard.',
      });
    }
    dashboard.name = req.body.name;
    dashboard.save(function(err) {
      if (err) {
        return res.status(401).json({
          message: 'Failed to save dashboard',
        });
      }
      res.json({
        dashboard,
      });
    });
  });
};
