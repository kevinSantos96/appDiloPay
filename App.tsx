import { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator  } from '@react-navigation/native-stack';
import HomeScreen from './src/views/Home.jsx';
import FormularioIngreso from './src/views/FormularioIngreso.jsx';
import DetailsScreen from './src/views/Details.jsx';
import ActualizarOrden from './src/views/ActualizarOrden.jsx';
import DeviceInfo from 'react-native-device-info';
import { validarVersion } from './src/components/hooks/api.jsx';
import { Alert,BackHandler, View,StyleSheet,Text,ActivityIndicator } from 'react-native';

const appVersion = DeviceInfo.getVersion()
const Stack = createNativeStackNavigator();
function App() {
const [isValidating,setIsValidating] = useState(true)
const [isVersionValid, setIsVersionValid] = useState(false);


const compararVersion = async()=>{
  try {
    const parametro = {
      version:appVersion
    }
    const resp = await validarVersion(parametro)
    if (resp.success){
      setIsVersionValid(true)
    }else{
      setIsVersionValid(false)
      alertaActualizacion()
    }
  } catch (error) {
    setIsVersionValid(false)
    console.error(error)
  }finally{
    setIsValidating(false)
  }
}

const alertaActualizacion = () => {
    Alert.alert(
      "Actualización Obligatoria",
      "Tu versión actual de la aplicación ya no es compatible. Por favor, actualiza a la última versión disponible.",
      [
        { 
          text: "Salir", 
          onPress: () => BackHandler.exitApp(),
          style: "destructive" 
        }
      ],
      { cancelable: false }
    );
  };

useEffect(() => {
  compararVersion();
}, [])
if(isValidating){
  return(
    <View style={styles.containerCenter}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

if(!isVersionValid){//si nos retorna falso muestra este mensaje
  return(
    <View style={styles.containerCenter}>
        <Text style={styles.labelText}>Actualizaci&oacute;n requerida para continuar</Text>
    </View>
  )
}

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
         <Stack.Screen name="NuevaOrden" component={FormularioIngreso} options={{ headerShown: false }} />
         <Stack.Screen name="DetalleOrden" component={DetailsScreen} options={{ headerShown: false }} />
         <Stack.Screen name="ActualizarOrden" component={ActualizarOrden} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    padding: 20,
  }
});

export default App;
