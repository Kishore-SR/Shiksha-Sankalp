import React, { useState, useEffect } from "react";
import { supabase } from "../../server/supabaseClient";
import { Title } from "../../components/Title/Title";
import { useTranslation } from "react-i18next";
import "./Reports.css";
import { Loader } from "../../components/Loader/Loader";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [formData, setFormData] = useState({
    place: "",
    school_name: "",
    problem_faced: "",
    solution_approach: "",
  });
  const [loading, setLoading] = useState(true); // Loading state

  const { t } = useTranslation();

  // Fetch reports from Supabase
  const fetchReports = async () => {
    setLoading(true); // Start loading
    const { data, error } = await supabase.from("reports").select("*");
    if (error) {
      console.error("Error fetching reports:", error);
    } else {
      setReports(data);
    }
    setLoading(false); // Stop loading
  };

  useEffect(() => {
    fetchReports();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("reports").insert([formData]);
    if (error) {
      console.error("Error submitting form:", error);
    } else {
      setFormData({
        place: "",
        school_name: "",
        problem_faced: "",
        solution_approach: "",
      });
      fetchReports(); // Refresh the list of reports
    }
  };

  return (
    <>
      <Title />
      <div className="reports-container">
        <h1>{t("reports.title")}</h1>
        <p>{t("reports.description")}</p>

        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            type="text"
            name="place"
            placeholder={t("reports.form.place")}
            value={formData.place}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="school_name"
            placeholder={t("reports.form.school_name")}
            value={formData.school_name}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="problem_faced"
            placeholder={t("reports.form.problem_faced")}
            value={formData.problem_faced}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="solution_approach"
            placeholder={t("reports.form.solution_approach")}
            value={formData.solution_approach}
            onChange={handleInputChange}
            required
          />
          <button type="submit">{t("reports.form.submit")}</button>
        </form>

        {/* Display Reports */}
        <div className="reports-grid">
          {loading ? (
            <Loader/>
          ) : reports.length > 0 ? (
            reports.map((report) => (
              <div key={report.id} className="report-card">
                <h3>{report.school_name}</h3>
                <p>
                  <strong>{t("reports.report_card.place")}:</strong> {report.place}
                </p>
                <p>
                  <strong>{t("reports.report_card.problem")}:</strong> {report.problem_faced}
                </p>
                <p>
                  <strong>{t("reports.report_card.solution")}:</strong> {report.solution_approach}
                </p>
              </div>
            ))
          ) : (
            <p>No reports found.</p> // Fallback if no reports are available
          )}
        </div>
      </div>
    </>
  );
};

export default Reports;