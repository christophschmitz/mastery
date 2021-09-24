import useLocalStorage from './useLocalStorage';
import type { Skill } from '../../types';

export default function useSkills(): {
  skills: Skill[];
  addSkill: (skills: Skill) => void;
  removeSkill: (newSkill: Skill) => void;
} {
  const [skills, setSkills] = useLocalStorage<Skill[]>('skills', []);

  function addSkill(skill: Skill) {
    setSkills([...skills, skill]);
  }

  function removeSkill(newSkill: Skill) {
    setSkills(skills.filter((skill) => skill !== newSkill));
  }

  return { skills, addSkill, removeSkill };
}
