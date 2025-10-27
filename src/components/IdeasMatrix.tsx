import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';
import { Idea } from '../types';
import { getCategory, getCategoryColor } from '../utils';

interface IdeasMatrixProps {
  ideas: Idea[];
}

export default function IdeasMatrix({ ideas }: IdeasMatrixProps) {
  const data = ideas.map(idea => ({
    x: idea.effort,
    y: idea.value,
    name: idea.name,
    category: getCategory(idea),
    id: idea.id,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-3">
          <p className="font-semibold text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-600">Value: {data.y}</p>
          <p className="text-sm text-gray-600">Effort: {data.x}</p>
          <p className="text-sm font-medium mt-1" style={{ color: getCategoryColor(data.category) }}>
            {data.category}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 40 }}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
          <XAxis
            type="number"
            dataKey="x"
            name="Effort"
            unit=""
            domain={[1, 10]}
            label={{ value: 'Effort (Low → High)', position: 'bottom', offset: 10 }}
            tickCount={10}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Value"
            unit=""
            domain={[1, 10]}
            label={{ value: 'Value (Low → High)', angle: -90, position: 'left', offset: 20 }}
            tickCount={10}
          />
          <Tooltip content={<CustomTooltip />} />
          <Scatter name="Ideas" data={data} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getCategoryColor(entry.category)} />
            ))}
          </Scatter>
          
          {/* Divider lines */}
          <ReferenceLine x={5.5} stroke="#666" strokeDasharray="3 3" label={{ value: 'Medium Effort', position: 'top', offset: 10 }} />
          <ReferenceLine y={5.5} stroke="#666" strokeDasharray="3 3" label={{ value: 'Medium Value', position: 'right', offset: 10 }} />
          
          {/* Category labels */}
          <g>
            <text x="25%" y="20" fill="gray" fontSize="12" fontWeight="600" textAnchor="middle">Quick Win</text>
            <text x="75%" y="20" fill="gray" fontSize="12" fontWeight="600" textAnchor="middle">Strategic</text>
            <text x="25%" y="98%" fill="gray" fontSize="12" fontWeight="600" textAnchor="middle">Time-Permitting</text>
            <text x="75%" y="98%" fill="gray" fontSize="12" fontWeight="600" textAnchor="middle">Discard</text>
          </g>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

