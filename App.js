import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppContainer from './src/navigation';
import { persistor, store } from './src/store/index';
const App = () => {
  return (
    <Provider store={store}>
       <PersistGate loading={<View style={{flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#ffff"}} >
        <ActivityIndicator color={"red"} />
       </View>} persistor={persistor}>
        <AppContainer />
      </PersistGate>
   </Provider>
  );
};



export default App;
