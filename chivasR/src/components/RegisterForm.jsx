import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../styles/AuthForm.css';

const RegisterForm = () => {
  const navigate = useNavigate();

  const valoresIniciales = {
<<<<<<< HEAD
    nombre:'',
    apellido:'',
    genero:'',
    fechaNacimiento:'',
    ocupacion:'',
    email:'',
    contraseña:'',
    postal:'',
    domicilio:'',
    estado:'',
    pais:''
=======
    nombre: '',
    apellido: '',
    genero: '',
    ocupacion: '',
    email: '',
    contraseña: '',
    postal: '',
    domicilio: '',
    estado: '',
    pais: ''
>>>>>>> front_end_dev
  };

  const [formValues, setFormValues] = useState(valoresIniciales);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.nombre || formValues.nombre.trim().length < 2)
      errors.nombre = "Nombre requerido";

    if (!formValues.apellido || formValues.apellido.trim().length < 2)
      errors.apellido = "Apellido requerido";

    if (!formValues.email)
      errors.email = "Email es requerido";
    else if (!regex.test(formValues.email))
      errors.email = "Formato invalido";

    if (!formValues.contraseña)
      errors.contraseña = "Contraseña requerida";
    else if (formValues.contraseña.length < 6)
      errors.contraseña = "Mínimo 6 caracteres";
    else if (formValues.contraseña.length > 10)
      errors.contraseña = "Máximo 10 caracteres";

    if (!formValues.postal || formValues.postal.length < 4 || formValues.postal.length > 8)
      errors.postal = "Código postal inválido";

    if (!formValues.domicilio || formValues.domicilio.trim().length < 2)
      errors.domicilio = "Domicilio requerido";
<<<<<<< HEAD
    } else if(formValues.domicilio.trim().length < 2){
      errors.domicilio = "Domicilio requerido";
    }
    
    if (!formValues.genero) {
      errors.genero = 'Selecciona tu género';
    }else if(formValues.genero ==''){
      errors.genero = 'Selecciona tu género';
    }

    if (!formValues.fechaNacimiento) {
      errors.fechaNacimiento = 'Inserta tu fecha de nacimiento';
    }
    
    if (!formValues.ocupacion) {
      errors.ocupacion = 'Selecciona tu ocupación';
    }else if(formValues.ocupacion ==''){
      errors.ocupacion = 'Selecciona tu ocupación';
    }
=======
>>>>>>> front_end_dev

    if (!formValues.genero)
      errors.genero = "Selecciona tu género";

    if (!formValues.ocupacion)
      errors.ocupacion = "Selecciona tu ocupación";

    if (!formValues.estado)
      errors.estado = "Estado requerido";

    if (!formValues.pais)
      errors.pais = "País requerido";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    const userPayload = {
      id: uuidv4(),
      email: formValues.email,
      name: formValues.nombre,
      lastname: formValues.apellido,
      genre: formValues.genero,
      birth_date: new Date().toISOString(),
      occupation: formValues.ocupacion,
      creation_date: new Date().toISOString(),
      address: formValues.domicilio,
      postal_code: formValues.postal,
      state: formValues.estado,
      city: formValues.pais
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/user/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userPayload)
      });

      const data = await res.json();
      console.log('Registro:', data);

      if (res.ok) {
        navigate('/login');
      } else {
        alert("Error al registrar: " + (data.detail || "Intenta más tarde"));
      }
    } catch (error) {
      console.error("Error de red:", error);
      alert("⚠️ Registro simulado (modo desarrollo)");
      console.table(userPayload);
      navigate('/login');
    }
  };

  return (
    <div className='auth-page login-bg'>
      <div className='auth-form-container'>
        <h1>Crear cuenta</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor='nombre'>Nombre*</label>
          <input type='text' name="nombre" id="nombre" value={formValues.nombre} onChange={handleChange} />
          <p>{formErrors.nombre}</p>

          <label htmlFor='apellido'>Apellidos*</label>
          <input type='text' name="apellido" id="apellido" value={formValues.apellido} onChange={handleChange} />
          <p>{formErrors.apellido}</p>

          <label htmlFor='genero'>Género*</label>
          <select name='genero' id='genero' value={formValues.genero} onChange={handleChange}>
            <option value=''>Selecciona...</option>
            <option value='mujer'>Mujer</option>
            <option value='hombre'>Hombre</option>
            <option value='nb'>Prefiero no decir</option>
          </select>
          <p>{formErrors.genero}</p>

          <label htmlFor='ocupacion'>Ocupación*</label>
          <select name='ocupacion' id='ocupacion' value={formValues.ocupacion} onChange={handleChange}>
            <option value=''>Selecciona...</option>
            <option value='FullTime'>Emplead@ de tiempo completo</option>
            <option value='ParTime'>Emplead@ de medio tiempo</option>
            <option value='Desempleado'>Desemplead@</option>
            <option value='Estudiante'>Estudiante</option>
          </select>
          <p>{formErrors.ocupacion}</p>

<<<<<<< HEAD
          <label htmlFor='fechaNacimiento'>Fecha de nacimiento</label>
          <input
            type="date"
            name="fechaNacimiento"
            value={formValues.fechaNacimiento}
            placeholder="Ingrese fecha de nacimiento"
            onChange={handleChange}
          />
          <p>{formErrors.fechaNacimiento}</p>
       
          
=======
>>>>>>> front_end_dev
          <label htmlFor='email'>Correo*</label>
          <input type='email' name='email' id='email' value={formValues.email} onChange={handleChange} />
          <p>{formErrors.email}</p>

          <label htmlFor="contraseña">Contraseña*</label>
          <input type='password' name='contraseña' id='contraseña' value={formValues.contraseña} onChange={handleChange} />
          <p>{formErrors.contraseña}</p>

          <label htmlFor='postal'>Código Postal*</label>
          <input type='text' name='postal' id='postal' value={formValues.postal} onChange={handleChange} />
          <p>{formErrors.postal}</p>

          <label htmlFor='domicilio'>Domicilio*</label>
          <input type='text' name="domicilio" id='domicilio' value={formValues.domicilio} onChange={handleChange} />
          <p>{formErrors.domicilio}</p>

          <label htmlFor='estado'>Estado*</label>
          <select name='estado' id='estado' value={formValues.estado} onChange={handleChange}>
            <option value=''>Selecciona...</option>
            <option value='Jalisco'>Jalisco</option>
            <option value='CDMX'>CDMX</option>
            <option value='NuevoLeon'>Nuevo León</option>
            <option value='Michoacan'>Michoacán</option>
            <option value='NoListado'>Otro</option>
          </select>
          <p>{formErrors.estado}</p>

          <label htmlFor='pais'>País*</label>
          <select name='pais' id='pais' value={formValues.pais} onChange={handleChange}>
            <option value=''>Selecciona...</option>
            <option value='Canada'>Canadá</option>
            <option value='US'>Estados Unidos</option>
            <option value='Mexico'>México</option>
          </select>
          <p>{formErrors.pais}</p>

          <button type="submit">Registrarse</button>
        </form>

        <div className="form-links">
          <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
