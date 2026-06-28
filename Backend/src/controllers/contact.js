const mailer = require('./mailer')
const format = require('../template/inboxTemplate')
require('dotenv').config()

const handleContactForm = async (req , res) =>{
    const {name , email , message} = req.body;
    const content = format.generateContactEmail(name.trim() , email.trim() , message.trim());

    const mailOptions = {
        from : `"Portfolio Contact" <${process.env.EMAIL_ADMIN}>`,
        to : process.env.EMAIL_ADMIN,
        replyTo : email,
        subject : `Portfolio message from ${name}`,
        text : content.text,
        html : content.html,
    }
    try {
        await mailer.transporter.sendMail(mailOptions);
        return res.status(200).json({success: true,message: "message dispatched successfully"});

    }
    catch(e){
        console.log(`email could not dispatched ${e}`)
        res.status(500).json({success : false,error :'Internal pipeline delivery failure.' })
    }

}
module.exports = {handleContactForm};
