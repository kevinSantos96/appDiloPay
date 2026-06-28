import {useState} from 'react';

//recibe un objeto
export const useForm = (initialState={}) => {
 const [values, setvalues] = useState(initialState);

 const reset =()=>{
    setvalues( initialState );
}

 const handleInputChange = (name,value)=>{ //handleInputChange nos sirve para poderlo leer rapidamente

    setvalues({
        ...values,
           [name]: value
    })
}


return[values, handleInputChange, reset ]
}