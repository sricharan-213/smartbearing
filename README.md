# ⚙️ SmartBearing
> **Zero Unplanned Downtime. Artificial Intelligence at the Edge.**

SmartBearing is an ultra-low-cost, IoT-powered predictive maintenance system designed specifically for textile MSME factories (like power looms and ring frame machines). By utilizing an ESP32-S3 microcontroller coupled with an array of vibration, acoustic, and temperature sensors, SmartBearing listens to the mathematical heartbeat of your machines and predicts bearing failures *weeks* before they happen.

No ₹3,00,000 corporate setups. No IT teams. Just a ₹1,800 magnetic box and a WhatsApp alert.

---

## 🛑 The Problem: The ₹12,000 Breakdown

Inside a textile ring frame machine, metal bearings spin at up to 15,000 RPM. Over time, microscopic cracks form. These cracks create tiny vibrations and high-pitched acoustic anomalies entirely undetectable to human senses. 

When the bearing finally shatters:
1. Production **stops immediately**.
2. Diagnostics and repairs take **4 to 6 hours**.
3. The factory owner loses **₹12,000+** in a single shift.

And this happens repeatedly, unpredictably, across thousands of factories.

## 💡 The Solution: SmartBearing

SmartBearing is a matchbox-sized IoT device that attaches to the machine magnetically (zero drilling required). It runs continuous Machine Learning models directly on the raw sensor data, detecting the exact mathematical frequency spike (BPFO - Ball Pass Frequency Outer race) that indicates a microscopic crack.

### 🧩 The Hardware Stack
- **Vibration (MPU-6050):** Detects microscopic physical shaking.
- **Microphone (INMP441):** Captures high-frequency acoustic friction.
- **Temperature (DS18B20):** Monitors thermal anomalies.
- **Voltage (ZMPT101B):** Automatically compensates for Indian factory voltage fluctuations to prevent false positives! (If the voltage drops, the machine shakes differently—our system mathematically removes this noise).

### 🧠 The ML & Software Architecture
1. **Sense:** ESP32-S3 reads thousands of data points per second.
2. **Clean:** Voltage fluctuations are filtered out of the vibration data.
3. **Analyze:** A Python microservice extracts 37 distinct mathematical features (Time Domain, FFT, PyWavelets).
4. **Predict:** An XGBoost / Isolation Forest model (trained on the CWRU Bearing Dataset) scores the machine's health.
5. **Alert:** If the score drops, a webhook hits the Twilio API, instantly sending a **WhatsApp alert** to the factory owner estimating the Time-to-Failure (e.g., 6–18 hours).

The owner schedules a 15-minute replacement during the lunch break. Zero unplanned downtime.

---

## 🚀 Running the Project Locally

This repository contains the full end-to-end software stack (Frontend Dashboard + Node.js API + Python ML Server).

### Prerequisites
- **Node.js** (v18+) & **pnpm** (v9+)
- **Python** (v3.9+)

### 1. Start the Machine Learning Server
We use a FastAPI Python server to host the trained ML model.
```bash
# Windows
.\start-ml.bat
```
*(This automatically installs dependencies via `requirements.txt` and starts the server on port 8000).*

### 2. Start the Backend API & Simulator
```bash
pnpm install
set SIMULATOR_AUTO_START=true
pnpm --filter @workspace/api-server run dev
```

### 3. Start the Dashboard
```bash
pnpm --filter @workspace/smartbearing run dev
```
Open **http://localhost:5173** in your browser. Enter *any* email and password to log in.

---

## 🎨 Dashboard Features

- **Live Sensor Feed:** Watch real-time vibration, acoustic, and temperature data stream into the dashboard via WebSockets.
- **Machine Learning Integration:** Watch the ML model dynamically predict "Inner Race Fault" or "Ball Fault" based on live synthesized harmonic signals.
- **FFT Visualization:** View the actual frequency spikes (BPFO) that the AI detects.
- **ROI Calculator:** An interactive tool for factory owners to calculate exactly how much money SmartBearing saves them every month.
- **PDF & CSV Export:** One-click fleet reports for management.

---

## 👥 The Team
- **AI / ML Model & CAD:** Prateek
- **Backend API & Alerts:**  Varun Sreeram
- **Frontend Dashboard:** Vaishnav
- **Git & Repo Management:** Charan

---
*Built to bring enterprise-grade AI to the local factory floor.*
