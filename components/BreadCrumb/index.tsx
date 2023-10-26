import { useRouter } from "next/router";
import React from "react";

const BreadCrumb = () => {
  const spanContent = [];
  const router = useRouter();
  const pathName = router.pathname;  
  const pathParts = pathName.split('/').filter(part => part !== '').map((each) => {
    each === 'about' && spanContent.push('Sobre');
    each === 'contact' && spanContent.push('Contato')
  })

  return (
    <div>
      <span className="me-1 ms-2">Home</span>
      {spanContent.map((path: string, i: number) => (
        <div key={i} style={{ display: 'inline-block' }}>
          <span>{`>`}</span>
          {i === spanContent.length - 1
            ? <span className='fw-bold ms-3'>{`${path}`}</span>
            : <span className='ms-1'>{`${path}`}</span>}
        </div>
      ))}
    </div>
  )
}

export default BreadCrumb;