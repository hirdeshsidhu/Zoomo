import React from 'react'
import Stripe from './Stripe'


function Stripes() {
    let data = [
        {url:"https://www.citypng.com/public/uploads/preview/mercedes-benz-amg-white-logo-hd-png-701751694713916bzbqqvib0s.png"},
        {url:"https://imgs.search.brave.com/FCqeTTzTIlseLgvIeMwo-oczHL18Pf8K9ouXDOmRebk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ViLzc1/L2JiL2ViNzViYmZm/YmM1OTk5NzIzNjAy/NmZjMzZlZDBiYTNm/LmpwZw"},
        {url:"https://imgs.search.brave.com/0JKLol2okUaPhkV34972roX1lu_NDJOy6W1hbc9QrWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzRkL2Q0/LzM5LzRkZDQzOWI1/M2M2NTc3MWUzY2Qy/ZDZmZTQ2OTBmOTBk/LmpwZw"},
        {url:"https://imgs.search.brave.com/9In4WEBht6GG9FoCwk8CJPruMWFvjJAf-Xu6RFw0V5I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wNy5o/aWNsaXBhcnQuY29t/L3ByZXZpZXcvMzk0/LzkxMi85NzkvYXVk/aS1hOC1jYXItdm9s/a3N3YWdlbi1ncm91/cC1sb2dvLWF1ZGkt/dGh1bWJuYWlsLmpw/Zw"},
        {url:"https://imgs.search.brave.com/4JWK4NamYEf5Oress4vKW2HJMC_yP9zj29X11B16kyM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcG9y/c2NoZS1jcmVzdC1s/b2dvLXRpZ29td2Jo/eDZiam5nbGwtMi5w/bmc"},
        {url:"https://imgs.search.brave.com/3HcrJAC4xC7Dx-84d9fb7AAf-dzc_rbrhgcT1utW4dE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/Ym5haWwuaW1nYmlu/LmNvbS8yNS83LzEv/aW1nYmluLWJlbnRs/ZXktY29udGluZW50/YWwtZ3QtY2FyLWJl/bnRsZXktbXVsc2Fu/bmUtbG9nby1iZW50/bGV5LTBkWU55S2pZ/ZURuSmY2enJzUDlX/ZmJGVVpfdC5qcGc"}
    ]
    return (
        <div className='mt-35 flex items-center'>
           {
                data.map((item,index)=>{
                    return <Stripe key={index} url={item} />
                })
           }
        </div>
    )
}

export default Stripes
