import React,{useState,useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,StyleSheet,Text,TouchableOpacity,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {obtenerTodasOrdenes} from "../components/hooks/api.jsx"
import Icon from 'react-native-vector-icons/FontAwesome';
import ListadoOrdenes from '../components/ListadoOrdenes.jsx';
import GlobalStyles from '../styles/index.js';


const HomeScreen = () => {
  const navigation = useNavigation();
  //datos
  const [ordenes, setOrdenes] = useState([]);

  const obtenerOrdenes  = async ()=>{
    try {
      const resp = await obtenerTodasOrdenes()
      if (resp.success){
        setOrdenes(resp.data)
      }
    } catch (error) {
      console.info(error)
    }
  }

  useEffect(() => {
    obtenerOrdenes();
  }, [])
  


  function hadleNuevoPresupuesto (){
    navigation.navigate('NuevaOrden');
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.contenido}>
        <View style={GlobalStyles.contenedorTitulo}>
          <Text style={GlobalStyles.texto}>Mis Ordenes</Text>
        </View>
        <ListadoOrdenes ordenes={ordenes} />
      </View>

      {/* Boton para agregar una nueva orden */}
      <TouchableOpacity style={styles.btnAdd} onPress={hadleNuevoPresupuesto}>
        <View
          style={styles.conntenedorIconBtn}>
            <Icon name="plus" size={30} color="#FFF" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({

  contenido: {marginHorizontal: 4, marginVertical: 5},
  btnAdd: {
    backgroundColor: '#336EFF',
    borderRadius: 50,
    bottom: 10,
    width: 30,
    height: 30,
    padding: 30,
    right: 15,
    position: 'absolute',
    textAlign: 'center',
  },
  conntenedorIconBtn: {
    position: 'absolute',
    marginHorizontal: 18,
    marginVertical: 15,
  },
});



export default HomeScreen;
