import type { Skill } from '../../types';
import useFetch from './useFetch';

export default function useAllSkills(): {
  skills: Skill[] | null;
  isLoading: boolean;
  errorMessage: string | null;
} {
  const {
    data: skills,
    isLoading,
    errorMessage,
  } = useFetch<Skill[]>('/api/skills');
  return { skills, isLoading, errorMessage };
}
