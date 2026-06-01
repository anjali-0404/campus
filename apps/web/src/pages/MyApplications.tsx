import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { applicationsAPI } from '../services/api';
import type { RootState } from '../store';
import { Briefcase, CheckCircle, XCircle, Clock } from 'lucide-react';

interface Application {
  _id: string;
  job: { title: string; company: { name: string } };
  status: 'applied' | 'shortlisted' | 'rejected' | 'accepted';
  applied_at: string;
}

export default function MyApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const auth = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/login');
      return;
    }
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await applicationsAPI.getMyApplications();
      setApplications(response.data.data.applications);
    } catch (error) {
      console.error('Failed to fetch applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-600" />;
      case 'shortlisted':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
            <div className="flex gap-4">
              <a href="/jobs" className="text-gray-600 hover:text-gray-900">
                Browse Jobs
              </a>
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </a>
              <button
                onClick={() => navigate('/logout')}
                className="text-red-600 hover:text-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">Loading applications...</div>
        ) : applications.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>No applications yet</p>
            <a href="/jobs" className="text-indigo-600 hover:text-indigo-700 font-semibold">
              Browse jobs and apply now
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app._id} className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900">{app.job.title}</h3>
                  <p className="text-gray-600">{app.job.company.name}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Applied on {new Date(app.applied_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(app.status)}
                    <span className="font-semibold text-gray-700 capitalize">{app.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
