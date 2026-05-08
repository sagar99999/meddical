import { redirect } from "next/navigation"

export default function page() {

  redirect("/dashboard/doctors")

  return (
    <div>Dashboard</div>
  )
}
