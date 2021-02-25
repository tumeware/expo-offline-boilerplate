import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Reducers
import HomeScreenReducer from '../screens/homeScreen/homeScreen.reducer'
import ColorsReducer from '../theme/colors.reducer'

// Persist configs
const reduxTestPersistConfig = {
  key: 'reduxTest',
  storage: AsyncStorage
}

const darkModePersistConfig = {
  key: 'darkMode',
  storage: AsyncStorage
}

const reducers = combineReducers({
    //reduxTest: HomeScreenReducer, // Regular,  don't save to storage
    reduxTest: persistReducer(reduxTestPersistConfig, HomeScreenReducer),
    darkMode: persistReducer(darkModePersistConfig, ColorsReducer),
});

export default reducers
