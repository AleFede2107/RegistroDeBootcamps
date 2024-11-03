import { redirect } from 'next/navigation'
import Navbar from '../components/Navbar/Navbar'
import BootcampList from '../components/BootcampList/BootcampList'
import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <>
    <Navbar></Navbar>
    <BootcampList></BootcampList>
  </>
}