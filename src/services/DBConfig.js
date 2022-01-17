
export const DBConfig = {
    name: 'habiliti-db',
    version: 1,
    objectStoresMeta: [
      {
        store: 'habits',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'title', keypath: 'title', options: { unique: false } },
          { name: 'description', keypath: 'description', options: { unique: false } }
        ]
      },
      {
        store: "calendar",
        storeConfig: { keyPath: "id", autoIncrement: true },
        storeSchema: [
          { name: "date", keypath: "date", options: { unique: false } },
          { name: "value", keypath: "value", options: { unique: false } }
        ]
      }
    ]
  };
