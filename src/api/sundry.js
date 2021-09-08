import request from "../utils/request";

export function getBingDailyImage(data) {
  return request({
    url: "/sundry/getBingDailyImage",
    method: "get",
  });
}
