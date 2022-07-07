import Papa from "papaparse";
import csv from "../data/data.csv";

export const getJSONFromCSV = async () => {
  let json;

  const csvBlob = await fetch(csv);
  const csvString = await csvBlob.text();

  Papa.parse(csvString, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      json = results.data;
    },
  });

  return json;
};

export const fetchMembers = async () => {
  const jsonData = await getJSONFromCSV();

  const membersArray = jsonData.map(({ member }) => member);
  const members = [...new Set(membersArray)];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(members);
    }, 1500);
  });
};
