import storage from 'redux-persist/lib/storage'; // ou tout autre moyen de stockage

const persistConfig = {
  key: 'root',
  storage,
};

export default persistConfig;
