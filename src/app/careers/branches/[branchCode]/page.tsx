import CareersClient from "../../CareersClient";
import { Warehouse } from "../../warehouse";
import { notFound } from "next/navigation";

export default async function CareersBranchPage({ params }: { params: { branchCode: string } }) {
  const res = await fetch('https://wbscdev.wurthbaersupply.com/rest/warehouses', {
    headers: {
      'X-AUTH-TOKEN': 'e89d6c2370505652668abf9cc40194bc',
    },
    cache: 'force-cache',
  });
  const warehouses: Warehouse[] = res.ok ? await res.json() : [];

  const branchParam = params.branchCode;
  const isValidBranch = branchParam && warehouses.some(w => w.code === branchParam);

  if (!isValidBranch) {
    notFound();
  }

  return (
    <CareersClient warehouses={warehouses} initialSelectedId={branchParam} />
  );
}