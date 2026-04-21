/* ============================================
   Dashboard Page — Redesigned Professional UI
   ============================================ */

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Chip, IconButton } from '@mui/material';
import { useAdminAuth } from '../context/AdminAuthContext';
import { getLeadStats, exportLeadsCSV, getLeads } from '../utils/leadService';
import styles from './Dashboard.module.css';

const STATUS_COLORS = {
  new: { color: "#2196F3", bg: "#E3F2FD" },
  contacted: { color: "#FF9800", bg: "#FFF3E0" },
  consultation_booked: { color: "#9C27B0", bg: "#F3E5F5" },
  procedure_scheduled: { color: "#0097A7", bg: "#E0F7FA" },
  completed: { color: "#4CAF50", bg: "#E8F5E9" },
  not_interested: { color: "#F44336", bg: "#FFEBEE" },
};

const formatDate = () => {
  const d = new Date();
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

const Dashboard = () => {
  useAdminAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const refresh = () => setStats(getLeadStats());
    refresh();

    const handleStorage = (e) => {
      if (e.key === "lp_submitted_leads" || e.key === "lp_test_leads") {
        refresh();
      }
    };
    const handleVisibility = () => {
      if (document.visibilityState === "visible") refresh();
    };

    window.addEventListener("lp:lead-submitted", refresh);
    window.addEventListener("storage", handleStorage);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("lp:lead-submitted", refresh);
      window.removeEventListener("storage", handleStorage);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const statCards = [
    { label: 'Total Consultation Requests', value: stats?.totalLeads ?? 0, icon: 'mdi:account-multiple', colorClass: 'statIconBlue' },
    { label: 'Pending Follow-ups', value: stats?.newLeads24h ?? 0, icon: 'mdi:phone-in-talk', colorClass: 'statIconGreen' },
    { label: 'Consultations Booked', value: stats?.weekLeads ?? 0, icon: 'mdi:calendar-check', colorClass: 'statIconPink' },
    { label: 'Procedures Scheduled', value: `${stats?.conversionRate ?? 0}%`, icon: 'mdi:medical-bag', colorClass: 'statIconTeal' },
  ];

  const recentLeads = stats?.recentLeads || [];

  const handleExportCSV = () => {
    const leads = getLeads();
    exportLeadsCSV(leads);
  };

  const handleViewLead = (leadId) => {
    navigate(`/admin/lms/lead/${leadId}`);
  };

  return (
    <div className={styles.dashboard}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div>
          <h1 className={styles.pageTitle}>Dashboard</h1>
          <p className={styles.pageSubtitle}>
            Welcome to Monjoven Lead Management. Here&rsquo;s your consultation overview.
          </p>
        </div>
        <div className={styles.headerDate}>
          <Icon icon="mdi:calendar-outline" width={18} height={18} />
          <span>{formatDate()}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        {statCards.map((stat) => (
          <div key={stat.label} className={styles.statCard}>
            <div className={`${styles.statIcon} ${styles[stat.colorClass]}`}>
              <Icon icon={stat.icon} width={22} height={22} />
            </div>
            <div className={styles.statContent}>
              <p className={styles.statValue}>{stat.value}</p>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className={styles.quickActions}>
        <button className={styles.actionOutlined} onClick={handleExportCSV}>
          <Icon icon="mdi:download-outline" width={18} height={18} />
          Export All Leads
        </button>
        <Link to="/admin/lms" className={styles.actionSolid}>
          <Icon icon="mdi:account-group-outline" width={18} height={18} />
          View All Leads
        </Link>
        <Link to="/admin/guideline" className={styles.actionGhost}>
          <Icon icon="mdi:book-open-outline" width={18} height={18} />
          Open Guideline
        </Link>
      </div>

      {/* Recent Leads Section */}
      <div className={styles.recentSection}>
        <div className={styles.recentHeader}>
          <h2 className={styles.sectionTitle}>Recent Consultation Requests</h2>
          <Link to="/admin/lms" className={styles.viewAllLink}>
            View All <Icon icon="mdi:arrow-right" width={16} height={16} style={{ verticalAlign: 'middle' }} />
          </Link>
        </div>

        {recentLeads.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>
              <Icon icon="mdi:inbox-outline" width={56} height={56} />
            </div>
            <p className={styles.emptyText}>No consultation requests yet</p>
            <p className={styles.emptySubtext}>
              New consultation requests will appear here as they come in from your landing page forms.
            </p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className={styles.tableWrapper}>
              <table className={styles.recentTable}>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Phone</th>
                    <th>Source</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead, idx) => {
                    const sc = STATUS_COLORS[lead.status] || STATUS_COLORS.new;
                    return (
                      <tr key={lead.lead_id} className={idx % 2 === 1 ? styles.rowAlt : undefined}>
                        <td className={styles.leadName}>{lead.name || '—'}</td>
                        <td>{lead.mobile || '—'}</td>
                        <td>
                          <Chip
                            label={lead.source || '—'}
                            size="small"
                            variant="outlined"
                            sx={{ fontSize: '0.7rem', maxWidth: 120 }}
                          />
                        </td>
                        <td>
                          <Chip
                            label={lead.status || 'new'}
                            size="small"
                            sx={{
                              bgcolor: sc.bg,
                              color: sc.color,
                              fontWeight: 600,
                              fontSize: '0.7rem',
                              textTransform: 'capitalize',
                            }}
                          />
                        </td>
                        <td className={styles.leadDate}>
                          {lead.submitted_at
                            ? new Date(lead.submitted_at).toLocaleDateString('en-IN', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric',
                              })
                            : '—'}
                        </td>
                        <td>
                          <IconButton
                            size="small"
                            onClick={() => handleViewLead(lead.lead_id)}
                            sx={{ color: 'var(--admin-accent)' }}
                          >
                            <Icon icon="mdi:eye-outline" width={18} height={18} />
                          </IconButton>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Mobile Card Layout */}
            <div className={styles.mobileCards}>
              {recentLeads.map((lead) => {
                const sc = STATUS_COLORS[lead.status] || STATUS_COLORS.new;
                return (
                  <div
                    key={lead.lead_id}
                    className={styles.mobileCard}
                    onClick={() => handleViewLead(lead.lead_id)}
                  >
                    <div className={styles.mobileCardTop}>
                      <span className={styles.mobileCardName}>{lead.name || '—'}</span>
                      <Chip
                        label={lead.status || 'new'}
                        size="small"
                        sx={{
                          bgcolor: sc.bg,
                          color: sc.color,
                          fontWeight: 600,
                          fontSize: '0.65rem',
                          height: 22,
                          textTransform: 'capitalize',
                        }}
                      />
                    </div>
                    <div className={styles.mobileCardRow}>
                      <Icon icon="mdi:phone-outline" width={14} height={14} />
                      <span>{lead.mobile || '—'}</span>
                    </div>
                    <div className={styles.mobileCardBottom}>
                      <Chip
                        label={lead.source || '—'}
                        size="small"
                        variant="outlined"
                        sx={{ fontSize: '0.65rem', height: 22 }}
                      />
                      <span className={styles.mobileCardDate}>
                        {lead.submitted_at
                          ? new Date(lead.submitted_at).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })
                          : '—'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Footer Badge */}
      <p className={styles.footerBadge}>
        Monjoven Admin Panel | Lead Management System v1.0
      </p>
    </div>
  );
};

export default Dashboard;
