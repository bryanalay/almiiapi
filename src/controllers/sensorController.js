import sensorQuery from "../db/sensorQuery.js";

const sensorController = {
  getData: async (req, res) => {
    try {
      const result = await sensorQuery.getDataSensor();
      res.status(200).json(result)
    } catch (error) {
        res.status(404).json({
            Message: error.message
        })
    }
  },

  insertData: async (req,res) => {
    const { data } = req.body
    try {
        const result = await sensorQuery.postDataSensor(data)
        res.status(201).json({
            Status: 'succesfully!!',
            Message: 'Data guardada!!'
        })
    } catch (error) {
        res.status(404).json({
            Message: error.message
        })
    }
  }
};

export default sensorController;
