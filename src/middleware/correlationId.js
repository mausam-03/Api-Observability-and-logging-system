import { v4 as uuidv4 } from "uuid";

const correlationId = (req, res, next) => {
  const id = uuidv4();

  req.correlationId = id;

  res.setHeader("X-Correlation-ID", id);

  next();
};

export default correlationId;