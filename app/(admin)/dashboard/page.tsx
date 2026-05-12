import { redirect } from "next/navigation"

export default function page() {

  redirect("/dashboard/appointments")

  return (
    <div>Dashboard</div>
  )
}
