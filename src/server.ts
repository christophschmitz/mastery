import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import type { Skill } from './types';
import {
  readSkill,
  readSkills,
  addSkill,
  deleteSkill,
  updateSkill,
} from './utils/skills';
import { connectDatabase } from './utils/database';

if (!process.env.MONGODB_URL) {
  throw new Error('No MONGODB_URL dotenv variable');
}

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/skills', async (_request, response) => {
  try {
    const skills = await readSkills();
    response.status(200).json(skills);
  } catch (error) {
    console.error(error);
    response.status(500).send('Internal Server Error! Please try again later.');
  }
});

app.get('/api/skills/:title', async (request, response) => {
  const { title } = request.params;
  try {
    const skill = await readSkill(title);
    response.status(200).json(skill);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find skill: ${title}`);
  }
});

app.post('/api/skills', async (request, response) => {
  const skill: Skill = request.body;
  const skillId = await addSkill(skill);
  return response.status(200).send(skillId);
});

app.delete('/api/skills/:title', async (request, response) => {
  const { title } = request.params;
  await deleteSkill(title);
  response.status(200).send('Skill was deleted');
});

app.patch('/api/skills/:title', async (request, response) => {
  const { title } = request.params;
  const skill: Skill = request.body;
  try {
    await updateSkill(title, skill);
    response.status(200).json(skill);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find skill: ${title}`);
  }
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.get('*', (_request, response) => {
  response.sendFile('index.html', { root: 'dist/app' });
});

connectDatabase(process.env.MONGODB_URL).then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}! ????`);
  });
});
