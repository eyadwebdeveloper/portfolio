import { createContext, useCallback, useContext, useMemo, useState } from "react";

const ProjectModalContext = createContext(null);

const DEFAULT_PROJECT = {
  title: "Application Management Platform",
  description:
    "Designed and developed a complete full-stack Application Management Platform that streamlines the entire admission and evaluation workflow — from applicant registration and submission to reviewer assessment and final administrative decisions. The system was deployed for YSJ Portal and later reused for IYNA Portal, where the only differences were the UI/UX design, branding, and visual identity — the underlying architecture, functionality, and database structure remained the same, demonstrating the platform's scalability and reusability across organizations.",
  features: [
    "Secure user authentication and registration system",
    "Personalized applicant dashboard",
    "Dynamic multi-step application form",
    "File upload support for required documents",
    "Save-progress functionality — continue applications later",
    "Final submission with full validation",
    "Application status tracking (Under Review, Evaluation, Accepted, Rejected)",
    "Announcement system for organization updates",
    "Reviewer dashboard with assigned applications only",
    "Reviewer evaluation and scoring system",
    "Admin dashboard for applications, reviewers, announcements & final decisions",
  ],
  tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
};

export function ProjectModalProvider({ children }) {
  const [video, setVideo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((videoSrc) => {
    setVideo(videoSrc || null);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const value = useMemo(
    () => ({ isOpen, video, openModal, closeModal, project: DEFAULT_PROJECT }),
    [isOpen, video, openModal, closeModal]
  );

  return <ProjectModalContext.Provider value={value}>{children}</ProjectModalContext.Provider>;
}

export function useProjectModal() {
  const ctx = useContext(ProjectModalContext);
  if (!ctx) throw new Error("useProjectModal must be used within a ProjectModalProvider");
  return ctx;
}
