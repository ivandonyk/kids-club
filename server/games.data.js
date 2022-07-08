import csv from "csvtojson";

let jsonData = [];

export const loadDataFromCSV = async () => {
  try {
    const json = await csv().fromFile("./data/data.csv");

    jsonData = json;
  } catch (error) {
    throw error;
  }
};

export { jsonData };
