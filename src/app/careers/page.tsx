'use server';

import CareersClient from "./CareersClient";
import { Warehouse } from "./warehouse";
import { notFound } from "next/navigation";

export default async function CareersPage({ searchParams }: { searchParams: { branch?: string } }) {
  const data = await fetch('https://wbscdev.wurthbaersupply.com/rest/warehouses', {
    headers: {
      'X-AUTH-TOKEN': 'e89d6c2370505652668abf9cc40194bc',
    },
    cache: 'force-cache',
  });
  const warehouses: Warehouse[] = data.ok ? await data.json() : [];

  const branchParam = searchParams?.branch;
  const isValidBranch = branchParam && warehouses.some(w => w.code === branchParam);

  if (branchParam && !isValidBranch) {
    notFound();
  }

  const initialSelectedId = isValidBranch ? branchParam : null;

  return (
      <CareersClient warehouses={warehouses} initialSelectedId={initialSelectedId} />
  );
}