import React from 'react'
import Login from './Login'

import Signup from './Signup'


export default function Content() {
    return (
        <>
    
            <main className="flex-grow">
                <Login></Login>
            </main>

            <main className="flex-grow "> {/* Main content expands */}
               <Signup>

               </Signup>
             </main>

        </>
    )
}
