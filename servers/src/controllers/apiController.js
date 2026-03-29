exports.getResponse = (req, res) => {
      res.json({
            server: process.env.PORT,
            pid: process.pid
      });
};