import mail from "@sendgrid/mail"
import { sendEmail } from '../models/sendEmail.js'


let indexControl = (req, res) => {
    res.render('./index.ejs')
}

let contactControl = (req, res) => {
    res.render('./contact.ejs')
}

let msg

let contactPost = (req, res) => {

    let name = req.body.name
    let email = req.body.email
    let textmsg = req.body.message

    sendEmail(textmsg, email, name)

    res.render('./msgsent.ejs')


}


export { indexControl, contactControl, contactPost }
