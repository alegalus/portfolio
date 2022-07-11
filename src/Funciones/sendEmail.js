import emailjs from '@emailjs/browser'

const sendEmail = () => {
    emailjs.sendForm('service_hbi1r5k','template_zlkeaq4','#form', 'rVPfOt78obvg-Dgo-')
    .then(function(response) {
       console.log('SUCCESS!', response);
    }, function(error) {
       console.log('FAILED...', error);
    })
  }

  export default sendEmail