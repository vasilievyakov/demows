import { Idea, Category } from './types';

export function getCategory(idea: Idea): Category {
  if (idea.value >= 6 && idea.effort <= 5) {
    return 'Quick Win';
  }
  if (idea.value >= 6 && idea.effort > 5) {
    return 'Strategic';
  }
  if (idea.value < 6 && idea.effort <= 5) {
    return 'Time-Permitting';
  }
  return 'Discard';
}

export function getCategoryColor(category: Category): string {
  switch (category) {
    case 'Quick Win':
      return 'rgb(34, 197, 94)'; // green
    case 'Strategic':
      return 'rgb(59, 130, 246)'; // blue
    case 'Time-Permitting':
      return 'rgb(250, 204, 21)'; // yellow
    case 'Discard':
      return 'rgb(239, 68, 68)'; // red
  }
}

export function getCategoryEmoji(category: Category): string {
  switch (category) {
    case 'Quick Win':
      return '🟢';
    case 'Strategic':
      return '🔵';
    case 'Time-Permitting':
      return '🟡';
    case 'Discard':
      return '🔴';
  }
}

