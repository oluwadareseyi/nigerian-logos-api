import { allowCors, baseURL } from "../../../utils";
import request from "request";

async function handler(req, res) {
  return request.get(
    {
      url: `${baseURL}/logos.json`,
    },
    function optionalCallback(err, httpResponse, body) {
      if (httpResponse) {
        res.status(200).json(JSON.parse(httpResponse.body));
      } else {
        res.statusCode = 500;
        res.json({ message: "a network error occured" });
      }
    }
  );
}

export default allowCors(handler);
