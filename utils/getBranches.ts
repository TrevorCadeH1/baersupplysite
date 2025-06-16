// utils/getBranches.ts
export interface Warehouse {
  id: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  phoneNumber?: string;
  departments?: string[];
  accessibilityFlag?: boolean;
}

export async function getWarehouses(): Promise<Warehouse[]> {
  const response = await fetch("https://wbscdev.wurthbaersupply.com/rest/warehouses", {
    headers: {
      "X-AUTH-TOKEN": "e89d6c2370505652668abf9cc40194bc"
    },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch warehouses");
  }

  const data = await response.json();
  return data;
}