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

export const fetchSearch = async (searchValue) => {
  var endpoint = `${URL_PROFILE}`;

  if (searchValue) {
    endpoint = `${URL_PROFILE}&terms=${searchValue}`
  }

  const result = await axios.get(endpoint, {
    headers: {
      Authorization : generateSignature(UPRODIT_APPID, UPRODIT_ENV, endpoint)
    }
  })

  return result.data;
};
