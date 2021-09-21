import { readFile, writeFile } from 'fs/promises';
import type { ObjectId } from 'mongodb';
import type { Skills, Skill } from '../types';
import { getSkillsCollection } from './database';
//All skills
export async function readSkills(): Promise<Skill[]> {
  const response = await readFile('src/db.json', 'utf-8');
  const db: Skills = JSON.parse(response);
  const skills = db.skills;
  return skills;
}
//Single skill
export async function getSkill(title: string): Promise<Skill> {
  const skillCollection = getSkillsCollection();
  const skill = await skillCollection.findOne({ title });

  if (!skill) {
    throw new Error(`No skill found for skill: ${title}`);
  }
  return skill;
}
//Add skill
export async function addSkill(skill: Skill): Promise<ObjectId> {
  const skillCollection = getSkillsCollection();
  const result = await skillCollection.insertOne(skill);
  return result.insertedId;
}
//Delete skill
export async function deleteSkill(title: string): Promise<void> {
  const skillCollection = getSkillsCollection();
  await skillCollection.deleteOne({ title });
}
//Update Skill
export async function updateSkill(title: string, skill: Skill): Promise<void> {
  const skills = await readSkills();
  const filteredSkills = skills.filter((skill) => skill.title !== title);
  const newDB: Skills = {
    skills: [...filteredSkills, skill],
  };
  await writeFile('src/db.json', JSON.stringify(newDB, null, 2));
}
