import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index';
import { Header } from './Components/Common/Index';
import LibraryList from './Components/LibraryList';

const App = () => (
        <Provider store={createStore(reducers)} >
             <View style={{ flex: 1 }}>
              <Header headerText="Tech Stack" />    
              <LibraryList />
           </View>
        </Provider>
    );
export default App;
