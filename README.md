# 📊 API Observability & Logging System

## 🚀 Overview

A production-ready backend system designed to **monitor, log, and analyze API behavior** in real time.
This project focuses on improving **debugging, performance tracking, and system reliability** using structured logging and observability practices.


## 🎯 Problem Statement

In real-world applications, lack of proper logging leads to:

* Difficult debugging
* Poor visibility into API performance
* Inability to detect slow or failing endpoints

This system provides **centralized logging, request tracing, and performance monitoring** to solve these issues.


## 🧱 Tech Stack

**Backend:** Node.js, Express.js
**Logging:** Winston, winston-daily-rotate-file
**Monitoring (Planned):** Prometheus, Grafana
**Unique Request Tracking:** UUID / Correlation IDs



## ⚙️ Features

* 📜 Structured logging using Winston
* 🗂️ Daily log rotation with file management
* 🔍 Request logging middleware (method, URL, IP, user-agent)
* ⏱️ API response time tracking
* 🚨 Slow API detection (threshold-based)
* 🧠 Correlation ID for tracing requests across logs
* ❌ Centralized error logging with stack traces



## 🏗️ Architecture

```bash id="gqvszs"
Incoming Request
      ↓
Request Logger Middleware (adds correlationId, startTime)
      ↓
Route Handler / Controller
      ↓
Response Sent
      ↓
Response Logger (statusCode, duration)
      ↓
Winston Logger → File Storage (rotated logs)
```



## 📜 Logging Strategy

### Log Types:

* ✅ **Info Logs** → Normal API activity
* ⚠️ **Warn Logs** → Slow APIs or unusual behavior
* ❌ **Error Logs** → Exceptions with stack traces

### Log Format:

* Timestamp
* Correlation ID
* HTTP Method & URL
* Status Code
* Response Time
* IP Address & User-Agent



## ⏱️ Slow API Detection

* Configurable threshold (e.g., 1000 ms)
* Logs warning if API exceeds threshold
* Helps identify performance bottlenecks



## 📦 Installation & Setup

```bash id="2m7d0t"
# Clone the repository
git clone <your-repo-url>

# Navigate into project
cd api-observability-system

# Install dependencies
npm install

# Start the server
npm run dev
```



## 📂 Log Storage

Logs are stored in:

bash id="p6kp5p"
logs/application-YYYY-MM-DD.log


### Features:

* 📅 Daily rotation
* 📦 Max file size limit (e.g., 20MB)
* 🗑️ Auto-deletion after retention period (e.g., 14 days)



## 📡 Example Log Entry

json id="4wzq3v"
{
  "timestamp": "2026-05-10T10:00:00Z",
  "level": "info",
  "correlationId": "abc123",
  "method": "GET",
  "url": "/api/users",
  "statusCode": 200,
  "duration": "45ms",
  "ip": "127.0.0.1"
}


## 📊 Production Considerations

* 🔄 Log rotation to prevent disk overflow
* 🧠 Structured logs for easier parsing & analysis
* 🆔 Correlation IDs for tracing distributed requests
* 🚨 Slow API alerts for performance tuning
* 🧾 Centralized error handling



## 🔮 Future Improvements

* 📈 Integrate Prometheus for metrics collection
* 📊 Visualize logs & metrics using Grafana
* 🔔 Alerting system for failures & anomalies
* 🌐 Distributed tracing (OpenTelemetry)
* ☁️ Log aggregation using ELK Stack (Elasticsearch, Logstash, Kibana)


## 🧠 Key Learnings

* Designing observability for backend systems
* Implementing structured logging in Node.js
* Handling performance monitoring & bottlenecks
* Managing logs efficiently in production environments



## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
