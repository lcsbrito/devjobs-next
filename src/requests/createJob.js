const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function createJob(job) {
  try {
    const res = await fetch(`${API_URL}/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });

    if (!res.ok) {
      throw new Error("Failed to create job");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create job");
  }
}
