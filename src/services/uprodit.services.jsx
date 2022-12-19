import axios from "axios";


const URL1 = "https://api.uprodit.com/v1/search/all?usecase=perso&startIndex=1&maxResults=4";
const URL2 = "https://api.uprodit.com/v2/profile/picture/f/"


export const AuthURL = async (url) => {
  const result = await axios.post(`https://api.uprodit.com/v1/authheader`, {
    "appid":"challenge_uprodit",
    "env":"production",
    "uri": url
  });
  return result.data;
};

export const SearchPictureProfil= async (id, auth) => {
  const result = await axios.get(`${URL2}${id}`, {
    headers: {
      Authorization : auth.authorization}
  }
  )
  return result.data;
};
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
 export const fetchSearch = async (searchValue , auth) => {
  // await delay(2000)
  const result = await axios.get(`${URL1}`, {
    headers: {
      Authorization : auth.authorization}
  })
  return result.data.filter((search) => 
  search.denomination.toLowerCase().includes(searchValue.toLowerCase()));

};



