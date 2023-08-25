import express from 'express';
const app = express();
app.set('port', 3000);
const main = async (): Promise<any> => {
    try {
      app.get('/', (req, res) => {
        res.json({ message: 'API Tested' });
      });
        
      app.listen('port', async () => {
        console.log(`App is listening on port ${app.get('port')}`);
      });
    } catch (err) {
      console.error(err);
    }
  };
  
  main();
  
  export { app };
  