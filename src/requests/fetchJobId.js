const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function fetchJobId(id) {
  console.log(process.env);
  try {
    const res = await fetch(`${API_URL}/jobs/${id}`);
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(`Error searching for job: ${data.message}`);
    }
  } catch (error) {
    throw new Error(`Error searching for job: ${error.message}`);
  }
}
