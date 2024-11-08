import AsyncStorage from "@react-native-async-storage/async-storage";

const setObjectStorage = async (key: string, value: Array<object>) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    console.log("error setObjectStorage: ", err);
  }
};

export default setObjectStorage;
