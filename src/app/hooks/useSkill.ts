import type { Skill } from '../../types';
import useFetch from './useFetch';

export default function useSkill(title: string): {
  skill: Skill | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const {
    data: skill,
    isLoading,
    errorMessage,
  } = useFetch<Skill>(`/api/skills/${title}`);
  return { skill, isLoading, errorMessage };
}
