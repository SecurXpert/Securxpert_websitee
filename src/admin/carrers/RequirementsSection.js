import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, CheckCircle2, X } from "lucide-react";
import axios from "axios";
import { API_BASE_URL } from "../config";

const parseSkills = (skillsList) => {
  if (!skillsList) return [];
  return skillsList.map((item, index) => {
    if (typeof item === 'string') {
      return { id: index, name: item, dbId: null };
    }
    return {
      id: item.id || index,
      name: item.skill_name || item.name || "",
      dbId: item.id || null
    };
  });
};

export default function RequirementsSection({ isExpanded, onToggle, initialData, jobId, onSaveSection, isReadOnly = false }) {
  const [techInput, setTechInput] = useState("");
  const [softInput, setSoftInput] = useState("");

  const [techSkills, setTechSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [qualifications, setQualifications] = useState("");

  const [isQualificationsExpanded, setIsQualificationsExpanded] = useState(true);
  const [isSaved, setIsSaved] = useState(!!initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [deletedSkillIds, setDeletedSkillIds] = useState([]);

  const [isQualsSaved, setIsQualsSaved] = useState(false);
  const [isQualsLoading, setIsQualsLoading] = useState(false);
  const [hasQualsInDb, setHasQualsInDb] = useState(false);

  React.useEffect(() => {
    if (initialData) {
      if (Array.isArray(initialData)) {
        const tech = initialData.filter(s => s.skill_type === "technical").map((s, i) => ({ id: s.id || i, name: s.skill_name, dbId: s.id }));
        const soft = initialData.filter(s => s.skill_type === "soft").map((s, i) => ({ id: s.id || i, name: s.skill_name, dbId: s.id }));
        setTechSkills(tech);
        setSoftSkills(soft);
      } else {
        const tech = parseSkills(initialData.techSkills || initialData.technical || []);
        const soft = parseSkills(initialData.softSkills || initialData.soft || []);
        setTechSkills(tech);
        setSoftSkills(soft);
      }
      const qualsVal = typeof initialData === 'object'
        ? (initialData.qualifications || initialData.preferred_qualifications || "")
        : "";
      setQualifications(qualsVal);
      setIsSaved(true);
      if (qualsVal.trim()) {
        setIsQualsSaved(true);
        setHasQualsInDb(true);
      }
    }
  }, [initialData]);

  const addTechSkill = (e) => {
    if (e) e.preventDefault();
    if (techInput.trim() && !techSkills.some(s => s.name.toLowerCase() === techInput.trim().toLowerCase())) {
      setTechSkills([...techSkills, { id: Date.now(), name: techInput.trim(), dbId: null }]);
      setTechInput("");
      setIsSaved(false);
    }
  };

  const removeTechSkill = (id, dbId) => {
    if (dbId) {
      setDeletedSkillIds(prev => [...prev, dbId]);
    }
    setTechSkills(techSkills.filter(s => s.id !== id));
    setIsSaved(false);
  };

  const addSoftSkill = (e) => {
    if (e) e.preventDefault();
    if (softInput.trim() && !softSkills.some(s => s.name.toLowerCase() === softInput.trim().toLowerCase())) {
      setSoftSkills([...softSkills, { id: Date.now(), name: softInput.trim(), dbId: null }]);
      setSoftInput("");
      setIsSaved(false);
    }
  };

  const removeSoftSkill = (id, dbId) => {
    if (dbId) {
      setDeletedSkillIds(prev => [...prev, dbId]);
    }
    setSoftSkills(softSkills.filter(s => s.id !== id));
    setIsSaved(false);
  };

  const isFormValid = techSkills.length > 0 || softSkills.length > 0;

  const handleSave = async () => {
    if (!isFormValid) return;
    if (!jobId) {
      alert("Please save the 'Job Basic Information' section first to generate a Job ID.");
      return;
    }
    setIsLoading(true);
    try {
      const token =
        typeof window !== "undefined"
          ? (localStorage.getItem("super_admin_token") ||
            localStorage.getItem("superadmin_token") ||
            localStorage.getItem("access_token") ||
            localStorage.getItem("token") ||
            "")
          : "";

      // 1. Delete removed requirements
      if (deletedSkillIds.length > 0) {
        console.log("Deleting removed requirements:", deletedSkillIds);
        await Promise.all(
          deletedSkillIds.map(dbId =>
            axios.delete(`${API_BASE_URL}jobs/${jobId}/requirements/${dbId}`, {
              headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${token}`
              }
            })
          )
        );
        setDeletedSkillIds([]);
      }

      // 2. Save/Update current requirements
      const savedTech = [];
      const savedSoft = [];

      // Save tech skills
      await Promise.all(
        techSkills.map(async (skill) => {
          const payload = {
            skill_name: skill.name,
            skill_type: "technical"
          };

          if (skill.dbId) {
            console.log(`Updating technical skill ${skill.dbId}...`, payload);
            const res = await axios.patch(
              `${API_BASE_URL}jobs/${jobId}/requirements/${skill.dbId}`,
              payload,
              {
                headers: {
                  "accept": "application/json",
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
                }
              }
            );
            savedTech.push({ ...skill, dbId: res.data?.id || skill.dbId });
          } else {
            console.log("Creating new technical skill...", payload);
            const res = await axios.post(
              `${API_BASE_URL}jobs/${jobId}/requirements`,
              payload,
              {
                headers: {
                  "accept": "application/json",
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
                }
              }
            );
            savedTech.push({ ...skill, id: res.data?.id || skill.id, dbId: res.data?.id });
          }
        })
      );

      // Save soft skills
      await Promise.all(
        softSkills.map(async (skill) => {
          const payload = {
            skill_name: skill.name,
            skill_type: "soft"
          };

          if (skill.dbId) {
            console.log(`Updating soft skill ${skill.dbId}...`, payload);
            const res = await axios.patch(
              `${API_BASE_URL}jobs/${jobId}/requirements/${skill.dbId}`,
              payload,
              {
                headers: {
                  "accept": "application/json",
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
                }
              }
            );
            savedSoft.push({ ...skill, dbId: res.data?.id || skill.dbId });
          } else {
            console.log("Creating new soft skill...", payload);
            const res = await axios.post(
              `${API_BASE_URL}jobs/${jobId}/requirements`,
              payload,
              {
                headers: {
                  "accept": "application/json",
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`
                }
              }
            );
            savedSoft.push({ ...skill, id: res.data?.id || skill.id, dbId: res.data?.id });
          }
        })
      );

      // Sort both arrays to maintain stable UI order
      savedTech.sort((a, b) => {
        const idxA = techSkills.findIndex(s => s.id === a.id);
        const idxB = techSkills.findIndex(s => s.id === b.id);
        return idxA - idxB;
      });
      savedSoft.sort((a, b) => {
        const idxA = softSkills.findIndex(s => s.id === a.id);
        const idxB = softSkills.findIndex(s => s.id === b.id);
        return idxA - idxB;
      });

      setTechSkills(savedTech);
      setSoftSkills(savedSoft);
      setIsSaved(true);

      if (onSaveSection) {
        onSaveSection('requirements', {
          techSkills: savedTech.map(s => s.name),
          softSkills: savedSoft.map(s => s.name),
          qualifications
        });
      }
    } catch (err) {
      console.error("Error saving requirements:", err);
      const details = err.response?.data?.detail;
      let errorMsg = "Failed to save requirements to the server.";
      if (Array.isArray(details)) {
        errorMsg = details.map(d => `${d.loc.join('.')}: ${d.msg}`).join('\n');
      } else if (typeof details === "string") {
        errorMsg = details;
      } else if (err.message) {
        errorMsg = err.message;
      }
      alert(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveQualifications = async () => {
    if (!jobId) {
      alert("Please save the 'Job Basic Information' section first to generate a Job ID.");
      return;
    }
    setIsQualsLoading(true);
    try {
      const token =
        typeof window !== "undefined"
          ? (localStorage.getItem("super_admin_token") ||
            localStorage.getItem("superadmin_token") ||
            localStorage.getItem("access_token") ||
            localStorage.getItem("token") ||
            "")
          : "";

      const payload = {
        preferred_qualifications: qualifications
      };

      let res;
      if (hasQualsInDb) {
        console.log(`Updating qualifications for job ${jobId}...`, payload);
        res = await axios.patch(`${API_BASE_URL}jobs/${jobId}/qualifications`, payload, {
          headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
      } else {
        console.log(`Creating qualifications for job ${jobId}...`, payload);
        res = await axios.post(`${API_BASE_URL}jobs/${jobId}/qualifications`, payload, {
          headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });
      }

      console.log("Qualifications API response:", res.data);
      setHasQualsInDb(true);
      setIsQualsSaved(true);

      if (onSaveSection) {
        onSaveSection('requirements', {
          techSkills,
          softSkills,
          qualifications,
          preferred_qualifications: res.data?.preferred_qualifications || qualifications
        });
      }
    } catch (err) {
      console.error("Error saving qualifications:", err);
      const details = err.response?.data?.detail;
      let errorMsg = "Failed to save qualifications to the server.";
      if (Array.isArray(details)) {
        errorMsg = details.map(d => `${d.loc.join('.')}: ${d.msg}`).join('\n');
      } else if (typeof details === "string") {
        errorMsg = details;
      } else if (err.message) {
        errorMsg = err.message;
      }
      alert(errorMsg);
    } finally {
      setIsQualsLoading(false);
    }
  };

  return (
    <>
      {/* Box 1: Requirements */}
      <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden mb-6">
        <div
          className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors border-b border-indigo-50"
          onClick={onToggle}
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h2 className="text-[16px] font-semibold text-slate-800">Requirements</h2>
              {isSaved && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
            </div>
            <span className="text-[14px] font-semibold text-slate-500">Technical and soft skills required</span>
          </div>
          <button className="text-slate-400 p-1 hover:bg-slate-100 rounded-full transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {isExpanded && (
          <div className="p-6 bg-white space-y-6">
            {/* Tech Skills */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[14px] font-bold text-slate-800 font-sans">
                Technical Skills
              </label>
              <div className="flex items-center gap-3 w-full max-w-lg">
                <input
                  type="text"
                  placeholder="e.g. Selenium, Java, TestNG"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addTechSkill(e)}
                  className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                />
                <button
                  onClick={addTechSkill}
                  className="px-5 py-2.5 bg-[#5A73FF] hover:bg-indigo-600 text-white text-[14px] font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
              {techSkills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {techSkills.map((skill) => (
                    <span key={skill.id} className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 text-[13px] font-medium rounded-full border border-blue-100">
                      {skill.name}
                      <button onClick={() => removeTechSkill(skill.id, skill.dbId)} className="hover:text-blue-800">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Soft Skills */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[14px] font-bold text-slate-800 font-sans">
                Soft Skills
              </label>
              <div className="flex items-center gap-3 w-full max-w-lg">
                <input
                  type="text"
                  placeholder="e.g. Communication, Leadership"
                  value={softInput}
                  onChange={(e) => setSoftInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addSoftSkill(e)}
                  className="flex-1 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
                />
                <button
                  onClick={addSoftSkill}
                  className="px-5 py-2.5 bg-[#5A73FF] hover:bg-indigo-600 text-white text-[14px] font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
              {softSkills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {softSkills.map((skill) => (
                    <span key={skill.id} className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-600 text-[13px] font-medium rounded-full border border-purple-100">
                      {skill.name}
                      <button onClick={() => removeSoftSkill(skill.id, skill.dbId)} className="hover:text-purple-800">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end mt-8 pt-6 border-t border-slate-100">
              {!isReadOnly && <button
                onClick={handleSave}
                disabled={!isFormValid || isLoading}
                className={`px-6 py-2.5 rounded-xl text-[14px] font-bold shadow-sm transition-all flex items-center gap-2 ${isFormValid && !isLoading
                  ? "bg-[#5A73FF] text-white hover:bg-blue-600"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  }`}
              >
                {isLoading ? (
                  "Saving..."
                ) : isSaved ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Saved
                  </>
                ) : (
                  "Save Section"
                )}
              </button>}
            </div>
          </div>
        )}
      </div>

      {/* Box 2: Preferred Qualifications */}
      <div className="bg-white rounded-2xl border border-indigo-50 shadow-sm overflow-hidden mb-8">
        <div
          className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors border-b border-indigo-50"
          onClick={() => setIsQualificationsExpanded(!isQualificationsExpanded)}
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h2 className="text-[16px] font-bold text-slate-800">Preferred Qualifications</h2>
              {isQualsSaved && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
            </div>
            <span className="text-[13px] text-slate-500">Optional certifications and requirements</span>
          </div>
          <button className="text-slate-400 p-1 hover:bg-slate-100 rounded-full transition-colors">
            {isQualificationsExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {isQualificationsExpanded && (
          <div className="p-6 bg-white space-y-4">
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[14px] font-bold text-slate-800 font-sans">
                Qualifications
              </label>
              <textarea
                placeholder="List preferred certifications, education, or industry experience..."
                value={qualifications}
                onChange={(e) => {
                  setQualifications(e.target.value);
                  setIsQualsSaved(false);
                }}
                className="w-full min-h-[140px] p-4 bg-white border border-slate-200 rounded-xl text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans resize-y"
              />
            </div>

            <div className="flex justify-end mt-8 pt-6 border-t border-slate-100">
              {!isReadOnly && <button
                onClick={handleSaveQualifications}
                disabled={isQualsLoading}
                className={`px-6 py-2.5 rounded-xl text-[14px] font-bold shadow-sm transition-all flex items-center gap-2 bg-[#5A73FF] text-white hover:bg-blue-600 ${isQualsLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isQualsLoading ? (
                  "Saving..."
                ) : isQualsSaved ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Saved
                  </>
                ) : (
                  "Save Section"
                )}
              </button>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

