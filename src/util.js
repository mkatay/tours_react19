
import axios from "axios";

//const url='https://course-api.com/react-tours-project'
//const url = "/api/react-tours-project";
//const url="https://viragbolt-backend.onrender.com/api/categories"
const url="https://raw.githubusercontent.com/mkatay/json-tours/refs/heads/main/tours.json"

// Promise cache-elés Suspense-hez
let dataPromise;

export const getData = () => {
    if (!dataPromise) {
        dataPromise = axios.get(url).then(response => response.data);
    }
    return dataPromise;
};

//A getData() most már mindig ugyanazt a Promise-t adja vissza (ha már elindult egy kérés, nem indít újabbat).
//Ez lehetővé teszi a Suspense számára, hogy blokkolja a renderelést, amíg az adat megérkezik.
/*
export const getData = async () => {
  if (!dataPromise) {
      dataPromise = (async () => {
          const response = await axios.get(url);
          return response.data;
      })();
  }
  return dataPromise;
};*/