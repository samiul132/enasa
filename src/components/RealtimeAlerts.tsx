import { useEffect, useState } from "react";
import { AlertCircle, CheckCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  type: "warning" | "info" | "success";
  title: string;
  message: string;
  timestamp: Date;
  location?: string;
}

export const RealtimeAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate real-time alerts
    const mockAlerts = [
      {
        type: "warning" as const,
        title: "VOC Level Alert",
        message: "Elevated formaldehyde detected in Zone A",
        location: "Production Floor - Zone A"
      },
      {
        type: "info" as const,
        title: "System Update",
        message: "Air quality readings within normal range",
        location: "All Zones"
      },
      {
        type: "success" as const,
        title: "Detection Complete",
        message: "Chemical leak contained successfully",
        location: "Storage Area B"
      }
    ];

    const generateAlert = () => {
      const randomAlert = mockAlerts[Math.floor(Math.random() * mockAlerts.length)];
      const newAlert: Alert = {
        id: `alert-${Date.now()}`,
        ...randomAlert,
        timestamp: new Date()
      };

      setAlerts(prev => [newAlert, ...prev].slice(0, 5));
    };

    // Generate initial alert
    generateAlert();

    // Generate alerts every 8-15 seconds
    const interval = setInterval(() => {
      generateAlert();
    }, Math.random() * 7000 + 8000);

    return () => clearInterval(interval);
  }, []);

  const removeAlert = (id: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  if (!isVisible || alerts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-50 w-96 max-w-[calc(100vw-2rem)] space-y-2">
      {alerts.map((alert, index) => (
        <div
          key={alert.id}
          className={cn(
            "bg-background/95 backdrop-blur-sm border rounded-lg shadow-lg p-4 animate-in slide-in-from-right",
            "transition-all duration-300"
          )}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start gap-3">
            <div className={cn(
              "rounded-full p-1",
              alert.type === "warning" && "bg-yellow-500/10 text-yellow-500",
              alert.type === "info" && "bg-blue-500/10 text-blue-500",
              alert.type === "success" && "bg-green-500/10 text-green-500"
            )}>
              {alert.type === "warning" && <AlertCircle className="w-5 h-5" />}
              {alert.type === "info" && <Info className="w-5 h-5" />}
              {alert.type === "success" && <CheckCircle className="w-5 h-5" />}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-semibold text-sm text-foreground">{alert.title}</h4>
                <button
                  onClick={() => removeAlert(alert.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
              {alert.location && (
                <p className="text-xs text-muted-foreground mt-2">📍 {alert.location}</p>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                {alert.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
