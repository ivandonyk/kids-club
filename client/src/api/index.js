import axios from "axios";

export const fetchMembers = () =>
  axios.get("/members").then(({ data }) => {
    return data;
  });

export const fetchGames = () =>
  axios.get("/games").then(({ data }) => {
    return data;
  });

export const fetchMemberGames = (memberName) =>
  axios.get(`/member_games/${memberName}`).then(({ data }) => {
    return data;
  });
