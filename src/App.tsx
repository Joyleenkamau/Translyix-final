import { useEffect } from 'react'
import Header from './components/Header'
import DashboardCards from './components/DashboardCards'
import MapView from './components/MapView'
import MapboxView from './components/MapboxView'
import TrendsChart from './components/TrendsChart'
import ReportsTable from './components/ReportsTable'
import { useDataStore } from './store/useDataStore'

export default function App(){
  const add = useDataStore(s=>s.addRandomReport)

  useEffect(()=>{
    const id = setInterval(()=> add(), 4000)
    return ()=> clearInterval(id)
  }, [add])

  return (
    <div className="min-h-screen text-slate-800">
      <Header/>
      <main className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        <DashboardCards/>
        <div className="grid md:grid-cols-2 gap-6">
          <MapView/>
          <TrendsChart/>
        </div>
        <ReportsTable/>
      </main>
          <div className="mt-6"><MapboxView/></div>
    </div>
  )
}
