const apiURL = 'http://api.breadtrip.com';

import { wxRequest } from "@/util/util";

// 获取热门旅行日记
const getHotTripList = (params) => {
  return wxRequest(params, `${apiURL}/v2/index/`);
};
const getExplorePlaceList = (params) => {
  return wxRequest(params, `${apiURL}/destination/v3/`);
};
const getPlaceInfoByID = (params) => {
  return wxRequest(params, `${apiURL}/destination/place/${params.query.type}/${params.query.id}/`);
};
const getPlacePOIByID = (params) => {
  return wxRequest(params, `${apiURL}/destination/place/${params.query.type}/${params.query.id}/pois/${params.query.poiType}/`);
};
// 通过ID获取旅行日记信息
const getTripInfoByID = (params) => {
  return wxRequest(params, `${apiURL}/trips/${params.query.tripId}/waypoints/`);
};
const getPlaceTripByID = (params) => {
  return wxRequest(params, `${apiURL}/destination/place/${params.query.type}/${params.query.id}/trips/`);
};
// 通过ID获取所有旅行地点
const getPlacesByID = (params) => {
  return wxRequest(params, `${apiURL}/trips/${params.query.tripId}/schedule/`);
};
const getUserInfoByID = (params) => {
  return wxRequest(params, `${apiURL}/users/${params.query.userId}/v2`);
};
const getWaypointInfoByID = (params) => {
  return wxRequest(params, `${apiURL}/trips/${params.query.tripId}/waypoints/${params.query.waypointId}/`);
};
const getWaypointReplyByID = (params) => {
  return wxRequest(params, `${apiURL}/trips/${params.query.tripId}/waypoints/${params.query.waypointId}/replies/`);
};

module.exports = {
  getHotTripList,
  getExplorePlaceList,
  getPlaceInfoByID,
  getPlacePOIByID,
  getTripInfoByID,
  getPlaceTripByID,
  getUserInfoByID,
  getWaypointInfoByID,
  getWaypointReplyByID,
  getPlacesByID
};
