export interface IButton {
  type?: "primary" | "secondary" | "accent";
  children: React.ReactNode;
  width?: string;
  height?: string;
  paddingX?: string;
  paddingY?: string;
  onClick?: () => void;
}
