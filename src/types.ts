export type Skills = {
  skills: Skill[];
};

export type Skill = {
  id?: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
};
