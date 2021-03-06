import type { ObjectId } from 'mongodb';
import type { Skill } from '../types';
import { getSkillsCollection } from './database';
//All skills
export async function readSkills(): Promise<Skill[]> {
  const skillCollection = getSkillsCollection();
  const skills = await skillCollection.find().toArray();
  return skills;
}
//Single skill
export async function readSkill(title: string): Promise<Skill> {
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
  const skillCollection = getSkillsCollection();
  await skillCollection.updateOne({ title }, { $set: skill });
}
