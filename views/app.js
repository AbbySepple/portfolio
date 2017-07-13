var port = process.env.PORT || 6000;

// serve static files
app.use(express.static(path.resolve('./server/public')));
