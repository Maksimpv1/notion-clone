'use client'

import Document from '@/components/Document'
import React, { useEffect, useState } from 'react'

function DocumentPage({ params }: { params: Promise<{ id: string }> }) {
  
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [params]);

  if (!id) {
    return null; 
  }

  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Document id={id} />
    </div>
  );
}

export default DocumentPage;