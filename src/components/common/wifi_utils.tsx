import {
  Reception0,
  Reception1,
  Reception2,
  Reception3,
  Reception4,
} from "react-bootstrap-icons";

enum SignalStrength {
  EXCELLENT,
  GOOD,
  FAIR,
  POOR,
  NONE,
}

const WifiUtils = () => {
  return <Indicator signalStrength={SignalStrength.EXCELLENT} />;
};

type IndicatorProps = {
  signalStrength: SignalStrength;
};

function Indicator({ signalStrength }: IndicatorProps) {
  switch (signalStrength) {
    case SignalStrength.EXCELLENT:
      return <Reception4 />;
    case SignalStrength.GOOD:
      return <Reception3 />;
    case SignalStrength.FAIR:
      return <Reception2 />;
    case SignalStrength.POOR:
      return <Reception1 />;
    case SignalStrength.NONE:
      return <Reception0 />;
    default:
      return <Reception0 />;
  }
}

export default WifiUtils;
