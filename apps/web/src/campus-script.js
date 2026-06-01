const pages = ['dashboard','students','jobs','applications','interviews','companies','ats','predictor','analytics','messages','notifications','settings','recruiters','assessments'];
const pageTitles = {
  dashboard:'Dashboard',students:'Students',jobs:'Job Listings',applications:'Applications',
  interviews:'Interviews',companies:'Companies',ats:'ATS Analysis',predictor:'Placement Predictor',
  analytics:'Analytics',messages:'Messages',notifications:'Notifications',settings:'Settings',
  recruiters:'Recruiters',assessments:'Assessments'
};
const topbarActions = {
  dashboard:'+ Post Job',students:'+ Add Student',jobs:'+ Post Job',applications:'Bulk Action',
  interviews:'+ Schedule',companies:'+ Add Company',ats:'Run Batch Scan',predictor:'Run Predictor',
  analytics:'Export Report',messages:'New Message',notifications:'Mark All Read',settings:'Save Changes',
  recruiters:'+ Add Recruiter',assessments:'+ Create'
};

function navigate(page) {
  pages.forEach(p => {
    document.getElementById('page-'+p).classList.remove('active');
    document.querySelectorAll('.nav-item').forEach(n => {
      if(n.textContent.trim().toLowerCase().includes(pageTitles[p]?.toLowerCase().split(' ')[0]?.toLowerCase())) {
        n.classList.remove('active');
      }
    });
  });
  document.getElementById('page-'+page).classList.add('active');
  document.getElementById('page-title').textContent = pageTitles[page];
  document.getElementById('breadcrumb-current').textContent = pageTitles[page];
  const btn = document.getElementById('topbar-action');
  btn.textContent = topbarActions[page] || '+ New';
  document.querySelectorAll('.nav-item').forEach(n => {
    if(n.onclick && n.onclick.toString().includes("'"+page+"'")) n.classList.add('active');
  });
  window.scrollTo(0,0);
}

function toggleChip(el) {
  el.parentElement.querySelectorAll('.filter-chip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
}

function openJobModal() { document.getElementById('job-modal').classList.add('open'); }
function closeModal() { document.getElementById('job-modal').classList.remove('open'); }
function topbarAction() { openJobModal(); }
function openSearch() { mockAction('Search opened'); }

function mockAction(msg) {
  alert(msg || 'Action executed successfully!');
}

function handleLogout() {
  if(confirm('Log out of PlaceWise?')) alert('Logged out successfully.');
}

function runATS() {
  const scores = [72,85,78,63,91,55,88,74];
  const s = scores[Math.floor(Math.random()*scores.length)];
  document.getElementById('ats-score-badge').textContent = 'Score: '+s+'/100';
  mockAction('ATS Analysis complete! New score: ' + s);
}

function runPredictor() {
  const companies = ['Google','Microsoft','Amazon','Flipkart','Infosys','TCS','Goldman Sachs','Deloitte'];
  const el = document.getElementById('pred-companies');
  el.innerHTML = companies.slice(0,5).map((c,i) => `
    <div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--bg2);border:1px solid var(--border);border-radius:8px">
      <div style="width:8px;height:8px;border-radius:50%;background:${i<2?'var(--accent3)':i<4?'var(--accent)':'var(--text2)'}"></div>
      <div style="flex:1;font-size:13px;font-weight:500">${c}</div>
      <span class="badge ${i<2?'badge-green':i<4?'badge-blue':'badge-amber'}">${i<2?'High Match':i<4?'Good Match':'Possible'}</span>
      <span style="font-size:12px;color:var(--text2)">₹${(22-i*2)}–${(28-i*2)}L</span>
    </div>
  `).join('');
}

// MOCK DATA
const names = ['Aditya Kumar','Priya Sharma','Rahul Verma','Anjali Singh','Rohan Patel','Neha Gupta','Vikram Nair','Sneha Joshi','Arjun Mehta','Pooja Iyer','Karan Shah','Divya Reddy','Saurabh Tiwari','Meera Pillai','Yash Malhotra','Riya Desai','Aman Srivastava','Tanvi Jain','Nikhil Kapoor','Shreya Bose'];
const companies = ['Google','Microsoft','Amazon','Flipkart','Infosys','TCS','Wipro','Accenture','Deloitte','Goldman Sachs','JP Morgan','Uber','Zomato','CRED','Razorpay','Paytm','Swiggy','PhonePe','Nykaa','Dream11'];
const roles = ['SWE','SDE-1','Data Analyst','ML Engineer','Product Manager','DevOps','Backend Dev','Frontend Dev','Full Stack Dev','Data Engineer'];
const branches = ['Comp','IT','Elec','Mech','Civil','Chem'];
const skills = ['Python','React','Java','C++','Node.js','SQL','ML','AWS','Docker','TypeScript'];
const statuses = ['Applied','Shortlisted','Interview','Offered','Rejected'];
const colors = ['var(--accent)','var(--accent2)','var(--accent3)','var(--accent4)','var(--accent5)'];

function rand(arr) { return arr[Math.floor(Math.random()*arr.length)]; }
function randNum(min,max) { return Math.floor(Math.random()*(max-min+1))+min; }

function getInitials(name) { return name.split(' ').map(n=>n[0]).join(''); }

// Populate recent applications
function loadRecentApps() {
  const tbody = document.getElementById('recent-apps');
  if(!tbody) return;
  tbody.innerHTML = names.slice(0,8).map(name => {
    const status = rand(statuses);
    const badgeClass = {Applied:'badge-blue',Shortlisted:'badge-amber',Interview:'badge-purple',Offered:'badge-green',Rejected:'badge-red'}[status];
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:8px">
        <div class="student-avatar" style="background:${rand(colors).replace('var(--','rgba(').replace(')',',0.15)')};color:${rand(colors)}">${getInitials(name)}</div>
        <div><div style="font-size:12.5px;font-weight:500">${name}</div><div style="font-size:11px;color:var(--text2)">${rand(branches)} • ${(7+Math.random()*2).toFixed(1)} CGPA</div></div>
      </div></td>
      <td><span style="font-size:12.5px">${rand(companies)}</span></td>
      <td><span style="font-size:12px;color:var(--text2)">${rand(roles)}</span></td>
      <td><span class="badge ${badgeClass}">${status}</span></td>
      <td><span style="font-size:12.5px;color:var(--accent3)">₹${randNum(12,38)}L</span></td>
    </tr>`;
  }).join('');
}

// Populate activity feed
function loadActivity() {
  const el = document.getElementById('activity-feed');
  if(!el) return;
  const activities = [
    {text:`<strong>${rand(names)}</strong> received an offer from <strong>${rand(companies)}</strong>`,time:'2 min ago',color:'var(--accent3)'},
    {text:`New job posted by <strong>${rand(companies)}</strong> — ${rand(roles)}`,time:'15 min ago',color:'var(--accent)'},
    {text:`<strong>${rand(names)}</strong> cleared Round 2 at <strong>${rand(companies)}</strong>`,time:'32 min ago',color:'var(--accent2)'},
    {text:`Assessment scheduled for <strong>${rand(companies)}</strong> on Dec 15`,time:'1 hr ago',color:'var(--accent4)'},
    {text:`<strong>${rand(names)}</strong> updated their resume`,time:'2 hr ago',color:'var(--text2)'},
    {text:`Placement drive announced: <strong>${rand(companies)}</strong>`,time:'3 hr ago',color:'var(--accent)'},
  ];
  el.innerHTML = activities.map(a => `
    <div class="activity-item">
      <div class="activity-dot" style="background:${a.color}"></div>
      <div><div class="activity-text">${a.text}</div><div class="activity-time">${a.time}</div></div>
    </div>
  `).join('');
}

// Populate student table
function loadStudents() {
  const tbody = document.getElementById('student-table');
  if(!tbody) return;
  tbody.innerHTML = names.map((name,i) => {
    const status = i<14?'Placed':i<17?'Pending':'No Offer';
    const badgeClass = {Placed:'badge-green',Pending:'badge-amber','No Offer':'badge-red'}[status];
    const studentSkills = [rand(skills),rand(skills)].filter((v,i,a)=>a.indexOf(v)===i);
    const score = randNum(55,98);
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:8px">
        <div class="student-avatar" style="background:rgba(99,120,255,0.1);color:var(--accent)">${getInitials(name)}</div>
        <div><div style="font-size:12.5px;font-weight:500">${name}</div><div style="font-size:11px;color:var(--text2)">2024 Batch</div></div>
      </div></td>
      <td><span class="badge badge-blue">${rand(branches)}</span></td>
      <td><span style="color:var(--accent3);font-weight:600">${(7+Math.random()*2).toFixed(2)}</span></td>
      <td>${studentSkills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</td>
      <td><span style="color:var(--text)">${randNum(1,8)}</span></td>
      <td><span class="badge ${badgeClass}">${status}</span></td>
      <td><span style="color:var(--accent2)">₹${randNum(10,38)}L</span></td>
      <td><div style="display:flex;align-items:center;gap:6px">
        <div class="progress-bar" style="width:50px"><div class="progress-fill" style="width:${score}%"></div></div>
        <span style="font-size:11px;color:var(--text2)">${score}</span>
      </div></td>
    </tr>`;
  }).join('');
}

// Populate jobs
function loadJobs() {
  const el = document.getElementById('job-cards');
  if(!el) return;
  el.innerHTML = companies.slice(0,12).map(company => {
    const role = rand(roles);
    const pkg = `₹${randNum(10,30)}–${randNum(31,42)}L`;
    const apps = randNum(20,150);
    const daysLeft = randNum(3,30);
    return `<div class="card" style="cursor:pointer" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='var(--border)'">
      <div class="card-body">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:12px">
          <div style="display:flex;align-items:center;gap:10px">
            <div class="company-logo" style="background:rgba(99,120,255,0.1);color:var(--accent)">${company[0]}</div>
            <div>
              <div style="font-size:14px;font-weight:600">${role}</div>
              <div style="font-size:12px;color:var(--text2)">${company}</div>
            </div>
          </div>
          <span class="badge ${daysLeft<7?'badge-red':'badge-green'}">${daysLeft}d left</span>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">
          <span class="badge badge-blue">📍 ${rand(['Bengaluru','Mumbai','Hyderabad','Pune','Remote'])}</span>
          <span class="badge badge-purple">💰 ${pkg}</span>
          <span class="badge badge-amber">📋 ${rand(['Full-time','Intern+PPO'])}</span>
        </div>
        <div style="display:flex;gap:6px;margin-bottom:12px">
          ${[rand(skills),rand(skills),rand(skills)].map(s=>`<span class="skill-tag">${s}</span>`).join('')}
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between">
          <span style="font-size:11.5px;color:var(--text2)">${apps} applications</span>
          <button class="btn-primary" style="font-size:11.5px;padding:6px 12px" onclick="mockAction('Application submitted successfully!')">Apply Now</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// Populate applications table
function loadApplications() {
  const tbody = document.getElementById('apps-table');
  if(!tbody) return;
  tbody.innerHTML = names.map(name => {
    const status = rand(statuses);
    const badgeClass = {Applied:'badge-blue',Shortlisted:'badge-amber',Interview:'badge-purple',Offered:'badge-green',Rejected:'badge-red'}[status];
    const round = rand(['Applied','Online Test','Round 1','Round 2','HR Round','Offer']);
    return `<tr>
      <td><input type="checkbox" style="accent-color:var(--accent)"></td>
      <td><div style="display:flex;align-items:center;gap:8px">
        <div class="student-avatar" style="background:rgba(99,120,255,0.1);color:var(--accent);font-size:10px">${getInitials(name)}</div>
        <span style="font-size:12.5px">${name}</span>
      </div></td>
      <td>${rand(companies)}</td>
      <td style="color:var(--text2);font-size:12px">${rand(roles)}</td>
      <td style="font-size:11.5px;color:var(--text2)">Dec ${randNum(1,28)}, 2024</td>
      <td><span class="badge badge-blue">${round}</span></td>
      <td><span class="badge ${badgeClass}">${status}</span></td>
      <td style="color:var(--accent3)">₹${randNum(12,38)}L</td>
      <td><button class="btn-secondary" style="font-size:11px;padding:4px 8px">View</button></td>
    </tr>`;
  }).join('');
}

// Populate interviews
function loadInterviews() {
  const tbody = document.getElementById('interview-table');
  if(!tbody) return;
  const modes = ['Video Call','On-Campus','Phone'];
  const rounds = ['Round 1 - Tech','Round 2 - DSA','HR Round','Final Round','Culture Fit'];
  tbody.innerHTML = names.slice(0,12).map(name => {
    const status = rand(['Scheduled','Completed','Cancelled','Rescheduled']);
    const badgeClass = {Scheduled:'badge-blue',Completed:'badge-green',Cancelled:'badge-red',Rescheduled:'badge-amber'}[status];
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:8px">
        <div class="student-avatar" style="background:rgba(99,120,255,0.1);color:var(--accent);font-size:10px">${getInitials(name)}</div>
        <span style="font-size:12.5px">${name}</span>
      </div></td>
      <td>${rand(companies)}</td>
      <td><span class="badge badge-purple">${rand(rounds)}</span></td>
      <td style="font-size:12px;color:var(--text2)">Dec ${randNum(10,30)}, ${randNum(9,17)}:00</td>
      <td><span class="badge badge-blue">${rand(modes)}</span></td>
      <td style="font-size:12px">${rand(['John Smith','Sarah K.','Priya R.','Arjun M.'])}</td>
      <td><span class="badge ${badgeClass}">${status}</span></td>
      <td><button class="btn-secondary" style="font-size:11px;padding:4px 8px">Details</button></td>
    </tr>`;
  }).join('');
}

// Populate companies
function loadCompanies() {
  const el = document.getElementById('company-grid');
  if(!el) return;
  const sectors = ['Technology','Finance','Consulting','E-commerce','Automotive','Healthcare'];
  el.innerHTML = companies.map(company => {
    return `<div class="card" style="cursor:pointer" onmouseover="this.style.borderColor='var(--border2)'" onmouseout="this.style.borderColor='var(--border)'">
      <div class="card-body">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
          <div class="company-logo" style="width:44px;height:44px;background:rgba(99,120,255,0.1);color:var(--accent);font-size:18px">${company[0]}</div>
          <div>
            <div style="font-size:14px;font-weight:600">${company}</div>
            <div style="font-size:11px;color:var(--text2)">${rand(sectors)}</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
          <div style="background:var(--bg2);border-radius:6px;padding:8px;text-align:center">
            <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:16px;color:var(--accent)">${randNum(3,20)}</div>
            <div style="font-size:10px;color:var(--text2)">Jobs Posted</div>
          </div>
          <div style="background:var(--bg2);border-radius:6px;padding:8px;text-align:center">
            <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:16px;color:var(--accent3)">${randNum(5,50)}</div>
            <div style="font-size:10px;color:var(--text2)">Hired</div>
          </div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:12px;color:var(--accent2)">₹${randNum(10,20)}–${randNum(25,42)}L</span>
          <button class="btn-secondary" style="font-size:11px;padding:5px 10px">View →</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// Populate ATS table
function loadATS() {
  const tbody = document.getElementById('ats-table');
  if(!tbody) return;
  tbody.innerHTML = names.slice(0,10).map(name => {
    const score = randNum(45,95);
    const color = score>75?'var(--accent3)':score>55?'var(--accent4)':'var(--accent5)';
    const rec = score>75?'Strong Match':score>55?'Needs Work':'Poor Match';
    const recClass = score>75?'badge-green':score>55?'badge-amber':'badge-red';
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:8px">
        <div class="student-avatar" style="background:rgba(99,120,255,0.1);color:var(--accent);font-size:10px">${getInitials(name)}</div>
        <span style="font-size:12.5px">${name}</span>
      </div></td>
      <td style="font-size:12.5px">${rand(roles)} at ${rand(companies)}</td>
      <td><div style="display:flex;align-items:center;gap:8px">
        <div class="progress-bar" style="width:60px"><div class="progress-fill" style="width:${score}%;background:${score>75?'linear-gradient(90deg,var(--accent3),var(--accent))':score>55?'linear-gradient(90deg,var(--accent4),var(--accent2))':'linear-gradient(90deg,var(--accent5),var(--accent4))'}"></div></div>
        <span style="font-size:12px;font-weight:600;color:${color}">${score}/100</span>
      </div></td>
      <td style="font-size:12px;color:var(--text2)">${randNum(50,90)}% match</td>
      <td><span class="badge ${recClass}">${rec}</span></td>
      <td><button class="btn-secondary" style="font-size:11px;padding:4px 8px">View Report</button></td>
    </tr>`;
  }).join('');
}

// Populate recruiters
function loadRecruiters() {
  const tbody = document.getElementById('recruiter-table');
  if(!tbody) return;
  const recNames = ['Rahul Sharma','Sarah Johnson','Priya Kapoor','David Chen','Anjali Mehta','Michael Scott','Neha Gupta','James Wilson','Kavya Reddy','Alex Turner'];
  tbody.innerHTML = recNames.map(name => {
    const status = rand(['Active','Inactive','Pending']);
    const badgeClass = {Active:'badge-green',Inactive:'badge-red',Pending:'badge-amber'}[status];
    return `<tr>
      <td><div style="display:flex;align-items:center;gap:8px">
        <div class="student-avatar" style="background:rgba(139,92,246,0.1);color:var(--accent2)">${getInitials(name)}</div>
        <span style="font-size:12.5px">${name}</span>
      </div></td>
      <td>${rand(companies)}</td>
      <td style="font-size:12px;color:var(--text2)">${rand(['Technical Recruiter','HR Manager','Talent Acquisition'])}</td>
      <td style="font-size:12px;color:var(--accent)">${name.split(' ').join('.').toLowerCase()}@${rand(companies).toLowerCase()}.com</td>
      <td style="color:var(--accent)">${randNum(1,12)}</td>
      <td style="color:var(--accent3)">${randNum(0,25)}</td>
      <td><span class="badge ${badgeClass}">${status}</span></td>
    </tr>`;
  }).join('');
}

// Populate assessments
function loadAssessments() {
  const tbody = document.getElementById('assessment-table');
  if(!tbody) return;
  const types = ['Aptitude','Coding','Case Study','Technical MCQ','HR Questionnaire'];
  const statuses = ['Upcoming','Ongoing','Completed','Draft'];
  Array.from({length:12}).forEach((_,i) => {
    const status = rand(statuses);
    const badgeClass = {Upcoming:'badge-blue',Ongoing:'badge-amber',Completed:'badge-green',Draft:'badge-red'}[status];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight:500;font-size:13px">${rand(['Full Stack Assessment','DSA Coding Test','HR Aptitude Round','System Design Test','Quant Reasoning'])}</td>
      <td>${rand(companies)}</td>
      <td><span class="badge badge-purple">${rand(types)}</span></td>
      <td style="color:var(--accent)">${randNum(50,400)}</td>
      <td><span style="color:var(--accent3);font-weight:600">${randNum(55,92)}%</span></td>
      <td style="color:var(--text2)">${randNum(30,180)} min</td>
      <td><span class="badge ${badgeClass}">${status}</span></td>
      <td><button class="btn-secondary" style="font-size:11px;padding:4px 8px">Details</button></td>
    `;
    tbody.appendChild(row);
  });
}

// Messages
function loadMessages() {
  const list = document.getElementById('message-list');
  if(!list) return;
  const convos = [
    {name:'Rahul Sharma',company:'Google',msg:'Regarding SWE Campus Drive...',time:'2m',unread:true},
    {name:'Sarah Johnson',company:'Microsoft',msg:'Interview scheduled for next week',time:'1h',unread:true},
    {name:'Priya Kapoor',company:'Amazon',msg:'Please share the shortlist',time:'3h',unread:false},
    {name:'David Chen',company:'Goldman Sachs',msg:'Aptitude test details...',time:'1d',unread:false},
    {name:'Alex Turner',company:'Zomato',msg:'Offer letters ready to sign',time:'2d',unread:false},
  ];
  list.innerHTML = convos.map(c => `
    <div style="display:flex;gap:10px;padding:12px 14px;border-bottom:1px solid var(--border);cursor:pointer;transition:background 0.15s" onmouseover="this.style.background='var(--surface2)'" onmouseout="this.style.background='transparent'">
      <div class="avatar" style="width:34px;height:34px;font-size:12px;flex-shrink:0">${getInitials(c.name)}</div>
      <div style="flex:1;overflow:hidden">
        <div style="display:flex;justify-content:space-between;align-items:baseline">
          <span style="font-size:13px;font-weight:${c.unread?'600':'400'}">${c.name}</span>
          <span style="font-size:10.5px;color:var(--text2)">${c.time}</span>
        </div>
        <div style="font-size:11px;color:var(--text2)">${c.company}</div>
        <div style="font-size:12px;color:var(--text2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${c.msg}</div>
      </div>
      ${c.unread?'<div style="width:8px;height:8px;background:var(--accent);border-radius:50%;margin-top:4px;flex-shrink:0"></div>':''}
    </div>
  `).join('');

  const chat = document.getElementById('chat-messages');
  if(!chat) return;
  const msgs = [
    {from:'them',text:'Hello, we are interested in conducting campus recruitment at VJTI.'},
    {from:'me',text:'Great! We would be happy to have Google on our campus. When are you planning?'},
    {from:'them',text:'We are targeting December 15-16 for the drive. Could you share the student shortlist criteria?'},
    {from:'me',text:'Sure! We require min 7.0 CGPA, no backlogs, CS/IT/EC branches eligible. 350+ students ready.'},
    {from:'them',text:'Perfect. Please share the JD and we will post the opening on the portal.'},
  ];
  chat.innerHTML = msgs.map(m => `
    <div style="display:flex;justify-content:${m.from==='me'?'flex-end':'flex-start'}">
      <div style="background:${m.from==='me'?'linear-gradient(135deg,var(--accent),var(--accent2))':'var(--surface2)'};color:white;padding:10px 14px;border-radius:${m.from==='me'?'12px 12px 0 12px':'12px 12px 12px 0'};max-width:75%;font-size:13px;line-height:1.5">${m.text}</div>
    </div>
  `).join('');
}

// Notifications
function loadNotifications() {
  const el = document.getElementById('notif-list');
  if(!el) return;
  const notifs = [
    {icon:'✅',text:'Google has made 12 offers to VJTI students',time:'2 min ago',unread:true,color:'var(--accent3)'},
    {icon:'💼',text:'New job posted: SDE-1 at Microsoft (₹32L CTC)',time:'15 min ago',unread:true,color:'var(--accent)'},
    {icon:'📅',text:'Interview scheduled: Amazon Round 2 — 5 students',time:'1 hr ago',unread:true,color:'var(--accent2)'},
    {icon:'📊',text:'Monthly placement report is ready to download',time:'3 hr ago',unread:false,color:'var(--accent4)'},
    {icon:'🎓',text:'200 students completed the aptitude assessment',time:'5 hr ago',unread:false,color:'var(--accent)'},
    {icon:'🤖',text:'ATS batch scan complete — 92 students above 75%',time:'1 day ago',unread:false,color:'var(--accent3)'},
    {icon:'🔔',text:'Placement drive reminder: Flipkart on Dec 18',time:'2 days ago',unread:false,color:'var(--text2)'},
  ];
  el.innerHTML = notifs.map(n => `
    <div style="display:flex;align-items:flex-start;gap:14px;padding:14px 20px;border-bottom:1px solid var(--border);background:${n.unread?'rgba(99,120,255,0.03)':'transparent'}">
      <div style="width:36px;height:36px;border-radius:10px;background:${n.color.replace('var(--','rgba(').replace(')',',0.12)')};display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0">${n.icon}</div>
      <div style="flex:1">
        <div style="font-size:13px;font-weight:${n.unread?'500':'400'};margin-bottom:2px">${n.text}</div>
        <div style="font-size:11.5px;color:var(--text2)">${n.time}</div>
      </div>
      ${n.unread?'<div style="width:8px;height:8px;background:var(--accent);border-radius:50%;margin-top:6px;flex-shrink:0"></div>':''}
    </div>
  `).join('');
}

// INIT (moved to Dashboard.tsx useEffect)

// Expose to window
window.navigate = navigate;
window.toggleChip = toggleChip;
window.openJobModal = openJobModal;
window.closeModal = closeModal;
window.topbarAction = topbarAction;
window.openSearch = openSearch;
window.handleLogout = handleLogout;
window.mockAction = mockAction;
window.runATS = runATS;
window.runPredictor = runPredictor;
window.rand = rand;
window.randNum = randNum;
window.getInitials = getInitials;
window.loadRecentApps = loadRecentApps;
window.loadActivity = loadActivity;
window.loadStudents = loadStudents;
window.loadJobs = loadJobs;
window.loadApplications = loadApplications;
window.loadInterviews = loadInterviews;
window.loadCompanies = loadCompanies;
window.loadATS = loadATS;
window.loadRecruiters = loadRecruiters;
window.loadAssessments = loadAssessments;
window.loadMessages = loadMessages;
window.loadNotifications = loadNotifications;