import { useState, FormEvent } from 'react';
import { Idea } from '../types';
import { Plus } from 'lucide-react';

interface IdeaFormProps {
  onSubmit: (idea: Omit<Idea, 'id'>) => void;
}

export default function IdeaForm({ onSubmit }: IdeaFormProps) {
  const [name, setName] = useState('');
  const [value, setValue] = useState(5);
  const [effort, setEffort] = useState(5);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit({ name: name.trim(), value, effort });
      setName('');
      setValue(5);
      setEffort(5);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Idea Name *
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your idea"
          required
        />
      </div>

      <div>
        <label htmlFor="value" className="block text-sm font-medium text-gray-700 mb-1">
          Value: {value} / 10
        </label>
        <input
          type="range"
          id="value"
          min="1"
          max="10"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>

      <div>
        <label htmlFor="effort" className="block text-sm font-medium text-gray-700 mb-1">
          Effort: {effort} / 10
        </label>
        <input
          type="range"
          id="effort"
          min="1"
          max="10"
          value={effort}
          onChange={(e) => setEffort(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
      >
        <Plus size={18} />
        Add Idea
      </button>
    </form>
  );
}

