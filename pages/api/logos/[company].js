import { allowCors, baseURL } from "../../../utils";
import request from "request";

async function handler(req, res) {
  const { company } = req.query;
  return request.get(
    {
      url: `${baseURL}/logos/${company}/${company}.svg`,
    },
    function optionalCallback(err, httpResponse, body) {
      if (httpResponse) {
        res.statusCode = 200;
        res.json(httpResponse.body);
      } else {
        res.statusCode = 500;
        res.json({ message: "a network error occured" });
      }
    }
  );
}

export default allowCors(handler);
