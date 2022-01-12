import Sidebar from './navigation/Sidebar';
import { useRouter } from 'next/router';

export default function MainComponent() {
  const router = useRouter();

  return <>{router.pathname != '/' && <Sidebar />}</>;
}
