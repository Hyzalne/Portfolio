/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectDetail {
  objective: string;
  process: string[];
  evidenceDesc: string;
  finalProduct: string;
  googleDocsUrl: string;
}

export interface Project {
  id: number;
  title: string;
  objective: string;
  shortDesc: string;
  details: ProjectDetail;
  iconName: string; // Key for Lucide icons
  image: string; // URL or placeholder path
}

export interface Skill {
  name: string;
  level: number; // percentage (e.g. 90)
  desc: string;
  icon: string;
}

export interface LearningGoal {
  type: 'academic' | 'research' | 'portfolio';
  content: string;
}

export interface Feedback {
  id: string;
  name: string;
  email: string;
  content: string;
  timestamp: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
