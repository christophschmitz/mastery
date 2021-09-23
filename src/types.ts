export type Skills = {
  skills: Skill[];
};

export type Skill = {
  id?: string | undefined;
  title: string;
  category: string;
  description: string;
  progress: number;
  imageSrc: string;
  isDone: boolean;
};
