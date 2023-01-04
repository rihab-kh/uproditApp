import axios from "axios";
import generateSignature from '../utils/signature'

const UPRODIT_APPID = "challenge_uprodit";
const UPRODIT_ENV = "production";
const UPRODIT_BASE_URL = "https://api.uprodit.com"
const URL_PROFILE = UPRODIT_BASE_URL + "/v1/search/all?usecase=perso&startIndex=1&maxResults=4";
const URL_IMAGE = UPRODIT_BASE_URL + "/v2/profile/picture/f/";

export const SearchPictureProfil = async (id) => {
  var endpoint = `${URL_IMAGE}${id}`
  const result = await axios.get(endpoint, {
    headers: {
      Authorization : generateSignature(UPRODIT_APPID, UPRODIT_ENV, endpoint)}
    }
  )
  return result.data;
};

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const fetchSearch = async (searchValue) => {
  var endpoint = `${URL_PROFILE}`;
  const result = await axios.get(endpoint, {
    headers: {
      Authorization : generateSignature(UPRODIT_APPID, UPRODIT_ENV, endpoint)
    }
  })
  return result.data.filter((search) => 
  search.denomination.toLowerCase().includes(searchValue.toLowerCase()));
};
