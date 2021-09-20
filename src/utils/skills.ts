import { readFile } from 'fs/promises';
import type { Skills, Skill } from '../types';

export async function readSkills(): Promise<Skill[]> {
  const response = await readFile('src/db.json', 'utf-8');
  const db: Skills = JSON.parse(response);
  const skills = db.skills;
  return skills;
}
