import emailjs from '@emailjs/browser'

const sendEmail = () => {
   //utilizo sendForm y le paso los parametros del id del servicio, el id de template, el id del form(esto lo pongo yo en el form)
   //y por ultimo el id del usuario para que lo conecte con emailjs.
    emailjs.sendForm('service_hbi1r5k','template_zlkeaq4','#form', 'rVPfOt78obvg-Dgo-')
    .then(function(response) {
       console.log('SUCCESS!', response);
    }, function(error) {
       console.log('FAILED...', error);
    })
  }

  export default sendEmail