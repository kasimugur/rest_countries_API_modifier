'use client'
import CountryDetail from "@/components/CountryDetail";
import HeaderPage from "../components/Header";
import CountryCard from "@/components/CountryCard";

export default function Home() {
// console.log(data.map(e => e))
  return (
    <>
      <HeaderPage />
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-5">
      <CountryCard />
      </div>
      {/* <CountryDetail />  */}
    </>
  );
}
