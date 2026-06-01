import { useEffect } from 'react';
import '../campus-styles.css';
import '../campus-script.js';
// @ts-ignore
import { campusHtml } from '../campus-body.js';

export default function Dashboard() {
  useEffect(() => {
    const w = window as any;
    if (w.loadRecentApps) {
      w.loadRecentApps();
      w.loadActivity();
      w.loadStudents();
      w.loadJobs();
      w.loadApplications();
      w.loadInterviews();
      w.loadCompanies();
      w.loadATS();
      w.loadRecruiters();
      w.loadAssessments();
      w.loadMessages();
      w.loadNotifications();
      w.runPredictor();
    }
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: campusHtml }} />
  );
}
