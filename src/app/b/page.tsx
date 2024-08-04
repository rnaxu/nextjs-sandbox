import { headers } from 'next/headers';
import BComponent from '@/components/page/B';

async function getData(host: string | null) {
  const res = await fetch(`http://${host}/b/api`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function B() {
  const host = headers().get('host');
  const data = await getData(host);

  return <BComponent message={data.message} />;
}
