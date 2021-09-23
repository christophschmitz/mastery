export type Skills = {
  skills: Skill[];
};

export type Skill = {
  id?: string;
  title: string;
  category: string;
  description: string;
  progress: number;
  imageSrc: string;
  isDone: boolean;
};
