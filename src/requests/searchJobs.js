const API_URL = process.env.NEXT_PUBLIC_API_URL;

const searchJobs = async (title, location, fullTimeOnly) => {
  try {
    const query = `/search/jobs?title=${title}&location=${location}&fullTimeOnly=${fullTimeOnly}`;
    const res = await fetch(`${API_URL}${query}`);
    const data = await res.json();
    if (res.ok) {
      return data.jobs;
    } else {
      throw new Error(`Error searching for jobs: ${data.message}`);
    }
  } catch (error) {
    throw new Error(`Error searching for jobs: ${error.message}`);
  }
};

export default searchJobs;
