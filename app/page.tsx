import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";

export default function Home() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
      Hello&nbsp;
      <Link href="/users">Users</Link>
      <ProductCard />
    </div>
  );
}
