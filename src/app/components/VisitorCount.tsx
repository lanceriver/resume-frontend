"use client"

import Script from "next/script";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import {v4 as uuidv4} from 'uuid';


// Extend the Window interface to include updateVisitorCount
declare global {
    interface Window {
      updateVisitorCount: (count: number) => void;
    }
  }

export function VisitorCount() {
    const [visitorCount, setVisitorCount] = useState<number | null>(null);
    const [suffix, setSuffix] = useState('');
    useEffect(() => {
        const generateUUID = () => uuidv4();
    
        const createCookie = (userId: string) => {
          Cookies.set('uuid', userId, { expires: 365, secure: true });
        };
    
        const ordinalSuffix = (count: number) => {
          const last = count % 10;
          if ([11, 12, 13].includes(count % 100)) return 'th';
          return last === 1 ? 'st' : last === 2 ? 'nd' : last === 3 ? 'rd' : 'th';
        };
    
        const updateVisitor = async () => {
          const res = await fetch('https://alpe5t2zwl.execute-api.us-east-1.amazonaws.com/update_visitor_count', {
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
          const res = await fetch('https://alpe5t2zwl.execute-api.us-east-1.amazonaws.com/get_visitor_count', {
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
          const response = await fetch('https://alpe5t2zwl.execute-api.us-east-1.amazonaws.com/getUUID', {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ uuid: cookie }),
          });
          const isNew = await response.text();
          if (isNew === 'true') {
            getVisitor();
          }
          else {
            updateVisitor();
          }
          //isNew === 'true' ? getVisitor() : updateVisitor();
        };
    
        const init = () => {
          const existingCookie = Cookies.get('uuid');
          if (!existingCookie) {
            const newId = generateUUID();
            createCookie(newId);
            fetch('https://alpe5t2zwl.execute-api.us-east-1.amazonaws.com/storeUUID', {
              method: 'PUT',
              mode: 'cors',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ uuid: newId }),
            });
            updateVisitor();
          } else {
            checkCookieUnique();
          }
        };
    
        init();
      }, []);
      return (
        <div>
            <p className="flex flex-col space-y-4 text-lg font-[sourceSerif] ml-5 mr-5 mb-20">Visitor count: {visitorCount === null ? 'Loading...' : `${visitorCount}${suffix}`}</p>
            <Script src="/scripts/script.js" strategy="afterInteractive"></Script>
        </div>
      )
}