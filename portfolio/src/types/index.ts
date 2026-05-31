/**
 * Core type definitions for Kidist Mulualem's portfolio.
 * Demonstrates strict TypeScript typing with interfaces, enums, and utility types.
 */

// ─── Enums ────────────────────────────────────────────────────────────────────

/** Theme options for dark/light mode */
export enum Theme {
  Dark = 'dark',
  Light = 'light',
}

/** Technology category classifications */
export enum TechCategory {
  Language = 'Language',
  Frontend = 'Frontend',
  Backend = 'Backend',
  AI_ML = 'AI / ML',
  Tools = 'Tools & DevOps',
  Testing = 'Testing',
}

/** Project status */
export enum ProjectStatus {
  Live = 'Live',
  InProgress = 'In Progress',
  Completed = 'Completed',
}

// ─── Base Interfaces ──────────────────────────────────────────────────────────

/** Represents a single technology skill */
export interface Skill {
  readonly name: string;
  readonly category: TechCategory;
  /** Proficiency level 0–100 */
  readonly level: number;
  readonly icon?: string;
}

/** A grouping of skills by category */
export interface SkillGroup {
  readonly category: TechCategory;
  readonly skills: Skill[];
}

/** External link with label */
export interface ExternalLink {
  readonly label: string;
  readonly url: string;
}

/** Social / contact link */
export interface SocialLink extends ExternalLink {
  readonly platform: 'github' | 'linkedin' | 'email' | 'twitter';
  readonly icon: string;
}

// ─── Experience ───────────────────────────────────────────────────────────────

/** A single bullet point / achievement in an experience entry */
export interface ExperienceHighlight {
  readonly text: string;
  readonly tags?: string[];
}

/** Work or training experience entry */
export interface Experience {
  readonly id: string;
  readonly role: string;
  readonly organization: string;
  readonly organizationUrl?: string;
  readonly startDate: string;
  readonly endDate: string | 'Present';
  readonly location: string;
  readonly type: 'work' | 'training' | 'education';
  readonly description: string;
  readonly highlights: ExperienceHighlight[];
  readonly technologies: string[];
  readonly logo?: string;
}

// ─── Projects ────────────────────────────────────────────────────────────────

/** A portfolio project */
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly longDescription?: string;
  readonly technologies: string[];
  readonly category: 'ai-ml' | 'web' | 'algorithm' | 'other';
  readonly status: ProjectStatus;
  readonly githubUrl?: string;
  readonly liveUrl?: string;
  readonly imageUrl?: string;
  readonly featured: boolean;
  readonly highlights?: string[];
}

// ─── Education ───────────────────────────────────────────────────────────────

export interface Education {
  readonly id: string;
  readonly institution: string;
  readonly degree: string;
  readonly field: string;
  readonly startYear: number;
  readonly endYear: number | 'Present';
  readonly description?: string;
  readonly achievements?: string[];
}

// ─── Personal Info ────────────────────────────────────────────────────────────

/** Core personal/professional info */
export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly tagline: string;
  readonly bio: string[];
  readonly location: string;
  readonly email: string;
  readonly resumeUrl: string;
  readonly socials: SocialLink[];
  readonly avatarUrl?: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly icon?: string;
}

// ─── Component Props ─────────────────────────────────────────────────────────

export interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

export interface AnimationConfig {
  readonly delay?: number;
  readonly duration?: number;
  readonly once?: boolean;
}

// ─── Utility Types ────────────────────────────────────────────────────────────

/** Makes all properties of T optional recursively */
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

/** Extract only string keys of T */
export type StringKeys<T> = Extract<keyof T, string>;

/** A record keyed by TechCategory with arrays of skills */
export type SkillsByCategory = Record<TechCategory, Skill[]>;
