import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/AuthForm.css';


const RegisterForm = () => {

  const navigate = useNavigate();

  const valoresIniciales = {
    nombre:'',
    apellido:'',
    genero:'',
    ocupacion:'',
    email:'',
    contraseña:'',
    postal:'',
    domicilio:'',
    estado:'',
    pais:''
  };

  const [formValues, setFormValues]=useState(valoresIniciales);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit] = useState(false);  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);


  const validate = () => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.nombre) {
      errors.nombre = "Nombre requerido";
    } else if(formValues.nombre.trim().length < 2){
      errors.nombre = "Nombre requerido";
    }

    if (!formValues.apellido) {
      errors.apellido = "Apellido requerido";
    } else if(formValues.apellido.trim().length < 2){
      errors.apellido = "Apellido requerido";
    }    

    if (!formValues.email) {
      errors.email = "Email es requerido";
    } else if (!regex.test(formValues.email)) {
      errors.email = "Formato invalido";
    }

    if (!formValues.contraseña) {
      errors.contraseña = "Contraseña requerida";
    } else if (formValues.contraseña.length < 6) {
      errors.contraseña = "Mínimo 6 caracteres";
    } else if (formValues.contraseña.length > 10) {
      errors.contraseña = "Maximo 10 caracteres";
    }

    if (!formValues.postal) {
      errors.postal = "Codigo postal requerido";
    } else if (formValues.postal.length < 4) {
      errors.postal = "Mínimo 4 caracteres";
    } else if (formValues.postal.length > 8) {
      errors.postal = "Maximo 8 caracteres";
    }

    if (!formValues.domicilio) {
      errors.domicilio = "Domicilio requerido";
    } else if(formValues.domicilio.trim().length < 2){
      errors.domicilio = "Domicilio requerido";
    }
    
    if (!formValues.genero) {
      errors.genero = 'Selecciona tu género';
    }else if(formValues.genero ==''){
      errors.genero = 'Selecciona tu género';
    }
    
    if (!formValues.ocupacion) {
      errors.ocupacion = 'Selecciona tu ocupación';
    }else if(formValues.ocupacion ==''){
      errors.ocupacion = 'Selecciona tu ocupación';
    }

    if (!formValues.estado) {
      errors.estado = 'Estado requerido';
    }else if(formValues.estado == ''){
      errors.estado = 'Estado requerido';
    }

    if (!formValues.pais) {
      errors.pais = 'Pais requerido';
    } else if(formValues.pais=='') {
      errors.pais = 'Pais requerido';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors); 
    } else {
      localStorage.setItem('token', 'chivas-token');
      localStorage.setItem('user', formValues.email);
      navigate('/');
    }
  };


  return(
    <div className='auth-page login-bg'>
      <div className='auth-form-container'>
        <h1>Crear cuenta</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor='nombre'>Nombre*</label>
          <input 
            type='text'
            placeholder='Nombre'
            name="nombre"
            id="nombre"
            value={formValues.nombre}
            onChange={handleChange}
          />
          <p>{formErrors.nombre}</p>
          
          <label htmlFor='apellido'>Apellidos*</label>
          <input 
            type='text'
            placeholder='Apellidos'
            name="apellido"
            id="apellido"
            value={formValues.apellido}
            onChange={handleChange}  
          />
          <p>{formErrors.apellido}</p>

          <label htmlFor='genero'>Genero*</label>
          <select name='genero' id='genero' value={formValues.genero} onChange={handleChange} >
            <option value=''>Selecciona...</option>
            <option value='mujer'>Mujer</option>
            <option value='Hombre'>Hombre</option>
            <option value='nb'>Prefiero no decir</option>
          </select> 
          <p>{formErrors.genero}</p>    

          <label htmlFor='ocupacion'>Ocupacion*</label>
          <select name='ocupacion' id='ocupacion' value={formValues.ocupacion} onChange={handleChange} >
            <option value=''>Selecciona...</option>
            <option value='FullTime'>Emplead@ de tiempo completo</option>
            <option value='ParTime'>Emplead@ de medio tiempo</option>
            <option value='Desempleado'>Desemplead@</option>
            <option value='Estudiante'>Estudiante</option>
          </select>
          <p>{formErrors.ocupacion}</p>          
          
          <label htmlFor='email'>Correo*</label>
          <input 
            type='email' 
            placeholder='Correo electronico' 
            name='email'
            id='email'
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
          
          <label htmlFor="contraseña">Contraseña*</label>
          <input 
            type='password'
            placeholder='Contraseña'
            name='contraseña'
            id='contraseña'
            value={formValues.contraseña}
            onChange={handleChange}  
          />
          <p>{formErrors.contraseña}</p>

          <label htmlFor='postal'>Postal*</label>
          <input
            type='text'
            placeholder='Codigo Postal'
            name='postal'
            id='postal'
            value={formValues.postal}
            onChange={handleChange}
          />
          <p>{formErrors.postal}</p>
          
          <label htmlFor='domicilio'>Domicilio*</label>
          <input 
            type='text' 
            placeholder='Domicilio'
            name="domicilio"
            id='domicilio'
            value={formValues.domicilio}
            onChange={handleChange}
          />
          <p>{formErrors.domicilio}</p>
          
          <label htmlFor='estado'>Estado*</label>
          <select name='estado' id='estado' value={formValues.estado} onChange={handleChange}>
            <option value=''>Selecciona...</option>
            <option value='Jalisco'>Jalisco</option>
            <option value='CDMX'>CDMX</option>
            <option value='NuevoLeon'>Nuevo Leon</option>
            <option value='Michoacan'>Michoacan</option>
            <option value='NoListado'>No se encuentra en la lista</option>
          </select>
          <p>{formErrors.estado}</p>

          <label htmlFor='pais'>Pais*</label>
          <select name='pais' id='pais' value={formValues.pais} onChange={handleChange}>
            <option value=''>Selecciona...</option>
            <option value='Canada'>Canada</option>
            <option value='US'>Estados Unidos</option>
            <option value='Mexico'>Mexico</option>
          </select>
          <p>{formErrors.pais}</p>

          <button type="submit">Registrarse</button>
          
        </form>
        <div className="form-links">
          <p>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></p>
        </div>
      </div>
    </div>
  )

};

export default RegisterForm;