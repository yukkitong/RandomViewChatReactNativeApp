import Couchbase from 'react-native-couchbase-lite';

const db = 'db';

export default () => {
  Couchbase.initRESTClient(manager => {
    manager.database.get_db({ db })
      .catch(() => {
        return manager.database.put_db({ db });
      })
  });
};
