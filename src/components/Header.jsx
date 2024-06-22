import AppLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={AppLogo} alt="app logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}
