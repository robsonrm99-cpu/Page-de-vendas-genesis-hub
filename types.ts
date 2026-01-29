
export interface MetricItem {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}
