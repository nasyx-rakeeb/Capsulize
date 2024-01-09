interface AlertProps {
  title: string;
  description: string;
  btn1title?: string;
  btn1OnPress?: () => void;
  btn2title?: string;
  btn2OnPress?: () => void;
  visible: boolean;
  hideAlert: () => void;
}
