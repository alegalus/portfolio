import * as Yup from "yup";

const validate = Yup.object({
    nombre: Yup.string()
      .max(40, "No puede tener mas de 40 caracteres")
      .required("Debe tener valor")
      .matches(/^[a-zA-Z\s]+$/, "Caracteres no validos"),
    mail: Yup.string().email("Email invalido").required("Debe tener valor"),
    mensaje: Yup.string()
      .max(250, "No puede tener mas de 250 caracteres")
      .required("Debe tener valor"),
  });

  export default validate