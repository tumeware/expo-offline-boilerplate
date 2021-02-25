import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Reducers
import HomeScreenReducer from '../screens/homeScreen/homeScreen.reducer';

// Persist configs
const reduxTestPersistConfig = {
  key: 'reduxTest',
  storage: AsyncStorage
}

const reducers = combineReducers({
    //reduxTest: HomeScreenReducer,
    reduxTest: persistReducer(reduxTestPersistConfig, HomeScreenReducer),
});

export default reducers
