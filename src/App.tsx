import { useState, useEffect } from 'react';
import { Idea } from './types';
import { getCategory } from './utils';
import IdeaForm from './components/IdeaForm';
import IdeasTable from './components/IdeasTable';
import IdeasMatrix from './components/IdeasMatrix';
import { Trash2 } from 'lucide-react';

function App() {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('value-effort-ideas');
    if (saved) {
      setIdeas(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever ideas change
  useEffect(() => {
    if (ideas.length > 0 || localStorage.getItem('value-effort-ideas')) {
      localStorage.setItem('value-effort-ideas', JSON.stringify(ideas));
    }
  }, [ideas]);

  const addIdea = (idea: Omit<Idea, 'id'>) => {
    const newIdea: Idea = {
      ...idea,
      id: Date.now().toString(),
    };
    setIdeas([...ideas, newIdea]);
  };

  const deleteIdea = (id: string) => {
    setIdeas(ideas.filter(idea => idea.id !== id));
  };

  const clearAll = () => {
    if (confirm('Are you sure you want to clear all ideas?')) {
      setIdeas([]);
      localStorage.removeItem('value-effort-ideas');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            ⚡ Value vs Effort Prioritizer
          </h1>
          <p className="text-gray-600">
            Add your ideas and automatically categorize them based on Value and Effort
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: Form and Table */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Add New Idea</h2>
              <IdeaForm onSubmit={addIdea} />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Ideas ({ideas.length})</h2>
                {ideas.length > 0 && (
                  <button
                    onClick={clearAll}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={18} />
                    Clear All
                  </button>
                )}
              </div>
              {ideas.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No ideas yet. Add your first idea above!
                </p>
              ) : (
                <IdeasTable ideas={ideas} onDelete={deleteIdea} />
              )}
            </div>
          </div>

          {/* Right column: Matrix */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Value vs Effort Matrix</h2>
            {ideas.length === 0 ? (
              <div className="flex items-center justify-center h-96 text-gray-500">
                Add at least one idea to see the matrix
              </div>
            ) : (
              <IdeasMatrix ideas={ideas} />
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Priority Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded"></div>
              <span className="font-medium">Quick Win</span>
              <span className="text-sm text-gray-500">(Value ≥ 6, Effort ≤ 5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded"></div>
              <span className="font-medium">Strategic</span>
              <span className="text-sm text-gray-500">(Value ≥ 6, Effort &gt; 5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              <span className="font-medium">Time-Permitting</span>
              <span className="text-sm text-gray-500">(Value &lt; 6, Effort ≤ 5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-500 rounded"></div>
              <span className="font-medium">Discard</span>
              <span className="text-sm text-gray-500">(Value &lt; 6, Effort &gt; 5)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

