import React, { useState, useEffect } from "react";
import { supabase } from "../../server/supabaseClient";
import "./Reports.css";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [formData, setFormData] = useState({
    place: "",
    school_name: "",
    problem_faced: "",
    solution_approach: "",
  });

  // Fetch reports from Supabase
  const fetchReports = async () => {
    const { data, error } = await supabase.from("reports").select("*");
    if (error) console.error("Error fetching reports:", error);
    else setReports(data);
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
    if (error) console.error("Error submitting form:", error);
    else {
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
    <div className="reports-container">
      <h1>Shiksha Chaupal: Reports from the Ground</h1>
      <p>
        Grassroots women’s collectives are making a difference in education
        equity. Share your report or feedback to help us improve.
      </p>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit} className="feedback-form">
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={formData.place}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="school_name"
          placeholder="School Name"
          value={formData.school_name}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="problem_faced"
          placeholder="Problem Faced (Why girls are not coming to school)"
          value={formData.problem_faced}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="solution_approach"
          placeholder="Solution Approach"
          value={formData.solution_approach}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {/* Display Reports */}
      <div className="reports-grid">
        {reports.map((report) => (
          <div key={report.id} className="report-card">
            <h3>{report.school_name}</h3>
            <p><strong>Place:</strong> {report.place}</p>
            <p><strong>Problem:</strong> {report.problem_faced}</p>
            <p><strong>Solution:</strong> {report.solution_approach}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;