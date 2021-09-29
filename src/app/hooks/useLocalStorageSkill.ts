import { useState } from 'react';
import type { Skill } from '../../types';
import useLocalStorage from './useLocalStorage';

export default function useSkillByTitle(title: string): [Skill] {
  const [skills] = useLocalStorage<Skill[]>('skills', []);
  const [singleSkill] = useState<Skill>(() => {
    const singleSkill = skills.find((el) => el.title == title);
    if (!singleSkill) {
      throw new Error('There is no Skill with this name');
    }
    return singleSkill;
  });

  return [singleSkill];
}
