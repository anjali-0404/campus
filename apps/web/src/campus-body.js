export const campusHtml = `<h2 class="sr-only">PlaceWise Campus Placement Portal - Full dashboard for managing student placements, job listings, companies, and analytics</h2>

<div class="app">

<!-- SIDEBAR -->
<aside class="sidebar">
  <div class="logo">
    <div class="logo-icon">🎓</div>
    <div>
      <div class="logo-text">PlaceWise</div>
      <div class="logo-sub">PLACEMENT PORTAL</div>
    </div>
  </div>

  <div class="nav-section">
    <div class="nav-label">Overview</div>
    <div class="nav-item active" onclick="navigate('dashboard')">
      <span class="icon">⊞</span> Dashboard
    </div>
    <div class="nav-item" onclick="navigate('analytics')">
      <span class="icon">📊</span> Analytics
    </div>
  </div>

  <div class="nav-section" style="padding-top:16px">
    <div class="nav-label">Placement</div>
    <div class="nav-item" onclick="navigate('jobs')">
      <span class="icon">💼</span> Job Listings
      <span class="nav-badge">47</span>
    </div>
    <div class="nav-item" onclick="navigate('applications')">
      <span class="icon">📋</span> Applications
      <span class="nav-badge amber">12</span>
    </div>
    <div class="nav-item" onclick="navigate('interviews')">
      <span class="icon">🎯</span> Interviews
      <span class="nav-badge green">8</span>
    </div>
    <div class="nav-item" onclick="navigate('assessments')">
      <span class="icon">📝</span> Assessments
    </div>
  </div>

  <div class="nav-section" style="padding-top:16px">
    <div class="nav-label">People</div>
    <div class="nav-item" onclick="navigate('students')">
      <span class="icon">👥</span> Students
    </div>
    <div class="nav-item" onclick="navigate('companies')">
      <span class="icon">🏢</span> Companies
    </div>
    <div class="nav-item" onclick="navigate('recruiters')">
      <span class="icon">🤝</span> Recruiters
    </div>
  </div>

  <div class="nav-section" style="padding-top:16px">
    <div class="nav-label">AI Tools</div>
    <div class="nav-item" onclick="navigate('ats')">
      <span class="icon">🤖</span> ATS Analysis
    </div>
    <div class="nav-item" onclick="navigate('predictor')">
      <span class="icon">⚡</span> Predictor
    </div>
  </div>

  <div class="nav-section" style="padding-top:16px">
    <div class="nav-label">Communication</div>
    <div class="nav-item" onclick="navigate('messages')">
      <span class="icon">💬</span> Messages
      <span class="nav-badge">3</span>
    </div>
    <div class="nav-item" onclick="navigate('notifications')">
      <span class="icon">🔔</span> Notifications
    </div>
  </div>

  <div class="nav-section" style="padding-top:16px">
    <div class="nav-label">Admin</div>
    <div class="nav-item" onclick="navigate('settings')">
      <span class="icon">⚙️</span> Settings
    </div>
    <div class="nav-item" onclick="handleLogout()">
      <span class="icon">↩</span> Logout
    </div>
  </div>

  <div class="sidebar-bottom">
    <div class="user-card">
      <div class="avatar">TP</div>
      <div class="user-info">
        <div class="user-name">Training & Placement</div>
        <div class="user-role">Admin • VJTI Mumbai</div>
      </div>
    </div>
  </div>
</aside>

<!-- MAIN CONTENT -->
<div class="main">

<!-- TOPBAR -->
<div class="topbar" id="topbar">
  <div>
    <div class="page-title" id="page-title">Dashboard</div>
    <div class="breadcrumb">PlaceWise / <span id="breadcrumb-current">Overview</span></div>
  </div>
  <div class="topbar-actions">
    <div class="search-box" onclick="openSearch()">
      <span>🔍</span> Search students, jobs...
      <span style="margin-left:auto;font-size:10px;background:rgba(255,255,255,0.07);padding:2px 6px;border-radius:4px">⌘K</span>
    </div>
    <div class="icon-btn" onclick="navigate('notifications')">
      🔔
      <div class="notif-dot"></div>
    </div>
    <div class="icon-btn">⚙️</div>
    <button class="btn-primary" id="topbar-action" onclick="topbarAction()">
      + Post Job
    </button>
  </div>
</div>

<!-- PAGE: DASHBOARD -->
<div class="page active content" id="page-dashboard">

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon" style="background:rgba(99,120,255,0.12)">👥</div>
      <div class="stat-value gradient-text">4,892</div>
      <div class="stat-label">Total Students</div>
      <div class="stat-change up">↑ 12% vs last year</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:rgba(6,214,160,0.12)">✅</div>
      <div class="stat-value" style="color:var(--accent3)">2,341</div>
      <div class="stat-label">Placed Students</div>
      <div class="stat-change up">↑ 8.3% vs last year</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:rgba(245,158,11,0.12)">🏢</div>
      <div class="stat-value" style="color:var(--accent4)">127</div>
      <div class="stat-label">Companies Hired</div>
      <div class="stat-change up">↑ 23 new this season</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:rgba(139,92,246,0.12)">💰</div>
      <div class="stat-value" style="color:var(--accent2)">₹18.4L</div>
      <div class="stat-label">Avg Package</div>
      <div class="stat-change up">↑ ₹2.1L vs last year</div>
    </div>
  </div>

  <!-- CTA BANNER -->
  <div class="cta-banner">
    <div class="cta-text">
      <h3>🤖 AI Placement Predictor is ready</h3>
      <p>Run AI analysis on 4,892 students to predict placement outcomes and optimize job matching</p>
    </div>
    <button class="btn-primary" onclick="navigate('predictor')">Run Analysis →</button>
  </div>

  <!-- CHARTS ROW -->
  <div class="grid-3">
    <div class="card">
      <div class="card-header">
        <div class="card-title">Placement Pipeline 2024–25</div>
        <div class="tabs" style="margin:0;background:transparent;padding:0">
          <button class="tab active" style="padding:4px 10px;font-size:11px">Monthly</button>
          <button class="tab" style="padding:4px 10px;font-size:11px">Branch</button>
        </div>
      </div>
      <div class="card-body">
        <div class="chart-placeholder">
          <div class="bar-group">
            <div class="bar-wrap">
              <div class="bar" style="height:55%;background:rgba(99,120,255,0.5)"></div>
              <div class="bar" style="height:45%;background:rgba(6,214,160,0.5)"></div>
            </div>
            <div class="bar-label">Aug</div>
          </div>
          <div class="bar-group">
            <div class="bar-wrap">
              <div class="bar" style="height:70%;background:rgba(99,120,255,0.5)"></div>
              <div class="bar" style="height:60%;background:rgba(6,214,160,0.5)"></div>
            </div>
            <div class="bar-label">Sep</div>
          </div>
          <div class="bar-group">
            <div class="bar-wrap">
              <div class="bar" style="height:85%;background:rgba(99,120,255,0.5)"></div>
              <div class="bar" style="height:72%;background:rgba(6,214,160,0.5)"></div>
            </div>
            <div class="bar-label">Oct</div>
          </div>
          <div class="bar-group">
            <div class="bar-wrap">
              <div class="bar" style="height:95%;background:var(--accent)"></div>
              <div class="bar" style="height:88%;background:var(--accent3)"></div>
            </div>
            <div class="bar-label">Nov</div>
          </div>
          <div class="bar-group">
            <div class="bar-wrap">
              <div class="bar" style="height:75%;background:rgba(99,120,255,0.5)"></div>
              <div class="bar" style="height:65%;background:rgba(6,214,160,0.5)"></div>
            </div>
            <div class="bar-label">Dec</div>
          </div>
          <div class="bar-group">
            <div class="bar-wrap">
              <div class="bar" style="height:60%;background:rgba(99,120,255,0.3)"></div>
              <div class="bar" style="height:50%;background:rgba(6,214,160,0.3)"></div>
            </div>
            <div class="bar-label">Jan</div>
          </div>
        </div>
        <div style="display:flex;gap:16px;font-size:11px;color:var(--text2)">
          <span><span style="display:inline-block;width:10px;height:10px;background:var(--accent);border-radius:2px;margin-right:4px"></span>Applied</span>
          <span><span style="display:inline-block;width:10px;height:10px;background:var(--accent3);border-radius:2px;margin-right:4px"></span>Placed</span>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title">Branch Placement %</div>
        <span class="badge badge-green">2024-25</span>
      </div>
      <div class="card-body">
        <div style="display:flex;flex-direction:column;gap:10px">
          <div>
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
              <span>Computer Engg.</span><span style="color:var(--accent3);font-weight:600">94%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:94%"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
              <span>Electronics</span><span style="color:var(--accent3);font-weight:600">87%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:87%"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
              <span>Mechanical</span><span style="color:var(--accent4);font-weight:600">72%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:72%;background:linear-gradient(90deg,var(--accent4),var(--accent2))"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
              <span>Civil</span><span style="color:var(--accent4);font-weight:600">65%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:65%;background:linear-gradient(90deg,var(--accent4),var(--accent2))"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
              <span>Chemical</span><span style="color:var(--text2);font-weight:600">58%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:58%;background:linear-gradient(90deg,var(--accent2),#a855f7)"></div></div>
          </div>
          <div>
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px">
              <span>IT</span><span style="color:var(--accent3);font-weight:600">91%</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:91%"></div></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- BOTTOM ROW -->
  <div class="grid-2">

    <!-- RECENT APPLICATIONS -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">Recent Applications</div>
        <button class="btn-secondary" style="font-size:11px;padding:5px 10px" onclick="navigate('applications')">View All →</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Company</th>
              <th>Role</th>
              <th>Status</th>
              <th>Package</th>
            </tr>
          </thead>
          <tbody id="recent-apps">
          </tbody>
        </table>
      </div>
    </div>

    <!-- RIGHT COLUMN -->
    <div style="display:flex;flex-direction:column;gap:16px">

      <!-- PIPELINE -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">Application Pipeline</div>
        </div>
        <div class="card-body">
          <div class="pipeline">
            <div class="pipe-stage active">
              <span class="pipe-num">1,024</span>Applied
            </div>
            <div class="pipe-stage">
              <span class="pipe-num">487</span>Shortlisted
            </div>
            <div class="pipe-stage">
              <span class="pipe-num">213</span>Interview
            </div>
            <div class="pipe-stage active" style="background:rgba(6,214,160,0.08);border-color:rgba(6,214,160,0.25);color:var(--accent3)">
              <span class="pipe-num" style="color:var(--accent3)">156</span>Offered
            </div>
          </div>
          <div style="margin-top:12px;font-size:11px;color:var(--text2)">Overall conversion: <strong style="color:var(--accent3)">15.2%</strong> · Avg time: <strong style="color:var(--text)">18 days</strong></div>
        </div>
      </div>

      <!-- TOP COMPANIES -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">Top Hiring Companies</div>
          <button class="btn-secondary" style="font-size:11px;padding:5px 10px" onclick="navigate('companies')">All →</button>
        </div>
        <div class="card-body" style="padding-top:8px">
          <div class="company-item">
            <div class="company-logo" style="background:rgba(99,120,255,0.12);color:var(--accent)">G</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:500">Google</div>
              <div style="font-size:11px;color:var(--text2)">12 offers · ₹32–42L</div>
            </div>
            <span class="badge badge-green">SWE</span>
          </div>
          <div class="company-item">
            <div class="company-logo" style="background:rgba(245,158,11,0.12);color:var(--accent4)">M</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:500">Microsoft</div>
              <div style="font-size:11px;color:var(--text2)">9 offers · ₹28–38L</div>
            </div>
            <span class="badge badge-blue">SDE-1</span>
          </div>
          <div class="company-item">
            <div class="company-logo" style="background:rgba(239,68,68,0.12);color:var(--accent5)">A</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:500">Amazon</div>
              <div style="font-size:11px;color:var(--text2)">15 offers · ₹25–36L</div>
            </div>
            <span class="badge badge-amber">SDE-1</span>
          </div>
          <div class="company-item">
            <div class="company-logo" style="background:rgba(6,214,160,0.12);color:var(--accent3)">F</div>
            <div style="flex:1">
              <div style="font-size:13px;font-weight:500">Flipkart</div>
              <div style="font-size:11px;color:var(--text2)">8 offers · ₹22–30L</div>
            </div>
            <span class="badge badge-purple">Data Eng</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- ACTIVITY + QUICK ACTIONS -->
  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">Recent Activity</div></div>
      <div class="card-body" id="activity-feed"></div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Quick Actions</div></div>
      <div class="card-body">
        <div class="quick-actions">
          <div class="qa-btn" onclick="openJobModal()">
            <span class="qa-icon">📤</span> Post New Job
          </div>
          <div class="qa-btn" onclick="navigate('students')">
            <span class="qa-icon">👤</span> Add Student
          </div>
          <div class="qa-btn" onclick="navigate('interviews')">
            <span class="qa-icon">📅</span> Schedule Interview
          </div>
          <div class="qa-btn" onclick="navigate('ats')">
            <span class="qa-icon">🤖</span> Run ATS Scan
          </div>
          <div class="qa-btn" onclick="navigate('companies')">
            <span class="qa-icon">🏢</span> Add Company
          </div>
          <div class="qa-btn" onclick="navigate('analytics')">
            <span class="qa-icon">📊</span> Export Report
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<!-- PAGE: STUDENTS -->
<div class="page content" id="page-students">
  <div class="filter-row">
    <span class="filter-chip active">All (4,892)</span>
    <span class="filter-chip" onclick="toggleChip(this)">Placed (2,341)</span>
    <span class="filter-chip" onclick="toggleChip(this)">Pending (1,876)</span>
    <span class="filter-chip" onclick="toggleChip(this)">Dream Offer (234)</span>
    <span class="filter-chip" onclick="toggleChip(this)">No Offers (441)</span>
    <div style="margin-left:auto;display:flex;gap:8px">
      <select class="form-input" style="width:auto;padding:5px 10px;font-size:12px">
        <option>All Branches</option>
        <option>Computer Engg.</option>
        <option>IT</option>
        <option>Electronics</option>
        <option>Mechanical</option>
      </select>
      <button class="btn-primary" onclick="openJobModal()">+ Add Student</button>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <div class="card-title">Student Directory</div>
      <div style="display:flex;gap:8px;align-items:center">
        <span style="font-size:12px;color:var(--text2)">Showing 1–20 of 4,892</span>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>Branch</th>
            <th>CGPA</th>
            <th>Skills</th>
            <th>Applications</th>
            <th>Status</th>
            <th>Package</th>
            <th>AI Score</th>
          </tr>
        </thead>
        <tbody id="student-table"></tbody>
      </table>
    </div>
    <div style="padding:12px 20px;border-top:1px solid var(--border);display:flex;gap:8px;justify-content:flex-end">
      <button class="btn-secondary" style="font-size:12px;padding:6px 12px">← Prev</button>
      <button class="btn-secondary" style="font-size:12px;padding:6px 12px;background:rgba(99,120,255,0.1);border-color:var(--accent);color:var(--accent)">1</button>
      <button class="btn-secondary" style="font-size:12px;padding:6px 12px">2</button>
      <button class="btn-secondary" style="font-size:12px;padding:6px 12px">3</button>
      <button class="btn-secondary" style="font-size:12px;padding:6px 12px">Next →</button>
    </div>
  </div>
</div>

<!-- PAGE: JOBS -->
<div class="page content" id="page-jobs">
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon" style="background:rgba(99,120,255,0.12)">💼</div>
      <div class="stat-value">47</div>
      <div class="stat-label">Active Jobs</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:rgba(6,214,160,0.12)">🎯</div>
      <div class="stat-value" style="color:var(--accent3)">1,024</div>
      <div class="stat-label">Total Applications</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:rgba(245,158,11,0.12)">⏳</div>
      <div class="stat-value" style="color:var(--accent4)">18</div>
      <div class="stat-label">Closing Soon</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon" style="background:rgba(239,68,68,0.12)">✅</div>
      <div class="stat-value" style="color:var(--accent5)">156</div>
      <div class="stat-label">Offers Made</div>
    </div>
  </div>

  <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
    <span class="filter-chip active">All Roles</span>
    <span class="filter-chip" onclick="toggleChip(this)">Software</span>
    <span class="filter-chip" onclick="toggleChip(this)">Data Science</span>
    <span class="filter-chip" onclick="toggleChip(this)">Finance</span>
    <span class="filter-chip" onclick="toggleChip(this)">Management</span>
    <span class="filter-chip" onclick="toggleChip(this)">Core Engg.</span>
    <div style="margin-left:auto">
      <button class="btn-primary" onclick="openJobModal()">+ Post Job</button>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px" id="job-cards"></div>
</div>

<!-- PAGE: APPLICATIONS -->
<div class="page content" id="page-applications">
  <div class="tabs">
    <button class="tab active">All Applications</button>
    <button class="tab" onclick="this.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));this.classList.add('active')">Pending Review</button>
    <button class="tab" onclick="this.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));this.classList.add('active')">Shortlisted</button>
    <button class="tab" onclick="this.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));this.classList.add('active')">Offered</button>
    <button class="tab" onclick="this.parentElement.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));this.classList.add('active')">Rejected</button>
  </div>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Applications (1,024)</div>
      <div style="display:flex;gap:8px">
        <button class="btn-secondary" style="font-size:12px;padding:6px 12px" onclick="mockAction('Exporting data to CSV...')">Export CSV</button>
        <button class="btn-primary" style="font-size:12px;padding:6px 12px" onclick="mockAction('Bulk action initiated for selected applications.')">Bulk Action</button>
      </div>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" style="accent-color:var(--accent)"></th>
            <th>Student</th><th>Company</th><th>Role</th><th>Applied</th>
            <th>Round</th><th>Status</th><th>Package</th><th>Actions</th>
          </tr>
        </thead>
        <tbody id="apps-table"></tbody>
      </table>
    </div>
  </div>
</div>

<!-- PAGE: INTERVIEWS -->
<div class="page content" id="page-interviews">
  <div class="stats-grid">
    <div class="stat-card"><div class="stat-icon" style="background:rgba(99,120,255,0.12)">📅</div><div class="stat-value">24</div><div class="stat-label">Today</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(6,214,160,0.12)">✅</div><div class="stat-value" style="color:var(--accent3)">8</div><div class="stat-label">Cleared</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(245,158,11,0.12)">⏰</div><div class="stat-value" style="color:var(--accent4)">12</div><div class="stat-label">Upcoming (7 days)</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(239,68,68,0.12)">❌</div><div class="stat-value" style="color:var(--accent5)">4</div><div class="stat-label">Rescheduled</div></div>
  </div>
  <div class="card">
    <div class="card-header"><div class="card-title">Interview Schedule</div>
    <button class="btn-primary" onclick="openJobModal()">+ Schedule Interview</button>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Student</th><th>Company</th><th>Round</th><th>Date & Time</th><th>Mode</th><th>Interviewer</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody id="interview-table"></tbody>
      </table>
    </div>
  </div>
</div>

<!-- PAGE: COMPANIES -->
<div class="page content" id="page-companies">
  <div class="stats-grid">
    <div class="stat-card"><div class="stat-icon" style="background:rgba(99,120,255,0.12)">🏢</div><div class="stat-value">127</div><div class="stat-label">Partner Companies</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(6,214,160,0.12)">🆕</div><div class="stat-value" style="color:var(--accent3)">23</div><div class="stat-label">New This Season</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(245,158,11,0.12)">💰</div><div class="stat-value" style="color:var(--accent4)">₹42L</div><div class="stat-label">Highest Package</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(139,92,246,0.12)">📍</div><div class="stat-value" style="color:var(--accent2)">18</div><div class="stat-label">Cities</div></div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px" id="company-grid"></div>
</div>

<!-- PAGE: ATS ANALYSIS -->
<div class="page content" id="page-ats">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px">
    <div class="card">
      <div class="card-header"><div class="card-title">🤖 Resume ATS Scanner</div></div>
      <div class="card-body">
        <div style="border:2px dashed var(--border2);border-radius:10px;padding:32px;text-align:center;margin-bottom:16px;cursor:pointer" onclick="runATS()">
          <div style="font-size:32px;margin-bottom:8px">📄</div>
          <div style="font-size:14px;font-weight:500;margin-bottom:4px">Drop resume here or click to upload</div>
          <div style="font-size:12px;color:var(--text2)">PDF, DOC, DOCX · Max 5MB</div>
        </div>
        <div class="form-group">
          <label class="form-label">Target Job Role</label>
          <input class="form-input" placeholder="e.g. Software Engineer at Google" />
        </div>
        <button class="btn-primary" style="width:100%;justify-content:center" onclick="runATS()">Analyze Resume with AI →</button>
      </div>
    </div>
    <div class="card" id="ats-results">
      <div class="card-header"><div class="card-title">Analysis Results</div><span class="badge badge-green" id="ats-score-badge">Score: 78/100</span></div>
      <div class="card-body">
        <div style="display:flex;align-items:center;gap:20px;margin-bottom:20px">
          <div class="ai-score-ring">
            <div class="ai-score-inner">
              <span class="ai-score-val gradient-text">78</span>
              <span class="ai-score-lbl">/100</span>
            </div>
          </div>
          <div>
            <div style="font-size:14px;font-weight:500;margin-bottom:4px">Good Match</div>
            <div style="font-size:12px;color:var(--text2)">Resume passes ATS filters</div>
            <div style="font-size:12px;color:var(--accent);margin-top:4px">72% keyword match</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px"><span>Keywords Match</span><span style="color:var(--accent3)">72%</span></div><div class="progress-bar"><div class="progress-fill" style="width:72%"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px"><span>Skills Relevance</span><span style="color:var(--accent3)">85%</span></div><div class="progress-bar"><div class="progress-fill" style="width:85%"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px"><span>Experience Format</span><span style="color:var(--accent4)">68%</span></div><div class="progress-bar"><div class="progress-fill" style="width:68%;background:linear-gradient(90deg,var(--accent4),var(--accent2))"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:3px"><span>Education Section</span><span style="color:var(--accent3)">90%</span></div><div class="progress-bar"><div class="progress-fill" style="width:90%"></div></div></div>
        </div>
        <div style="margin-top:16px;padding:12px;background:rgba(99,120,255,0.06);border-radius:8px;border:1px solid var(--border)">
          <div style="font-size:11px;font-weight:600;color:var(--accent);margin-bottom:6px">AI SUGGESTIONS</div>
          <div style="font-size:12px;color:var(--text2);line-height:1.6">• Add quantified metrics to experience bullets<br>• Include "React.js", "System Design" keywords<br>• Improve action verbs in project descriptions</div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header"><div class="card-title">Batch ATS Analysis — All Students</div><button class="btn-primary" onclick="runATS()">Run Batch Scan</button></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Student</th><th>Target Role</th><th>ATS Score</th><th>Keywords</th><th>Recommendation</th><th>Action</th></tr></thead>
      <tbody id="ats-table"></tbody>
    </table></div>
  </div>
</div>

<!-- PAGE: PREDICTOR -->
<div class="page content" id="page-predictor">
  <div style="display:grid;grid-template-columns:1fr 2fr;gap:20px;margin-bottom:20px">
    <div class="card">
      <div class="card-header"><div class="card-title">⚡ Predict Placement</div></div>
      <div class="card-body">
        <div class="form-group"><label class="form-label">CGPA</label><input class="form-input" type="number" placeholder="8.5" id="pred-cgpa" /></div>
        <div class="form-group"><label class="form-label">Branch</label>
          <select class="form-input" id="pred-branch">
            <option>Computer Engineering</option><option>IT</option><option>Electronics</option><option>Mechanical</option>
          </select>
        </div>
        <div class="form-group"><label class="form-label">Skills (top 3)</label><input class="form-input" placeholder="Python, React, SQL" id="pred-skills" /></div>
        <div class="form-group"><label class="form-label">Internships</label><input class="form-input" type="number" placeholder="2" id="pred-internships" /></div>
        <div class="form-group"><label class="form-label">Backlogs</label><input class="form-input" type="number" placeholder="0" /></div>
        <button class="btn-primary" style="width:100%;justify-content:center" onclick="runPredictor()">Predict →</button>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Prediction Results</div></div>
      <div class="card-body" id="predictor-results">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:20px">
          <div style="background:rgba(6,214,160,0.08);border:1px solid rgba(6,214,160,0.2);border-radius:10px;padding:16px;text-align:center">
            <div style="font-family:'Syne',sans-serif;font-size:28px;font-weight:800;color:var(--accent3)">87%</div>
            <div style="font-size:11px;color:var(--text2)">Placement Probability</div>
          </div>
          <div style="background:rgba(99,120,255,0.08);border:1px solid rgba(99,120,255,0.2);border-radius:10px;padding:16px;text-align:center">
            <div style="font-family:'Syne',sans-serif;font-size:28px;font-weight:800;color:var(--accent)">₹22L</div>
            <div style="font-size:11px;color:var(--text2)">Expected Package</div>
          </div>
          <div style="background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.2);border-radius:10px;padding:16px;text-align:center">
            <div style="font-family:'Syne',sans-serif;font-size:28px;font-weight:800;color:var(--accent4)">14</div>
            <div style="font-size:11px;color:var(--text2)">Matching Companies</div>
          </div>
        </div>
        <div style="font-size:13px;font-weight:600;margin-bottom:12px">Recommended Companies</div>
        <div style="display:flex;flex-direction:column;gap:8px" id="pred-companies"></div>
      </div>
    </div>
  </div>
</div>

<!-- PAGE: ANALYTICS -->
<div class="page content" id="page-analytics">
  <div class="stats-grid">
    <div class="stat-card"><div class="stat-icon" style="background:rgba(99,120,255,0.12)">📈</div><div class="stat-value gradient-text">47.8%</div><div class="stat-label">Overall Placement Rate</div><div class="stat-change up">↑ 3.2% vs last year</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(6,214,160,0.12)">🏆</div><div class="stat-value" style="color:var(--accent3)">₹42L</div><div class="stat-label">Highest Package</div><div class="stat-change up">Google · SWE-2</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(245,158,11,0.12)">⭐</div><div class="stat-value" style="color:var(--accent4)">127</div><div class="stat-label">Recruiters Active</div><div class="stat-change up">↑ 23 new</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(139,92,246,0.12)">📅</div><div class="stat-value" style="color:var(--accent2)">156</div><div class="stat-label">Offers This Month</div><div class="stat-change up">↑ 18% vs last month</div></div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-header"><div class="card-title">Package Distribution</div></div>
      <div class="card-body">
        <div style="display:flex;flex-direction:column;gap:10px">
          <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>>₹40L (Dream)</span><span style="color:var(--accent3)">52 students (2.2%)</span></div><div class="progress-bar"><div class="progress-fill" style="width:2.2%;min-width:8px"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>₹20–40L</span><span style="color:var(--accent)">487 students (20.8%)</span></div><div class="progress-bar"><div class="progress-fill" style="width:20.8%"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>₹12–20L</span><span style="color:var(--accent4)">1,245 students (53.2%)</span></div><div class="progress-bar"><div class="progress-fill" style="width:53.2%;background:linear-gradient(90deg,var(--accent4),var(--accent2))"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px"><span>₹6–12L</span><span style="color:var(--text2)">557 students (23.8%)</span></div><div class="progress-bar"><div class="progress-fill" style="width:23.8%;background:linear-gradient(90deg,var(--accent2),#a855f7)"></div></div></div>
        </div>
        <div style="margin-top:16px;padding:12px;background:var(--bg2);border-radius:8px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;text-align:center">
          <div><div style="font-family:'Syne',sans-serif;font-weight:700;font-size:16px;color:var(--accent3)">₹18.4L</div><div style="font-size:10px;color:var(--text2)">Average</div></div>
          <div><div style="font-family:'Syne',sans-serif;font-weight:700;font-size:16px;color:var(--accent)">₹15.2L</div><div style="font-size:10px;color:var(--text2)">Median</div></div>
          <div><div style="font-family:'Syne',sans-serif;font-weight:700;font-size:16px;color:var(--accent2)">₹42L</div><div style="font-size:10px;color:var(--text2)">Highest</div></div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Year-on-Year Comparison</div></div>
      <div class="card-body">
        <div class="chart-placeholder" style="height:160px">
          <div class="bar-group">
            <div class="bar-wrap" style="height:120px">
              <div class="bar" style="height:60%;background:rgba(99,120,255,0.3)"></div>
              <div class="bar" style="height:65%;background:rgba(6,214,160,0.3)"></div>
            </div>
            <div class="bar-label">2021–22</div>
          </div>
          <div class="bar-group">
            <div class="bar-wrap" style="height:120px">
              <div class="bar" style="height:72%;background:rgba(99,120,255,0.4)"></div>
              <div class="bar" style="height:76%;background:rgba(6,214,160,0.4)"></div>
            </div>
            <div class="bar-label">2022–23</div>
          </div>
          <div class="bar-group">
            <div class="bar-wrap" style="height:120px">
              <div class="bar" style="height:83%;background:rgba(99,120,255,0.5)"></div>
              <div class="bar" style="height:86%;background:rgba(6,214,160,0.5)"></div>
            </div>
            <div class="bar-label">2023–24</div>
          </div>
          <div class="bar-group">
            <div class="bar-wrap" style="height:120px">
              <div class="bar" style="height:95%;background:var(--accent)"></div>
              <div class="bar" style="height:92%;background:var(--accent3)"></div>
            </div>
            <div class="bar-label" style="color:var(--accent);font-weight:600">2024–25*</div>
          </div>
        </div>
        <div style="display:flex;gap:16px;font-size:11px;color:var(--text2);margin-top:4px">
          <span><span style="display:inline-block;width:10px;height:10px;background:var(--accent);border-radius:2px;margin-right:4px"></span>Placement %</span>
          <span><span style="display:inline-block;width:10px;height:10px;background:var(--accent3);border-radius:2px;margin-right:4px"></span>Avg Package</span>
          <span style="margin-left:auto;color:var(--accent)">* Ongoing</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- PAGE: MESSAGES -->
<div class="page content" id="page-messages">
  <div style="display:grid;grid-template-columns:280px 1fr;gap:0;height:calc(100vh - 110px);background:var(--surface);border:1px solid var(--border);border-radius:14px;overflow:hidden">
    <div style="border-right:1px solid var(--border)">
      <div style="padding:14px;border-bottom:1px solid var(--border)">
        <input class="form-input" placeholder="Search messages..." style="font-size:12px" />
      </div>
      <div id="message-list"></div>
    </div>
    <div>
      <div style="padding:14px 18px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:10px">
        <div class="avatar" style="width:34px;height:34px;font-size:13px">R</div>
        <div><div style="font-size:13px;font-weight:500">Rahul Sharma — Google Recruiter</div><div style="font-size:11px;color:var(--accent3)">● Online</div></div>
      </div>
      <div style="padding:16px;height:calc(100% - 130px);overflow-y:auto;display:flex;flex-direction:column;gap:10px" id="chat-messages"></div>
      <div style="padding:12px 14px;border-top:1px solid var(--border);display:flex;gap:8px">
        <input class="form-input" placeholder="Type a message..." style="flex:1;font-size:13px" />
        <button class="btn-primary" onclick="mockAction('Message sent!')">Send</button>
      </div>
    </div>
  </div>
</div>

<!-- PAGE: NOTIFICATIONS -->
<div class="page content" id="page-notifications">
  <div class="card">
    <div class="card-header"><div class="card-title">Notifications</div>
      <button class="btn-secondary" style="font-size:12px;padding:6px 12px" onclick="mockAction('All notifications marked as read.')">Mark All Read</button>
    </div>
    <div id="notif-list"></div>
  </div>
</div>

<!-- PAGE: SETTINGS -->
<div class="page content" id="page-settings">
  <div style="display:grid;grid-template-columns:220px 1fr;gap:20px">
    <div class="card" style="height:fit-content">
      <div class="card-body" style="padding:8px">
        <div style="display:flex;flex-direction:column;gap:2px">
          <div class="nav-item active" style="font-size:13px">👤 Profile</div>
          <div class="nav-item" style="font-size:13px">🔒 Security</div>
          <div class="nav-item" style="font-size:13px">🔔 Notifications</div>
          <div class="nav-item" style="font-size:13px">🎨 Appearance</div>
          <div class="nav-item" style="font-size:13px">🏫 Institute Info</div>
          <div class="nav-item" style="font-size:13px">📧 Email Config</div>
          <div class="nav-item" style="font-size:13px">🔗 Integrations</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Institute Profile</div><button class="btn-primary">Save Changes</button></div>
      <div class="card-body">
        <div class="form-row">
          <div class="form-group"><label class="form-label">Institute Name</label><input class="form-input" value="VJTI Mumbai" /></div>
          <div class="form-group"><label class="form-label">Affiliation</label><input class="form-input" value="Autonomous (Mumbai University)" /></div>
        </div>
        <div class="form-row">
          <div class="form-group"><label class="form-label">T&P Head</label><input class="form-input" value="Dr. A. K. Sharma" /></div>
          <div class="form-group"><label class="form-label">Contact Email</label><input class="form-input" value="placement@vjti.ac.in" /></div>
        </div>
        <div class="form-group"><label class="form-label">Institute Address</label><input class="form-input" value="H.R. Mahajani Marg, Matunga, Mumbai - 400019" /></div>
        <div class="form-row">
          <div class="form-group"><label class="form-label">Academic Year</label>
            <select class="form-input"><option>2024–25</option><option>2025–26</option></select>
          </div>
          <div class="form-group"><label class="form-label">Placement Season</label>
            <select class="form-input"><option>On-Campus</option><option>Off-Campus</option></select>
          </div>
        </div>
        <div style="margin-top:8px;padding:14px;background:rgba(6,214,160,0.06);border:1px solid rgba(6,214,160,0.15);border-radius:8px;font-size:13px">
          <span style="color:var(--accent3);font-weight:600">✓ All changes auto-saved</span>
          <span style="color:var(--text2);margin-left:8px">Last saved: Today, 2:34 PM</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- PAGE: RECRUITERS -->
<div class="page content" id="page-recruiters">
  <div class="card">
    <div class="card-header"><div class="card-title">Recruiter Directory (50)</div><button class="btn-primary" onclick="openJobModal()">+ Add Recruiter</button></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Name</th><th>Company</th><th>Role</th><th>Email</th><th>Jobs Posted</th><th>Offers Made</th><th>Status</th></tr></thead>
      <tbody id="recruiter-table"></tbody>
    </table></div>
  </div>
</div>

<!-- PAGE: ASSESSMENTS -->
<div class="page content" id="page-assessments">
  <div class="stats-grid">
    <div class="stat-card"><div class="stat-icon" style="background:rgba(99,120,255,0.12)">📝</div><div class="stat-value">300</div><div class="stat-label">Total Assessments</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(6,214,160,0.12)">✅</div><div class="stat-value" style="color:var(--accent3)">214</div><div class="stat-label">Completed</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(245,158,11,0.12)">⏳</div><div class="stat-value" style="color:var(--accent4)">67</div><div class="stat-label">Ongoing</div></div>
    <div class="stat-card"><div class="stat-icon" style="background:rgba(139,92,246,0.12)">📊</div><div class="stat-value" style="color:var(--accent2)">74%</div><div class="stat-label">Avg Score</div></div>
  </div>
  <div class="card">
    <div class="card-header"><div class="card-title">Assessment List</div><button class="btn-primary" onclick="openJobModal()">+ Create Assessment</button></div>
    <div class="table-wrap"><table>
      <thead><tr><th>Title</th><th>Company</th><th>Type</th><th>Participants</th><th>Avg Score</th><th>Duration</th><th>Status</th><th>Action</th></tr></thead>
      <tbody id="assessment-table"></tbody>
    </table></div>
  </div>
</div>

</div><!-- end main -->
</div><!-- end app -->

<!-- JOB POST MODAL -->
<div class="modal-overlay" id="job-modal">
  <div class="modal">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div>
        <div class="modal-title">Post New Job</div>
        <div class="modal-sub" style="margin:0">Fill in the job details for campus recruitment</div>
      </div>
      <button onclick="closeModal()" style="background:none;border:none;color:var(--text2);cursor:pointer;font-size:20px">✕</button>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Job Title</label><input class="form-input" placeholder="e.g. Software Engineer" /></div>
      <div class="form-group"><label class="form-label">Company</label><input class="form-input" placeholder="e.g. Google" /></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">CTC (LPA)</label><input class="form-input" placeholder="e.g. 18–24" /></div>
      <div class="form-group"><label class="form-label">Location</label><input class="form-input" placeholder="e.g. Bengaluru, Remote" /></div>
    </div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Eligible Branches</label>
        <select class="form-input"><option>All Branches</option><option>CS + IT</option><option>CS + IT + EC</option></select>
      </div>
      <div class="form-group"><label class="form-label">Min CGPA</label><input class="form-input" type="number" placeholder="6.0" /></div>
    </div>
    <div class="form-group"><label class="form-label">Job Description</label><textarea class="form-input" rows="3" placeholder="Role responsibilities, skills required..."></textarea></div>
    <div class="form-row">
      <div class="form-group"><label class="form-label">Application Deadline</label><input class="form-input" type="date" /></div>
      <div class="form-group"><label class="form-label">Interview Mode</label>
        <select class="form-input"><option>Online</option><option>On-Campus</option><option>Off-Campus</option></select>
      </div>
    </div>
    <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:8px">
      <button class="btn-secondary" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" onclick="closeModal()">Post Job ✓</button>
    </div>
  </div>
</div>`;
