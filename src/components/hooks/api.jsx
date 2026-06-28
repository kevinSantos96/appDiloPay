import { REACT_APP_API_URL } from '@env';
const response = {
  success: true,
  message: '',
  data: [],
};

export const obtenerTodasOrdenes = async () => {
  try {
    const resp = await fetch(`${REACT_APP_API_URL}ordenes`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const respJSON = await resp.json();
    if (respJSON.statusCode===200){
        response.success=true
        response.message = respJSON.message
        response.data= respJSON.data
    }else{
        response.success=false
        response.message = respJSON.message
    }

  } catch (error) {
    console.log(error);
    response.success = false;
    response.message = 'Ocurrio un error no se pudo obtener las ordenes';
  }
  return response
};

export const obtenerOrden = async (id) => {
  try {
    const resp = await fetch(`${REACT_APP_API_URL}ordenes/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const respJSON = await resp.json();
    if (respJSON.statusCode===200){
        response.success=true
        response.message = respJSON.message
        response.data= respJSON.data
    }else{
        response.success=false
        response.message = respJSON.message
    }

  } catch (error) {
    console.log(error);
    response.success = false;
    response.message = 'Ocurrio un error no se pudo obtener las orden';
  }
  return response
};

export const actualizarOrden = async (id,value) => {
  try {
    const resp = await fetch(`${REACT_APP_API_URL}actualizarOrden/${id}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    });
    const respJSON = await resp.json();
    if (respJSON.statusCode===200){
        response.success=true
        response.message = respJSON.message
        response.data= respJSON.data
    }else{
        response.success=false
        response.message = respJSON.message
    }

  } catch (error) {
    console.log(error);
    response.success = false;
    response.message = 'Ocurrio un error no se pudo obtener las orden';
  }
  return response
};


export const crearNuevaOrden = async (value) => {
  try {
    const resp = await fetch(`${REACT_APP_API_URL}nuevaOrden`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    });
    const respJSON = await resp.json();
    if (respJSON.statusCode===200){
        response.success=true
        response.message = respJSON.message
        response.data= respJSON.data
    }else{
        response.success=false
        response.message = respJSON.message
    }

  } catch (error) {
    console.log(error);
    response.success = false;
    response.message = 'Ocurrio un error no se pudo obtener las orden';
  }
  return response
};

export const validarVersion = async (value) => {
  try {
    const resp = await fetch(`${REACT_APP_API_URL}app_config`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    });
    const respJSON = await resp.json();
    if (respJSON.statusCode===200){
        response.success=true
    }else{
        response.success=false
    }

  } catch (error) {
    console.log(error);
    response.success = false;
    response.message = 'Ocurrio un error no se pudo obtener las orden';
  }
  return response
};

