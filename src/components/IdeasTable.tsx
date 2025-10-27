import { Idea } from '../types';
import { getCategory, getCategoryEmoji, getCategoryColor } from '../utils';
import { Trash2 } from 'lucide-react';

interface IdeasTableProps {
  ideas: Idea[];
  onDelete: (id: string) => void;
}

export default function IdeasTable({ ideas, onDelete }: IdeasTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
            <th className="text-center py-3 px-4 font-semibold text-gray-700">Value</th>
            <th className="text-center py-3 px-4 font-semibold text-gray-700">Effort</th>
            <th className="text-center py-3 px-4 font-semibold text-gray-700">Category</th>
            <th className="text-center py-3 px-4 font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ideas.map((idea) => {
            const category = getCategory(idea);
            return (
              <tr key={idea.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium">{idea.name}</td>
                <td className="text-center py-3 px-4">
                  <span className="inline-block w-12 text-sm bg-green-50 text-green-700 py-1 px-2 rounded">
                    {idea.value}
                  </span>
                </td>
                <td className="text-center py-3 px-4">
                  <span className="inline-block w-12 text-sm bg-orange-50 text-orange-700 py-1 px-2 rounded">
                    {idea.effort}
                  </span>
                </td>
                <td className="text-center py-3 px-4">
                  <span
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: `${getCategoryColor(category)}20`,
                      color: getCategoryColor(category),
                    }}
                  >
                    {getCategoryEmoji(category)} {category}
                  </span>
                </td>
                <td className="text-center py-3 px-4">
                  <button
                    onClick={() => onDelete(idea.id)}
                    className="inline-flex items-center justify-center w-8 h-8 text-red-600 hover:bg-red-50 rounded transition-colors"
                    title="Delete idea"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

