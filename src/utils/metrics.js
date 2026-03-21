const metrics = {
  totalRequests: 0,
  errorRequests: 0,
  slowRequests: 0,
  totalResponseTime: 0
};

export const incrementTotalRequests = () => {
  metrics.totalRequests++;
};

export const incrementErrorRequests = () => {
  metrics.errorRequests++;
};

export const incrementSlowRequests = () => {
  metrics.slowRequests++;
};

export const addResponseTime = (duration) => {
  metrics.totalResponseTime += duration;
};

export const getMetrics = () => {
  return {
    totalRequests: metrics.totalRequests,
    errorRequests: metrics.errorRequests,
    slowRequests: metrics.slowRequests,
    avgResponseTime:
      metrics.totalRequests === 0
        ? 0
        : (metrics.totalResponseTime / metrics.totalRequests).toFixed(2)
  };
};