import Dashboard from './navigation/Dashboard';
import { useRouter } from 'next/router';

export default function MainComponent() {
  const router = useRouter();

  return <>{router.pathname != '/' && <Dashboard />}</>;
}
