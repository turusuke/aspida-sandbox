import aspidaClient from "@aspida/axios"
// import api from './api/$api';
import mock from "./api/$mock";

const client = mock(aspidaClient())

;(async () => {
  const res = await client.pet._petId(1).get()
  console.log(res)
})()
