import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelecionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLabraryId: SelecionReducer
});
