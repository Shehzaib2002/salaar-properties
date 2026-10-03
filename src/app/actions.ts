"use server";

import { supabase } from "@/lib/supabase";

export async function submitEnquiry(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const projectId = formData.get("projectId") as string | null;

  if (!name || !phone || !message) {
    return { error: "Name, phone, and message are required." };
  }

  try {
    const { error } = await supabase
      .from("enquiries")
      .insert([
        {
          customer_name: name,
          email,
          phone,
          message,
          project_id: projectId || null,
          status: "new",
        },
      ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return { error: "Failed to submit enquiry. Please try again later." };
    }

    return { success: true };
  } catch (err) {
    console.error("Server action error:", err);
    return { error: "An unexpected error occurred." };
  }
}
