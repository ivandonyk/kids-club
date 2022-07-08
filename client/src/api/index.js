import axios from "axios";

export const fetchMembers = async () =>
  axios.get("/members").then(({ data }) => {
    return data;
  });

export const fetchGames = async () =>
  axios.get("/games").then(({ data }) => {
    return data;
  });

export const fetchMemberGames = async (memberName) =>
  axios.get(`/member_games/${memberName}`).then(({ data }) => {
    return data;
  });
