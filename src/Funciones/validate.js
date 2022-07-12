import * as Yup from "yup";
//con este objeto guardo las validaciones que despues utilizo en validationSchema en formik
const validate = Yup.object({
    nombre: Yup.string()
      .max(40, "No puede tener mas de 40 caracteres")
      .required("Debe tener valor")
      .matches(/^[a-zA-Z\s]+$/, "Caracteres no validos"),//esto es para no perimita numeros u otros caracteres en el input
    mail: Yup.string().email("Email invalido").required("Debe tener valor"),
    mensaje: Yup.string()
      .max(250, "No puede tener mas de 250 caracteres")
      .required("Debe tener valor"),
  });

  export default validate