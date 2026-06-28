## Control de versiones de app móvil (escenario DILO)
Manejaria un numero de version minima desde el backend, que cada vez que el usuario ingrese a la valide en que version esta, si el usuario 
ya no cumple con la version minima se le pediria una actualizacion obligatoria.
Manejaria mas lo que son Soft Update ya que son menos frustrantes y menos invasibas para los usuarios.

## Estado y consumo de datos en React Native
Cuando la app no es muy grande o no maneja gran trazabilidad de datos es mejor usar el hook nativo de react que es el useContext, en caso contrario me declinaria
por la utilizacion de Redux.
el manejo de cache lo manejaria con React Query que nos brinda funciones para controlar mejor el cache de la aplicacion

## Gobierno del estado de la orden y UX de resiliencia

Manejaria un general response para peticion, no solo se haria validacion en el front, tambien en el backend valide que cumple con la logica de negocio, asi tendria dos 
capas de validacion por si falla a nivel frontend.
El general response nos serviria para tener una respuesta para cada escenario y mandar un response al front y este pueda manejarlo de una mejor manera.

## Idempotencia de extremo a extremo
En cada peticion se debe manejar el una clave de idempotencia unica, ya que si llega otra peticion con la misma clave, trabajar sobre la misma consulta y no crear una nueva.
y desde el front se podria deshabilitar el boton una vez el cliente haya dado clic.

## Calidad y seguridad
Una vez detectado el componente afectado, revisar el codigo del mismo para validar en que parte puede estar fallando o estar la vulnerabilidad, para poder resolverlo a tiempo.
manejar secretos o llaves inscrustados o quemados en el codigo no es buena practica ya que si esta llega a cambiar no se requeria una actualizacion forzada, y tambien se minimiza el
riesgo de que una persona externa pueda obtenerlo.

## Situación de riesgo
En primer lugar me acercaria al lider tecnico del equipo y explicarle la situacion que se presenta, para analizar la situacion del caso y tomar acciones prontas respecto al requerimiento.
