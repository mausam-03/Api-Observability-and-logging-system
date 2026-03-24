const metrics = {
  totalRequests: 0,
  errorRequests: 0,
  slowRequests: 0,
  totalResponseTime: 0,

  //per route metrics
   routes: {}
};

const initRoute = (route) => {
  if (!metrics.routes[route]) {
    metrics.routes[route] = {
      requests: 0,
      errors: 0,
      slow: 0,
      totalResponseTime: 0
    };
  }
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

export const incrementRouteRequests = (route) => {
  initRoute(route);
  metrics.routes[route].requests++;
};

export const incrementRouteErrors = (route) => {
  initRoute(route);
  metrics.routes[route].errors++;
};

export const incrementRouteSlow = (route) => {
  initRoute(route);
  metrics.routes[route].slow++;
};

export const addRouteResponseTime = (route, duration) => {
  initRoute(route);
  metrics.routes[route].totalResponseTime += duration;
};

export const getMetrics = () => {
   const routeMetrics = {};

  for (const route in metrics.routes) {
    const data = metrics.routes[route];

    routeMetrics[route] = {
      requests: data.requests,
      errors: data.errors,
      slow: data.slow,
      avgResponseTime:
        data.requests === 0
          ? 0
          : (data.totalResponseTime / data.requests).toFixed(2)
    };
  }
  
  return {
    totalRequests: metrics.totalRequests,
    errorRequests: metrics.errorRequests,
    slowRequests: metrics.slowRequests,
    avgResponseTime:
      metrics.totalRequests === 0
        ? 0
        : (metrics.totalResponseTime / metrics.totalRequests).toFixed(2),
        routes: routeMetrics
  };
};