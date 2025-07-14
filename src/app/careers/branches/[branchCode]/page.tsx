'use server';

import CareersClient from "../../CareersClient";
import { Warehouse } from "../../warehouse";
import { notFound } from "next/navigation";

async function fetchWarehouses(): Promise<Warehouse[]> {
  const data = await fetch('https://wbscdev.wurthbaersupply.com/rest/warehouses', {
    headers: {
      'X-AUTH-TOKEN': process.env.WURTH_API_TOKEN!,
    },
    cache: 'force-cache',
  });
  return data.ok ? await data.json() : [];
}

export async function generateStaticParams() {
  const warehouses = await fetchWarehouses();
  return warehouses.map((w) => ({ branchCode: w.code }));
}

export default async function CareersBranchPage({ params }: { params: { branchCode: string } }) {
  const warehouses = await fetchWarehouses();
  const branchParam = params.branchCode;
  const isValidBranch = branchParam && warehouses.some(w => w.code === branchParam);

  if (!isValidBranch) {
    notFound();
  }

  return (
    <CareersClient warehouses={warehouses} initialSelectedId={branchParam}/>
  );
}