import { Outlet } from 'react-router'

export function BaseLayout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-primary text-primary-foreground p-4'>
        <h1 className='text-xl font-bold'>ID Verification</h1>
      </header>

      <main className='max-w-4xl mx-auto flex-grow p-4'>
        <Outlet />
      </main>
    </div>
  )
}
