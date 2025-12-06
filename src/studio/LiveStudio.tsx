import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  Upload,
  Play,
  Pause,
  Settings as SettingsIcon,
  Cpu,
  Database,
  FileDown,
  Gauge,
  BarChart2,
  LineChart as LIcon,
  Table as TableIcon,
  Save,
  Filter,
  Wrench,
  Rocket,
  LoaderCircle,
  Download,
  Trash2,
  CloudDownload,
  Plus,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import {
  LineChart as RLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RTooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  BarChart as RBarChart,
  Bar,
} from "recharts";

/* ----------------------------- Types ----------------------------- */

interface DeviceManifest {
  deviceId: string;
  name?: string;
  location?: string;
  tags?: string[];
  firmware?: string;
  connection: string;
  thresholds: {
    vocIndexWarn: number;
    vocIndexCritical: number;
  };
  notes?: string;
  createdAt: string;
  updatedAt: string;
  schemaVersion: string;
}

interface HeaterStep {
  dwell_ms: number;
  target_c: number;
}

interface ApiConfig {
  baseUrl: string;
  s3Prefix: string;
  deviceId: string;
  pollMs: number;
}

interface Dataset {
  columns: string[];
  rows: Record<string, string | number>[];
}

interface TrainedModel {
  id: string;
  type: string;
  algo: string;
  features: string[];
  label: string;
  metrics: {
    accuracy?: number;
    f1?: number;
    auc?: number;
    rmse?: number;
    r2?: number;
  };
}

interface Profile {
  name: string;
  email: string;
  role: string;
}

interface PresignResponse {
  method: string;
  url: string;
  fields?: Record<string, string>;
}

interface Project {
  id: string;
  name: string;
  desc: string;
}

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
}

interface SectionDataProps {
  onUploadFile: (file: File) => void;
  dataset: Dataset;
  labelColumn: string;
  setLabelColumn: (column: string) => void;
  featureCols: string[];
  setFeatureCols: (cols: string[]) => void;
  featureOptions: string[];
  labelOptions: string[];
  loadAllFromS3: () => void;
}

interface SectionProfilesProps {
  heaterSteps: HeaterStep[];
  addStep: () => void;
  updateStep: (index: number, key: keyof HeaterStep, value: number) => void;
  removeStep: (index: number) => void;
}

interface SectionTrainingProps {
  modelType: string;
  setModelType: (type: string) => void;
  algorithm: string;
  setAlgorithm: (algo: string) => void;
  startTraining: () => void;
  training: boolean;
  trainProgress: number;
  trainedModel: TrainedModel | null;
  disabled: boolean;
}

interface SectionEvaluationProps {
  trainedModel: TrainedModel | null;
  labels: string[];
  confusion: ConfusionMatrix[];
  rocData: ROCData[];
  featImportance: FeatureImportance[];
}

interface SectionLiveProps {
  live: boolean;
  setLive: (live: boolean) => void;
  liveData: LiveDataPoint[];
}

interface SectionExportProps {
  trainedModel: TrainedModel | null;
  onExport: (format: string) => void;
  heaterSteps: HeaterStep[];
  disabled: boolean;
}

interface SectionSettingsProps {
  api: ApiConfig;
  setApi: (api: ApiConfig) => void;
  splashEnabled: boolean;
  setSplashEnabled: (enabled: boolean) => void;
}

interface LiveDataPoint {
  t: number;
  IAQ: number;
  CO2eq: number;
  VOC: number;
  temperature: number;
  humidity: number;
  score: number;
}

interface ConfusionMatrix {
  row: string;
  cells: {
    col: string;
    v: number;
  }[];
}

interface ROCData {
  fpr: number;
  tpr: number;
}

interface FeatureImportance {
  name: string;
  score: number;
}

interface SensorData {
  sensorId?: string;
  environmental?: {
    temperature?: number;
    pressure?: number;
    humidity?: number;
    cTemperature?: number;
    cHumidity?: number;
  };
  airQuality?: {
    iaq?: number;
    staticIAQ?: number;
    IAQaccuracy?: number;
    co2Equvalent?: number;
    bVOCequvalent?: number;
  };
  gasResistance?: {
    resistance?: number;
    compensatedGas?: number;
    gasPercentage?: number;
  };
  systemStatus?: {
    stabilization?: number;
    runinstatus?: number;
  };
}

interface DeviceRecord {
  timestamp: string;
  deviceId: string;
  boardMode: string;
  sensors: SensorData[];
}

interface FlattenedDeviceRecord {
  timestamp: string;
  deviceId: string;
  boardMode: string;
  sensorId?: string;
  temperature?: number;
  pressure?: number;
  humidity?: number;
  cTemperature?: number;
  cHumidity?: number;
  iaq?: number;
  staticIAQ?: number;
  IAQaccuracy?: number;
  co2Equvalent?: number;
  bVOCequvalent?: number;
  gas_resistance?: number;
  compensatedGas?: number;
  gasPercentage?: number;
  stabilization?: number;
  runinstatus?: number;
  [key: string]: string | number | undefined;
}

interface S3ListResponse {
  keys: string[];
  nextContinuationToken?: string;
}

/* ----------------------------- Add Device Dialog ----------------------------- */

const PRESIGN_ENDPOINT = "/api/s3/presign";

function AddDeviceDialog({ onCreated }: { onCreated?: (device: DeviceManifest) => void }) {
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  const [deviceId, setDeviceId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [firmware, setFirmware] = useState("");
  const [connection, setConnection] = useState("wifi");
  const [vocWarn, setVocWarn] = useState(0.6);
  const [vocCrit, setVocCrit] = useState(0.8);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [notes, setNotes] = useState("");

  const manifest = useMemo((): DeviceManifest => {
    const now = new Date().toISOString();
    return {
      deviceId: deviceId.trim(),
      name: name.trim() || undefined,
      location: location.trim() || undefined,
      tags: tags.length ? tags : undefined,
      firmware: firmware.trim() || undefined,
      connection,
      thresholds: {
        vocIndexWarn: Number(vocWarn),
        vocIndexCritical: Number(vocCrit),
      },
      notes: notes.trim() || undefined,
      createdAt: now,
      updatedAt: now,
      schemaVersion: "2025-10-31.v1",
    };
  }, [deviceId, name, location, tags, firmware, connection, vocWarn, vocCrit, notes]);

  async function presign(key: string, contentType: string): Promise<PresignResponse> {
    const res = await fetch(PRESIGN_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, contentType }),
    });
    if (!res.ok) throw new Error(`Presign failed: ${res.status}`);
    return res.json();
  }

  async function uploadJsonToS3(key: string, data: DeviceManifest) {
    const body = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const ps = await presign(key, "application/json");

    if (ps.method === "POST" && ps.fields) {
      const form = new FormData();
      Object.entries(ps.fields).forEach(([k, v]) => form.append(k, v));
      form.append("file", body);
      const r = await fetch(ps.url, { method: "POST", body: form });
      if (!r.ok) throw new Error(`S3 POST failed: ${r.status}`);
    } else {
      const r = await fetch(ps.url, {
        method: "PUT",
        body,
        headers: { "Content-Type": "application/json" },
      });
      if (!r.ok) throw new Error(`S3 PUT failed: ${r.status}`);
    }
  }

  function resetForm() {
    setDeviceId("");
    setName("");
    setLocation("");
    setFirmware("");
    setConnection("wifi");
    setVocWarn(0.6);
    setVocCrit(0.8);
    setTags([]);
    setTagInput("");
    setNotes("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!manifest.deviceId) {
      alert("Device ID is required (e.g., EN-2319)");
      return;
    }
    try {
      setSaving(true);
      const key = `devices/${manifest.deviceId}/manifest.json`;
      await uploadJsonToS3(key, manifest);
      alert("Device saved to S3");
      onCreated?.(manifest);
      setOpen(false);
      resetForm();
    } catch (err) {
      console.error(err);
      alert((err as Error).message || "Upload failed");
    } finally {
      setSaving(false);
    }
  }

  function addTag() {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  }

  function removeTag(tagToRemove: string) {
    setTags(tags.filter(tag => tag !== tagToRemove));
  }

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => setOpen(true)}
        className="text-xs gap-1 inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium shadow-sm transition active:scale-[.99] !bg-indigo-600 !text-white hover:!bg-indigo-700"
      >
        <Plus className="w-3 h-3" />
        ADD Device
      </Button>

      {open && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 rounded-t-2xl p-6 z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Add a new device</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="deviceId" className="text-sm font-medium text-gray-700">
                    Device ID *
                  </Label>
                  <Input
                    id="deviceId"
                    value={deviceId}
                    onChange={(e) => setDeviceId(e.target.value)}
                    placeholder="EN-2319"
                    required
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Fridge A sensor"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                  Location
                </Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Fridge A — Plant 1"
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="connection" className="text-sm font-medium text-gray-700">
                    Connection
                  </Label>
                  <select
                    id="connection"
                    value={connection}
                    onChange={(e) => setConnection(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="wifi">Wi-Fi</option>
                    <option value="bluetooth">Bluetooth</option>
                    <option value="usb">USB</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="firmware" className="text-sm font-medium text-gray-700">
                    Firmware
                  </Label>
                  <Input
                    id="firmware"
                    value={firmware}
                    onChange={(e) => setFirmware(e.target.value)}
                    placeholder="v1.2.3"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="vocWarn" className="text-sm font-medium text-gray-700">
                    VOC Warn Threshold
                  </Label>
                  <Input
                    id="vocWarn"
                    type="number"
                    min="0"
                    max="1"
                    step="0.01"
                    value={vocWarn}
                    onChange={(e) => setVocWarn(parseFloat(e.target.value) || 0)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vocCrit" className="text-sm font-medium text-gray-700">
                    VOC Critical Threshold
                  </Label>
                  <Input
                    id="vocCrit"
                    type="number"
                    min="0"
                    max="1"
                    step="0.01"
                    value={vocCrit}
                    onChange={(e) => setVocCrit(parseFloat(e.target.value) || 0)}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags" className="text-sm font-medium text-gray-700">
                  Tags
                </Label>
                <div className="flex gap-2">
                  <Input
                    id="tags"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="fridge, plant-1"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addTag();
                      }
                    }}
                    className="flex-1"
                  />
                  <Button 
                    type="button" 
                    onClick={addTag} 
                    variant="outline" 
                    size="sm"
                    className="whitespace-nowrap"
                  >
                    <Plus className="w-4 h-4" />
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:text-red-500 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-sm font-medium text-gray-700">
                  Notes
                </Label>
                <Textarea
                  id="notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Optional installation notes"
                  className="w-full resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="text-xs text-gray-500">
                  Manifest stored at: <code className="bg-gray-100 px-2 py-1 rounded">devices/{deviceId || "{id}"}/manifest.json</code>
                </div>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOpen(false)}
                    className="px-6"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={saving}
                    className="bg-blue-600 hover:bg-blue-700 px-6"
                  >
                    {saving ? (
                      <>
                        <LoaderCircle className="w-4 h-4 animate-spin mr-2" />
                        Saving...
                      </>
                    ) : (
                      "Save to S3"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

/* ----------------------------- helpers ----------------------------- */

function getProfile(): Profile {
  try {
    const raw = localStorage.getItem("enasa_auth_token");
    if (!raw) return { name: "Guest", email: "", role: "viewer" };
    const obj = JSON.parse(raw);
    return {
      name: obj.name || "User",
      email: obj.email || "",
      role: obj.role || "viewer",
    };
  } catch {
    return { name: "User", email: "", role: "viewer" };
  }
}

function parseCSV(text: string): Dataset {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return { columns: [], rows: [] };
  const columns = lines[0].split(",").map((h) => h.trim());
  const rows = lines.slice(1).map((ln) => {
    const cells = ln.split(",").map((c) => c.trim());
    const obj: Record<string, string | number> = {};
    columns.forEach((c, i) => {
      const num = Number(cells[i]);
      obj[c] = isNaN(num) ? cells[i] : num;
    });
    return obj;
  });
  return { columns, rows };
}

const demoCSV = `timestamp,IAQ,CO2eq,VOC,gas_resistance,temperature,humidity,pressure,label,deviceId
0,25,450,0.32,123456,22.1,45.3,1012.3,fresh,dev1
1,27,460,0.35,123120,22.2,45.1,1012.5,fresh,dev1
2,30,550,0.50,121300,22.5,45.0,1012.2,spoiled,dev1
3,45,650,0.71,118900,22.8,44.7,1011.9,spoiled,dev1
4,35,520,0.44,120500,22.6,44.9,1012.0,fresh,dev1
5,60,700,0.90,117000,22.9,44.3,1011.8,spoiled,dev1`;

function newHeaterStep(): HeaterStep {
  return { dwell_ms: 100, target_c: 300 };
}

async function apiGet<T>(baseUrl: string, path: string, params: Record<string, string | number | undefined> = {}): Promise<T> {
  const u = new URL(path, baseUrl.endsWith("/") ? baseUrl : baseUrl + "/");
  Object.entries(params).forEach(([k, v]) => v !== undefined && u.searchParams.set(k, String(v)));
  const res = await fetch(u.toString());
  if (!res.ok) throw new Error(`GET ${u} → ${res.status}`);
  return res.json() as Promise<T>;
}

function flattenDeviceRecord(payload: DeviceRecord): FlattenedDeviceRecord[] {
  if (!payload || !Array.isArray(payload.sensors)) return [];
  const base = { timestamp: payload.timestamp, deviceId: payload.deviceId, boardMode: payload.boardMode };
  return payload.sensors.map((s) => ({
    ...base,
    sensorId: s.sensorId,
    temperature: s.environmental?.temperature,
    pressure: s.environmental?.pressure,
    humidity: s.environmental?.humidity,
    cTemperature: s.environmental?.cTemperature,
    cHumidity: s.environmental?.cHumidity,
    iaq: s.airQuality?.iaq,
    staticIAQ: s.airQuality?.staticIAQ,
    IAQaccuracy: s.airQuality?.IAQaccuracy,
    co2Equvalent: s.airQuality?.co2Equvalent,
    bVOCequvalent: s.airQuality?.bVOCequvalent,
    gas_resistance: s.gasResistance?.resistance,
    compensatedGas: s.gasResistance?.compensatedGas,
    gasPercentage: s.gasResistance?.gasPercentage,
    stabilization: s.systemStatus?.stabilization,
    runinstatus: s.systemStatus?.runinstatus,
  }));
}

/* ----------------------------- main ----------------------------- */

export default function StudioApp() {
  const navigate = useNavigate();
  const profile = getProfile();
  const role = profile.role || "viewer";

  const [section, setSection] = useState("data");
  const [projects] = useState<Project[]>([{ id: "p1", name: "Seafood Freshness", desc: "Enose AI project" }]);
  const [activeProject] = useState("p1");

  const [dataset, setDataset] = useState<Dataset>(() => parseCSV(demoCSV));
  const [labelColumn, setLabelColumn] = useState("label");
  const [featureCols, setFeatureCols] = useState(["IAQ", "CO2eq", "VOC", "gas_resistance", "temperature", "humidity"]);

  const [modelType, setModelType] = useState("classification");
  const [algorithm, setAlgorithm] = useState("RandomForest");
  const [trainProgress, setTrainProgress] = useState(0);
  const [training, setTraining] = useState(false);
  const [trainedModel, setTrainedModel] = useState<TrainedModel | null>(null);

  const [heaterSteps, setHeaterSteps] = useState<HeaterStep[]>([
    newHeaterStep(),
    { dwell_ms: 150, target_c: 320 },
    { dwell_ms: 200, target_c: 280 },
  ]);

  const [api, setApi] = useState<ApiConfig>({ baseUrl: "", s3Prefix: "", deviceId: "", pollMs: 3000 });
  const [live, setLive] = useState(false);
  const [liveData, setLiveData] = useState<LiveDataPoint[]>([]);

  const [splashEnabled, setSplashEnabled] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (!training) return;
    const t = setInterval(() => {
      setTrainProgress((p) => {
        const np = Math.min(100, p + Math.random() * 12);
        if (np >= 100) {
          clearInterval(t);
          setTraining(false);
          setTrainedModel({
            id: `mdl_${Date.now()}`,
            type: modelType,
            algo: algorithm,
            features: featureCols,
            label: labelColumn,
            metrics:
              modelType === "classification"
                ? { accuracy: 0.91, f1: 0.9, auc: 0.94 }
                : { rmse: 0.18, r2: 0.86 },
          });
        }
        return np;
      });
    }, 500);
    return () => clearInterval(t);
  }, [training, modelType, algorithm, featureCols, labelColumn]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    async function tick() {
      try {
        if (!api.baseUrl || !api.deviceId) return;
        const data = await apiGet<DeviceRecord[]>(api.baseUrl, "dynamo/recent", { deviceId: api.deviceId, limit: 30 });
        const points: LiveDataPoint[] = [];
        let t = 0;
        for (const rec of data) {
          const flat = flattenDeviceRecord(rec);
          const n = flat.length || 1;
          const avg = (sel: (x: FlattenedDeviceRecord) => number) => flat.reduce((s, x) => s + (sel(x) ?? 0), 0) / n;
          points.push({
            t,
            IAQ: avg((x) => x.iaq ?? 0),
            CO2eq: avg((x) => x.co2Equvalent ?? 0),
            VOC: avg((x) => x.bVOCequvalent ?? 0),
            temperature: avg((x) => x.temperature ?? 0),
            humidity: avg((x) => x.humidity ?? 0),
            score: avg((x) => x.gasPercentage ?? 0),
          });
          t += 1;
        }
        setLiveData(points.slice(-30));
      } catch (e) {
        console.warn("Dynamo recent poll failed:", (e as Error).message);
      }
    }
    if (live) {
      tick();
      timer = setInterval(tick, api.pollMs || 3000);
    }
    return () => clearInterval(timer);
  }, [live, api.baseUrl, api.deviceId, api.pollMs]);

  useEffect(() => {
    if (!splashEnabled) {
      setShowSplash(false);
      return;
    }
    const t = setTimeout(() => setShowSplash(false), 1200);
    return () => clearTimeout(t);
  }, [splashEnabled]);

  const canTrain = role === "admin" || role === "manager";
  const canExport = role === "admin" || role === "manager";

  function onUploadFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string || "";
      const parsed = parseCSV(text);
      setDataset(parsed);
      const guess = parsed.columns.find((c) => /label|class|target/i.test(c)) || parsed.columns[parsed.columns.length - 1];
      setLabelColumn(guess);
      setFeatureCols(parsed.columns.filter((c) => c !== guess && c !== "timestamp"));
    };
    reader.readAsText(file);
  }

  function startTraining() {
    if (!canTrain) return alert("Your role cannot start training. Ask an admin/manager.");
    setTrainProgress(0);
    setTraining(true);
  }

  function addStep() {
    setHeaterSteps((s) => [...s, newHeaterStep()]);
  }
  function updateStep(i: number, key: keyof HeaterStep, val: number) {
    setHeaterSteps((s) => s.map((st, idx) => (idx === i ? { ...st, [key]: val } : st)));
  }
  function removeStep(i: number) {
    setHeaterSteps((s) => s.filter((_, idx) => idx !== i));
  }

  function exportModel(fmt: string) {
    if (!trainedModel) return;
    if (!canExport) return alert("Your role cannot export models. Ask an admin/manager.");

    const fname = `model_${trainedModel.id}.` + (fmt === "tflm" ? "tflm.json" : fmt === "cheader" ? "h" : "json");

    if (fmt === "cheader") {
      const lines = [];
      lines.push("// Auto-generated model header — placeholder");
      lines.push("#pragma once");
      lines.push("#include <stdint.h>");
      lines.push('static const char* MODEL_INFO = "Enose AI placeholder";');
      lines.push(`static const char* MODEL_ID = "${String(trainedModel.id)}";`);
      lines.push(`static const char* MODEL_ALGO = "${String(trainedModel.algo)}";`);
      lines.push(`static const char* MODEL_LABEL = "${String(trainedModel.label)}";`);
      const header = lines.join("\n");
      const blob = new Blob([header], { type: "text/x-c" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fname;
      a.click();
      URL.revokeObjectURL(url);
      return;
    }

    const pkg = {
      project: projects.find((p) => p.id === activeProject)?.name,
      model: trainedModel,
      heater_profile: heaterSteps,
      meta: { exported_at: new Date().toISOString(), format: fmt },
    };
    const blob = new Blob([JSON.stringify(pkg, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fname;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function loadAllFromS3() {
    if (!api.baseUrl) return alert("Set API Base URL in Settings first.");
    const rows: FlattenedDeviceRecord[] = [];
    let token: string | undefined = undefined;
    try {
      do {
        const list = await apiGet<S3ListResponse>(api.baseUrl, "s3/list", {
          prefix: api.s3Prefix || "",
          continuationToken: token,
        });
        const keys = (list.keys || []).filter((k: string) => k.toLowerCase().endsWith(".json"));
        for (const key of keys) {
          const obj = await apiGet<DeviceRecord>(api.baseUrl, "s3/get", { key });
          rows.push(...flattenDeviceRecord(obj));
        }
        token = list.nextContinuationToken || undefined;
      } while (token);
    } catch (e) {
      return alert("S3 load failed: " + (e as Error).message);
    }
    if (!rows.length) return alert("No data found.");
    const columns = Object.keys(rows[0]);
    setDataset({ columns, rows });
    const guessLabel = columns.find((c) => /label|class|target/i.test(c)) || "label";
    setLabelColumn(guessLabel);
    setFeatureCols(columns.filter((c) => ![guessLabel, "timestamp", "deviceId", "boardMode", "sensorId"].includes(c)));
    alert(`Loaded ${rows.length} rows from S3.`);
  }

  function logout() {
    localStorage.removeItem("enasa_auth_token");
    navigate("/login", { replace: true });
  }

  function handleDeviceCreated(device: DeviceManifest) {
    console.log("New device created:", device);
  }

  const columns = dataset.columns;
  const rows = dataset.rows;
  const featureOptions = columns.filter((c) => c !== labelColumn && c !== "timestamp");
  const labelOptions = columns.filter((c) => !["timestamp"].includes(c));
  const labels = useMemo(() => {
    const s = new Set(rows.map((r) => r[labelColumn]));
    return Array.from(s).filter((x) => x !== undefined && x !== "") as string[];
  }, [rows, labelColumn]);
  const confusion = useMemo((): ConfusionMatrix[] => {
    if (!labels.length) return [];
    return labels.map((la) => ({
      row: la,
      cells: labels.map((lb) => ({
        col: lb,
        v: la === lb ? Math.floor(20 + Math.random() * 40) : Math.floor(Math.random() * 8),
      })),
    }));
  }, [labels, trainedModel?.id]);
  const rocData = useMemo(
    (): ROCData[] => Array.from({ length: 20 }, (_, i) => ({ fpr: i / 20, tpr: Math.min(1, Math.pow(i / 20, 0.7)) })),
    [trainedModel?.id]
  );
  const featImportance = useMemo(
    (): FeatureImportance[] =>
      featureCols
        .map((f) => ({ name: f, score: Math.round((0.3 + Math.random() * 0.7) * 100) / 100 }))
        .sort((a, b) => b.score - a.score),
    [trainedModel?.id, featureCols.join(",")]
  );

  return (
    <div className="w-full text-black py-20 h-screen flex overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {showSplash && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-white">
          <div className="flex flex-col items-center gap-4 animate-fade">
            <img src="/enasa.svg" alt="Enose AI" className="w-24 h-24 md:w-36 md:h-36 object-contain drop-shadow-2xl" />
            <div className="text-xl font-semibold text-slate-700">Enose AI</div>
            <div className="text-sm text-slate-500">Invisible Sense</div>
          </div>
        </div>
      )}

      <aside className="w-72 bg-white border-r shadow-sm flex flex-col">
        <div className="px-4 py-5 flex items-center gap-3 border-b">
          <img src="/enasa.svg" alt="Enose AI" className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-lg" />
          <div>
            <div className="text-lg font-semibold">Enose AI</div>
            <div className="text-xs text-slate-500">Invisible Sense</div>
          </div>
        </div>
        <div className="p-3 overflow-y-auto flex-1">
          <NavButton icon={<Database className="w-4 h-4" />} active={section === "data"} onClick={() => setSection("data")} label="Data" />
          <NavButton icon={<Wrench className="w-4 h-4" />} active={section === "profiles"} onClick={() => setSection("profiles")} label="Heater Profiles" />
          <NavButton
            icon={<Cpu className="w-4 h-4" />}
            active={section === "training"}
            onClick={() => (canTrain ? setSection("training") : alert("Your role cannot access Training."))}
            label="Training"
            disabled={!canTrain}
          />
          <NavButton icon={<BarChart2 className="w-4 h-4" />} active={section === "evaluation"} onClick={() => setSection("evaluation")} label="Evaluation" />
          <NavButton icon={<Gauge className="w-4 h-4" />} active={section === "live"} onClick={() => setSection("live")} label="Live" />
          <NavButton
            icon={<FileDown className="w-4 h-4" />}
            active={section === "export"}
            onClick={() => (canExport ? setSection("export") : alert("Your role cannot access Export."))}
            label="Export"
            disabled={!canExport}
          />
          <NavButton icon={<SettingsIcon className="w-4 h-4" />} active={section === "settings"} onClick={() => setSection("settings")} label="Settings" />
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/enasa.svg" alt="Enose AI" className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow" />
              <div className="text-lg font-semibold text-black">
                {projects.find((p) => p.id === activeProject)?.name} <span className="text-slate-400 font-normal">/ {section}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {trainedModel && <Badge variant="secondary" className="rounded-xl">Model: {trainedModel.algo}</Badge>}
              <Badge className="rounded-xl" variant="outline">{rows.length} rows</Badge>
              
              {profile.role === "admin" && (
                <div className="flex items-center gap-2">
                  <AddDeviceDialog onCreated={handleDeviceCreated} />
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {}}
                    className="text-xs gap-1 inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium shadow-sm transition active:scale-[.99] !bg-indigo-600 !text-white hover:!bg-indigo-700"
                  >
                    <Plus className="w-3 h-3" />
                    ADD User
                  </Button>

                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {}}
                    className="text-xs gap-1 inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium shadow-sm transition active:scale-[.99] !bg-indigo-600 !text-white hover:!bg-indigo-700"
                  >
                    <Plus className="w-3 h-3" />
                    ADD Use case
                  </Button>
                </div>
              )}
              
              <div className="hidden sm:flex items-center gap-2 pl-3 ml-1 border-l">
                <div className="text-xs text-slate-600">
                  <div className="font-medium">{profile.name}</div>
                  <div className="text-[11px] text-slate-500">{profile.role}</div>
                </div>
                <Button variant="outline" className="text-xs" onClick={logout}>Sign out</Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6 space-y-6">
          {section === "data" && (
            <SectionData
              onUploadFile={onUploadFile}
              dataset={{ columns: dataset.columns, rows: dataset.rows }}
              labelColumn={labelColumn}
              setLabelColumn={setLabelColumn}
              featureCols={featureCols}
              setFeatureCols={setFeatureCols}
              featureOptions={dataset.columns.filter((c) => c !== labelColumn && c !== "timestamp")}
              labelOptions={dataset.columns.filter((c) => !["timestamp"].includes(c))}
              loadAllFromS3={loadAllFromS3}
            />
          )}
          {section === "profiles" && (
            <SectionProfiles heaterSteps={heaterSteps} addStep={addStep} updateStep={updateStep} removeStep={removeStep} />
          )}
          {section === "training" && (
            <SectionTraining
              modelType={modelType}
              setModelType={setModelType}
              algorithm={algorithm}
              setAlgorithm={setAlgorithm}
              startTraining={startTraining}
              training={training}
              trainProgress={trainProgress}
              trainedModel={trainedModel}
              disabled={!canTrain}
            />
          )}
          {section === "evaluation" && (
            <SectionEvaluation trainedModel={trainedModel} labels={labels} confusion={confusion} rocData={rocData} featImportance={featImportance} />
          )}
          {section === "live" && <SectionLive live={live} setLive={setLive} liveData={liveData} />}
          {section === "export" && (
            <SectionExport trainedModel={trainedModel} onExport={exportModel} heaterSteps={heaterSteps} disabled={!canExport} />
          )}
          {section === "settings" && <SectionSettings api={api} setApi={setApi} splashEnabled={splashEnabled} setSplashEnabled={setSplashEnabled} />}
        </div>
      </main>
    </div>
  );
}

// ... (The rest of the component code remains the same with proper type annotations)

/* ----------------------------- subcomponents ----------------------------- */

function NavButton({ icon, label, active, onClick, disabled }: NavButtonProps) {
  return (
    <Button
      className={`w-full justify-start gap-2 mt-2 ${active ? "" : ""} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      variant={active ? "default" : "secondary"}
      onClick={onClick}
      disabled={disabled}
      title={disabled ? "Not allowed for your role" : undefined}
    >
      {icon} {label}
    </Button>
  );
}

function SectionData({
  onUploadFile,
  dataset,
  labelColumn,
  setLabelColumn,
  featureCols,
  setFeatureCols,
  featureOptions,
  labelOptions,
  loadAllFromS3,
}: SectionDataProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  function toggleFeature(f: string) {
    const newFeatureCols = featureCols.includes(f) 
      ? featureCols.filter(x => x !== f) 
      : [...featureCols, f];
    setFeatureCols(newFeatureCols);
  }
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-black">
              <Upload className="w-5 h-5 text-black" /> Upload CSV / Load from S3
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-2xl p-6 text-center">
              <input
                type="file"
                accept=".csv"
                className="hidden"
                ref={fileInputRef}
                onChange={(e) => e.target.files?.[0] && onUploadFile(e.target.files[0])}
              />
              <div className="text-sm text-slate-600 mb-4">Drag & drop a CSV here or select a file</div>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <Button onClick={() => fileInputRef.current?.click()} className="gap-2">
                  <Upload className="w-4 h-4" /> Choose CSV
                </Button>
                <span className="text-slate-400">or</span>
                <Button variant="secondary" onClick={loadAllFromS3} className="gap-2">
                  <CloudDownload className="w-4 h-4" /> Load ALL from S3
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" /> Columns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Label column</Label>
              <select
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
                value={labelColumn}
                onChange={(e) => setLabelColumn(e.target.value)}
              >
                {labelOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <Label>Features</Label>
              <div className="flex flex-wrap gap-2">
                {featureOptions.map((f) => (
                  <button
                    key={f}
                    onClick={() => toggleFeature(f)}
                    className={`text-xs px-2 py-1 rounded-full border ${
                      featureCols.includes(f) ? "bg-indigo-600 text-white border-indigo-600" : "border-slate-300 hover:bg-slate-100"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <TableIcon className="w-5 h-5" /> Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  {dataset.columns.map((c) => (
                    <th key={c} className="py-2 pr-6 font-medium text-slate-600">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dataset.rows.slice(0, 12).map((r, i) => (
                  <tr key={i} className="border-b hover:bg-slate-50">
                    {dataset.columns.map((c) => (
                      <td key={c} className="py-2 pr-6 text-slate-700">
                        {String(r[c])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SectionProfiles({ heaterSteps, addStep, updateStep, removeStep }: SectionProfilesProps) {
  const totalMs = heaterSteps.reduce((s, st) => s + Number(st.dwell_ms || 0), 0);
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-5 h-5" /> Heater Profile Editor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm text-slate-600">
            Define dwell time + target temp. Total cycle: <b>{totalMs} ms</b>
          </div>
          <div className="space-y-3">
            {heaterSteps.map((st, i) => (
              <div key={i} className="grid grid-cols-12 items-end gap-3 p-3 rounded-xl border bg-white">
                <div className="col-span-5">
                  <Label className="text-xs">Dwell (ms)</Label>
                  <Input type="number" value={st.dwell_ms} onChange={(e) => updateStep(i, "dwell_ms", Number(e.target.value))} />
                </div>
                <div className="col-span-5">
                  <Label className="text-xs">Target (°C)</Label>
                  <Input type="number" value={st.target_c} onChange={(e) => updateStep(i, "target_c", Number(e.target.value))} />
                </div>
                <div className="col-span-2 flex justify-end">
                  <Button variant="outline" onClick={() => removeStep(i)}>
                    <Trash2 className="w-4 h-4 mr-1" />
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <Button className="gap-2" onClick={addStep}>
              Add Step
            </Button>
            <Badge variant="outline" className="rounded-xl">
              Steps: {heaterSteps.length}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SectionTraining({ modelType, setModelType, algorithm, setAlgorithm, startTraining, training, trainProgress, trainedModel, disabled }: SectionTrainingProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Cpu className="w-5 h-5" /> Training Config
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label>Task</Label>
            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={modelType}
              onChange={(e) => setModelType(e.target.value)}
              disabled={disabled}
              title={disabled ? "Not allowed for your role" : undefined}
            >
              <option value="classification">Classification</option>
              <option value="regression">Regression</option>
            </select>
          </div>
          <div>
            <Label>Algorithm</Label>
            <select
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
              value={algorithm}
              onChange={(e) => setAlgorithm(e.target.value)}
              disabled={disabled}
              title={disabled ? "Not allowed for your role" : undefined}
            >
              <option value="RandomForest">Random Forest</option>
              <option value="SVM">SVM</option>
              <option value="Logistic">Logistic / Linear</option>
              <option value="XGBoost">XGBoost (placeholder)</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button className="w-full gap-2" onClick={startTraining} disabled={disabled || training} title={disabled ? "Not allowed for your role" : undefined}>
              {training ? <LoaderCircle className="w-4 h-4 animate-spin" /> : <Rocket className="w-4 h-4" />}
              {training ? "Training..." : "Train Model"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5" /> Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={trainProgress} className="h-3" />
          <div className="mt-2 text-sm text-slate-600">{Math.round(trainProgress)}%</div>
          {trainedModel && (
            <div className="mt-4 text-sm text-slate-700">
              <div className="font-medium">
                Trained: {trainedModel.algo} ({trainedModel.type})
              </div>
              <div>Features: {trainedModel.features.join(", ")}</div>
              <div>Label: {trainedModel.label}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function SectionEvaluation({ trainedModel, labels, confusion, rocData, featImportance }: SectionEvaluationProps) {
  return (
    <div className="space-y-6">
      {!trainedModel ? (
        <Card>
          <CardContent className="py-10 text-center text-slate-600">Train a model to see evaluation results.</CardContent>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-1">
                <CardTitle className="text-sm text-slate-600">Model</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-black">{trainedModel.algo}</div>
                <div className="text-sm text-slate-500">{trainedModel.type}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-1">
                <CardTitle className="text-sm text-slate-600">Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                {trainedModel.type === "classification" ? (
                  <div className="text-sm space-y-1">
                    <div>Accuracy: <b>{(trainedModel.metrics.accuracy! * 100).toFixed(1)}%</b></div>
                    <div>F1: <b>{(trainedModel.metrics.f1! * 100).toFixed(1)}%</b></div>
                    <div>AUC: <b>{(trainedModel.metrics.auc! * 100).toFixed(1)}%</b></div>
                  </div>
                ) : (
                  <div className="text-sm space-y-1">
                    <div>RMSE: <b>{trainedModel.metrics.rmse!.toFixed(3)}</b></div>
                    <div>R²: <b>{trainedModel.metrics.r2!.toFixed(3)}</b></div>
                  </div>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-1">
                <CardTitle className="text-sm text-slate-600">Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-600">Plug in your backend to run real training.</div>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="w-5 h-5" /> Feature Importance
              </CardTitle>
            </CardHeader>
            <CardContent className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RBarChart data={featImportance} layout="vertical" margin={{ left: 20, right: 20, top: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 1]} />
                  <YAxis type="category" dataKey="name" width={120} />
                  <RTooltip />
                  <Legend />
                  <Bar dataKey="score" name="Importance" />
                </RBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

function SectionLive({ live, setLive, liveData }: SectionLiveProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Gauge className="w-5 h-5" /> Live Capture
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4 flex-wrap">
          <div className="text-sm text-slate-600">
            Polling DynamoDB recent 30 (averaged per record). Toggle to start/stop.
          </div>
          <div className="flex items-center gap-2">
            <Switch checked={live} onCheckedChange={setLive} />
            <div className="text-sm">{live ? "Running" : "Stopped"}</div>
            <Button variant={live ? "secondary" : "default"} className="gap-2" onClick={() => setLive(!live)}>
              {live ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {live ? "Stop" : "Start"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <LIcon className="w-5 h-5" /> Live Signals
          </CardTitle>
        </CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <RLineChart data={liveData} margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="t" />
              <YAxis />
              <RTooltip />
              <Legend />
              <Line dataKey="IAQ" dot={false} name="IAQ" />
              <Line dataKey="CO2eq" dot={false} name="CO2eq" />
              <Line dataKey="VOC" dot={false} name="VOC" />
              <Line dataKey="temperature" dot={false} name="Temp" />
              <Line dataKey="humidity" dot={false} name="Humidity" />
              <Line dataKey="score" dot={false} name="Score" />
            </RLineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}

function SectionExport({ trainedModel, onExport, heaterSteps, disabled }: SectionExportProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <FileDown className="w-5 h-5" /> Export
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!trainedModel ? (
            <div className="text-sm text-slate-600">Train a model first to enable exports.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Button className="gap-2" onClick={() => onExport("bundle")} disabled={disabled} title={disabled ? "Not allowed for your role" : undefined}>
                <Download className="w-4 h-4" /> Export Bundle (JSON)
              </Button>
              <Button className="gap-2" variant="secondary" onClick={() => onExport("tflm")} disabled={disabled} title={disabled ? "Not allowed for your role" : undefined}>
                <Download className="w-4 h-4" /> Export TFLite Micro (JSON stub)
              </Button>
              <Button className="gap-2" variant="outline" onClick={() => onExport("cheader")} disabled={disabled} title={disabled ? "Not allowed for your role" : undefined}>
                <Download className="w-4 h-4" /> Export C Header
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-5 h-5" /> Heater Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-slate-600 mb-3">Steps bundled with export:</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {heaterSteps.map((st, i) => (
              <div key={i} className="rounded-xl border p-3 bg-white">
                <div className="text-xs text-slate-500">Step {i + 1}</div>
                <div className="text-sm">
                  {st.dwell_ms} ms @ {st.target_c}°C
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function SectionSettings({ api, setApi, splashEnabled, setSplashEnabled }: SectionSettingsProps) {
  const [splashLocal, setSplashLocal] = useState(splashEnabled);
  useEffect(() => setSplashLocal(splashEnabled), [splashEnabled]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="w-5 h-5" /> API Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>API Base URL</Label>
            <Input
              value={api.baseUrl}
              onChange={(e) => setApi({ ...api, baseUrl: e.target.value })}
              placeholder="https://abc123.execute-api.us-east-1.amazonaws.com/prod"
            />
          </div>
          <div>
            <Label>Device ID (for DynamoDB)</Label>
            <Input value={api.deviceId} onChange={(e) => setApi({ ...api, deviceId: e.target.value })} placeholder="dev1" />
          </div>
          <div>
            <Label>S3 Prefix (optional)</Label>
            <Input value={api.s3Prefix} onChange={(e) => setApi({ ...api, s3Prefix: e.target.value })} placeholder="dev1/2025/" />
          </div>
          <div>
            <Label>Poll interval (ms)</Label>
            <Input type="number" value={api.pollMs} onChange={(e) => setApi({ ...api, pollMs: Number(e.target.value || 3000) })} />
          </div>

          <div className="md:col-span-2 flex items-center gap-3">
            <Label className="!mb-0">Show splash at startup</Label>
            <Switch
              checked={splashLocal}
              onCheckedChange={(v) => {
                setSplashLocal(v);
                setSplashEnabled(v);
              }}
            />
          </div>

          <div className="md:col-span-2">
            <Label>Notes</Label>
            <Textarea placeholder="Any notes about your API routes, auth, etc." />
          </div>
          <div className="md:col-span-2">
            <Button className="gap-2">
              <Save className="w-4 h-4" /> Save Settings
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}