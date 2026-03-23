import { v4 as uuidv4 } from "uuid";
import asyncLocalStorage from "../utils/asyncContext.js";

const correlationId = (req, res, next) => {
  const id = uuidv4();

    asyncLocalStorage.run({ correlationId: id }, () => {
    res.setHeader("X-Correlation-ID", id);
    next();
  });
};

export default correlationId;