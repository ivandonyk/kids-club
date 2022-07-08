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
    }, 500);
  });
};

export const fetchGames = async () => {
  const members = await fetchMembers();
  const jsonData = await getJSONFromCSV();

  const games = members.map((member) => {
    const gamesCount = jsonData.filter((data) => data.member === member).length;

    return { member, count: gamesCount };
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(games);
    }, 500);
  });
};

export const fetchMemberGames = async (memberName) => {
  const jsonData = await getJSONFromCSV();

  const gamesCounts = ["Chess", "Tennis", "Soccer"].map((game) => {
    const gameCount = jsonData.filter(
      (data) => data.member === memberName && data.game === game
    ).length;

    return [game, gameCount];
  });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gamesCounts);
    }, 200);
  });
};
