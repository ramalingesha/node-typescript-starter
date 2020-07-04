import express from "express";

/**
 * @class Server
 * @classdesc Creates and starts express server
 */
class Server {
  private _expressApp!: express.Application;

  constructor() {
    this.initServer();
  }

  initServer = () => {
    // Get port number from env file if configured otherwise default port 8000
    const port = process.env.PORT || 8000;

    // Create express instance
    this._expressApp = express();

    // Start the server, which listens on specified port
    const server = this._expressApp.listen(port);

    // server error listener
    server.on("error", (error) => {
      console.error("Something went wrong. ", error);
    });

    // server success listener
    server.on("listening", () => {
      console.log("Server started. Listening on port ", port);
    });

    // Add default route
    this._expressApp.get('/', (req, res) => {
      res.json(
        'Welcome to Simple Express Node Server with Typescript Example!',
      );
    });
  };
}

new Server();
