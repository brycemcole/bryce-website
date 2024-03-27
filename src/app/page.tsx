import Image from "next/image";

interface MyButtonProps {
  title: string;
  disabled: boolean;
}

function MyButton({ title, disabled }: MyButtonProps ) {
  return (
    <button disabled={disabled}>{title}</button>
  );
}

export default function Home() {
  return (
    <div>
      <h1>Bryce Cole</h1>
      <p>This is an example site that I am creating</p>
    </div>
  );
}
