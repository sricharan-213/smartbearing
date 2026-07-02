import { useState, useEffect } from 'react';
import { sensorNodes } from '@/data/mockData';

export type LiveSensor = {
  id: string;
  machineId: string;
  location: string;
  healthScore: number;
  vibrationRMS: number;
  temperature: number;
  anomalyScore: number;
  acousticLevel: number;
  status: string;
  vibDelta: number;
  tempDelta: number;
};

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

const INITIAL: LiveSensor[] = sensorNodes.map(s => ({
  ...s,
  vibDelta: 0,
  tempDelta: 0,
}));

export function useLiveSensors(intervalMs = 3500) {
  const [sensors, setSensors] = useState<LiveSensor[]>(INITIAL);

  useEffect(() => {
    const id = setInterval(() => {
      setSensors(prev =>
        prev.map(s => {
          const vibDrift = (Math.random() - 0.48) * 0.12;
          const tempDrift = (Math.random() - 0.48) * 1.2;
          const newVib = clamp(+(s.vibrationRMS + vibDrift).toFixed(2), 0.05, 6.0);
          const newTemp = clamp(Math.round(s.temperature + tempDrift), 20, 100);
          const anomalyDrift = (Math.random() - 0.5) * 0.03;
          const newAnomaly = clamp(+(s.anomalyScore + anomalyDrift).toFixed(3), 0, 1);

          const status =
            newVib > 3.0 || newAnomaly > 0.6
              ? 'critical'
              : newVib > 1.5 || newAnomaly > 0.3
              ? 'warning'
              : 'healthy';

          const healthScore = clamp(
            Math.round(100 - newAnomaly * 100 - (newVib > 1.5 ? (newVib - 1.5) * 10 : 0)),
            5, 100
          );

          return {
            ...s,
            vibrationRMS: newVib,
            temperature: newTemp,
            anomalyScore: newAnomaly,
            healthScore,
            status,
            vibDelta: vibDrift,
            tempDelta: tempDrift,
          };
        })
      );
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return sensors;
}
