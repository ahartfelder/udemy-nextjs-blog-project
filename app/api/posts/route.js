import { redirect } from "next/navigation";

export function POST(request) {
  console.log("POST");
  redirect("/feed");
}
