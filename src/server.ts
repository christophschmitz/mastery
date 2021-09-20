import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { getSkill, readSkills } from './utils/skills';

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
    const skill = await getSkill(title);
    response.status(200).json(skill);
  } catch (error) {
    console.error(error);
    response.status(404).send(`Could not find skill: ${title}`);
  }
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
