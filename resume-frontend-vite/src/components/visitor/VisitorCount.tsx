import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

const API_BASE = 'https://alpe5t2zwl.execute-api.us-east-1.amazonaws.com';

function ordinalSuffix(count: number): string {
  const lastTwo = count % 100;
  if ([11, 12, 13].includes(lastTwo)) return 'th';
  const last = count % 10;
  return last === 1 ? 'st' : last === 2 ? 'nd' : last === 3 ? 'rd' : 'th';
}

export function VisitorCount() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [suffix, setSuffix] = useState('');
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    // Skip the counter in dev — the API Gateway CORS config does not include
    // localhost origins, so the fetch would just produce noise in the console.
    if (!import.meta.env.PROD) return;

    const updateVisitor = async () => {
      const res = await fetch(`${API_BASE}/update_visitor_count`, {
        method: 'PUT',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await res.json();
      const count = json.Attributes.viewer_count;
      setVisitorCount(count);
      setSuffix(ordinalSuffix(count));
    };

    const getVisitor = async () => {
      const res = await fetch(`${API_BASE}/get_visitor_count`, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      });
      const json = await res.json();
      const count = json.Item.viewer_count;
      setVisitorCount(count);
      setSuffix(ordinalSuffix(count));
    };

    const checkCookieUnique = async () => {
      const cookie = Cookies.get('uuid');
      const response = await fetch(`${API_BASE}/getUUID`, {
        method: 'PUT',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ uuid: cookie }),
      });
      const isNew = await response.text();
      if (isNew === 'true') {
        await getVisitor();
      } else {
        await updateVisitor();
      }
    };

    const init = async () => {
      try {
        const existingCookie = Cookies.get('uuid');
        if (!existingCookie) {
          const newId = uuidv4();
          Cookies.set('uuid', newId, { expires: 365, secure: true });
          await fetch(`${API_BASE}/storeUUID`, {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uuid: newId }),
          });
          await updateVisitor();
        } else {
          await checkCookieUnique();
        }
      } catch {
        setErrored(true);
      }
    };

    void init();
  }, []);

  if (!import.meta.env.PROD) {
    return (
      <p className="font-mono text-[11px] text-[var(--color-ink-soft)]">
        visitor counter disabled in dev
      </p>
    );
  }

  return (
    <p className="font-mono text-[11px] text-[var(--color-ink-soft)]">
      {visitorCount === null
        ? errored
          ? '—'
          : 'counting visitors…'
        : `visitor №${visitorCount.toLocaleString()}${suffix}`}
    </p>
  );
}
