import { Question } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
  try {
    // Delete documents from THought collection
    await Question.deleteMany({});
    console.log('Question collection cleaned.');

  } catch (err) {
    console.error('Error cleaning collections:', err);
    process.exit(1);
  }
};

export default cleanDB;