import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1 className={"text-3xl mb-4"}>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard></ProductCard>
    </main>
  );
}
