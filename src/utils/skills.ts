import { readFile, writeFile } from 'fs/promises';
import type { Skills, Skill } from '../types';
//All skills
export async function readSkills(): Promise<Skill[]> {
  const response = await readFile('src/db.json', 'utf-8');
  const db: Skills = JSON.parse(response);
  const skills = db.skills;
  return skills;
}
//Single skill
export async function getSkill(title: string): Promise<Skill> {
  const skills = await readSkills();
  const skill = skills.find((skill) => skill.title === title);

  if (!skill) {
    throw new Error(`No skill found for skill: ${title}`);
  }
  return skill;
}
//Add skill
export async function addSkill(skill: Skill): Promise<void> {
  const skills = await readSkills();
  const newSkills = [...skills, skill];
  const newDB: Skills = {
    skills: newSkills,
  };
  await writeFile('src/db.json', JSON.stringify(newDB));
}
