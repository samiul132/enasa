import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export const DisclaimerFooter = () => {
  return (
    <Alert className="my-8 border-muted bg-muted/30">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="text-sm text-muted-foreground">
        <strong className="font-semibold text-foreground">Validation Study Disclaimer:</strong> The outcomes and metrics presented in this article are projections for proposed pilot studies. AirLytiq's technology is currently in validation phase. Actual results may vary based on facility configuration, environmental conditions, implementation methodology, and specific use case requirements. Interested organizations are invited to participate in validation studies to help establish real-world performance data.
      </AlertDescription>
    </Alert>
  );
};
