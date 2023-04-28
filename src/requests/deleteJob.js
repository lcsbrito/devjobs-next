const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function deleteJob(id) {
  try {
    const res = await fetch(`${API_URL}/jobs/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (res.ok) {
      return data;
    } else {
      throw new Error(`Error deleting job: ${data.message}`);
    }
  } catch (error) {
    throw new Error(`Error deleting job: ${error.message}`);
  }
}
