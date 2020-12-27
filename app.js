const express = require('express');

function execAsync(cmd) {
    const exec = require('child_process').exec;
    return new Promise((resolve, reject) => {
        exec(cmd, {encoding: 'utf-8'}, (error, stdout, stderr) => {
            if (error) {
                console.log(error);
            }
            resolve(stdout ? stdout.trim() : stderr.trim());
        })
    })
}

const app = express();
const router = express.Router();

router.get('/status', function(req, res) {
    execAsync(`ps5-wake -vP -H ${process.env.PS5_IP_ADDRESS} -j -v`).then((results) => {
        res.json(JSON.parse(results));
    });
});

app.use('/', router);

const port = process.env.PS5_MONITOR_PORT ? parseInt(process.env.PS5_MONITOR_PORT, 10) : 80;

app.listen(port, function() {
    console.log(`PS5 Monitor App listening on port ${port}`);
});