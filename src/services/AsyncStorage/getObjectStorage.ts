import AsyncStorage from "@react-native-async-storage/async-storage";

const getObjectStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.log("error getObjectStorage: ", err);
  }
};

export default getObjectStorage;
