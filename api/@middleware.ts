import { mockMiddleware } from "aspida-mock"

export default mockMiddleware([
  (req, _res, next) => {
    next({ ...req })
  },
  // (req, res) => {
  //   res({ status: 200, resBody: { } })
  //
])
