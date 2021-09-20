import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { readSkills } from './utils/skills';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/skills', async (_request, response) => {
  const skills = await readSkills();
  response.status(200).json(skills);
});

app.use('/storybook', express.static('dist/storybook'));

app.use(express.static('dist/app'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
