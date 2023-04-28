const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function fetchJobs(currentPage) {
  try {
    const res = await fetch(
      `http://localhost:3001/api/jobs?page=${currentPage}&limit=12`
    );
    const data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(`Error searching for jobs: ${data.message}`);
    }
  } catch (error) {
    throw new Error(`Error searching for jobs: ${error.message}`);
  }
}
