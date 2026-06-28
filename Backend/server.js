const app = require('./src/app')
const mailer = require('./src/controllers/mailer')
app.listen(3000,async ()=>{
    console.log('SERVER IS LIVE ON PORT 3000...');
    await mailer.verifyMailer();
})