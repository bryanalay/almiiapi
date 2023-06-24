import { query } from "../config/db.js";

const sensorQuery = {
    getDataSensor: async () =>{
        const qre = `select * from datasensor;`
        const result = await query(qre)
        return result[1].rows
    },
    postDataSensor: async (data) =>{
        const qre = `insert into datasensor(data) values('${data}');`
        const result = await query(qre)
        return result[1]
    }
}

export default sensorQuery;