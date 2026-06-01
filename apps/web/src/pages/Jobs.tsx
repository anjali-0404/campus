import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { jobsAPI, applicationsAPI } from '../services/api';
import type { RootState } from '../store';
import { MapPin, DollarSign, Calendar } from 'lucide-react';

interface Job {
  _id: string;
  title: string;
  company: { name: string };
  location: string;
  salary_min: number;
  salary_max: number;
  deadline: string;
}

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('open');
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchJobs();
  }, [filter]);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await jobsAPI.getAll({ status: filter });
      setJobs(response.data.data.jobs);
    } catch (error) {
      console.error('Failed to fetch jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (jobId: string) => {
    if (auth.user?.role !== 'student') {
      alert('Only students can apply for jobs');
      return;
    }

    const resumeUrl = prompt('Enter your resume URL:');
    if (!resumeUrl) return;

    try {
      await applicationsAPI.apply({
        job: jobId,
        resume_url: resumeUrl,
        cover_letter: '',
      });
      alert('Application submitted successfully!');
    } catch (error: any) {
      alert(error.response?.data?.message || 'Failed to submit application');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Campus Placements</h1>
            <div className="flex gap-4">
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </a>
              <button
                onClick={() => navigate('/my-applications')}
                className="text-gray-600 hover:text-gray-900"
              >
                My Applications
              </button>
              <button
                onClick={() => navigate('/logout')}
                className="text-red-600 hover:text-red-700 font-semibold"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="open">Open Jobs</option>
            <option value="closed">Closed Jobs</option>
            <option value="">All Jobs</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading jobs...</div>
        ) : jobs.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No jobs available</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div key={job._id} className="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.company.name}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    ₹{job.salary_min}L - ₹{job.salary_max}L
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Deadline: {new Date(job.deadline).toLocaleDateString()}
                  </div>
                </div>

                {auth.user?.role === 'student' && (
                  <button
                    onClick={() => handleApply(job._id)}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
                  >
                    Apply Now
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
