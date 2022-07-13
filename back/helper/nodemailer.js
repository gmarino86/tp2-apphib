import NodeMailer from 'nodemailer';

async function enviarMail(user, token) {
    const transporter = NodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'casandra.heller16@ethereal.email',
            pass: 'phCdYaDbp6JjbYKCRR'
        }
    });
    
    let message = {
        from: 'Armá el Equipo <recovery@armaelequipo.com.ar>',
        to: `Recipient <recipient@example.com>`,
        subject: 'Recuperá tu password',
        html: `
        <div>
            <h1>Hola ${user.name}! <br>
            <p>Ingresá al siguiente link para cambiar tu password</p><br>
            <a>http://localhost:3000/new-pass?email=${user.mail}&token=${token}</a>
        </div>`
    };
    
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', NodeMailer.getTestMessageUrl(info));
    });
}

export {
    enviarMail
}

