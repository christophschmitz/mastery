import useLocalStorage from './useLocalStorage';
import type { Skill } from '../../types';

export default function useLocalStorageSkills(): {
  skills: Skill[];
  addSkill: (skills: Skill) => void;
  removeSkill: (newSkill: Skill) => void;
  editSkill: (oldSkill: Skill, newSkill: Skill) => void;
} {
  const [skills, setSkills] = useLocalStorage<Skill[]>('skills', []);

  function addSkill(skill: Skill) {
    setSkills([...skills, skill]);
  }

  function removeSkill(newSkill: Skill) {
    setSkills(skills.filter((skill) => skill !== newSkill));
  }

  function editSkill(deleteSkill: Skill, newSkill: Skill) {
    setSkills([
      ...skills.filter((skill) => skill.title !== deleteSkill.title),
      newSkill,
    ]);
  }

  return { skills, addSkill, removeSkill, editSkill };
}
