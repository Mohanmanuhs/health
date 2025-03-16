import React from 'react'
import HostelForm from './CreateHostel'
import HostelsPage from './HostelList'




export default function Content() {
      
    return (
        <>
    
            <main className="flex-grow">
                <HostelsPage></HostelsPage>
            </main>
            
        </>
    )
}
