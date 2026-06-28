const nodeMailer = require('nodemailer')
require('dotenv').config()



const transporter = nodeMailer.createTransport({
    service :'gmail',
    auth : {
        user : process.env.EMAIL_ADMIN,
        pass : process.env.EMAIL_PASS
    },
})

const verifyMailer = async ()=>{
    try{
        await transporter.verify();
        console.log('NODEMAILER SMTP connection SUCCESSFULL');

    }
    catch(e){
        console.log(`ERROR found during SMTP connection: ${e}`);
    }
}

module.exports = {transporter , verifyMailer}