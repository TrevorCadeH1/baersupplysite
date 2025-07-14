'use server';

import { redirect } from "next/navigation";
import CareersClient from "./CareersClient";
import { Warehouse } from "./warehouse";

export default async function CareersPage({ searchParams }: { searchParams?: { branch?: string } }) {
  const data = await fetch('https://wbscdev.wurthbaersupply.com/rest/warehouses', {
    headers: {
      'X-AUTH-TOKEN': process.env.WURTH_API_TOKEN!,
    },
    cache: 'force-cache',
  });
  const warehouses: Warehouse[] = data.ok ? await data.json() : [];
  
  const branchParam = searchParams?.branch;
  if (branchParam && warehouses.some(w => w.code === branchParam)) {
    redirect(`/careers/branches/${encodeURIComponent(branchParam)}`);
  }
  if (branchParam && !warehouses.some(w => w.code === branchParam)) {
    redirect('/careers');
  }
  
  return (
    <CareersClient warehouses={warehouses} initialSelectedId={null} />
  );
}