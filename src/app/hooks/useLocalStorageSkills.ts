import useLocalStorage from './useLocalStorage';
import type { Skill } from '../../types';

export default function useSkills(): {
  skills: Skill[];
  addOnClick: (skills: Skill) => void;
  removeSkill: (newSkill: Skill) => void;
} {
  const [skills, setSkills] = useLocalStorage<Skill[]>('skills', []);

  function addOnClick(skill: Skill) {
    setSkills([...skills, skill]);
  }

  function removeSkill(newSkill: Skill) {
    setSkills(skills.filter((skill) => skill !== newSkill));
  }

  return { skills, addOnClick, removeSkill };
}
