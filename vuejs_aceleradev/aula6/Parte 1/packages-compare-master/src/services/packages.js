import axios from "axios";

export const searchPackages = filter => {
  const url = `https://api.npms.io/v2/search/suggestions?q=${filter}`;

  return axios.get(url);
};

export const getPackagesInfo = (name, version) => {
  const url = `https://bundlephobia.com/api/size?package=${name}@${version}`;

  return axios.get(url);
};
