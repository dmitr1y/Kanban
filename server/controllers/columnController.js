const Dashboard = require('../models/dashboard');
const Column = Dashboard.columns;

    exports.get = (req, res) => {
    Column.findById(req.body.id, (err, column) => {
        if (err || column == null) {
            return res.status(400).json({
                message: "Column not found."
            });
        } else {
            res.json({
                column
            });
        }
    });
};

exports.create = (req, res) => {
    Dashboard.findById(req.body.id, (err, dashboard) => {
        if (dashboard.columns != null) {
            console.log("dashboard:", dashboard);
            console.log("columns:", dashboard.columns);
            let max = 0;
            let blyat=0;
            for (let i = 0; i < dashboard.columns.length; i++) {
                console.log(max);
                blyat=blyat+1;
               console.log(blyat,"   ");
               console.log("current column ",dashboard.columns[i]);
               console.log('columns position',dashboard.columns[i].position );
                if (max < dashboard.columns[i].position) {
                    max = dashboard.columns[i].position;
                    console.log("dsadaaaaavvvv");
                }
            }
            let newColumn = new Column;
            newColumn.name = req.body.name;
            newColumn.position = max + 1;
           newColumn.save((err, column) => {
                if (err) {
                    res.status(401).json({
                        err,
                    });
                } else {
                    dashboard.columns.push(column);
                    dashboard.save();
                   // dashboard.columns = {$push: column};
                    console.log("hf,jnfq ;t ",dashboard.columns);
                    res.json({
                        column
                    });
                }
            });

            // find((col) => {
            //     console.log("aaaaaaaaaaaa",col,"dsfdsgs")
            // })/*.sort({"position": -1},(a) => {
            //             console.log(a)
            //         })
            //     } else {
            //         let newColumn = new Column;
            //         newColumn.name = req.body.name;
            //         newColumn.position = 1;
            //         newColumn.save((err, column) => {
            //             if (err) {
            //                 res.status(401).json({
            //                     err,
            //                 });
            //             } else {
            //                 dashboard.columns = {$push: column};
            //                 res.json({
            //                     column
            //                 });
            //             }
            //         });
            //     }
            // })*/
            //  .sort('-position')
            //      .exec().then((dashboard) => {
            //          let massive;
            //          massive={};
            //     massive=dashboard.columns;
            //         massive.sort("-position")
            //         .exec((a, b) => {
            //             console.log(a);
            //             console.log(b);
            //         });
            // });
            // if (err) {
            //     console.log(err);
            //     res.status(400).json({
            //         message: "Error in finding column",
            //     });
            // } else {
            /*    let position;
                if (dashboard === null) {
                    position = 0;
                } else {
                    position = dashboard.position;
                }

            // }*/
            //})
        }
    });
};

exports.delete = (req, res) => {
    Column.findOneAndRemove({_id: req.body.id})
        .then((docs) => {
            if (docs) {
                res.json({
                    message: "Column deleted"
                })
            } else {
                res.status(404).json({message: "Column didn't exist"})
            }
        }).catch((err) => {
        res.status(400).json({
            message: "Error"
        })
    })
};