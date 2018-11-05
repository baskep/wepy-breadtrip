const apiURL = 'http://api.breadtrip.com';

import { wxRequest } from "@/util/util";

// 获取热门旅行日记
const getHotTripList = (params) => {
  return wxRequest(params, `${apiURL}/v2/index/`);
};
// 通过ID获取地点相关信息
const getPlaceInfoByID = (params) => {
  return wxRequest(params, `${apiURL}/destination/place/5/${params.query.id}/`);
};
// 通过ID获取地点相关tips信息
const getPlaceTipsByID = (params) => {
  return wxRequest(params, `${apiURL}/place/pois/${params.query.id}/impressions/`);
};
// 通过ID获取地点照片信息，只有前20张
const getPlacePhotosByID = (params) => {
  return wxRequest(params, `${apiURL}/destination/place/5/${params.query.id}/photos/`);
};
// 通过ID获取旅行日记信息
const getTripInfoByID = (params) => {
  return wxRequest(params, `${apiURL}/trips/${params.query.tripId}/waypoints/`);
};
// 通过ID获取所有旅行地点
const getPlacesByID = (params) => {
  return wxRequest(params, `${apiURL}/trips/${params.query.tripId}/schedule/`);
};
// 通过用户ID获取用户信息
const getUserInfoByID = (params) => {
  return wxRequest(params, `${apiURL}/users/${params.query.userId}/v2`);
};

module.exports = {
  getHotTripList,
  getPlaceInfoByID,
  getTripInfoByID,
  getUserInfoByID,
  getPlacesByID,
  getPlaceTipsByID,
  getPlacePhotosByID
};
